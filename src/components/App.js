// import React, {useState, useEffect} from "react";
// import './App.css';
// import Header from './Header';
// import AddContact from './AddContact';
// import ContactList from './ContactList';

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState([]);
//   const addContactHandler = (contact) =>
//   {
//     console.log(contact);
//     setContacts([...contacts, contact]);
  
//   };
//   //for showing after refreshing
//   useEffect(() => {
//     const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     console.log("Retrieved Contacts:", retrieveContacts);
//     if (retrieveContacts) setContacts(retrieveContacts);
//   }, []);
//   // useEffect(()=>
//   //   {
//   //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   //   if (retriveContacts) setContacts(retriveContacts);
//   // },[]);
//     // for storing and maintaining
//     useEffect(() => {
//       console.log("Saving contacts to localStorage:", contacts);
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//     }, [contacts]);
// // useEffect(()=>
// // {
// // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
// // },[contacts]);
//   // const contacts = [
//   //   {
//   //     id: "1",
//   //     name:"Neeva",
//   //     email:"abc@gmail.com"
//   //   },
//   //   {
//   //     id: "2",
//   //     name:"Naveen",
//   //     email:"def@gmail.com"
//   //   }
//   // ]
//   return (
//    <div className="ui container">
//     <Header/>
//  <AddContact addContactHandler={addContactHandler}/>
//     <ContactList contacts = {contacts}/> 

//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuid } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  
  // Initializing contacts from localStorage
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  // Adding new contact
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // Removing contact by ID
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList); // Ensure this is outside the filter function
  };

  // Storing contacts to localStorage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
