import { useEffect, useRef, useState } from 'react';

const Section = ({ id, index, eyebrow, title, description, children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      data-section={id}
      className={`relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/70 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] transition-all duration-700 ease-out dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_32px_84px_-42px_rgba(14,116,144,0.45)] sm:p-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-white/0 to-white/20 dark:from-cyan-500/15 dark:via-transparent dark:to-purple-500/15" aria-hidden />
      <header className="mb-8 space-y-3">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        {description ? <p className="text-base text-slate-600 dark:text-slate-300">{description}</p> : null}
      </header>
      <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>
    </section>
  );
};

export default Section;
