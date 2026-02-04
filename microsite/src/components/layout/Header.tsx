import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const chapters = [
  { id: 'problem', label: 'The Problem' },
  { id: 'math', label: 'The Math' },
  { id: 'solution', label: 'The Solution' },
  { id: 'ask', label: 'The Ask' },
];

export function Header() {
  const { progress, currentChapter } = useScrollProgress();

  const scrollToChapter = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-slate-900">
          Grid for Growth
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => scrollToChapter(chapter.id)}
              className={`text-sm font-medium transition-colors ${
                currentChapter === index
                  ? 'text-electric'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {chapter.label}
            </button>
          ))}
        </nav>

        <a
          href="#ask"
          className="bg-electric text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-electric-700 transition-colors"
        >
          Download Summary
        </a>
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-electric"
        style={{ width: `${progress * 100}%` }}
      />
    </motion.header>
  );
}
