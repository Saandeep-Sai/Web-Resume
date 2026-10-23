'use client';

import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import AchievementsTimeline from '../components/AchievementsTimeline';
import { profile } from '../data/profile';
import { independentProjects, sarasProjects } from '../data/projects';
import { education, skillGroups, timelineMilestones } from '../data/resume';

function SectionHeading({ number, kicker, title, copy }) {
  return <div className="section-heading"><div className="section-meta"><span>{number}</span><p className="kicker">{kicker}</p></div><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

const featuredIndependentTitles = ['Educational Video Generator', 'College Placement Guide', 'VisionTalk', 'SafeSteps (TrustHut)'];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const instituteFeatured = sarasProjects.slice(0, 2);
  const independentFeatured = independentProjects.filter(project => featuredIndependentTitles.includes(project.title));

  return <><a className="skip-link" href="#main">Skip to content</a><div className="page-shell" id="top"><Navbar /><main id="main">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy"><motion.p className="availability" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>Turpu Saandeep Sai · Backend & AI systems developer</motion.p><motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>I build AI products and the systems behind them.</motion.h1><motion.p className="intro" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14, duration: 0.5 }}>I’m a B.Tech student focused on AI, backend development, and full-stack applications.</motion.p><motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.5 }}><a className="button primary" href="#saras-work">View selected projects <ArrowDownRight aria-hidden="true" /></a><a className="button secondary" href="/resume/saandeep-resume.pdf" download>Download resume <Download aria-hidden="true" /></a></motion.div><div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" />LinkedIn</a><a href={`mailto:${profile.email}`}><Mail aria-hidden="true" />Email</a></div></div>
      <motion.div className="portrait-stage" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}><div className="portrait-arc" /><Image src="/images/saandeep-portrait.png" alt="Turpu Saandeep Sai with folded arms" width={704} height={1187} priority sizes="(max-width: 900px) 78vw, 43vw" className="portrait" /><div className="portrait-caption"><span>Turpu Saandeep Sai</span><span>AI systems · full-stack problem solving</span></div></motion.div>
    </section>

    <section className="work-section" id="saras-work"><Reveal><SectionHeading number="01" kicker="Saras AI Institute" title="Applied AI projects" copy="Projects from my AI and software engineering training." /></Reveal><div className="feature-grid">{instituteFeatured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} institute variant="case-study" showVisual={Boolean(project.image)} />)}</div></section>

    <section className="independent-section" id="work"><Reveal><SectionHeading number="02" kicker="Independent projects" title="More ideas, built into working products." copy="A few selected projects showing how I approach real problems." /></Reveal><div className="feature-grid independent-feature-grid">{independentFeatured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} variant="case-study" showVisual={Boolean(project.image || project.video)} />)}</div><p className="all-projects-link"><a className="button secondary" href="/projects">View all projects <ArrowUpRight aria-hidden="true" /></a></p></section>

    <section className="approach-section" id="approach"><Reveal><SectionHeading number="03" kicker="How I work" title="How I build useful software" copy="I start with the problem, build a complete solution, then test and improve it." /></Reveal><div className="approach-grid"><Reveal><article><span>01</span><h3>Understand</h3><p>Learn who needs the product and what they need it to do.</p></article></Reveal><Reveal delay={0.04}><article><span>02</span><h3>Plan</h3><p>Choose the right data, tools, APIs, and user flow.</p></article></Reveal><Reveal delay={0.08}><article><span>03</span><h3>Build and test</h3><p>Connect the pieces, check edge cases, and fix what breaks.</p></article></Reveal><Reveal delay={0.12}><article><span>04</span><h3>Deliver</h3><p>Deploy the product and make it ready for people to use.</p></article></Reveal></div></section>

    <section className="skills-section" id="skills"><Reveal><SectionHeading number="04" kicker="Technical skills" title="Tools I use to build software" copy="Grouped by the kind of work they support." /></Reveal><div className="skills-grid">{skillGroups.map(([title, evidence, skills]) => <Reveal key={title}><article className="skill-group"><h3>{title}</h3><p>{evidence}</p><ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article></Reveal>)}</div></section>

    <section className="education-section" id="education"><Reveal><SectionHeading number="05" kicker="Education" title="My education and AI training" copy="Degree study, applied AI training, and earlier academic results." /></Reveal><div className="education-timeline">{education.map((item, index) => <Reveal key={item.title} delay={index * 0.04} className={`education-entry ${index < 2 ? 'education-entry-primary' : ''}`}><span className="education-dot" aria-hidden="true" /><article><div><h3>{item.title}</h3><p>{item.place}</p></div><span>{item.note}</span></article></Reveal>)}</div></section>

    <section className="achievements-section" id="achievements"><Reveal><SectionHeading number="06" kicker="Achievements & experience" title="Milestones in study, projects, and competitions" copy="Awards, academic progress, projects, and technical workshops." /></Reveal><p className="milestone-intro">I run workshops on AI and emerging technologies, and enjoy learning and teaching.</p><AchievementsTimeline milestones={timelineMilestones} /></section>

    <section className="contact-section" id="contact"><Reveal><div className="contact-layout"><div><SectionHeading number="07" kicker="Internships & opportunities" title="Open to internships and engineering projects." copy="If you’re building AI or software products, I’d be glad to connect." /><div className="contact-actions"><a className="button primary" href={`mailto:${profile.email}?subject=Internship%20or%20project%20opportunity`}>Discuss an opportunity <Mail aria-hidden="true" /></a><a className="text-link" href="/resume/saandeep-resume.pdf" download>Download resume <Download aria-hidden="true" /></a></div></div><aside className="contact-details"><a href={`mailto:${profile.email}`}><span>Email</span>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>Connect professionally <ArrowUpRight aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span>Explore Here <ArrowUpRight aria-hidden="true" /></a></aside></div></Reveal></section>
  </main><footer><div><strong>Turpu Saandeep Sai</strong><span>Backend & AI systems developer</span></div><nav aria-label="Footer navigation"><a href="#saras-work">Projects</a><a href="#skills">Skills</a><a href="#education">Education</a><a href="#contact">Contact</a></nav><span><MapPin aria-hidden="true" /> Hyderabad, India · © {new Date().getFullYear()}</span></footer></div></>;
}
