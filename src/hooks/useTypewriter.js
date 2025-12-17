import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (phrases, options = {}) => {
  const {
    typeSpeed = 45,
    deleteSpeed = 28,
    holdTime = 900,
    loop = true,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    // TEMPORARILY DISABLED to debug
    // const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // if (prefersReducedMotion) {
    //   setDisplayText(phrases[0]);
    //   setIsTyping(false);
    //   return;
    // }

    // Reset refs on mount
    phraseIndexRef.current = 0;
    charIndexRef.current = 1;
    isDeletingRef.current = false;

    let timeout;

    const tick = () => {
      const currentPhrase = phrases[phraseIndexRef.current];
      const isDeleting = isDeletingRef.current;

      if (!isDeleting && charIndexRef.current === currentPhrase.length) {
        // Finished typing current phrase
        if (!loop && phraseIndexRef.current === phrases.length - 1) {
          setIsTyping(false);
          return;
        }
        timeout = setTimeout(() => {
          isDeletingRef.current = true;
          tick();
        }, holdTime);
        return;
      }

      if (isDeleting && charIndexRef.current === 0) {
        // Finished deleting
        isDeletingRef.current = false;
        phraseIndexRef.current = (phraseIndexRef.current + 1) % phrases.length;
      }

      // Update character index
      charIndexRef.current += isDeleting ? -1 : 1;

      // Update display text
      const newText = phrases[phraseIndexRef.current].slice(0, charIndexRef.current);
      setDisplayText(newText);

      // Schedule next tick
      const delay = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(tick, delay);
    };

    // Start typing
    tick();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { displayText, isTyping };
};
