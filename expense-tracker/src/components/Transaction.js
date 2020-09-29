import React from 'react'

export const Transaction = ({transaction}) => {

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <li>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span><button >x</button>
        </li>
    )
}
