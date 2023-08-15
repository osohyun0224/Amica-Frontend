import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { userLogin } from "../../librarys/login-api";
import { useSelector } from "react-redux";
import { selectEmail, selectIsAdmin, selectName } from "../../redux/userSlice";

import HeaderTitle from "../../components/HeaderTitle.jsx";
import MenuItem from "../../components/MenuItem.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh) * 100);
`;

const Title = styled.p`
  margin: 4px 24px;
  font-size: 24px;
  font-weight: 700;
  color: #151515;
`;

const Text = styled.p`
  margin: 16px 24px;
  font-size: 14px;
  font-weight: 400;
  color: #151515;
`;

function UserProfile() {
  const email = useSelector(selectEmail);
  const name = useSelector(selectName);
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <Container>
      <HeaderTitle url="/main" title="" />
      <Title style={{ marginTop: "32px" }}>안녕하세요</Title>
      <Title>
        {name}
        {isAdmin ? "(관리자)" : null} 님
      </Title>
      <Text>{email}</Text>

      <MenuItem title="사용자 이름 변경" to="/changename" />
      <MenuItem title="비밀번호 변경" to="/changepw" />
      <MenuItem title="주문 조회" to="/checkdelivery" />

      {isAdmin ? <MenuItem title="공동구매 관리" to="/admin/store" /> : null}
    </Container>
  );
}

export default UserProfile;
