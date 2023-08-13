import styled from "styled-components";
import HeaderTitle from "../../components/HeaderTitle.jsx";

import SimpleBar from "simplebar-react";

import { getProductList } from "../../librarys/store-api.js";
import { useEffect, useState } from "react";
import { categorys } from "../../librarys/data.js";
import { useNavigate } from "react-router-dom";

const Container = styled(SimpleBar)`
  width: 100%;
  height: 100%;
  overflow: auto;

  &.freeze > .simplebar-track {
    display: none;
  }

  & > .simplebar-track.simplebar-horizontal {
    height: 7px;
  }

  & > .simplebar-track.simplebar-vertical {
    width: 7px;
  }

  & .simplebar-mask {
    z-index: auto;
  }
`;

const Form = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

const Text = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
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

const Divider = styled.div`
  width: calc(100% + 48px);
  margin: 24px -24px;
  border-top: 1px dashed rgba(21, 21, 21, 0.3);
`;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr 16px);
  align-items: center;
  gap: 12px;

  & > input {
    width: 100%;
    text-align: right;
  }

  & > p {
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

const Hint = styled.p`
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  color: rgba(21, 21, 21, 0.5);
`;

function StoreModify() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [goalPrice, setGoalPrice] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  // const { id } = useParams();

  return (
    <Container>
      <HeaderTitle url="/admin/store" title="공동구매 수정" />
      <Form>
        <Text>상품명</Text>
        <Textbox
          type="text"
          placeholder="어쩌구 저쩌구"
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
        <Divider />
        <Title>가격 정보</Title>
        <Text>원가</Text>
        <Textbox
          type="text"
          placeholder="18000"
          value={price}
          onInput={(e) => setPrice(e.target.value)}
        />
        <Text>판매 가격</Text>
        <Textbox
          type="text"
          placeholder="15000"
          value={discount}
          onInput={(e) => setDiscount(e.target.value)}
        />
        <Text>목표 가격</Text>
        <Textbox
          type="text"
          placeholder="1500000"
          value={goalPrice}
          onInput={(e) => setGoalPrice(e.target.value)}
        />
        <Divider />
        <Text>공동 구매 마감일</Text>
        <DateContainer>
          <Textbox
            type="text"
            placeholder="2023"
            maxLength="4"
            value={year}
            onInput={(e) => setYear(e.target.value)}
          />
          <Text>년</Text>
          <Textbox
            type="text"
            placeholder="8"
            maxLength="2"
            value={month}
            onInput={(e) => setMonth(e.target.value)}
          />
          <Text>월</Text>
          <Textbox
            type="text"
            placeholder="13"
            maxLength="2"
            value={date}
            onInput={(e) => setDate(e.target.value)}
          />
          <Text>일</Text>
        </DateContainer>
        <Text>판매 카테고리</Text>
        <Hint>TODO</Hint>
        <Text>판매 대상 동물</Text>
        <Hint>TODO</Hint>
        <Text>태그</Text>
        <Hint>TODO</Hint>
        <Hint>
          상품 사진 및 상품 설명 이미지는 공동구매 페이지에 접속하여 수정할 수
          있습니다.
        </Hint>
      </Form>
    </Container>
  );
}

export default StoreModify;
