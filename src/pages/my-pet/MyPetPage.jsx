import { useState } from "react";
import { styled } from "styled-components";
import { useScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { Heading, HeadingBold } from "../../components/Heading.jsx";
import MyPetList from "../../components/my-pet/MyPetList.jsx";
import MyPetListItem from "../../components/my-pet/MyPetListItem.jsx";
import AddPetImage from "../../assets/images/addPet.png";
import MyPetAddModal from "../../components/my-pet/MyPetInputModal.jsx";

const Container = styled.div`
  margin: 12px 16px;
`;

const MyPetPage = () => {
  const { ref } = useScrollContainer();

  //const userName = "멋사";

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

  const [petList] = useState(samplePetListData);
  const [pet, setPet] = useState(samplePetListData[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState(samplePetListData[0].id);

  const handleModalToggle = (isOpen) => {
    if (ref.current) {
      ref.current.style.overflow = isOpen ? 'hidden' : 'auto';
    }
  };
  
  const handleOpenModal = () => {
    setShowModal(true);
    handleModalToggle(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    handleModalToggle(false);
  };

  return (
    <Container>
      {/* <Heading>
        <HeadingBold>{userName}님</HeadingBold>의 아이들
      </Heading> */}

<MyPetList scrollableNodeProps={{ ref }} autoHide={false}>
        {petList.map((item) => (
          <MyPetListItem
            key={item.id}
            id={item.id}
            selectedId={selectedPetId}
            src={item.image}
            name={item.name}
            onClick={() => {
              setPet(item);
              setSelectedPetId(item.id);
            }}
          />
        ))}
        <MyPetListItem src={AddPetImage} name="추가하기" onClick={handleOpenModal} />
      </MyPetList>
      <Heading>
        <HeadingBold>{pet.name}</HeadingBold>의 정보
      </Heading>
      <MyPetAddModal show={showModal} onClose={handleCloseModal} />
    </Container>
  );
};

export default MyPetPage;