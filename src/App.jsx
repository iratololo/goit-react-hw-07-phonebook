import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container } from "./components/reuse/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Filter } from "./components/Filter/Filter"
import { ContactList } from "./components/ContactList/ContactList"
import { Error } from "./components/reuse/Error/Error"
import { Loader } from "components/reuse/Loader/Loader";

import "./store/store"
import { addContactsThunk, getContactsThunk, removeContactsThunk } from "store/contacts/thunks";
import {selectorContacts, selectorError, selectorLoader} from "store/contacts/selectors";
import { changeFilter } from "store/filter/sliceFilter";


export const App = () => {
  const items = useSelector(selectorContacts);
  const isLoading = useSelector(selectorLoader);
  const error = useSelector(selectorError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const createContact = (data) => {
    dispatch(addContactsThunk(data))
  }

  const removeContact = (id) => {
    dispatch(removeContactsThunk(id))
  }

  const handlerFilter = (value) => {
    dispatch(changeFilter(value))
  }


  return (
   <Container>
      <ContactForm createContact={createContact} />
      {items.length === 0 && !isLoading && !error && <Error>Contacts is empty</Error>}
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {items.length !== 0 && <>
        <h2>Contacts</h2>
          <Filter handlerFilter={handlerFilter} />
          <ContactList removeContact={removeContact} />
      </>}
      </Container>
  );
};
