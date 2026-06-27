import { useEffect, useRef } from 'react';
import { StarfieldEngine } from '../../../core/StarfieldEngine';

/**
 * Thin React shell around the framework-free StarfieldEngine.
 * Listens for:
 *  - pointermove  → cursor parallax
 *  - resize       → canvas re-fit
 *  - 'themechange'→ re-read --star / --star-bright CSS vars
 *  - 'warp'       → Konami easter-egg hyperspace jump
 */
export function Starfield(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new StarfieldEngine(canvas);

    const readPalette = () => {
      const styles = getComputedStyle(document.documentElement);
      engine.setPalette({
        star: styles.getPropertyValue('--star').trim() || '#cfd8ff',
        bright: styles.getPropertyValue('--star-bright').trim() || '#ffffff',
      });
    };
    readPalette();
    engine.start();

    const onPointer = (e: PointerEvent) => engine.setPointer(e.clientX, e.clientY);
    const onResize = () => engine.resize();
    const onWarp = () => engine.warpJump();

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('themechange', readPalette);
    window.addEventListener('warp', onWarp);

    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('themechange', readPalette);
      window.removeEventListener('warp', onWarp);
      engine.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__starfield" aria-hidden="true" />;
}
