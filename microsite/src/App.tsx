import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { ChapterNav } from './components/layout/ChapterNav';
import { Footer } from './components/layout/Footer';
import { Chapter1Problem } from './components/chapters/Chapter1Problem';
import { Chapter2Math } from './components/chapters/Chapter2Math';
import { Chapter3Solution } from './components/chapters/Chapter3Solution';
import { Chapter4Ask } from './components/chapters/Chapter4Ask';
import { SourcesPage } from './components/pages/SourcesPage';
import { PolicyPage } from './components/pages/PolicyPage';
import { EconomicsPage } from './components/pages/EconomicsPage';
import { generatePDF } from './components/pdf/generatePDF';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-slate-900 to-slate-800 text-white px-6 pt-20 relative overflow-hidden">
      {/* Subtle American accent stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 opacity-60" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-8 border border-blue-400/30">
            Economic Analysis
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Grid for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-blue-400">
            Growth
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The economic case for proactive American investment in electricity grid infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#problem"
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg shadow-lg shadow-red-900/30"
          >
            Read the Analysis
          </a>
          <button
            onClick={generatePDF}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg border border-white/20"
          >
            Download Summary
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: '4-5×', label: 'Cost of conservative planning', color: 'text-red-400' },
            { value: '68%', label: 'Cost to double capacity', color: 'text-white' },
            { value: '2%', label: 'Federal financing rate', color: 'text-blue-400' },
            { value: '>99%', label: 'REA repayment rate', color: 'text-red-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-slate-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="bg-background">
      <Header />
      <ChapterNav />

      <main>
        <Hero />
        <Chapter1Problem />
        <Chapter2Math />
        <Chapter3Solution />
        <Chapter4Ask onDownloadPDF={generatePDF} />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Grid_For_Growth">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/economics" element={<EconomicsPage />} />
        <Route path="/sources" element={<SourcesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
