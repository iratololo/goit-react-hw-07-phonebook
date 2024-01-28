import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Container } from "./components/reuse/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Filter } from "./components/Filter/Filter"
import { ContactList } from "./components/ContactList/ContactList"
import { Error } from "./components/reuse/Error/Error"
import { Loader } from "components/reuse/Loader/Loader";

import "./store/store"
import { getContactsThunk } from "store/contacts/thunks";
import {selectorContacts, selectorError, selectorLoader} from "store/contacts/selectors";


export const App = () => {
  const items = useSelector(selectorContacts);
  const isLoading = useSelector(selectorLoader);
  const error = useSelector(selectorError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);


  return (
   <Container>
      <ContactForm/>
      {items.length === 0 && !isLoading && !error && <Error>Contacts is empty</Error>}
      {isLoading && <Loader />}
      {error && <Error>{error}</Error>}
      {items.length !== 0 && <>
        <h2>Contacts</h2>
          <Filter/>
          <ContactList/>
      </>}
      </Container>
  );
};
