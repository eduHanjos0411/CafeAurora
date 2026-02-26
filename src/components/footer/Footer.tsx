import './footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="logo-img">
        <img className="logo-image" src="LogoAurora.png" />
        <h1 className="header-title">Aurora Café</h1>
      </div>
      <div className="text-footer">
        <p>Café Aurora - Projeto pessoal</p>
        <p>Desenvolvido por <a href='https://linkedin.com/in/eduanjos'>Eduardo Henrique</a> - 2026</p>
      </div>
    </footer>
  );
}
