import { useState } from "react";
import { styled } from "styled-components";

import Button from "../../components/account-book/Button.jsx";
import SummaryCalender from "../../components/account-book/SummaryCalender.jsx";

const Container = styled.div`
  margin: 8px 32px;
`;

const MonthlySummaryPage = () => {
  return (
    <Container>
      <SummaryCalender />
    </Container>
  );
};

export default MonthlySummaryPage;
