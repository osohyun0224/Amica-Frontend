import PropTypes from "prop-types";
import styled from "styled-components";
import Select from "../../components/Select.jsx";
import ProductTypeSelect from "../../components/ProductTypeSelect.jsx";
import Option from "../../components/admin/Option.jsx";
import Button from "../../components/account-book/Button.jsx";
import AddOptionModal from "../../components/admin/AddOptionModal.jsx";
import ModifyOptionModal from "../../components/admin/ModifyOptionModal.jsx";

import { show } from "../../redux/modalSlice.js";
import { useEffect, useState } from "react";
import { categorys, petSpecies, petTags } from "../../librarys/data.js";
import { useDispatch } from "react-redux";
import { useImmer } from "use-immer";
import { filterNumber } from "../../librarys/util.js";
import dayjs from "dayjs";
import { getProduct } from "../../librarys/store-api.js";

const Container = styled.div`
  margin: 24px;
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

const Divider = styled.div`
  width: calc(100% + 48px);
  margin: 24px -24px;
  border-top: 1px dashed rgba(21, 21, 21, 0.3);
`;

const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 8px;
`;

const Warning = styled.span`
  margin-left: 8px;
  font-weight: 500;
  font-size: 11px;
  color: rgba(217, 74, 86, 1);
`;

const Hint = styled.p`
  margin-top: 16px;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 12px;
  color: rgba(21, 21, 21, 0.5);
`;

const categoryList = categorys.map((item, index) => ({
  id: item.id,
  name: item.title,
  default: index === 0,
}));

const specieList = petSpecies.map((item, index) => ({
  id: item.id,
  name: item.title,
  default: index === 0,
}));

function toInputDate(date) {
  return dayjs(date).format("YYYY-MM-DD");
}

const StoreForm = ({ id }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [goalPrice, setGoalPrice] = useState("");
  const [date, setDate] = useState(toInputDate());

  // 배열 상태 관리 편하게 하기 위해 Immer 사용..
  const [options, setOptions] = useImmer([]);

  const [category, setCategory] = useState(categoryList[0].id);
  const [specie, setSpecie] = useState(specieList[0].id);

  const [tag, setTags] = useState([]);

  function createOption(item) {
    const last = options.at(-1);
    const id = last ? last.id + 1 : 1;

    setOptions((state) => {
      state.push({
        id,
        ...item,
      });
    });
  }

  function modifyOption(item) {
    setOptions((state) => {
      const find = state.find((element) => element.id === item.id);

      if (find) {
        find.name = item.name;
        find.discount = item.discount;
        find.price = item.price;
      }
    });
  }

  useEffect(() => {
    (async () => {
      const data = await getProduct(id);

      if (data) {
        setName(data.name);
        setCategory(data.category);
        setOptions(data.options);
        setDate(toInputDate(data.endDate));
        setTags(data.tag);
      }
    })();
  }, [id]);

  return (
    <Container>
      <AddOptionModal onComplete={createOption} />
      <ModifyOptionModal onComplete={modifyOption} />
      <Text>상품명</Text>
      <Textbox
        type="text"
        placeholder="강아지용 목줄"
        value={name}
        onInput={(e) => setName(e.target.value)}
      />
      <Divider />
      <Title>가격 정보</Title>
      <Text>목표 가격</Text>
      <PriceContainer>
        <Textbox
          type="text"
          placeholder="10,000,000"
          value={goalPrice.toLocaleString()}
          onInput={filterNumber(setGoalPrice)}
        />
        <Text>원</Text>
      </PriceContainer>

      <Text>상품 옵션</Text>
      {options.map((item) => (
        <Option
          key={item.id}
          name={item.name}
          price={item.price}
          discount={item.discount}
          onClick={() =>
            dispatch(
              show({
                id: "modify_option",
                props: item,
              }),
            )
          }
        />
      ))}
      <Button onClick={() => dispatch(show("add_option"))}>
        옵션 추가하기
      </Button>
      <Hint>
        상품 페이지에는 첫번째 옵션의 가격과 할인가가 노출됩니다.
        <br />
        상품에는 반드시 옵션이 한개 이상 있어야 합니다.
      </Hint>
      <Divider />
      <Title>공동구매 정보</Title>
      <Text>공동 구매 마감일</Text>
      <Textbox
        type="date"
        value={date}
        onInput={(e) => setDate(e.target.value)}
      />
      <SelectContainer>
        <Text>판매 카테고리</Text>
        <Text>판매 대상 동물</Text>
        <Select
          list={categoryList}
          outline={true}
          value={category}
          onSelect={(item) => setCategory(item.id)}
        />

        <Select
          list={specieList}
          outline={true}
          value={specie}
          onSelect={(item) => setSpecie(item.id)}
        />
      </SelectContainer>

      <Text>
        태그<Warning>최대 5개까지 선택 가능합니다.</Warning>
      </Text>
      <ProductTypeSelect
        types={petTags.map((item) => item)}
        value={tag}
        onSelect={setTags}
      />
      <Hint>
        안내: 상품 사진 및 상품 설명 이미지는 공동구매 생성후, 생성된 공동구매
        페이지에 접속하여 등록할 수 있습니다.
      </Hint>
    </Container>
  );
};

StoreForm.propTypes = {
  id: PropTypes.number,
};

export default StoreForm;
