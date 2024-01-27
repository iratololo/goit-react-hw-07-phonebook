import { createAsyncThunk } from "@reduxjs/toolkit";

import  { getContacts, createContact, removeContact  } from "api/api";


export const getContactsThunk = createAsyncThunk('contacts/getContacts', async (_, {rejectWithValue}) => {
    try {
        const { data } = await getContacts();
    return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const addContactsThunk = createAsyncThunk('contacts/addContact', async (body, {rejectWithValue}) => {
    try {
    const { data } = await createContact(body);
    return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
  
})

export const removeContactsThunk = createAsyncThunk('contacts/removeContact', async (id, {rejectWithValue}) => {
    try {
    const { data } = await removeContact(id);
    return data;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
  
})