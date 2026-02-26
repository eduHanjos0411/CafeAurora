
import { useState } from 'react'
import { ContactForm } from './contactForm/ContactForm'
import { ContactModal } from './contactModal/ContactModal'
import './contactSection.css'

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [nome, setNome] = useState("")

  function handleFormSubmit(nomeRecebido: string) {
    setNome(nomeRecebido)
    setIsOpen(true)
    console.log(isOpen)
  }

  return (
    <section id='contact' className="contact-section">
      <h2>Entre em contato</h2>
      <ContactForm onSubmitForm={handleFormSubmit}/>

      {isOpen && <ContactModal onClick={() => setIsOpen(false)} name={nome}/>}
      
    </section>
  )
}