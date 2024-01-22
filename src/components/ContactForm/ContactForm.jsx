import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from "./ContactForm.module.css"
import { addContact } from "store/contacts/sliceContacts";

export const ContactForm = () => {
    const {contacts} = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const number = e.target.elements.phone.value;
        const id = nanoid();
        const twin = contacts.find(({ name : user }) => user.toLowerCase() === name.toLowerCase());
        if (twin) {
             Report.failure(
            'error',
            'There is already a contact with this name',
            'Okay',
            );
        } else {
            Notify.success('A new contact is created');
            dispatch(addContact({ name, number, id }))
            e.target.reset()
        }
    }

  return (
            <form onSubmit={handlerOnSubmit} className={css.form}>
                <div className={css.container}>
                    <div className={css.item}>
                        <input className={css.input} id="name" type="text" name="name" required autoComplete="true"/>
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>
                    <div className={css.item}>
                        <input className={css.input} id="tel" type="tel" name="phone" required autoComplete="true"/>
                        <label className={css.label} htmlFor="tel">Number</label>
                    </div>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </form>
            
        );
}