import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`
  width: 139px;
  height: 40px;
  border-radius: 5px;
  background: #F8F8F8;
  border: none;
  padding: 10px;
`;

const SmallInputForm= ({ placeholder }) => {
  return (
    <InputField
      type="text"
      placeholder={placeholder}
    />
  );
};

SmallInputForm.propTypes = {
  placeholder: PropTypes.string,
};

export default SmallInputForm;
