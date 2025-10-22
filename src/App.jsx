import { useEffect, useMemo, useState } from 'react';
import Section from './components/Section.jsx';
import SectionNav from './components/SectionNav.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState('profile');

  const sections = useMemo(
    () => [
      {
        id: 'profile',
        eyebrow: 'Get to know me',
        title: 'Profile',
        description:
          'Designer-turned-developer focused on crafting immersive, story-driven digital experiences with precision and polish.',
        content: (
          <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-300 dark:text-slate-300">
                I’m Mikhail Aleksei Travina, a full-stack developer with experience delivering employee management systems, inventory solutions,
                and credit adjustment platforms that keep operations running smoothly end to end.
              </p>
              <p className="text-base leading-relaxed text-slate-400 dark:text-slate-400">
                From HTML, CSS, and JavaScript to ReactJS, PHP, MySQL, and MSSQL, I enjoy translating domain knowledge into resilient,
                user-friendly products that teams can trust every day.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {['HTML & CSS', 'JavaScript', 'ReactJS', 'PHP', 'MySQL', 'MSSQL'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-slate-100 backdrop-blur dark:border-white/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 text-sm text-slate-400 dark:text-slate-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400">Currently</h3>
                <p className="mt-2 text-base text-slate-100 dark:text-slate-100">Fullstack Developer — EMS, Inventory, Credit Systems</p>
                <p className="mt-1">Architecting dependable tools that streamline people, stock, and finance operations.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <h3 className="text-xs uppercase tracking-[0.3em] text-slate-400">Collaboration</h3>
                <p className="mt-2 text-base text-slate-100 dark:text-slate-100">Remote-friendly, cross-functional partner</p>
                <p className="mt-1">Comfortable working with distributed teams across time zones.</p>
              </div>
              <div className="flex flex-wrap gap-4 text-base text-slate-200 dark:text-slate-200">
                <a href="mailto:hello@iammikz.com" className="transition hover:text-cyan-400">
                  hello@iammikz.com
                </a>
                <a href="https://www.linkedin.com/in/iammikz" className="transition hover:text-cyan-400" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/iammikz" className="transition hover:text-cyan-400" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'experience',
        eyebrow: 'Selected work',
        title: 'Work & Experience',
        description:
          'A snapshot of projects and roles that shaped my approach—pairing user insight with engineering craft to deliver polished outcomes.',
        content: (
          <div className="space-y-6">
            {[
              {
                role: 'Fullstack Developer',
                company: 'Employee Management System (EMS)',
                period: '2024 — Present',
                summary:
                  'Designed and developed a modular EMS that centralizes attendance, scheduling, and compliance reporting for distributed teams.',
                highlights: ['Implemented role-based workflows with ReactJS + PHP', 'Automated data synchronization across MySQL and MSSQL', 'Delivered dashboards that surface actionable HR insights'],
              },
              {
                role: 'Fullstack Developer',
                company: 'Inventory Control Platform',
                period: '2022 — 2024',
                summary:
                  'Modernized an inventory system to track multi-warehouse stock levels with real-time alerts and audit-ready history.',
                highlights: ['Built responsive React interfaces for operations teams', 'Optimized API endpoints in PHP for faster reconciliation', 'Introduced granular permissions to safeguard sensitive data'],
              },
              {
                role: 'Fullstack Developer',
                company: 'Credit Adjustment System',
                period: '2020 — 2022',
                summary:
                  'Engineered a credit adjustment workflow that accelerates approvals while preserving strict regulatory checks.',
                highlights: ['Integrated MSSQL stored procedures with ReactJS forms', 'Automated audit trails and notifications via PHP services', 'Collaborated with finance to map policy-driven edge cases'],
              },
            ].map((item) => (
              <article
                key={item.role}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100 dark:text-slate-100">{item.role}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{item.period}</span>
                </div>
                <p className="mt-4 text-base text-slate-300 dark:text-slate-300">{item.summary}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-400 dark:text-slate-400 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        ),
      },
      {
        id: 'reflection',
        eyebrow: 'How I grow',
        title: 'Self Assessment & Reflections',
        description:
          'Constantly learning, frequently reflecting. This is how I stay intentional with my craft—balancing curiosity with accountability.',
        content: (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-100">What I’m doubling down on</h3>
              <ul className="space-y-3 text-sm text-slate-300 dark:text-slate-300">
                <li>
                  <strong className="text-slate-100 dark:text-slate-100">Systems thinking:</strong> mapping the invisible scaffolding behind products to design more resilient experiences.
                </li>
                <li>
                  <strong className="text-slate-100 dark:text-slate-100">Narrative craft:</strong> weaving storytelling into UI flows so people always understand the why—never just the what.
                </li>
                <li>
                  <strong className="text-slate-100 dark:text-slate-100">Communities of practice:</strong> contributing to design and dev guilds, sharing lessons, and inviting critique.
                </li>
              </ul>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-100">Personal checkpoints</h3>
              <ul className="space-y-3 text-sm text-slate-300 dark:text-slate-300">
                <li>
                  <strong className="text-slate-100 dark:text-slate-100">Monthly retros:</strong> I document project learnings, outline experiments, and identify where empathy can be sharper.
                </li>
                <li>
                  <strong className="text-slate-100 dark:text-slate-100">Craft hours:</strong> weekly time boxed sessions for motion explorations, code sketching, and rebuilding inspiring interfaces.
                </li>
                <li>
                  <strong className="text-slate-100 dark:text-slate-100">Wellbeing rituals:</strong> hiking, analog journaling, and quiet mornings to recharge the creative engine.
                </li>
              </ul>
            </div>
            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-100">Reflection notes</h3>
              <p className="mt-3 text-base text-slate-300 dark:text-slate-300">
                My best work happens when I bridge disciplines—pairing the empathy of design with the pragmatism of engineering. I value
                teams that lean into collaboration, ship thoughtfully, and measure success beyond shipped features. I’m always on the
                lookout for partners who care about integrity, inclusivity, and craft as much as I do.
              </p>
            </div>
          </div>
        ),
      },
    ],
    [],
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-800 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 mix-blend-soft-light dark:opacity-70" aria-hidden>
        <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-cyan-300 blur-3xl dark:bg-cyan-500" />
        <div className="absolute bottom-24 right-0 h-72 w-72 rounded-full bg-pink-300 blur-3xl dark:bg-fuchsia-500" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/40 to-transparent dark:from-slate-900/30" />
      </div>

      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 pb-10 pt-14 sm:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">iammikz.github.io</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Mikhail Aleksei Travina</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Fullstack Developer crafting resilient platforms that balance business requirements with thoughtful user experience.
          </p>
        </div>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        />
      </header>

      <SectionNav sections={sections.map(({ id, title }) => ({ id, title }))} activeSection={activeSection} />

      <main className="relative mx-auto flex max-w-4xl flex-col gap-28 px-6 pb-24 sm:px-10">
        {sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            index={index}
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          >
            {section.content}
          </Section>
        ))}
      </main>
    </div>
  );
};

export default App;
