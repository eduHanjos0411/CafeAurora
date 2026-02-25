import { useState } from "react";
import "./header.css";

export function Header() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(prev => !prev)
    console.log(isOpen)
  }

  return (
    <header className="header">
      <div className="logo-box">
        <img className="logo-image" src="LogoAurora.png" />
        <h1 className="header-title">Aurora Café</h1>
      </div>

      <button onClick={toggleMenu} className="menu-btn">
        ☰
      </button>

      
      <nav className={`header-nav ${isOpen ? "open" : ""}`}>
        <a href="#hero" className="header-nav-item" onClick={toggleMenu}>
          Início
        </a>
        <a href="#about" className="header-nav-item" onClick={toggleMenu}>
          Sobre
        </a>
        <a href="#menu" className="header-nav-item" onClick={toggleMenu}>
          Cardápio
        </a>
        <a href="#contact" className="header-nav-item" onClick={toggleMenu}>
          Contato
        </a>
      </nav>
    </header>
  );
}
