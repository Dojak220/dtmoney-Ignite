import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
   id: number,
   title: string,
   amount: number,
   type: string,
   category: string,
   createdAt: string
}

// interface TransactionInput {
//    title: string,
//    amount: number,
//    type: string,
//    category: string,
// }

// type TransactionInput = Pick<Transaction, "title" | "amount" | "type" | "category">

type TransactionInput = Omit<Transaction, "id" | "createdAt">


interface TransactionsProviderProps {
   children: ReactNode
}

interface TransactionContextData {
   transactions: Transaction[];
   createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>(
   {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   const [transactions, setTransactions] = useState<Transaction[]>([]);

   function fetchData() {
      api.get("transactions")
         .then(response => {
            setTransactions(response.data.transactions);
         })
   }

   async function createTransaction(transactionInput: TransactionInput) {
      const response = await api.post("/transactions", transactionInput)
      const { transaction } = response.data;

      setTransactions([...transactions, transaction])
   }

   useEffect(() => {
      fetchData();
   }, [])


   return (
      <TransactionsContext.Provider value={{
         transactions,
         createTransaction
      }}>
         {children}
      </TransactionsContext.Provider>
   )
}

export function useTransactions() {
   const context = useContext(TransactionsContext);

   return context;
}