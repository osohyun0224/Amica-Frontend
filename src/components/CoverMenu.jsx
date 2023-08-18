import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar.jsx";
import ProductType from "./NewProductType.jsx";

import CloseImage from "../assets/images/x.png";

import { show, hide, selectVisible } from "../redux/menuSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

const RecentTitle = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
`;

const ResetButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Keywords = styled(ProductType)`
  margin: 0 16px;

  & > p {
    max-width: fit-content;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
`;

function CoverMenu() {
  const visible = useSelector(selectVisible);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recent-search"));

    if (Array.isArray(data)) {
      setKeywords(data);
    } else {
      localStorage.setItem("recent-search", "[]");
    }
  }, []);

  function close() {
    setSearchValue("");
    dispatch(hide());
  }

  function registerKeyword(keyword) {
    keywords.push(keyword);
    localStorage.setItem("recent-search", JSON.stringify(keywords));
  }

  function resetKeyword() {
    if (confirm("최근 검색어를 초기화 하겠습니까?")) {
      localStorage.setItem("recent-search", "[]");
      setKeywords([]);
    }
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
    if (!keywords.includes(value)) {
      registerKeyword(value);
    }
    navigate("/main/list?search=" + value);
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
        <RecentTitle>
          최근 검색어 <ResetButton src={CloseImage} onClick={resetKeyword} />
        </RecentTitle>
        <Keywords type={keywords} onClick={onSubmit} />
      </ProfileNav>
    </Overlay>
  );
}

export default CoverMenu;
