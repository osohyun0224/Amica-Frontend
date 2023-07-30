import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import ProfileImage from "../assets/profile.png";

const Header = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: rgba(102, 112, 128, 1);
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 64px;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const MenuButton = styled(Link)`
  width: 33.333%;
  height: 48px;
  border: none;
  border-bottom: 1px solid rgba(102, 112, 128, 0.3);
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #efefef;
  }

  &.selected {
    border-bottom: 2px solid rgba(102, 112, 128, 1);
    font-weight: 600;
  }
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 112px);
  overflow: auto;
`;

function HeaderPage() {
  const { pathname } = useLocation();
  return (
    <>
      <Header>
        <TitleWrapper>
          <Title>Title</Title>
          <Image src={ProfileImage} alt="프로필" />
        </TitleWrapper>
        <MenuWrapper>
          <MenuButton
            to="/home"
            className={pathname === "/home" ? "selected" : ""}
          >
            HOME
          </MenuButton>
          <MenuButton
            to="/ledger"
            className={pathname === "/ledger" ? "selected" : ""}
          >
            가계부
          </MenuButton>
          <MenuButton
            to="/my-pet"
            className={pathname === "/my-pet" ? "selected" : ""}
          >
            My Pet
          </MenuButton>
        </MenuWrapper>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default HeaderPage;
