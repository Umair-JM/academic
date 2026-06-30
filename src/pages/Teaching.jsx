import { experience, teachingSkills, courses } from "../data.js";
import { Reveal, Stagger, StaggerItem } from "../lib/motion.jsx";
import Footer from "../components/Footer.jsx";

export default function Teaching() {
  return (
    <>
      <div className="subhead">
        <Reveal as="div" className="label">In the classroom</Reveal>
        <Reveal as="h1" delay={0.05}>Teaching & supervision</Reveal>
        <Reveal as="p" delay={0.1}>
          I have taught across technical subjects, designed courses end to end, and supervised
          student projects from proposal to defence. Here is the teaching and mentoring side of my
          work.
        </Reveal>
      </div>

      <h2 className="group-title">Courses I can teach</h2>
      <Stagger className="tags" gap={0.04} as="ul">
        {courses.map((c) => (<StaggerItem as="li" key={c}>{c}</StaggerItem>))}
      </Stagger>

      <h2 className="group-title">Experience</h2>
      <div className="xp-list">
        {experience.map((x, i) => (
          <Reveal className="xp-item" key={x.role} delay={Math.min(i * 0.05, 0.2)}>
            <div className="xp-top"><h4>{x.role}</h4><span className="xp-date">{x.date}</span></div>
            <div className="xp-org">{x.org}</div>
            <p>{x.blurb}</p>
          </Reveal>
        ))}
      </div>

      <h2 className="group-title">Skills</h2>
      {Object.entries(teachingSkills).map(([group, items]) => (
        <div className="stack-group" key={group}>
          <h4>{group}</h4>
          <Stagger className="tags" gap={0.03} as="ul">
            {items.map((t) => (<StaggerItem as="li" key={t}>{t}</StaggerItem>))}
          </Stagger>
        </div>
      ))}

      <Footer />
    </>
  );
}
