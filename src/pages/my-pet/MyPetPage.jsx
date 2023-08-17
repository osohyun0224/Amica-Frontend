import { useState, useEffect, useReducer } from "react";
import styled from "styled-components";

import { StateContext, DispatchContext } from "../../librarys/context.js";

import MyPetList from "../../components/my-pet/MyPetList.jsx";
import MyPetOrderList from "../../components/my-pet/MyPetOrderList.jsx";

import MyPetAddModal from "../../components/my-pet/MyPetInputModal.jsx";
import KeywordInputModal from "../../components/my-pet/KeywordInputModal.jsx";
import MyPetInfo from "../../components/my-pet/MyPetInfo.jsx";

import { intialPetState, petReducer } from "../../reducer/pet.js";
import { getOrderList } from "../../librarys/order-api.js";
import { getPetList } from "../../librarys/pet-api.js";

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    z-index: 1;
  }
`;

const Decoration = styled.div`
  top: 0;
  margin-left: -24px;
  width: 100%;
  height: calc(112px + 180px);
  position: absolute;
  border-radius: 25%;
  background: #f2d335;
`;

const MyPetPage = () => {
  const [state, dispatch] = useReducer(petReducer, intialPetState);
  const { pet, reload } = state;

  useEffect(() => {
    if (reload) {
      (async () => {
        const petData = await getPetList();

        dispatch({
          type: "loadPets",
          payload: petData,
        });
      })();
    }
  }, [reload]);

  useEffect(() => {
    if (pet) {
      (async () => {
        const orderData = await getOrderList();

        dispatch({
          type: "loadOrders",
          payload: orderData.filter((item) => item.pet === pet.id),
        });
      })();
    }
  }, [pet]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <KeywordInputModal />
        <MyPetAddModal />
        <Container>
          <Decoration />
          <MyPetList />
          <MyPetInfo />
          <MyPetOrderList />
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default MyPetPage;
