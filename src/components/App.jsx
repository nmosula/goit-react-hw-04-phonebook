import React, { Component } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import Layout from './Layout';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  filterContacts = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };


  render() {
    return (
      <Layout>
        <UserForm onSave={this.addContact} />
        <h2>Contacts</h2>
        {this.state.contacts.length !== 0 ? (
          <>
            <Filter value={this.state.filter} onChange={this.filterContacts} />
            <UserList items={this.getFilteredContacts()} onDelete={this.deleteContact} />
          </>
          ) : ( <h3>There are no contacts in your phonebook!</h3> )
        }
      </Layout>
    );
  }
}