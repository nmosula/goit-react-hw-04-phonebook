import PropTypes from 'prop-types';
import { FrmLabel, FrmInput } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <FrmLabel>
      Find contacts by name
      <FrmInput
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FrmLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;