import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar.jsx";
import ProfileImage from "../assets/images/profile.png";
import Menu from "../assets/images/hamburger.png";

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

const Content = styled.div`
  width: 100%;
  height: calc(100% - 112px);
  overflow: auto;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  position: relative;
`;

const ProfileNav = styled.div`
  width: 319px;
  height: 777px;
  top: 73px;
  position: fixed;
  right: calc(50% - 250px);
  background-color: white;
  overflow: auto;
  z-index: 10;
  display: ${(props) => (props.show ? "block" : "none")};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #151515b2;
  z-index: 5;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PopularTitle = styled.div`
  font-family: Nanum Gothic;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const PopularKeywordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 12px;
`;

const Keyword = styled.div`
  font-family: "Nanum Gothic";
  min-width: 75px;
  max-width: 100px;
  height: 26px;
  padding: 2px 6px;
  border-radius: 5px;
  background: #fcecd9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchContainer = styled.div`
  margin-left: -50px;
`;

function HeaderPage() {
  const { pathname } = useLocation();
  const [showProfileNav, setShowProfileNav] = useState(false);
  const getSelected = (value) => (pathname === value ? "selected" : "");

  const toggleProfileNav = () => {
    setShowProfileNav((prevShowProfileNav) => !prevShowProfileNav);
  };

  const closeProfileNav = () => {
    setShowProfileNav(false);
  };
  const [searchValue, setSearchValue] = useState();
  const popularKeywords = ["#강아지용품", "#수제츄르", "#영양제"];

  return (
    <>
      <Container>
        <Header>
          <TitleWrapper>
            <Title>Title</Title>
            <RightImagesWrapper>
              <Image src={Menu} alt="메뉴" />
              <Image
                src={ProfileImage}
                alt="프로필"
                onClick={toggleProfileNav}
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
        <ProfileNav show={showProfileNav}>
          <SearchContainer>
            <SearchBar value={searchValue} onChange={setSearchValue} />
          </SearchContainer>
          <PopularTitle>인기 검색어</PopularTitle>
          <PopularKeywordWrapper>
            {popularKeywords.map((keyword, index) => (
              <Keyword key={index}>{keyword}</Keyword>
            ))}
          </PopularKeywordWrapper>
        </ProfileNav>
      </Container>
      {showProfileNav && (
        <Overlay show={showProfileNav} onClick={closeProfileNav} />
      )}
    </>
  );
}

export default HeaderPage;
