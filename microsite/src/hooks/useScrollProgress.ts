import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;

      // Overall scroll progress (0-1)
      const scrollProgress = Math.min(scrolled / documentHeight, 1);
      setProgress(scrollProgress);

      // Determine current chapter (0-3)
      const chapter = Math.min(Math.floor(scrollProgress * 4), 3);
      setCurrentChapter(chapter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, currentChapter };
}
