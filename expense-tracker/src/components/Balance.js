import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const sum = transactions.map(transaction => transaction.amount)

    const amount = sum.reduce((acc, index) => (acc += index),0)
    
    return (
        <div>
            <h4>Balance:</h4>
            <h3>{amount}</h3>
        </div>
    )
}
