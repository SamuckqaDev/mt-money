import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

type NewTansactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTansactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button"
      className="react-modal-close"
      onClick={onRequestClose}>
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container>
        <h2>Register new transaction</h2>
        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input type="text" placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
