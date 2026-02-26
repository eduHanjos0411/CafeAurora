import { Button } from '../ui/button/Button'
import './hero.css'

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className='hero-content'>
        <h2 className='hero-title'>Bem-vindo ao Aurora Café</h2>
        <h3 className='hero-subtitle'>Seu aconchego diário</h3>
        <Button><a href='#menu'>Ver Cardápio</a></Button>
      </div>
    </section>
  )
}