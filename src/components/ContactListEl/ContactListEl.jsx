import css from "./ContactListEl.module.css"

export const ContactListEl = ({ data: { id, name, number }, deleteContact }) => {
  return (
        <li className={css.item}>
                <span className={css.span}>{name}</span>
                <span className={css.span}>{number}</span>
                <button onClick={()=> deleteContact(id)} className={css.button} type="button">Delete</button>
        </li>
        )
}
