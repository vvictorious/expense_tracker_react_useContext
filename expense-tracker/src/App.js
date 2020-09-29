import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { TransactionList } from './components/TransactionList'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionList />
    </GlobalProvider>
  );
}

export default App;
