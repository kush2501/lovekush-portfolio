import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  console.log(darkMode);  
  
  useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
        console.log("Active Section:", section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Page load hote hi ek baar check kar lo
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useEffect(() => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(darkMode ? "dark" : "light");
}, [darkMode]);

  return (
    <nav className="navbar">

      <h2 className="logo">Lovekush</h2>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
            >
          Home
        </a>
        </li>

        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
            >
          About
        </a>
        </li>

        <li>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
            >
          Skills
        </a>
        </li>

        <li>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
            >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
            >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-icons">

        <button
          type="button"
          className="theme-btn"
          aria-label="Toggle theme"
          onClick={() => setDarkMode(!darkMode)}
        >
          <FaMoon />
        </button>

        <button
          type="button"
          className="menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;