/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const InputFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  position: relative;
  margin-top: 20px;
  margin-left: -20px;
  margin-bottom: 50px;
`;

const Label = styled.label`
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  border: none; 
  padding: 10px;
  outline: none; 
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: black;
`;

// eslint-disable-next-line react/prop-types
function InputField({ label, placeholder, type, onChange, value }) { 
  return (
    <InputFormContainer>
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} onChange={onChange} value={value} /> 
      <BottomLine />
    </InputFormContainer>
  );
}
export default InputField;
