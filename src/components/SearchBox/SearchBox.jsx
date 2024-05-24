import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (evt) => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  }


  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input className={css.input} type="text" value={filter} onChange={handleSearch} />
    </label>
  )
}

export default SearchBox