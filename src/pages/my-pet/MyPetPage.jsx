import { useState } from "react";
import { styled } from "styled-components";

// 부드러운 스크롤 라이브러리
import { useScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { Heading, HeadingBold } from "../../components/Heading.jsx";
import MyPetList from "../../components/my-pet/MyPetList.jsx";
import MyPetListItem from "../../components/my-pet/MyPetListItem.jsx";

import AddPetImage from "../../assets/images/addPet.png";

const Container = styled.div`
  margin: 12px 16px;
`;

const MyPetPage = () => {
  const { ref } = useScrollContainer();

  const userName = "멋사";

  const samplePetListData = [
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
      name: "매우긴이름을가진댕댕이",
    },
    {
      id: 6,
      image: "https://placehold.co/64",
      name: "왈왈이",
    },
  ];

  // const [petList, setPetList] = useState([]);
  const [petList, setPetList] = useState(samplePetListData);
  const [pet, setPet] = useState(samplePetListData[0]);

  function AddPet() {
    const name = prompt("이름을 지어주세요!");

    setPetList([
      ...petList,
      {
        id: petList[petList.length - 1] ?? 1,
        image: "https://placehold.co/64",
        name,
      },
    ]);
  }

  return (
    <Container>
      <Heading>
        <HeadingBold>{userName}님</HeadingBold>의 아이들
      </Heading>
      <MyPetList scrollableNodeProps={{ ref }} autoHide={false}>
        {petList.map((item) => (
          <MyPetListItem
            key={item.id}
            src={item.image}
            name={item.name}
            onClick={() => {
              setPet(item);
            }}
          />
        ))}
        <MyPetListItem src={AddPetImage} name="추가하기" onClick={AddPet} />
      </MyPetList>
      <Heading>
        <HeadingBold>{pet.name}</HeadingBold>의 정보
      </Heading>
    </Container>
  );
};

export default MyPetPage;
