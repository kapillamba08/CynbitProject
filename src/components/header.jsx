export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#openings" className="brand">
          <span className="brand-name">Cynbit</span>
        </a>

        <div className="nav-links">
          <button type="button" className="nav-item">
            Company <span className="caret">▾</span>
          </button>
          <button type="button" className="nav-item">
            Expertise <span className="caret">▾</span>
          </button>
          <button type="button" className="nav-item">
            BitElevate <span className="caret">▾</span>
          </button>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="join-btn" href="#openings">
          Join Us
        </a>
      </nav>
    </header>
  );
}
