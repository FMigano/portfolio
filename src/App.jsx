import { useEffect, useState } from 'react'
import profileImg from './assets/Picture1.jpg'
import './App.css'

const navigation = [
  { href: '#top', label: 'Home', icon: '⌂' },
  { href: '#work', label: 'Projects', icon: '▦' },
  { href: '#journey', label: 'Journey', icon: '◫' },
  { href: '#stack', label: 'Stack', icon: '◇' },
  { href: '#contact', label: 'Availability', icon: '□' },
]

const projects = [
  {
    title: 'iBorrow',
    type: 'Mobile app',
    description: 'A simpler way to discover, lend, and keep track of books in a community.',
    stack: ['Flutter', 'Firebase'],
    accent: 'project-purple',
    repo: 'https://github.com/FMigano/iborrow_project',
  },
  {
    title: 'Lexia Community',
    type: 'Community app',
    description: 'A welcoming space where parents of children with dyslexia can find support.',
    stack: ['Flutter', 'Firebase'],
    accent: 'project-blue',
    repo: 'https://github.com/FMigano/lexia_app2',
  },
  {
    title: 'Re:Devs',
    type: 'Web platform',
    description: 'A developer community for sharing code and solving problems together.',
    stack: ['Dart', 'Q&A'],
    accent: 'project-green',
    repo: 'https://github.com/FMigano/devslog_project',
  },
]

const contactEmail = 'miganofrederickallen@gmail.com'

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13 13 3M5 3h8v8" />
    </svg>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('#top')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('portfolio-theme') === 'dark'
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(`#${visible.target.id}`)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.4, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <main className={`site-shell${isDarkMode ? ' theme-dark' : ''}`}>
      <aside className={`sidebar${isMenuOpen ? ' is-open' : ''}`}>
        <a className="sidebar-brand" href="#top" onClick={closeMenu}>
          Frederick Migano
        </a>
        <p className="sidebar-label">Explore</p>
        <nav className="sidebar-nav" aria-label="Portfolio navigation">
          {navigation.slice(0, 4).map(({ href, label, icon }) => (
            <a className={activeSection === href ? 'is-active' : ''} href={href} key={href} onClick={closeMenu}>
              <span className="sidebar-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
              {label === 'Projects' && <small>3</small>}
            </a>
          ))}
        </nav>
        <p className="sidebar-label sidebar-label-lower">Elsewhere</p>
        <nav className="sidebar-nav secondary-nav" aria-label="External links">
          <a href="https://github.com/FMigano" target="_blank" rel="noreferrer"><span className="sidebar-icon">⌁</span><span>GitHub</span></a>
          <a href={`mailto:${contactEmail}`}><span className="sidebar-icon">✉</span><span>Get in touch</span></a>
        </nav>
        <div className="sidebar-footer">
          <div className="online-status"><span /> 1 here now <span className="chat-label">Chat</span></div>
          <button
            type="button"
            className="mode-toggle"
            aria-pressed={isDarkMode}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            onClick={() => setIsDarkMode((darkMode) => !darkMode)}
          >
            <span className="mode-switch"><span /></span> {isDarkMode ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      </aside>

      <button className="mobile-menu" type="button" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
        <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
        <span /><span />
      </button>

      <div className="page-content">
        <section className="profile-section" id="top">
          <div className="profile-art">
            <div className="art-grid" />
            <img src={profileImg} alt="Frederick Allen Migano" />
            <span className="art-caption">Portrait<br /><strong>01 / 01</strong></span>
          </div>
          <div className="profile-copy">
            <p className="kicker">Web, mobile & game developer · Dasmariñas, PH</p>
            <h1>Frederick Allen<br /><span>Migano</span></h1>
            <p className="profile-lede">I&apos;m a 4th year college student building web and mobile applications with care, curiosity, and a practical approach to technology.</p>
            <p className="profile-lede">These days, I&apos;m focused on exploring new technologies, working on useful projects, and turning ideas into things people enjoy using.</p>
            <div className="profile-badge">✦ Currently open to opportunities</div>
            <p className="kicker tools-label">Tools in my workflow</p>
            <div className="tool-list"><span>React</span><span>Flutter</span><span>Firebase</span><span>GitHub</span></div>
            <div className="social-links">
              <a href="https://github.com/FMigano" target="_blank" rel="noreferrer">github ↗</a>
              <a href={`mailto:${contactEmail}`}>email ↗</a>
              <a href="#work">projects ↘</a>
            </div>
          </div>
        </section>

        <section className="credibility" aria-label="Portfolio highlights">
          <span>Building since <strong>2022</strong></span>
          <span><strong>3+</strong> projects completed</span>
          <span><strong>12+</strong> technologies explored</span>
          <span><strong>∞</strong> ideas in progress</span>
        </section>

        <section className="content-section" id="work">
          <div className="section-topline"><p className="kicker">01 · Projects</p><a className="all-link" href="https://github.com/FMigano" target="_blank" rel="noreferrer">all work <ArrowUpRight /></a></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-pattern" />
                <div className="project-card-top"><span>{project.type}</span><span>↗</span></div>
                <div className="project-card-body">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="card-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <a className="card-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="journey">
          <div><p className="kicker">02 · Journey</p><h2>Learning by<br /><em>building.</em></h2></div>
          <div className="journey-copy"><p>Every project is a chance to ask better questions. I like working across the stack, from shaping an idea and designing an interface to making the details feel reliable.</p><p>My work is still growing, but the direction is clear: build useful things, stay curious, and make the next version better than the last.</p></div>
        </section>

        <section className="stack-section" id="stack">
          <p className="kicker">03 · Stack</p>
          <div className="stack-cloud"><span>JavaScript</span><span>React</span><span>Flutter</span><span>Dart</span><span>Firebase</span><span>Git</span><span>Figma</span></div>
        </section>

        <section className="contact-section" id="contact">
          <p className="kicker">04 · Availability</p>
          <h2>Have something<br /><em>in mind?</em></h2>
          <a className="contact-button" href={`mailto:${contactEmail}`}>Let&apos;s talk <ArrowUpRight /></a>
        </section>

        <footer className="site-footer"><span>© 2026 Frederick Allen Migano</span><span>Made with intention · Dasmariñas, PH</span></footer>
      </div>
    </main>
  )
}

export default App
