import { styled } from "styled-components";

import MyPetListItem from "../../components/my-pet/MyPetListItem.jsx";

import { ScrollContainer } from "react-indiana-drag-scroll";

import AddPetImage from "../../assets/images/addPet.png";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../../librarys/context.js";
import { useDispatch } from "react-redux";
import { show } from "../../redux/modalSlice.js";

const Container = styled(ScrollContainer)`
  margin: 8px -18px;
  display: flex;
  flex-direction: row;
`;

const MyPetList = () => {
  const { petList } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const modalDispatch = useDispatch();
  const elements = petList.map((item) => (
    <MyPetListItem
      key={item.id}
      id={item.id}
      src={item.image}
      name={item.name}
      onClick={() => {
        dispatch({
          type: "select",
          payload: item,
        });
      }}
    />
  ));
  return (
    <Container>
      {elements}
      <MyPetListItem
        src={AddPetImage}
        name="추가하기"
        onClick={() => modalDispatch(show("add_pet"))}
      />
    </Container>
  );
};

export default MyPetList;
