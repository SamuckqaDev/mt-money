import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

type NewTansactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTansactionModalProps) {

  const transactions = useContext(TransactionsContext);

  const [title, setTitle] = useState("");

  const [value, setValue] = useState(0);

  const [category, setCategory] = useState("");

  const [type, setType] = useState("deposit");

  function doCreatedNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = { title, value, type, category };

    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={doCreatedNewTransaction}>
        <h2>Register transaction</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}
