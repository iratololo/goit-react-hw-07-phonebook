import { useSelector, useDispatch } from "react-redux";

import { ContactListEl } from "../ContactListEl/ContactListEl"
import { removeContact } from "store/contacts/sliceContacts";

export const ContactList = () => {
    const {contacts} = useSelector((state) => state.contacts);
    const { filter } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch(removeContact(id))
    }

    if (contacts.length) {
        const visibleContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
        return (
            <ul>
                {visibleContacts.map((item) => {
                    return <ContactListEl key={item.id} data={item} deleteContact={deleteContact} />
                })}
            </ul>
        );
    }
}
