import { useDispatch } from 'react-redux';

import css from './Filter.module.css';
import { changeFilter } from 'store/filter/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
            <input onChange={({target:{value}}) => dispatch(changeFilter(value))} className={css.input} type="text" name="filter" placeholder='Find contacts by name'/>
        )
}