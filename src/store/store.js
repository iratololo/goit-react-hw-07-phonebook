import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/sliceContacts";
import { filterReducer } from "./filter/sliceFilter";

const reducer = {
    filter: filterReducer,
    contacts: contactsReducer,
}

export const store = configureStore({ reducer});




