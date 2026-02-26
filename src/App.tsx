import "./App.css";
import { AboutSection } from "./components/about/About";
import { CardapioSection } from "./components/cardapio/Cardapio";
import { ContactSection } from "./components/contact/ContactSection";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/hero/Hero";
import { TestimonialsSection } from "./components/testimonals/TestimonialsSection";

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
        <Footer/>
      </main>
    </>
  );
}

export default App;
