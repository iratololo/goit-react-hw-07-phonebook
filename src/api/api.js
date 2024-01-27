import axios from "axios";

const baseURL = 'https://65ae61ad1dfbae409a74b5b0.mockapi.io/contacts';

export const getContacts = async () => {
    const  response  = await axios.get(baseURL);
    return response;
}

export const createContact = async (body) => {
    const response = await axios.post(baseURL, body);
    return response;
}

export const removeContact = async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response;
}

