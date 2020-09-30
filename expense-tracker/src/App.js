import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { IncomeExpenses } from './components/IncomeExpenses'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <div className='container'>
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
