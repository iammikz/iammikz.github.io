import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label="Toggle color theme"
    className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-slate-900/10 bg-white/80 text-slate-600 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.6)] transition hover:border-cyan-400/50 hover:text-cyan-500 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
  >
    <span className="sr-only">Toggle theme</span>
    {theme === 'dark' ? <FiSun className="h-6 w-6" /> : <FiMoon className="h-6 w-6" />}
  </button>
);

export default ThemeToggle;
