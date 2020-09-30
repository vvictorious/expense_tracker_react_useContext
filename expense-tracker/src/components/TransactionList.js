import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction'


export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <ul className="list">
            {transactions.map(transaction => (
                <Transaction transaction={transaction} key={transaction.id} />
            ))}
        </ul>
    )
}
