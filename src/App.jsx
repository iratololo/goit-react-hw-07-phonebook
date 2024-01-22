// import { nanoid } from 'nanoid';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from "./components/reuse/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Filter } from "./components/Filter/Filter"
import { ContactList } from "./components/ContactList/ContactList"

import "./store/store"

export const App = () => {
  return (
   <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </Container>
  );
};
