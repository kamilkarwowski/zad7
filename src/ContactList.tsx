import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactItem from './ContactItem';

function ContactList() {
  return (
    <div className="ContactList">
        <span>Lista Kontaktów:</span>
     <ContactItem/>
    </div>
  );
}

export default ContactList;
