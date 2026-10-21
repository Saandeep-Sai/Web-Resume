import Reveal from './Reveal';

export default function AchievementRoadmap({ achievements }) {
  return <div className="roadmap" aria-label="Competition recognition roadmap">
    {achievements.map((achievement, index) => <Reveal key={`${achievement.year}-${achievement.title}`} delay={index * 0.04} className={`roadmap-entry ${index % 2 === 0 ? 'roadmap-entry-top' : 'roadmap-entry-bottom'}`}>
      <article className="roadmap-item"><div className="roadmap-marker" aria-hidden="true" /><p className="roadmap-year">{achievement.year}</p><div><h3>{achievement.title}</h3><p>{achievement.place}</p></div></article>
    </Reveal>)}
  </div>;
}
