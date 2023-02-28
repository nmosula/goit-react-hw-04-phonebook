import PropTypes from 'prop-types';
import { Item, FrmButton } from './User.styled';

const User = ({ item, onDelete }) => {
    return (
        <Item key={item.id}>
            {item.name}: {item.number}
            <FrmButton onClick={() => onDelete(item.id)} aria-label="Delete">
              Delete
            </FrmButton>
        </Item>
    );
};

User.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default User;