import { journalPubs, conferencePubs } from "../data.js";
import { Reveal } from "../lib/motion.jsx";
import Footer from "../components/Footer.jsx";

function boldName(html) {
  return html.replace(/Manj, U\. J\./g, "<strong>Manj, U. J.</strong>");
}

function PubList({ items }) {
  return (
    <ol className="pub-list">
      {items.map((p, i) => (
        <Reveal as="li" className="pub-item" key={i} delay={Math.min(i * 0.04, 0.2)}>
          <p className="pub-cite" dangerouslySetInnerHTML={{ __html: boldName(p.cite) }} />
          <span className={`pub-badge ${p.badge}`}>{p.status}</span>
        </Reveal>
      ))}
    </ol>
  );
}

export default function Publications() {
  return (
    <>
      <div className="subhead">
        <Reveal as="div" className="label">Research output</Reveal>
        <Reveal as="h1" delay={0.05}>Publications</Reveal>
        <Reveal as="p" delay={0.1}>
          Work across health and applied AI, machine learning, biomedical engineering and secure
          systems. My name is in bold and the current status is shown for each.
        </Reveal>
      </div>

      <h2 className="pub-group">Journal papers</h2>
      <PubList items={journalPubs} />

      <h2 className="pub-group">Conference papers</h2>
      <PubList items={conferencePubs} />

      <Footer />
    </>
  );
}
