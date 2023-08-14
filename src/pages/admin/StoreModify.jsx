import styled from "styled-components";
import HeaderTitle from "../../components/HeaderTitle.jsx";
import StoreForm from "../../components/admin/StoreForm.jsx";

import SimpleBar from "simplebar-react";

import { selectCount } from "../../redux/modalSlice.js";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Container = styled(SimpleBar)`
  width: 100%;
  height: 100%;
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

const CoverButton = styled.button`
  width: 100%;
  padding: 24px 0;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: rgba(217, 74, 86, 1);

  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(217, 74, 86, 0.85);
  }

  cursor: pointer;
`;

const StoreModify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const modalStatus = useSelector(selectCount) > 0;

  return (
    <Container className={modalStatus ? "freeze" : null}>
      <HeaderTitle url="/admin/store/list?to=modify" title="공동구매 수정" />
      <StoreForm id={id} />
      <CoverButton>상품 수정하기</CoverButton>
    </Container>
  );
};

export default StoreModify;
