import PropTypes from "prop-types";
import { styled } from "styled-components";

import { useState, useEffect } from "react";

import Select from "../Select";

import { categorys } from "../../librarys/data";
import { filterNumber } from "../../librarys/util";

import dayjs from "dayjs";

const Container = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  width: 100%;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const Textbox = styled.input`
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: rgba(248, 248, 248, 1);

  &::placeholder {
    color: rgba(21, 21, 21, 0.3);
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > input {
    text-align: right;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;

const dateFormat = "YYYY-MM-DD";

const categoryList = categorys.map((item) => ({
  id: item.id,
  name: item.title,
}));

const ExpenseModalForm = ({ data, onChange }) => {
  const [dateState, setDate] = useState(dayjs().format(dateFormat));
  const [priceState, setPrice] = useState(0);
  const [nameState, setName] = useState("");
  const [categoryState, setCategory] = useState(categoryList[0].id);

  useEffect(() => {
    if (data) {
      setDate(dayjs(data.date).format(dateFormat));
      setPrice(data.price);
      setName(data.name);
      setCategory(data.category);
    }
  }, [data]);

  useEffect(() => {
    onChange({
      date: dateState,
      price: priceState,
      name: nameState,
      category: categoryState,
    });
  }, [onChange, dateState, priceState, nameState, categoryState]);

  return (
    <Container>
      <Title>소비내역</Title>
      <Text>날짜</Text>
      <Textbox
        type="date"
        maxLength="4"
        value={dateState}
        onInput={(e) => setDate(e.target.value)}
      />
      <Text>금액</Text>
      <PriceContainer>
        <Textbox
          type="text"
          placeholder="14,000"
          value={priceState?.toLocaleString()}
          onInput={filterNumber(setPrice)}
        />
        <Text>원</Text>
      </PriceContainer>
      <Text>이름</Text>
      <Textbox
        type="text"
        placeholder="달이 장난감"
        value={nameState}
        onInput={(e) => setName(e.target.value)}
      />
      <Text>카테고리</Text>
      <Select
        list={categoryList}
        outline={true}
        value={categoryState}
        onSelect={(item) => setCategory(item.id)}
      />
    </Container>
  );
};

ExpenseModalForm.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func,
};

ExpenseModalForm.defaultProps = {
  onChange: () => {},
};

export default ExpenseModalForm;
