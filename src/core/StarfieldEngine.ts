/**
 * StarfieldEngine.ts
 * ------------------------------------------------------------------
 * Canvas particle system behind the hero. Pure OOP, framework-free:
 *  - Star:         depth-layered twinkling point with cursor parallax
 *  - ShootingStar: occasional streak across the upper sky
 *  - StarfieldEngine: owns the rAF loop, pointer smoothing, resizing,
 *                     palette (theme-aware), and the warp easter egg.
 *
 * Respects prefers-reduced-motion: renders a single static frame.
 */

export interface StarPalette {
  star: string;
  bright: string;
}

interface Vec2 {
  x: number;
  y: number;
}

const PARALLAX_RANGE = 42; // px of max drift at full depth

class Star {
  private nx: number; // normalized 0..1 position
  private ny: number;
  private depth: number; // 0.25..1 — deeper = closer = moves more
  private radius: number;
  private twinklePhase: number;
  private twinkleSpeed: number;

  constructor(rand: () => number) {
    this.nx = rand();
    this.ny = rand();
    this.depth = 0.25 + rand() * 0.75;
    this.radius = (0.4 + rand() * 1.3) * this.depth;
    this.twinklePhase = rand() * Math.PI * 2;
    this.twinkleSpeed = 0.4 + rand() * 1.2;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    parallax: Vec2,
    t: number,
    palette: StarPalette,
    warp: number,
  ): void {
    const px = this.nx * w + parallax.x * this.depth;
    const py = this.ny * h + parallax.y * this.depth;
    const twinkle = 0.5 + 0.5 * Math.sin(t * this.twinkleSpeed + this.twinklePhase);
    const alpha = (0.3 + 0.7 * twinkle) * (0.35 + 0.65 * this.depth);

    if (warp > 0.02) {
      // Warp mode: streak away from the screen centre
      const cx = w / 2;
      const cy = h / 2;
      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const len = warp * 90 * this.depth;
      ctx.globalAlpha = Math.min(1, alpha + warp * 0.4);
      ctx.strokeStyle = palette.star;
      ctx.lineWidth = Math.max(this.radius * 0.9, 0.5);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px + (dx / dist) * len, py + (dy / dist) * len);
      ctx.stroke();
    } else {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = this.depth > 0.85 ? palette.bright : palette.star;
      ctx.beginPath();
      ctx.arc(px, py, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

class ShootingStar {
  private x: number;
  private y: number;
  private vx: number;
  private vy: number;
  private life: number;
  private readonly maxLife: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h * 0.45;
    const angle = Math.PI * (0.12 + Math.random() * 0.18);
    const speed = 620 + Math.random() * 480;
    this.vx = Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1);
    this.vy = Math.sin(angle) * speed;
    this.maxLife = 0.55 + Math.random() * 0.5;
    this.life = this.maxLife;
  }

  /** @returns false when the star has expired */
  update(dt: number): boolean {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
    return this.life > 0;
  }

  draw(ctx: CanvasRenderingContext2D, palette: StarPalette): void {
    const fade = this.life / this.maxLife;
    const speed = Math.hypot(this.vx, this.vy);
    const tail = 72;
    ctx.globalAlpha = fade * 0.9;
    ctx.strokeStyle = palette.bright;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - (this.vx / speed) * tail, this.y - (this.vy / speed) * tail);
    ctx.stroke();
  }
}

export class StarfieldEngine {
  private readonly ctx: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private shooting: ShootingStar[] = [];
  private rafId = 0;
  private lastTime = 0;
  private running = false;
  private pointerTarget: Vec2 = { x: 0, y: 0 };
  private pointer: Vec2 = { x: 0, y: 0 };
  private warp = 0;
  private warpTarget = 0;
  private warpTimer: ReturnType<typeof setTimeout> | null = null;
  private nextShootIn = 2.5;
  private palette: StarPalette = { star: '#cfd8ff', bright: '#ffffff' };
  private readonly reducedMotion: boolean;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly density = 1,
  ) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas context unavailable');
    this.ctx = ctx;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.resize();
  }

  /** Re-fit the canvas to its CSS size (call on window resize). */
  resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.canvas.width = Math.max(1, Math.round(w * dpr));
    this.canvas.height = Math.max(1, Math.round(h * dpr));
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.populate(w, h);
    if (this.reducedMotion) this.renderFrame(0);
  }

  private populate(w: number, h: number): void {
    const count = Math.round(((w * h) / 9000) * this.density);
    this.stars = Array.from({ length: count }, () => new Star(Math.random));
  }

  setPalette(palette: StarPalette): void {
    this.palette = palette;
    if (this.reducedMotion) this.renderFrame(0);
  }

  /** Feed pointer position (client coords); parallax eases toward it. */
  setPointer(clientX: number, clientY: number): void {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const nx = (clientX - rect.left) / rect.width - 0.5;
    const ny = (clientY - rect.top) / rect.height - 0.5;
    this.pointerTarget = { x: -nx * PARALLAX_RANGE * 2, y: -ny * PARALLAX_RANGE * 2 };
  }

  resetPointer(): void {
    this.pointerTarget = { x: 0, y: 0 };
  }

  /** Konami easter egg — brief hyperspace jump. */
  warpJump(): void {
    if (this.reducedMotion) return;
    this.warpTarget = 1;
    if (this.warpTimer) clearTimeout(this.warpTimer);
    this.warpTimer = setTimeout(() => {
      this.warpTarget = 0;
    }, 1400);
  }

  start(): void {
    if (this.reducedMotion) {
      this.renderFrame(0);
      return;
    }
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    const loop = (now: number) => {
      if (!this.running) return;
      const dt = Math.min((now - this.lastTime) / 1000, 0.05);
      this.lastTime = now;
      this.step(dt, now / 1000);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  destroy(): void {
    this.stop();
    if (this.warpTimer) clearTimeout(this.warpTimer);
  }

  private step(dt: number, t: number): void {
    // ease pointer + warp toward their targets
    const k = Math.min(1, dt * 4);
    this.pointer.x += (this.pointerTarget.x - this.pointer.x) * k;
    this.pointer.y += (this.pointerTarget.y - this.pointer.y) * k;
    this.warp += (this.warpTarget - this.warp) * Math.min(1, dt * 3);

    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    this.nextShootIn -= dt;
    if (this.nextShootIn <= 0) {
      this.shooting.push(new ShootingStar(w, h));
      this.nextShootIn = 4 + Math.random() * 7;
    }
    this.shooting = this.shooting.filter((s) => s.update(dt));
    this.renderFrame(t);
  }

  private renderFrame(t: number): void {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, w, h);
    // slow autonomous drift so the field breathes even without a cursor
    const drift: Vec2 = {
      x: this.pointer.x + Math.sin(t * 0.05) * 6,
      y: this.pointer.y + Math.cos(t * 0.04) * 4,
    };
    for (const star of this.stars) {
      star.draw(ctx, w, h, drift, t, this.palette, this.warp);
    }
    for (const shooter of this.shooting) {
      shooter.draw(ctx, this.palette);
    }
    ctx.globalAlpha = 1;
  }
}
