import PropTypes from 'prop-types';

const Contacts = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contacts.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button id={contact.id} onClick={onClick} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
