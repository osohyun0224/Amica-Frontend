import { useState, useEffect } from "react";
import styled from "styled-components";
import { useScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Heading, HeadingBold } from "../../components/Heading.jsx";
import MyPetListItem from "../../components/my-pet/MyPetListItem.jsx";
import AddPetImage from "../../assets/images/addPet.png";
import MyPetAddModal from "../../components/my-pet/MyPetInputModal.jsx";
import MyPetKeyword from "../../assets/images/Keyword.png";
import KeywordInputModal from "../../components/my-pet/KeywordInputModal.jsx";

const Container = styled.div`
  margin: 12px 16px;
`;

const ScrollContainer = styled(SimpleBar)`
  padding-bottom: 6px;

  & .simplebar-content {
    display: flex;
  }

  & .simplebar-track.simplebar-horizontal {
    margin: auto;
    margin-bottom: -8px;
    padding: 0;
    width: 70px;
    height: 3px;
    background: rgba(238, 241, 244, 1);
  }

  & .simplebar-scrollbar:before {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    background: rgba(217, 74, 86, 1);
    opacity: 1;
  }
`;

const StyledRectangle = styled.div`
  width: 320px;
  height: 114px;
  position: relative;
  margin-top: -80px;
  margin-left: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000040;
  background: #ffffff;
  padding: 10px;
  padding-top: -50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PetNameText = styled.span`
  font-family: "Nanum Gothic";
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: -60px;
  margin-left: -200px;
`;

const InfoText = styled.span`
  margin-left: 0px;
  font-family: "Nanum Gothic";
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: -60px;
  color: #1515154d;
`;

const StyledLine = styled.span`
  width: 1px;
  height: 18px;
  background-color: #bac0ca;
  margin: 0 10px;
  margin-top: -60px;
`;

const StyledMyPetList = styled.div`
  width: 103.4%;
  height: 206px;
  margin-top: -13px;
  margin-left: 0px;
  border-radius: 0px 0px 90px 90px;
  background: #f2d335;
  overflow: auto;
`;

const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -100px;
`;

const Keyword = styled.div`
  padding: 2px 6px;
  border-radius: 5px;
  background: #f2d33526;
  width: 46px;
  height: 26px;
  font-family: "Nanum Gothic";
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
  margin-right: 5px;
`;


const KeywordSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const KeywordButton = styled.img`
  order: 1;
  padding-left: 10px;
`;

const MyPetPage = () => {
  const { ref } = useScrollContainer();
  const [showKeywordModal, setShowKeywordModal] = useState(false);
  const [keywords, setKeywords] = useState({});

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
      ref.current.style.overflow = isOpen ? "hidden" : "auto";
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

  useEffect(() => {
    console.log(keywords);
  }, [keywords]);

  return (
    <Container>
      {/* <Heading>
        <HeadingBold>{userName}님</HeadingBold>의 아이들
      </Heading> */}

      <StyledMyPetList>
        <ScrollContainer scrollableNodeProps={{ ref }} autoHide={false}>
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
          <MyPetListItem
            src={AddPetImage}
            name="추가하기"
            onClick={handleOpenModal}
          />
        </ScrollContainer>
      </StyledMyPetList>

      <StyledRectangle>
        <PetNameText>{pet.name}</PetNameText>
        <StyledLine />
        <InfoText>정보</InfoText>
        <KeywordSection>
          <KeywordContainer>
            {keywords[selectedPetId]?.map((keyword, index) => (
              <Keyword key={index}>{keyword}</Keyword>
            ))}
            <KeywordButton
              src={MyPetKeyword}
              alt="키워드 추가"
              onClick={() => setShowKeywordModal(true)}
            />
          </KeywordContainer>
        </KeywordSection>
      </StyledRectangle>

      <Heading>
        <HeadingBold>{pet.name} 최근 구매한 제품</HeadingBold>
      </Heading>
      <MyPetAddModal show={showModal} onClose={handleCloseModal} />
      <KeywordInputModal
        show={showKeywordModal}
        onClose={() => setShowKeywordModal(false)}
        setKeywords={setKeywords}
        selectedPetId={selectedPetId}
      />
    </Container>
  );
};

export default MyPetPage;
