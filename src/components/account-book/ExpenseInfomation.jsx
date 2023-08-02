import PropTypes from "prop-types";
import { styled } from "styled-components";

import RightArrowImage from "../../assets/images/rightArrow.png";

const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Text = styled.p`
  color: rgba(21, 21, 21, 0.5);
  font-size: 15px;
  font-weight: 400;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const ExpenseInfomation = ({ value }) => {
  let message;

  const valueString = value.toLocaleString();

  if (value > 0) {
    message = `저번달 대비 ${valueString}원을 더 지출했어요`;
  } else if (value < 0) {
    message = `저번달 대비 ${valueString}원을 절약했어요`;
  } else {
    message = `저번달과 지출액이 똑같아요`;
  }

  return (
    <Container>
      <Text>{message}</Text>
      <Button>
        <Image src={RightArrowImage} />
      </Button>
    </Container>
  );
};

ExpenseInfomation.propTypes = {
  value: PropTypes.number,
};

export default ExpenseInfomation;
