import {createContext, ReactNode, useEffect, useState} from "react";

interface Transaction{
    id:number
    description:string
    type:'income' | 'outcome'
    price:number
    category:string
    createdAt:string
}

interface TransactionContextType {
    transactions: Transaction[]
}

interface TransactionProviderProps {
    children: ReactNode
}


export const TransactionContext = createContext({} as TransactionContextType)


export function TransactionsProvider({children}:TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransations() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        loadTransations()
    }, []);


    return(
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}