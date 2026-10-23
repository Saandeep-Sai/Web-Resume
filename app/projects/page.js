import Navbar from '../../components/Navbar';
import ProjectCard from '../../components/ProjectCard';
import { additionalProjects, independentProjects, sarasProjects } from '../../data/projects';

export const metadata = {
  title: 'All Projects — Turpu Saandeep Sai',
  description: 'Saras AI Institute and independent software projects by Turpu Saandeep Sai.',
};

function ProjectGrid({ projects, institute = false }) {
  return <div className="all-projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} institute={institute} variant="archive" showVisual={Boolean(project.image || project.video)} />)}</div>;
}

export default function ProjectsPage() {
  const independent = [...independentProjects, ...additionalProjects];
  const total = sarasProjects.length + independent.length;

  return <><a className="skip-link" href="#main">Skip to projects</a><div className="page-shell" id="top"><Navbar /><main id="main" className="all-projects-page">
    <section className="all-projects-intro"><p className="kicker">PROJECT ARCHIVE · {total} PROJECTS</p><h1>All projects</h1><p>Browse my Saras AI Institute work and independent projects, with a short summary and links where available.</p><a className="text-link" href="/">← Back to resume</a></section>
    <section className="all-projects-section"><div className="section-heading"><p className="kicker">01 · SARAS AI INSTITUTE</p><h2>Applied AI and software projects</h2></div><ProjectGrid projects={sarasProjects} institute /></section>
    <section className="all-projects-section"><div className="section-heading"><p className="kicker">02 · INDEPENDENT WORK</p><h2>Independent and collaborative projects</h2></div><ProjectGrid projects={independent} /></section>
  </main><footer><div><strong>Turpu Saandeep Sai</strong><span>Backend & AI systems developer</span></div><nav aria-label="Footer navigation"><a href="/#top">Home</a><a href="/#skills">Skills</a><a href="/#education">Education</a><a href="/#contact">Contact</a></nav><span>© {new Date().getFullYear()}</span></footer></div></>;
}
