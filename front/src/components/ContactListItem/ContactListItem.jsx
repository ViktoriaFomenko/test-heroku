import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contacts -operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.item} key={id}>
      {name}: {number}
      <button className={css.button} type="button" onClick={deleteContact}>
        Delete contact
      </button>
    </li>
  );
};
