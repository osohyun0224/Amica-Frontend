import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import ProfileImage from "../assets/images/profile.png";
import Search from "../assets/images/search.png";
import SimpleBar from "simplebar-react";

import { show } from "../redux/menuSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { selectCount } from "../redux/modalSlice.js";

const Content = styled(SimpleBar)`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  overflow: auto;

  &.freeze > .simplebar-track {
    display: none;
  }

  & > .simplebar-track.simplebar-horizontal {
    height: 7px;
  }

  & > .simplebar-track.simplebar-vertical {
    width: 7px;
  }

  & .simplebar-mask {
    z-index: auto;
  }
`;

const Header = styled.div`
  position: fixed;
  max-width: 500px;
  width: 100%;
  background-color: #ffffff;
  color: #151515;
  display: flex;
  flex-direction: column;
  z-index: 2;

  transition:
    transform 0.2s,
    opacity 0.2s;

  &.hidden {
    transform: translateY(-15%);
    opacity: 0;
    pointer-events: none;
  }
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

const Container = styled.div`
  max-width: 500px;
  height: calc(var(--vh) * 100);
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

function HeaderPage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const getSelected = (value) => (pathname === value ? "selected" : "");
  const modalStatus = useSelector(selectCount) > 0;
  const scrollElement = useRef();
  const headerElement = useRef();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setHeaderHeight(headerElement.current.offsetHeight);
    const element = scrollElement.current;
    element.addEventListener("scroll", (e) =>
      setVisible(e.target.scrollTop <= headerHeight * 0.5),
    );
    return () =>
      element.removeEventListener("scroll", (e) =>
        setVisible(e.target.scrollTop <= headerHeight * 0.5),
      );
  }, [headerHeight]);

  return (
    <Container>
      <Header className={visible ? "" : "hidden"} ref={headerElement}>
        <TitleWrapper>
          <Title>Title</Title>
          <RightImagesWrapper>
            <Image src={Search} alt="메뉴" onClick={() => dispatch(show())} />
            <Link to="/profile">
              <Image src={ProfileImage} alt="프로필" />
            </Link>
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
      <Content
        className={modalStatus ? "freeze" : null}
        style={{ paddingTop: headerHeight + "px" }}
        scrollableNodeProps={{ ref: scrollElement }}
      >
        <Outlet />
      </Content>
    </Container>
  );
}

export default HeaderPage;
