'use client';

import { Award, BookOpen, GraduationCap, Presentation, Rocket, School, Trophy, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const iconByName = { school: School, book: BookOpen, graduation: GraduationCap, users: Users, rocket: Rocket, award: Award, trophy: Trophy, presentation: Presentation };

export default function AchievementsTimeline({ milestones }) {
  const reduceMotion = useReducedMotion();
  return <>
  <p className="milestone-scroll-hint">Scroll horizontally to explore the full timeline <span aria-hidden="true">→</span></p>
  <div className="milestone-scroll" tabIndex="0" aria-label="Horizontally scrollable academic achievements and experience timeline on larger screens"><div className="milestone-timeline">
    <motion.div className="milestone-line" aria-hidden="true" initial={reduceMotion ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} />
    <div className="milestone-track">{milestones.map((milestone, index) => {
      const Icon = iconByName[milestone.icon] || Trophy;
      const isTop = index % 2 === 0;
      return <motion.article key={`${milestone.year}-${milestone.title}`} className={`milestone ${isTop ? 'milestone-top' : 'milestone-bottom'} ${milestone.featured ? 'milestone-featured' : ''}`} initial={reduceMotion ? false : { opacity: 0, y: isTop ? -15 : 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: reduceMotion ? 0 : index * 0.045, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
        <div className="milestone-card"><div className="milestone-icon"><Icon aria-hidden="true" /></div><div><h3>{milestone.title}</h3><p className="milestone-place">{milestone.place}</p><p>{milestone.description}</p></div></div>
        <motion.div className="milestone-stem" aria-hidden="true" initial={reduceMotion ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: reduceMotion ? 0 : index * 0.045, duration: 0.25 }} /><motion.span className="milestone-node" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, scale: 0.35 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: reduceMotion ? 0 : 0.1 + index * 0.045, duration: 0.24 }} /><time>{milestone.year}</time>
      </motion.article>;
    })}</div><span className="timeline-arrow" aria-hidden="true" />
  </div></div>
  </>;
}
