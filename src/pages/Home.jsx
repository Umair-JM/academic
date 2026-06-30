import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { profile, metrics, interests, education, featuredPubs, certHighlights } from "../data.js";
import { Reveal, Stagger, StaggerItem, SpotlightCard, Magnetic } from "../lib/motion.jsx";
import Footer from "../components/Footer.jsx";
import LocalTime from "../components/LocalTime.jsx";

function Row({ label, children, id }) {
  return (
    <section className="row" id={id}>
      <Reveal as="div" className="row-label">{label}</Reveal>
      <div className="row-content">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <motion.div
          className="hero-head"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="avatar" aria-hidden>UJ</div>
          <div className="avatar-meta">
            <div className="nm">{profile.name}</div>
            <div className="rl">{profile.role}</div>
          </div>
        </motion.div>

        <motion.h1
          className="hero-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          I research <span className="hl">applied AI</span> and I love to teach it.
        </motion.h1>

        <Reveal as="p" className="hero-body" delay={0.1}>{profile.intro}</Reveal>

        <Stagger className="profiles" gap={0.06}>
          <StaggerItem as="span"><Magnetic as={Link} className="pill" to="/publications">Publications</Magnetic></StaggerItem>
          <StaggerItem as="span"><Magnetic as={Link} className="pill" to="/teaching">Teaching</Magnetic></StaggerItem>
          <StaggerItem as="span"><Magnetic as="a" className="pill" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</Magnetic></StaggerItem>
          <StaggerItem as="span"><Magnetic as="a" className="pill" href={`mailto:${profile.email}`}>Email</Magnetic></StaggerItem>
        </Stagger>
      </section>

      <Row label="At a glance">
        <Stagger className="metrics" gap={0.08}>
          {metrics.map((m) => (
            <StaggerItem className="metric" key={m.cap}>
              <div className="num">{m.num}</div>
              <div className="cap">{m.cap}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </Row>

      <Row label="About me">
        {profile.about.map((p, i) => (
          <Reveal as="p" key={i} className={i ? "muted" : ""} delay={i * 0.05}>{p}</Reveal>
        ))}
      </Row>

      <Row label="Research interests">
        <Stagger className="tags" gap={0.04} as="ul">
          {interests.map((f) => (<StaggerItem as="li" key={f}>{f}</StaggerItem>))}
        </Stagger>
      </Row>

      <Row label="Selected work">
        <Stagger className="pub-feature" gap={0.06} as="ul">
          {featuredPubs.map((t) => (
            <StaggerItem as="li" key={t}><Link to="/publications">{t}</Link></StaggerItem>
          ))}
        </Stagger>
        <div className="see-all"><Link className="alink" to="/publications">All publications</Link></div>
      </Row>

      <Row label="Education">
        <div className="xp-list">
          {education.map((e, i) => (
            <Reveal className="xp-item" key={e.degree} delay={Math.min(i * 0.05, 0.2)}>
              <div className="xp-top"><h4>{e.degree}</h4><span className="xp-date">{e.date}</span></div>
              <div className="xp-org">{e.org}</div>
              <p>{e.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Row>

      <Row label="Certifications">
        <Stagger className="cert-mini" gap={0.05}>
          {certHighlights.map((c) => (
            <StaggerItem key={c.name}>
              <SpotlightCard className="cert-chip">
                <span className="issuer">{c.issuer}{c.status === "progress" && <span className="tag-progress">in progress</span>}</span>
                <span className="nm">{c.name}</span>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Row>

      <Reveal as="p" className="cta-line">Teaching role or research collaboration? <span className="hl">Let's talk.</span></Reveal>

      <Row label="Contact">
        <div className="kv">
          <a className="alink" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="alink" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <span className="muted">{profile.location}</span>
        </div>
      </Row>

      <Row label="Local time"><LocalTime /></Row>

      <Footer />
    </>
  );
}
