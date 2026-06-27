import { useEffect, useState } from 'react';
import { Typewriter } from '../core/Typewriter';

/** React adapter for the Typewriter class. Honors reduced motion. */
export function useTypewriter(words: string[]): string {
  const [text, setText] = useState(words[0] ?? '');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || words.length <= 1) {
      setText(words[0] ?? '');
      return;
    }
    setText('');
    const tw = new Typewriter(words, setText);
    tw.start();
    return () => tw.stop();
  }, [words]);

  return text;
}
