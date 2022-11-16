import { useSelector, useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { FilteredNames } from 'redux/contacts/contacts -selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts -operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(FilteredNames);
  return (
    <ul className={css.list}>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
