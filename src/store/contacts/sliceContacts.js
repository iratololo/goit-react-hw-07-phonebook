import { createSlice } from '@reduxjs/toolkit'

import data from '../../data.json'

const initialState = {
    contacts: data,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.contacts.push(payload)
        },
        removeContact: (state, { payload }) => {
            state.contacts=state.contacts.filter(({ id })=>id !== payload)
        }
    }
})

export const contactsReducer = contactsSlice.reducer;
export const {addContact, removeContact} = contactsSlice.actions;