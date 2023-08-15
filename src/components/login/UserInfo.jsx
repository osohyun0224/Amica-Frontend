import { useContext } from "react";
import styled from "styled-components";
import { DispatchContext, StateContext } from "../../librarys/context";
import { filterNumber } from "../../librarys/util";

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  background-color: rgba(248, 248, 248, 1);
  border: 1px solid transparent;
  border-radius: 5px;

  transition:
    border 0.2s,
    color 0.2s;

  &::placeholder {
    color: #bfbfbf;
  }

  &.error {
    border: 1px solid rgba(217, 74, 86, 1);
  }
`;

const Label = styled.p`
  margin: 8px 0;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  color: rgba(21, 21, 21, 1);

  &:first-child {
    margin-top: 32px;
  }
`;

const UserInfo = () => {
  const { phone } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  function onNameInput(event) {
    const value = event.target.value;

    dispatch({
      type: "setName",
      payload: value,
    });

    dispatch({
      type: "setNameCheck",
      payload: value !== "",
    });
  }

  function onPhoneInput(value) {
    dispatch({
      type: "setPhone",
      payload: value,
    });

    dispatch({
      type: "setPhoneCheck",
      payload: value !== "",
    });
  }

  return (
    <Container>
      <Label>이름</Label>
      <Input placeholder="김멋사" type="text" onInput={onNameInput} />
      <Label>휴대폰</Label>
      <Input
        placeholder="01012345678"
        type="text"
        onInput={filterNumber(onPhoneInput)}
        value={phone}
      />
    </Container>
  );
};

export default UserInfo;
