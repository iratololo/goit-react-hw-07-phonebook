import {  useSelector } from "react-redux";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from "./ContactForm.module.css"
import {selectorContacts} from "store/contacts/selectors";



export const ContactForm = ({createContact}) => {
   const items = useSelector(selectorContacts);

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const phone = e.target.elements.phone.value;
        const twin = items.find(({ name : user }) => user.toLowerCase() === name.toLowerCase());
        if (twin) {
             Report.failure(
            'error',
            'There is already a contact with this name',
            'Okay',
            );
        } else {
            Notify.success('A new contact is created');
            createContact({ name, phone})
            e.target.reset()
        }
    }

  return (
      <form onSubmit={handlerOnSubmit} className={css.form}>
          <h1>Phonebook</h1>
          <div className={css.container}>
              <div className={css.items}>
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
                </div>
            </form>
            
        );
}