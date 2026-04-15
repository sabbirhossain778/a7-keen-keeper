'use client'; 
import { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [selectedContacts, setSelectedContacts] = useState([]);
  return (
    <ContactContext.Provider value={{ selectedContacts, setSelectedContacts }}>
      {children}
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);