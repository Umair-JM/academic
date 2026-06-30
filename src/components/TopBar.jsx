import { NavLink, Link } from "react-router-dom";
import { Magnetic } from "../lib/motion.jsx";

export default function TopBar() {
  return (
    <header className="topbar">
      <Link className="brand" to="/">U<b>J</b>M</Link>
      <nav className="topnav" aria-label="Pages">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/teaching">Teaching</NavLink>
        <NavLink to="/publications">Publications</NavLink>
        <a href="https://github.com/Umair-JM" target="_blank" rel="noopener">GitHub</a>
      </nav>
      <Magnetic as="a" className="book-btn" href="mailto:umairjavaidmanj@gmail.com?subject=Teaching%20enquiry">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        Get in touch
      </Magnetic>
    </header>
  );
}
