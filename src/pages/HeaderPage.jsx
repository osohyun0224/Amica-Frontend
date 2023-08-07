import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../assets/images/profile.png";
import Menu from "../assets/images/hamburger.png";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { show } from "../redux/menuSlice.js";

import { useDispatch } from "react-redux";

const Header = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #151515;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  padding: 8px 16px;
  width: 100%;
  height: 64px;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
const RightImagesWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  padding: 8px;
  box-sizing: content-box;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
  }
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
    color: rgba(217, 74, 86, 1);
    border-bottom: 2px solid rgba(217, 74, 86, 1);
    font-weight: 600;
  }
`;

const Content = styled(SimpleBar)`
  width: 100%;
  height: calc(100% - 112px);
  overflow: auto;

  & > .simplebar-track.simplebar-horizontal {
    height: 7px;
  }

  & > .simplebar-track.simplebar-vertical {
    width: 7px;
  }
`;

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

function HeaderPage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const getSelected = (value) => (pathname === value ? "selected" : "");

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Title</Title>
          <RightImagesWrapper>
            <Image src={Menu} alt="메뉴" />
            <Image
              src={ProfileImage}
              alt="프로필"
              onClick={() => dispatch(show())}
            />
          </RightImagesWrapper>
        </TitleWrapper>
        <MenuWrapper>
          <MenuButton to="/main" className={getSelected("/main")}>
            HOME
          </MenuButton>
          <MenuButton
            to="/account-book"
            className={getSelected("/account-book")}
          >
            가계부
          </MenuButton>
          <MenuButton to="/my-pet" className={getSelected("/my-pet")}>
            My Pet
          </MenuButton>
        </MenuWrapper>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default HeaderPage;
