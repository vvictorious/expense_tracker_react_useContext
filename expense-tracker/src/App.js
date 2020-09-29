import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
