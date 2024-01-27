import { createSlice } from '@reduxjs/toolkit'

import { getContactsThunk, addContactsThunk, removeContactsThunk } from './thunks'

const handlerPending = (state) => {
    state.contacts.isLoading = true
    state.contacts.error = ""
}

const handlerRejected = (state, {payload}) => {
    state.contacts.isLoading = false
    state.contacts.error=payload.message
}

const handlerFulfilled = (state) => {
    state.contacts.isLoading = false
}


const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getContactsThunk.fulfilled, (state, {payload}) => {
            state.contacts.items=payload
        })
        .addCase(addContactsThunk.fulfilled, (state, {payload}) => {
            state.contacts.items.push(payload)
        })
        .addCase(removeContactsThunk.fulfilled, (state, { payload }) => {
            state.contacts.items=state.contacts.items.filter(({ id })=>id !== payload.id)
        })
        .addMatcher((action) => action.type.endsWith("/pending"), handlerPending)
        .addMatcher((action) => action.type.endsWith("/rejected"), handlerRejected)
        .addMatcher((action)=> action.type.endsWith("/fulfilled"),handlerFulfilled)
    }
    
})

export const contactsReducer = contactsSlice.reducer;
export const {addContact, removeContact, fetching, fulfilled,rejected} = contactsSlice.actions;