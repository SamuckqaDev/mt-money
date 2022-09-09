import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] =
    useState(false);

  function doOpenNewTransactionsModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function doCloseNewTransactionsModal() {
    setIsNewTrasactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={doOpenNewTransactionsModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={doCloseNewTransactionsModal}
      >
        <h2>Resgiter new transaction</h2>
      </Modal>
      <GlobalStyled />
    </>
  );
}
