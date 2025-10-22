import { FiChevronDown } from 'react-icons/fi';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const SectionNav = ({ sections, activeSection }) => (
  <>
    <nav className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {sections.map((section) => {
        const isActive = section.id === activeSection;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={`group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border transition duration-300 hover:border-cyan-400/60 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${isActive ? 'border-cyan-400/60 text-cyan-400 dark:text-cyan-300' : 'border-slate-900/10 text-slate-500 dark:border-white/10 dark:text-slate-400'}`}
            aria-label={`Jump to ${section.title}`}
          >
            <FiChevronDown className={`h-5 w-5 transition duration-300 ${isActive ? 'translate-y-1 animate-bounce text-cyan-400' : ''}`} />
            <span className="pointer-events-none absolute right-full mr-4 origin-right scale-90 rounded-full bg-slate-900/90 px-3 py-1 text-xs text-slate-100 opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-100/90 dark:text-slate-900">
              {section.title}
            </span>
          </button>
        );
      })}
    </nav>

    <nav className="fixed inset-x-0 bottom-8 z-40 mx-auto flex w-max gap-3 rounded-full border border-slate-900/10 bg-white/80 px-4 py-3 text-slate-500 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-300 lg:hidden">
      {sections.map((section) => {
        const isActive = section.id === activeSection;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:border-cyan-400/60 hover:text-cyan-400 ${isActive ? 'border-cyan-400/60 text-cyan-400 dark:text-cyan-300' : 'border-transparent'}`}
            aria-label={`Jump to ${section.title}`}
          >
            <FiChevronDown className={`h-5 w-5 ${isActive ? 'animate-bounce' : ''}`} />
          </button>
        );
      })}
    </nav>
  </>
);

export default SectionNav;
