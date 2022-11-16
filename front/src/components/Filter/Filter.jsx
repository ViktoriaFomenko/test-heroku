// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { set_filter } from 'redux/filter/filter -actions';
import { getFilter } from 'redux/filter/filter -selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChangeFilter = ({ target }) => {
    dispatch(set_filter(target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
// };
