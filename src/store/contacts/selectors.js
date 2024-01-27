import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = (state) => state.contacts.contacts.items;

export const selectorLoader = (state) => state.contacts.contacts.isLoading;

export const selectorError = (state) => state.contacts.contacts.error;

export const selectorFilter = (state) => state.filter.filter;

export const selector = createSelector(selectorFilter,selectorContacts, (filter, items)=> items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())))
