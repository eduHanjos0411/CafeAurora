import "./App.css";
import { AboutSection } from "./components/about/About";
import { CardapioSection } from "./components/cardapio/Cardapio";
import { ContactSection } from "./components/contact/ContactSection";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero/Hero";
import { TestimonialsSection } from "./components/testimonals/Testimonials";

function App() {
  return (
    <>
      <header className="app-header">
        <Header />
      </header>

      <main className="app-main">
        <HeroSection/>
        <AboutSection/>
        <CardapioSection/>
        <TestimonialsSection/>
        <ContactSection/>
      </main>
      <footer className="app-footer"></footer>
    </>
  );
}

export default App;
