import css from './Filter.module.css';

export const Filter = ({handlerFilter}) => {
  return (
            <input onChange={({target:{value}}) => handlerFilter(value)} className={css.input} type="text" name="filter" placeholder='Find contacts by name'/>
        )
}