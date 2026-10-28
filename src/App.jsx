import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, BriefcaseBusiness, Check, ChevronRight, Cloud, Code2, Copy, Database, ExternalLink, Github, Layers3, Linkedin, Mail, MapPin, Menu, PanelsTopLeft, Phone, Send, Server, ShieldCheck, Terminal, X, Zap } from 'lucide-react'
import { experience, profile, projects, skills } from './data/portfolio'

const RESUME_PATH = import.meta.env.VITE_RESUME_PATH
const iconMap = { server: Server, panels: PanelsTopLeft, database: Database, cloud: Cloud, shield: ShieldCheck, terminal: Terminal }
const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']
const socialLinks = [
  { label: 'GitHub', href: profile.github, Icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
]
const rise = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

function ResumeLink({ className = '', children = 'Download resume' }) {
  return RESUME_PATH
    ? <a className={className} href={RESUME_PATH} target="_blank" rel="noreferrer" download> {children} <ArrowDown size={15} /></a>
    : <span className={`${className} resume-unavailable`} aria-label="Resume PDF not configured">{children} <ArrowDown size={15} /><span className="resume-hint">Add your PDF to enable</span></span>
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={rise} initial={reduce ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduce ? 0 : .55, delay, ease: [.2, .75, .2, 1] }}>{children}</motion.div>
}

function SectionHeading({ eyebrow, title, detail }) {
  return <Reveal className="section-heading"><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{detail && <p>{detail}</p>}</Reveal>
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.dataset.nav || 'Home') }), { rootMargin: '-32% 0px -58% 0px' })
    document.querySelectorAll('[data-nav]').forEach(node => observer.observe(node))
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  const close = () => setMenuOpen(false)
  return <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}><div className="nav-inner wrap">
    <a href="#home" className="brand" onClick={close} aria-label="Jitendra Pardhi home"><span className="brand-mark">JP<span>.</span></span><span className="brand-label">Jitendra Pardhi<small>Software Engineer</small></span></a>
    <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={close} className={active === item ? 'active' : ''}>{item}</a>)}</nav>
    <div className="nav-actions"><ResumeLink className="button button-small button-outline" /><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
  </div></header>
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Jitendra Pardhi profile portrait with software engineering details">
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
    <div className="visual-grid"/>
    <div className="portrait-frame"><img src="/jitendra-pardhi.jpg" alt="Jitendra Pardhi, software engineer"/><div className="portrait-shade"/><div className="portrait-caption"><span className="portrait-monogram">JP</span><span><b>Jitendra Pardhi</b><small>SOFTWARE ENGINEER</small></span><span className="portrait-online"><i/></span></div></div>
    <div className="terminal-card glass-card"><div className="terminal-top"><span/><span/><span/><b>system.flow</b></div><div className="terminal-body"><span className="code-muted">01</span><span><i>const</i> platform = {'{'}</span><span className="code-indent"><i>scale:</i> <em>"distributed"</em>,</span><span className="code-indent"><i>events:</i> <em>"streaming"</em>,</span><span className="code-indent"><i>uptime:</i> <em>"reliable"</em></span><span>{'}'}</span><span className="code-muted">06</span><span><b>await</b> platform.<strong>deliver()</strong><span className="cursor"/></span></div></div>
    <div className="float-chip chip-node"><span className="chip-dot blue"/>Node.js <small>services</small></div><div className="float-chip chip-kafka"><span className="chip-dot purple"/>Kafka <small>events</small></div><div className="float-chip chip-cloud"><Cloud size={15}/>Cloud ready</div>
    <div className="visual-caption"><span className="live-dot"/> building reliable systems <span className="caption-line"/></div>
  </div>
}

function Hero() {
  const reduce = useReducedMotion()
  const roles = ['Backend Engineer', 'Node.js Developer', 'Microservices Engineer', 'Cloud & DevOps Engineer']
  const [role, setRole] = useState(0)
  useEffect(() => { if (reduce) return; const id = setInterval(() => setRole(i => (i + 1) % roles.length), 2400); return () => clearInterval(id) }, [reduce])
  return <section id="home" data-nav="Home" className="hero-section"><div className="hero-glow"/><div className="wrap hero-layout"><div className="hero-copy"><Reveal><span className="availability"><span className="live-dot"/> Open to building what matters</span><p className="hero-intro">Hi, I’m</p><h1>Jitendra <span>Pardhi</span></h1><div className="role-line"><span className="role-prefix">I’m a</span><span className="typed-role" key={role}>{roles[role]}</span><span className="type-cursor" aria-hidden="true"/></div><p className="hero-description">Software engineer building scalable backend systems, modern web applications, and cloud-ready solutions.</p><div className="hero-ctas"><a className="button button-primary" href="#projects">View my projects <ArrowRight size={16}/></a><a className="button button-text" href="#contact">Contact me <ArrowDownRight size={17}/></a><ResumeLink className="button button-text" /></div><div className="hero-social"><span>Connect</span>{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17}/></a>)}<span className="social-rule"/><span className="location"><MapPin size={14}/> Maharashtra, India</span></div></Reveal></div><Reveal className="hero-art-wrap" delay={.15}><HeroVisual/></Reveal></div><div className="wrap hero-bottom"><span>SELECTED TECHNOLOGIES</span><div className="tech-strip">{['Node.js', 'React', 'Kafka', 'MongoDB', 'AWS'].map((s, i) => <span key={s}><i className={`tech-dot dot-${i}`}/>{s}</span>)}</div><a href="#about" className="scroll-cue">Scroll to explore <ArrowDown size={14}/></a></div></section>
}

function About() {
  return <section id="about" data-nav="About" className="section about-section"><div className="wrap"><SectionHeading eyebrow="A little about me" title={<>Engineering for <span>what’s next.</span></>} detail="Practical systems, thoughtful architecture, and software that earns its place in production."/><div className="about-layout"><Reveal className="about-copy"><p className="lead-paragraph">I’m a software engineer with <strong>4+ years of experience</strong> building backend platforms and full stack products. My focus is Node.js services, scalable REST APIs, and event-driven systems that stay dependable under real-world workloads.</p><p>I’ve worked across database performance, payment gateway integrations, and high-throughput messaging. From designing service boundaries to tuning Redis caching, I like making complex systems easier to operate and improve.</p><p>My day-to-day toolkit spans AWS and Azure, Docker, CI/CD, and automated testing. I care about shipping reliable, high-performance software with clear engineering tradeoffs.</p><div className="about-meta"><span><MapPin size={15}/> Based in {profile.location}</span><a href={`mailto:${profile.email}`}><Mail size={15}/>{profile.email}</a><a href={`tel:${profile.phone}`}><Phone size={15}/>{profile.phone}</a></div></Reveal><div className="stats-grid"><Reveal className="stat-card"><div className="stat-index">01 / EXPERIENCE</div><div className="stat-value">4<span>+</span></div><p>Years of software engineering</p><div className="stat-line"/></Reveal><Reveal className="stat-card stat-highlight" delay={.08}><div className="stat-index">02 / CURRENT VMS</div><div className="stat-value">100<span>+</span></div><p>Node.js microservices in the VMS project</p><div className="stat-line"/></Reveal><Reveal className="stat-card" delay={.16}><div className="stat-index">03 / PLATFORM SCALE</div><div className="stat-value">50 <span className="unit">lakh+</span></div><p>Messages per day on platform experience</p><div className="stat-line"/></Reveal></div></div></div></section>
}

function Skills() {
  return <section id="skills" data-nav="Skills" className="section skills-section"><div className="wrap"><SectionHeading eyebrow="Tools of the trade" title={<>Built on a strong <span>foundation.</span></>} detail="A practical toolkit for designing, building, and operating modern software."/><div className="skill-grid">{skills.map((group, index) => { const Icon = iconMap[group.icon]; return <Reveal className="skill-card" delay={(index % 3) * .06} key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={18}/></span><span className="skill-number">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></Reveal> })}</div></div></section>
}

function Experience() {
  return <section id="experience" data-nav="Experience" className="section experience-section"><div className="wrap"><SectionHeading eyebrow="Where I’ve worked" title={<>Experience that <span>ships.</span></>} detail="A few chapters building useful products with teams that care about the details."/><div className="timeline">{experience.map((job, index) => <Reveal className="timeline-item" key={job.company} delay={index * .07}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><article className="experience-card"><div className="experience-top"><div><div className="company-row"><h3>{job.company}</h3>{job.current && <span className="current-pill"><i/> Current</span>}</div><p className="job-role">{job.role}</p></div><span className="job-dates">{job.dates}</span></div><ul>{job.points.map(point => <li key={point}><ChevronRight size={14}/>{point}</li>)}</ul><div className="tag-row">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div></div></section>
}

function ProjectArt({ type }) {
  if (type === 'query') return <div className="project-art art-query"><div className="query-app"><div className="query-app-head"><span className="query-app-mark"><Database size={12}/></span><span>DB QUERY UTILITIES</span><i/></div><div className="query-app-content"><div className="query-side"><b>DATA SOURCES</b><span className="query-source active"><i/> MySQL</span><span className="query-source"><i/> MSSQL</span><span className="query-source"><i/> MongoDB</span><div className="query-filter"><b>FILTER</b><span>Created after</span><em>2025-01-01</em></div></div><div className="query-results"><div className="query-title"><span>Customer report</span><b>RUN ↗</b></div><div className="query-columns"><span>RECORD</span><span>REGION</span><span>STATUS</span></div>{[['Record 01','West','Ready'],['Record 02','Central','Ready'],['Record 03','East','Queued']].map(row => <div className="query-row" key={row[0]}>{row.map(cell => <span key={cell}>{cell}</span>)}</div>)}<div className="query-export"><span>1–25 OF 1,248</span><b>↓ EXPORT .XLSX</b></div></div></div></div></div>
  if (type === 'mesh') return <div className="project-art art-mesh"><div className="mesh-orbit mesh-a"/><div className="mesh-orbit mesh-b"/><div className="mesh-core"><Layers3 size={22}/></div><span className="mesh-node n1"/><span className="mesh-node n2"/><span className="mesh-node n3"/><span className="mesh-node n4"/><span className="mesh-label">SERVICE MESH <i/> EVENT FLOW</span></div>
  if (type === 'signal') return <div className="project-art art-signal"><div className="signal-label">MESSAGE THROUGHPUT <span>+25%</span></div><div className="signal-chart">{[25, 38, 32, 48, 43, 57, 52, 72, 61, 79, 69, 92, 82, 100, 91, 118, 106, 136, 122, 152].map((h, i) => <i key={i} style={{ height: `${h}px`, animationDelay: `${i * .025}s` }}/>)}</div><span className="signal-caption">ASYNC · RESILIENT · AT SCALE</span></div>
  if (type === 'flow') return <div className="project-art art-flow"><div className="flow-node"><span>API</span><b>Request</b></div><div className="flow-connector"><i/><i/><i/></div><div className="flow-node flow-main"><span>✓</span><b>Payment</b></div><div className="flow-connector"><i/><i/><i/></div><div className="flow-node"><span>↻</span><b>Webhook</b></div><div className="flow-caption">RETRY · VERIFY · RECONCILE</div></div>
  return <div className="project-art art-civic"><div className="civic-window"><div className="civic-bar"><i/><i/><i/><span>janseva.local</span></div><div className="civic-content"><div className="civic-icon"><MapPin size={18}/></div><div><b>Community, connected.</b><span>Services close to home</span></div></div><div className="civic-tiles"><i/><i/><i/></div></div><span className="civic-label">CIVIC SERVICES · COMMUNITY</span></div>
}

function Projects() {
  return <section id="projects" data-nav="Projects" className="section projects-section"><div className="wrap"><SectionHeading eyebrow="Selected work" title={<>Systems with <span>purpose.</span></>} detail="A mix of professional engineering work and an independent community project."/><div className="project-grid">{projects.map((project, index) => <Reveal className="project-card" key={project.title} delay={(index % 2) * .08}><ProjectArt type={project.pattern}/><div className="project-body"><div className="project-kicker"><span>{project.type}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-foot"><span>{project.note}</span>{project.github ? <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Source code for ${project.title}`}><Github size={16}/> Source code <ExternalLink size={13}/></a> : <span className="private-work"><BriefcaseBusiness size={14}/> Experience</span>}</div></div></Reveal>)}</div></div></section>
}

function Architecture() {
  const flow = [{ icon: PanelsTopLeft, name: 'React', sub: 'Frontend' }, { icon: Code2, name: 'Node.js', sub: 'REST APIs' }, { icon: Layers3, name: 'Services', sub: 'Microservices' }, { icon: Zap, name: 'Kafka', sub: 'Event stream' }, { icon: Database, name: 'MongoDB / Redis', sub: 'Data & cache' }, { icon: Cloud, name: 'AWS / Azure', sub: 'Cloud' }]
  return <section className="section architecture-section"><div className="wrap"><SectionHeading eyebrow="How I think about systems" title={<>Designed to <span>work together.</span></>} detail="A simplified view of patterns I use to keep applications responsive, resilient, and easier to evolve."/><Reveal className="architecture-card"><div className="architecture-top"><div><span className="arch-label">A TYPICAL REQUEST PATH</span><h3>From interface to infrastructure</h3></div><span className="arch-status"><i/> SYSTEM FLOW</span></div><div className="flow-diagram">{flow.map(({ icon: Icon, name, sub }, index) => <div className="flow-step" key={name}><div className="flow-step-card"><Icon size={20}/><b>{name}</b><span>{sub}</span></div>{index < flow.length - 1 && <div className="flow-arrow"><span/><ArrowRight size={14}/></div>}</div>)}</div><div className="architecture-notes"><div><span>01</span><p><b>Scale at the edges</b> — REST services break work into clear, independently scalable responsibilities.</p></div><div><span>02</span><p><b>Process asynchronously</b> — Kafka keeps event-driven workloads moving without blocking user journeys.</p></div><div><span>03</span><p><b>Ship with confidence</b> — caching, automated tests, containers, and CI/CD support dependable releases.</p></div></div></Reveal></div></section>
}

function Education() {
  return <section className="section education-section"><div className="wrap education-layout"><div><span className="eyebrow"><i/> Education</span><h2>Grounded in <span>engineering.</span></h2></div><div className="education-list"><Reveal className="education-item"><span className="education-mark">BE</span><div><h3>B.E. Electronics & Communication Engineering</h3><p>TGPCET, Nagpur</p></div><span className="education-arrow"><ArrowUp size={15}/></span></Reveal><Reveal className="education-item" delay={.08}><span className="education-mark">DE</span><div><h3>Diploma in Electronics & Telecommunication Engineering</h3><p>Government Polytechnic, Gondia</p></div><span className="education-arrow"><ArrowUp size={15}/></span></Reveal></div></div></section>
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)
  const update = e => { setForm({ ...form, [e.target.name]: e.target.value }); setStatus('') }
  const submit = e => {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return
    const body = `Hi Jitendra,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`
    const params = new URLSearchParams({ subject: form.subject, body })
    window.location.href = `mailto:${profile.email}?${params.toString()}`
    setStatus('Your email app should open with this message ready to send.')
  }
  const copyEmail = async () => { try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { window.location.href = `mailto:${profile.email}` } }
  return <section id="contact" data-nav="Contact" className="section contact-section"><div className="wrap"><div className="contact-panel"><div className="contact-glow"/><div className="contact-copy"><span className="eyebrow"><i/> Let’s connect</span><h2>Have a good problem?<br/><span>Let’s talk.</span></h2><p>Whether you’re building a product, scaling a platform, or looking for an engineer who cares about the details, I’d be glad to hear from you.</p><div className="contact-methods"><a href={`mailto:${profile.email}`} className="contact-email"><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL ME</small>{profile.email}</span><ArrowUp size={14}/></a><div className="contact-socials">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={17}/>{label}<ExternalLink size={13}/></a>)}<button onClick={copyEmail}><span>{copied ? <Check size={16}/> : <Copy size={16}/>}</span>{copied ? 'Copied' : 'Copy email'}</button></div></div></div><div className="contact-form-wrap"><div className="form-heading"><span className="form-icon"><Send size={17}/></span><div><h3>Send a message</h3><p>Opens a message in your email app.</p></div></div><form onSubmit={submit}><div className="form-row"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" required maxLength="100" autoComplete="name"/></label><label>Your email<input name="email" value={form.email} onChange={update} type="email" placeholder="jane@company.com" required maxLength="254" autoComplete="email"/></label></div><label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What would you like to discuss?" required maxLength="150"/></label><label>Message<textarea name="message" value={form.message} onChange={update} placeholder="A little context goes a long way..." rows="4" required maxLength="3000"/></label><button className="button button-primary form-submit" type="submit">Open email draft <ArrowRight size={16}/></button>{status && <p className="form-status" role="status"><Check size={15}/>{status}</p>}</form></div></div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="wrap footer-inner"><a href="#home" className="brand footer-brand"><span className="brand-mark">JP<span>.</span></span><span className="brand-label">Jitendra Pardhi<small>Software Engineer</small></span></a><p>Building dependable software, one thoughtful system at a time.</p><div className="footer-right"><div className="footer-socials">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={16}/></a>)}</div><a className="back-top" href="#home">Back to top <ArrowUp size={14}/></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Jitendra Pardhi</span><span>Designed & built with care <span className="footer-heart">✳</span></span></div></footer>
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><About/><Skills/><Experience/><Projects/><Architecture/><Education/><Contact/></main><Footer/></>
}
