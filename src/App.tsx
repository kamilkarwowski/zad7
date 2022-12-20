import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import ContactList from './ContactList';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <ContactList/>
    </div>
  );
}

export default App;
