import { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import Layout from './Layout';
import Filter from './Filter';

export const App = () => {

  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {

      const savedContacts = localStorage.getItem('contacts');

      if (savedContacts !== null) {
        const parsedContacts = JSON.parse(savedContacts);
        return parsedContacts;
      }

      return defaultValue;

    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));  
    }, [key, state])

    return [state, setState];
  }


  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');


  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  //   setContacts(contacts);
  // }, [contacts])

  const addContact = newContact => {
    if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value );
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };


  return (
    <Layout>
      <UserForm onSave={addContact} />
      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter value={filter} onChange={filterContacts} />
          <UserList items={getFilteredContacts()} onDelete={deleteContact} />
        </>
        ) : ( <h3>There are no contacts in your phonebook!</h3> )
      }
    </Layout>
  );
}

export default App;