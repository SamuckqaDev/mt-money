import Modal from "react-modal";

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
    onRequestClose={onRequestClose}>
      <h2>Resgiter new transaction</h2>
    </Modal>
  );
}
