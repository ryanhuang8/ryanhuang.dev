import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    // You can implement logic to update your application's theme
    console.log("Theme toggled to:", theme);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`horizontal-navbar ${theme}`}>
      <div className="center-nav">
        <div className="nav-tabs">
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/research" className="new-page" onClick={closeMenu}>
                Research
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="new-page" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            {/* <li><a href="/experience">Experience</a></li> */}
          </ul>
        </div>
        <div className="nav-buttons">
          <ThemeToggle onToggle={handleThemeToggle} />
          <button
            className={`nav-hamburger ${theme} ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
