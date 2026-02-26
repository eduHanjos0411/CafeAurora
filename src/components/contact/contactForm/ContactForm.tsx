import React, { useState } from "react";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";

import "./contactForm.css";

interface ContactFormProps {
  onSubmitForm: (nome: string) => void;
}

export function ContactForm({ onSubmitForm }: ContactFormProps) {
  const [nome, setNome] = useState("");

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmitForm(nome)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Input required value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} placeholder="Digite seu nome" />
      <Input required placeholder="Digite seu email" />
      <Input required placeholder="Digite sua mensagem" />
      <Button type="submit">Enviar</Button>
    </form>
  );
}
