import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsProviderProps = {
    children: ReactNode;
}

type TransactionsContextData = {
    transactions: Transaction[];
    doCreateTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions")
            .then((res) => setTransactions(res.data.transactions));
    }, []);

    async function doCreateTransaction(transactionInput: TransactionInput) {
        const reposnse = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = reposnse.data;

        setTransactions([
            ...transactions,
            transaction
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, doCreateTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    return useContext(TransactionsContext)
} 