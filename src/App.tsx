import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={doOpenNewTransactionsModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={doCloseNewTransactionsModal}
      />
      <GlobalStyled />
    </TransactionsProvider >
  );
}
