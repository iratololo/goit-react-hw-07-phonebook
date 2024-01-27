import css from "./ContactListEl.module.css"

export const ContactListEl = ({ data: { id, name, phone }, removeContact }) => {
  return (
          <li className={css.item}>
                <div className={css.contact}>
                        <p className={css.info}>{name}</p>
                        <p className={css.info}>{phone}</p>
                </div>
                <button onClick={()=> removeContact(id)} className={css.button} type="button">Delete</button>
        </li>
        )
}
