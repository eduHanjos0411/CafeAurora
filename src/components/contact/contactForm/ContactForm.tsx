import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";

import './contactForm.css'

export function ContactForm() {
  return (
    <form className="contact-form">
      <Input  label="Nome" placeholder="Digite seu nome"/>
      <Input label="Email" placeholder="Digite seu email"/>
      <Input label="Mensagem" placeholder="Digite sua mensagem"/>
      <Button>Enviar</Button>
    </form>
  )
}