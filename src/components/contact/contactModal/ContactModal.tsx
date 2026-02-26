import { Button } from "../../ui/button/Button";
import "./contactModal.css";

interface ContactModalProps {
  name: string;
  onClick: () => void;
}

export function ContactModal({ name, onClick }: ContactModalProps) {
  return (
    <div className="modal-overlay">
      <div className="message-send-modal">
        <h2>Sua mensagem foi enviada com sucesso {name}! </h2>
        <p>Obrigado por testar a página do Café Aurora</p>
        <Button onClick={onClick}>Fechar</Button>
      </div>
    </div>
  );
}
