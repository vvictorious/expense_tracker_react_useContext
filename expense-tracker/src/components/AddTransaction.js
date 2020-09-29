import React from 'react'

export const AddTransaction = () => {

  return (
    <>
      <h3>Add new transaction</h3>
      <form >
        <div>
          <label htmlFor="text">Text</label>
          <input type="text" value='' placeholder="Enter text..." />
        </div>
        <div >
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value='' placeholder="Enter amount..." />
        </div>
        <button>Add transaction</button>
      </form>
    </>
  )
}