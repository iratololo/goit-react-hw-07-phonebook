import { useSelector } from "react-redux";

import css from "./ContactList.module.css"
import { ContactListEl } from "../ContactListEl/ContactListEl"
import { selector } from "store/contacts/selectors";

export const ContactList = () => {
    const items = useSelector(selector);

    return (
            <ul className={css.list}>
                {items.map((item) => {
                    return <ContactListEl key={item.id} data={item}/>
                })}
            </ul>
        );
}
