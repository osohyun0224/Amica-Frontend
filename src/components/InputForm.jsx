import styled from "styled-components";

const InputFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  position: relative;
  margin-top: 20px;
  margin-left: -98px;
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
  border: none; // Remove all borders
  padding: 10px;
  outline: none; // Remove outline
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: black;
`;

// eslint-disable-next-line react/prop-types
function InputField({ label, placeholder, type }) {
  return (
    <InputFormContainer>
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} />
      <BottomLine />
    </InputFormContainer>
  );
}

export default InputField;
