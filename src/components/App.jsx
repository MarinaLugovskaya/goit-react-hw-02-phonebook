import React, { Component } from 'react';
import Form from '../components/Form/Form';
import Contacts from '../components/Contacts/Contacts';
import Filter from '../components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import css from '../components/Form/Form.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDeleteContacts = evt => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== evt.target.id),
    });
  };

  formSubmitHandler = (name, number) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already exists in contact list`);
      return;
    }
    this.state.contacts.push({ name: name, id: uuidv4(), number: number });
    this.setState({ contacts: contacts });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <div className={css.postcard}>
          <h1>Phonebook</h1>
          <Form contacts={contacts} onSubmit={this.formSubmitHandler} />
          <div className={css.formRow}>
            <Filter value={this.filter} onChange={this.changeFilter} />
          </div>
          <h2>Contacts</h2>
          <Contacts
            filter={filter}
            onChange={this.HandleSearchContactByName}
            onClick={this.handleDeleteContacts}
            contacts={contacts}
            contacts={visibleContacts}
          />
        </div>
      </>
    );
  }
}
