import { ContactForm } from "./contactForm/ContactForm";

import './contactSection.css'

export function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Entre em contato</h2>
      <ContactForm/>
    </section>
  )
}