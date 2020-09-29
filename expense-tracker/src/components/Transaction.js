import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li>
            {transaction.text}
        </li>
    )
}
