import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";

const Header = styled.header`
  width: 111%;
  height: 80px;
  background: #eef1f4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -31px;
  margin-left: -50px;
`;


const HeaderTitle = styled.h1`
  font-family: NanumGothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #151515;
`;

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
`;

function HeaderComponent() {
  return (
    <Header>
      <Link to="/">
        <BackButtonImage src={BackButton} alt="Back" />
      </Link>
      <HeaderTitle>회원가입</HeaderTitle>
    </Header>
  );
}

export default HeaderComponent;
