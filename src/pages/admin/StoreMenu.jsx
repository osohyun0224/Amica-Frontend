import { useState, useEffect } from "react";
import styled from "styled-components";

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

function StoreMenu() {
  return (
    <Container>
      <HeaderTitle url="/profile" title="" />
      <Title style={{ marginTop: "32px" }}>&nbsp;</Title>
      <Title>공동구매 관리자 메뉴</Title>
      <Text>원하시는 메뉴를 선택하세요.</Text>
      <MenuItem title="공동구매 추가" to="/admin/store/add" />
      <MenuItem title="공동구매 수정" to="/admin/store/list?to=modify" />
      <MenuItem title="공동구매 삭제" to="/admin/store/list?to=remove" />
    </Container>
  );
}

export default StoreMenu;
