import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import ProductTypeSelect from "../ProductTypeSelect.jsx";

import Modal from "../Modal.jsx";
import { petTags } from "../../librarys/data.js";
import { useDispatch } from "react-redux";
import { DispatchContext, StateContext } from "../../librarys/context.js";
import { hide } from "../../redux/modalSlice.js";
import { modifyPet } from "../../librarys/pet-api.js";

const Heading = styled.div`
  margin: 16px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
`;

const Warning = styled.p`
  margin: 8px 16px;
  font-size: 10px;
  font-weight: 400;
  color: #d94a56;
`;

const Select = styled(ProductTypeSelect)`
  margin: 0 16px;
  margin-bottom: 16px;
`;

const CoverButton = styled.button`
  width: 100%;
  padding: 18px 0;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(217, 74, 86, 1);

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(217, 74, 86, 0.85);
  }

  cursor: pointer;
`;

const id = "modify_pet_tag";

const KeywordInputModal = () => {
  const dispatch = useContext(DispatchContext);
  const modalDispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const { pet } = useContext(StateContext);

  useEffect(() => {
    if (pet) {
      setTags(pet.tags);
    }
  }, [pet]);

  async function complete() {
    const result = await modifyPet(pet.id, {
      ...pet,
      tags,
    });

    if (result) {
      dispatch({
        type: "reload",
      });
      modalDispatch(hide(id));
    } else {
      alert("오류 발생 -- 펫이 수정되지 못했습니다.");
      return;
    }
  }

  return (
    <Modal id={id}>
      <Heading>태그</Heading>
      <Warning>최대 5개까지 선택 가능합니다.</Warning>
      <Select
        types={petTags.map((item) => item)}
        value={tags}
        onSelect={setTags}
      />
      <CoverButton onClick={complete}>확인</CoverButton>
    </Modal>
  );
};

export default KeywordInputModal;
