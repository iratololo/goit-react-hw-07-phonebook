import { useDispatch } from "react-redux";

import css from "./ContactListEl.module.css"
import { removeContactsThunk } from "store/contacts/thunks";

export const ContactListEl = ({ data: { id, name, phone } }) => {
        const dispatch = useDispatch();
  return (
          <li className={css.item}>
                <div className={css.contact}>
                        <p className={css.info}>{name}</p>
                        <p className={css.info}>{phone}</p>
                </div>
                <button onClick={()=> dispatch(removeContactsThunk(id))} className={css.button} type="button">Delete</button>
        </li>
        )
}
