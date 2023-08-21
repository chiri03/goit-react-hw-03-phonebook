import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContatcForm";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactsList/ContactsList";




export class App extends Component {

  state = {
    contacts:[{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

 addContact = (newContact) =>
    this.setState(
      ({ contacts }) => ({
        contacts: [...contacts, newContact],
      })
    );
  
  checkContacts = (name) => {
    const { contacts } = this.state
    const findContact = contacts.find((contacts) => contacts.name === name)
    if (findContact) {
      return alert(`${name} is already in contacts`)
    }
    return !findContact
  }

  removeContact = (id) =>
    this.setState(
      ({ contacts }) => ({
        contacts: contacts.filter((contact) => contact.id !== id),
      })
    );
  filterInput = (filter) => this.setState({ filter });
  
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

 componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts !== null) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() { 
    const { filter } = this.state;
    const filterredContacts = this.filterContacts();


  return (
    <>
      <Section title="Phonebook">
        <ContactForm
          addContact={this.addContact}
          onCheckUnique={this.checkContacts} />
      </Section>
      <Section title="Contacts">
          <Filter
            filter={filter}
            onChange={this.filterInput} />
          <ContactsList
            contacts={filterredContacts}
            onRemove={this.removeContact}
        />
      </Section>
    </>
    );
    }
};