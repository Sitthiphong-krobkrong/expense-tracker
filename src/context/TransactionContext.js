// src/context/TransactionContext.js
import { createContext, useState } from "react";


export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  const addTransaction = (transaction) => {
    const updatedTransactions = [transaction, ...transactions];
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((tx) => tx.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
