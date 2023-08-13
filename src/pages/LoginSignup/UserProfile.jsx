import { useState, useEffect } from "react";
import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import GoButton from "../../assets/images/Page-right.png";
import { Link } from "react-router-dom";
import { userLogin } from "../../librarys/login-api";
import { useSelector } from "react-redux";
import { selectEmail, selectIsAdmin, selectName } from "../../redux/userSlice";

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
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 60px;
  margin-left: -20px;
`;

const HeaderName = styled.h1`
  font-family: Nanum Gothic;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
  margin-top: 10px;
  margin-left: -20px;
`;

const HeaderEmail = styled.h1`
  font-family: Nanum Gothic;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 20px;
  margin-left: -20px;
  color: #151515;
  margin-bottom: 20px;
`;

const Header = styled.header`
  width: 100%;
  height: 180px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -80px;
  margin-left: -50px;
`;

const MenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #eef1f4;
  padding: 40px 50px;
  text-decoration: none;
  color: #151515;
  width: 110%;
  margin-left: -48px;

  &:last-child {
    border-bottom: 2px solid #eef1f4;
  }
`;

const MenuText = styled.span`
  font-family: Nanum Gothic;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #667080;
`;

const GoButtonImage = styled.img`
  cursor: pointer;
`;

function UserProfile() {
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <PageContainer>
      <Header>
        <Link to="/my-pet">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
      </Header>
      <HeaderTitle>안녕하세요</HeaderTitle>
      <HeaderName>
        {name}
        {isAdmin ? " (관리자)" : null} 님,
      </HeaderName>
      <HeaderEmail>{email}</HeaderEmail>

      <MenuLink to="/changename">
        <MenuText>사용자 이름 변경</MenuText>
        <GoButtonImage src={GoButton} alt="Go" />
      </MenuLink>
      <MenuLink to="/changepw">
        <MenuText>비밀번호 변경</MenuText>
        <GoButtonImage src={GoButton} alt="Go" />
      </MenuLink>
      <MenuLink to="/checkdelivery">
        <MenuText>주문 조회</MenuText>
        <GoButtonImage src={GoButton} alt="Go" />
      </MenuLink>
      {isAdmin ? (
        <MenuLink to="/admin/store">
          <MenuText>공동구매 관리</MenuText>
          <GoButtonImage src={GoButton} alt="Go" />
        </MenuLink>
      ) : null}
    </PageContainer>
  );
}

export default UserProfile;
