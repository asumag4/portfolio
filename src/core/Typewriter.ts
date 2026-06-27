/**
 * Typewriter.ts — a small state machine that types, pauses, deletes,
 * and cycles through a list of words. Framework-free; the React hook
 * in hooks/useTypewriter.ts adapts it to state.
 */

type Phase = 'typing' | 'pausing' | 'deleting';

export interface TypewriterOptions {
  typeMs: number;
  deleteMs: number;
  pauseMs: number;
  loop: boolean;
}

const DEFAULTS: TypewriterOptions = {
  typeMs: 70,
  deleteMs: 36,
  pauseMs: 1700,
  loop: true,
};

export class Typewriter {
  private phase: Phase = 'typing';
  private wordIndex = 0;
  private charIndex = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private active = false;
  private readonly opts: TypewriterOptions;

  constructor(
    private readonly words: string[],
    private readonly onUpdate: (text: string) => void,
    opts: Partial<TypewriterOptions> = {},
  ) {
    this.opts = { ...DEFAULTS, ...opts };
  }

  start(): void {
    if (this.active || this.words.length === 0) return;
    this.active = true;
    this.tick();
  }

  stop(): void {
    this.active = false;
    if (this.timer) clearTimeout(this.timer);
  }

  private schedule(ms: number): void {
    this.timer = setTimeout(() => this.tick(), ms);
  }

  private tick(): void {
    if (!this.active) return;
    const word = this.words[this.wordIndex];

    if (this.phase === 'typing') {
      this.charIndex += 1;
      this.onUpdate(word.slice(0, this.charIndex));
      if (this.charIndex >= word.length) {
        this.phase = 'pausing';
        this.schedule(this.opts.pauseMs);
      } else {
        this.schedule(this.opts.typeMs);
      }
    } else if (this.phase === 'pausing') {
      if (!this.opts.loop && this.wordIndex === this.words.length - 1) {
        this.stop();
        return;
      }
      this.phase = 'deleting';
      this.schedule(this.opts.deleteMs);
    } else {
      this.charIndex -= 1;
      this.onUpdate(word.slice(0, Math.max(0, this.charIndex)));
      if (this.charIndex <= 0) {
        this.phase = 'typing';
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.schedule(this.opts.typeMs * 2);
      } else {
        this.schedule(this.opts.deleteMs);
      }
    }
  }
}
