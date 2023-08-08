import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  min-height: calc(var(--vh) * 100);
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;
  z-index: 1;
`;

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 5px;
  margin-left: 30px;
`;

const Header = styled.header`
  width: 100%;
  height: 150px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -80px;
  margin-left: -50px;
`;

const NowName = styled.div`
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 10px;
  margin-left: -20px;
`;

const FutureName = styled.div`
  font-family: NanumGothic;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 10px;
  margin-left: -20px;
`;

const Inputdiv = styled.div`
  margin-left: -20px;
  margin-bottom: 10px;
  width: 200%;
`;


function ChangeUserName() {
  return (
    <PageContainer>
      <Header>
        <Link to="/profile">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>사용자 이름 변경</HeaderTitle>
      </Header>

        <NowName>현재 사용자 이름</NowName>
        <Inputdiv>
          <InputForm type="text" placeholder="null 사랑하지 않아" />
        </Inputdiv>
        <FutureName>변경할 사용자 이름</FutureName>
        <Inputdiv>
          <InputForm type="text" placeholder="Java칩푸라푸치노" />
        </Inputdiv>

    </PageContainer>
  );
}

export default ChangeUserName;
