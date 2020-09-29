import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import { Header } from './components/Header'
import { Balance } from './components/Balance'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
    </GlobalProvider>
  );
}

export default App;
