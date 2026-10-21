import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Reveal from './Reveal';

export default function ProjectCard({ project, index = 0, institute = false, showVisual = false, variant = 'standard' }) {
  const classes = ['project-card', `project-card-${variant}`, project.featured ? 'featured-project' : ''].filter(Boolean).join(' ');
  return <Reveal delay={index * 0.04} className={classes}>
    <div className="card-topline"><span>{project.kind || project.theme}</span>{institute && <span className="project-origin">Saras AI Institute</span>}</div>
    <h3>{project.title}</h3><p>{project.description}</p>{project.detail && <p className="detail">{project.detail}</p>}
    {showVisual && project.video && <div className="visual-media video-media"><iframe src={project.video} title={`${project.title} demonstration video`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /><span>Project demonstration</span></div>}
    {showVisual && !project.video && project.image && <div className="visual-media"><Image src={project.image} alt={`${project.title} interface`} fill sizes="(max-width: 620px) 100vw, 50vw" /><span>Project interface</span></div>}
    <div className="card-bottom"><ul className="tech-list">{project.tech.map(item => <li key={item}>{item}</li>)}</ul>
      <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" />Source</a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" />Live site</a>}</div>
    </div>
  </Reveal>;
}
