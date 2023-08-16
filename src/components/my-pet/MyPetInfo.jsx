import styled from "styled-components";

import ProductType from "../NewProductType.jsx";
import { useContext } from "react";
import { StateContext } from "../../librarys/context.js";
import {
  petGender,
  petSizes,
  petSpecies,
  petTags,
} from "../../librarys/data.js";
import { useDispatch } from "react-redux";
import { show } from "../../redux/modalSlice.js";

const Container = styled.div`
  margin: 8px;
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px #00000040;
`;

const Info = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  max-width: 140px;
  padding-right: 8px;
  border-right: 1.5px solid #bac0ca;
  font-size: 16px;
  font-weight: 600;
  color: #151515;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Description = styled.span`
  padding-left: 8px;
  font-size: 11px;
  font-weight: 400;
  color: #1515154d;
`;

const MyPetInfo = () => {
  const modalDispatch = useDispatch();
  const { pet } = useContext(StateContext);

  function field(field, list) {
    if (pet === null) {
      return null;
    }

    return list.find((item) => item.id === pet[field])?.title || null;
  }

  const info = [
    field("species", petSpecies),
    field("gender", petGender),
    field("size", petSizes),
  ].join(", ");

  const tags = (pet?.tags || []).map((item) => {
    const find = petTags.find((element) => element.id === item);
    return find ? find.title : item;
  });

  return (
    <Container>
      <Info>
        <Name>{pet?.name}</Name>
        <Description>{info}</Description>
      </Info>
      <ProductType
        type={tags}
        showAdd={true}
        onAddClick={() => modalDispatch(show("modify_pet_tag"))}
      />
    </Container>
  );
};

export default MyPetInfo;
