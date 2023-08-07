import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar.jsx";

import { show, hide, selectVisible } from "../redux/menuSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileNav = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 72px;
  background-color: white;
  overflow: auto;

  transition: all 0.5s;

  &.hidden {
    visibility: hidden;
    margin-right: -20%;
  }

  @media (max-width: 360px) {
    max-width: 288px;
    width: 100%;
  }
`;

const Search = styled(SearchBar)`
  margin: 24px 16px;
`;

const Overlay = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(21, 21, 21, 0.7);
  z-index: 99;

  overflow: hidden;

  transition: all 0.25s;
  opacity: 1;

  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

const PopularTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 16px;
`;

const PopularKeywordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 16px;
`;

const Keyword = styled.div`
  min-width: 75px;
  max-width: 200px;
  padding: 4px 8px;
  border-radius: 5px;
  background-color: #fcecd9;
  font-size: 14px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

function CoverMenu() {
  const visible = useSelector(selectVisible);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const popularKeywords = [
    "강아지용품",
    "수제츄르",
    "영양제",
    "아무거나정말정말긴해시태그1",
    "긴해시태그1",
    "긴해시태그2",
    "아무거나정말정말긴해시태그1",
    "아무거나정말정말긴해시태그1",
  ];

  function close() {
    setSearchValue("");
    dispatch(hide());
  }

  const onClick = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const onSubmit = (value) => {
    if (value.length < 2) {
      alert("최소 2글자 이상 입력하세요.");
      return;
    }
    navigate("/search?query=" + value);
    close();
  };

  return (
    <Overlay className={visible ? "" : "hidden"} onClick={onClick}>
      <ProfileNav className={visible ? "" : "hidden"}>
        <Search
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={onSubmit}
        />
        <PopularTitle>인기 검색어</PopularTitle>
        <PopularKeywordWrapper>
          {popularKeywords.map((keyword, index) => (
            <Keyword key={index} onClick={() => onSubmit(keyword)}>
              #{keyword}
            </Keyword>
          ))}
        </PopularKeywordWrapper>
      </ProfileNav>
    </Overlay>
  );
}

export default CoverMenu;
