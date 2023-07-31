import PropTypes from "prop-types";
import { styled } from "styled-components";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { useScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import AddPetImage from "../../assets/images/addPet.png";
import { useState } from "react";

const Container = styled.div`
  margin: 12px 16px;
`;

const HeaderText = styled.p`
  margin: 8px 0;
  font-size: 18px;
  font-weight: 300;
`;

const PetList = styled(SimpleBar)`
  padding-bottom: 6px;
  margin-bottom: 16px;

  & .simplebar-content {
    display: flex;
  }

  & .simplebar-track.simplebar-horizontal {
    margin-bottom: -8px;
    height: 7px;
  }

  & .simplebar-scrollbar.simplebar-visible:before {
    opacity: 0.3;
  }
`;

const PetListItem = ({ src, name, onClick }) => {
  const Container = styled.button`
    padding-right: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  `;

  const Image = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #cfcfcf;
  `;

  const Text = styled.p`
    margin-top: 4px;
    font-size: 14px;
  `;

  return (
    <Container onClick={onClick}>
      <Image src={src} />
      <Text>{name}</Text>
    </Container>
  );
};

PetListItem.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

const MyPetPage = () => {
  const { ref } = useScrollContainer();

  const userName = "멋사";
  const petList = [
    {
      id: 1,
      image: "https://placehold.co/64",
      name: "참이",
    },
    {
      id: 2,
      image: "https://placehold.co/64",
      name: "치즈",
    },
    {
      id: 3,
      image: "https://placehold.co/64",
      name: "애기",
    },
    {
      id: 4,
      image: "https://placehold.co/64",
      name: "샤끔이",
    },
    {
      id: 5,
      image: "https://placehold.co/64",
      name: "멍멍이",
    },
    {
      id: 6,
      image: "https://placehold.co/64",
      name: "왈왈이",
    },
    {
      id: 7,
      image: "https://placehold.co/64",
      name: "크릉이",
    },
    {
      id: 8,
      image: "https://placehold.co/64",
      name: "야옹이",
    },
    {
      id: 9,
      image: "https://placehold.co/64",
      name: "샤를",
    },
  ];

  let [pet, setPet] = useState(petList[0]);

  return (
    <Container>
      <HeaderText>
        <span style={{ fontWeight: 600 }}>{userName}님</span>의 아이들
      </HeaderText>
      <PetList scrollableNodeProps={{ ref }}>
        {petList.map((item) => (
          <PetListItem
            key={item.id}
            src={item.image}
            name={item.name}
            onClick={() => {
              console.log("1");
              setPet(item);
            }}
          />
        ))}
        <PetListItem
          src={AddPetImage}
          name="추가하기"
          onClick={() => alert("TODO: 펫 추가")}
        />
      </PetList>
      <HeaderText>
        <span style={{ fontWeight: 600 }}>{pet.name}</span>의 정보
      </HeaderText>
    </Container>
  );
};

export default MyPetPage;
