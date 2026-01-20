import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const chapters = [
  { id: 'problem', label: 'The Problem' },
  { id: 'math', label: 'The Math' },
  { id: 'solution', label: 'The Solution' },
  { id: 'ask', label: 'The Ask' },
];

export function ChapterNav() {
  const { currentChapter } = useScrollProgress();

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4"
    >
      {chapters.map((chapter, index) => (
        <button
          key={chapter.id}
          onClick={() => scrollToChapter(chapter.id)}
          className="group flex items-center gap-3"
        >
          <span
            className={`text-sm font-medium transition-all ${
              currentChapter === index
                ? 'opacity-100 text-electric'
                : 'opacity-0 group-hover:opacity-100 text-slate-500'
            }`}
          >
            {chapter.label}
          </span>
          <span
            className={`chapter-indicator ${currentChapter === index ? 'active' : ''}`}
          />
        </button>
      ))}
    </motion.nav>
  );
}
