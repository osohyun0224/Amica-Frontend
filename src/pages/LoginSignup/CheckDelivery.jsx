import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import { Link } from "react-router-dom";

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

function ChangeUserName() {
  return (
    <PageContainer>
      <Header>
        <Link to="/profile">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>배송 조회 하기</HeaderTitle>
      </Header>

    </PageContainer>
  );
}

export default ChangeUserName;
