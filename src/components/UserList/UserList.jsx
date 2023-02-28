import User from 'components/User';
import PropTypes from 'prop-types';

const UserList = ({ items, onDelete }) => {

    return (
        <>
            <ul>
                {items.map(item => (
                    <User key={item.id} item={item} onDelete={onDelete}/>
                ))}
            </ul>
        </>
  );
};

UserList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserList;
