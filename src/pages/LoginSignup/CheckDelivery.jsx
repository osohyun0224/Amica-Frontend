import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import { Link } from "react-router-dom";
import DeliveryList from "../../components/delivery/DeliveryList";
import ProductExample from "../../assets/images/RecentImage.png";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  min-height: calc(var(--vh) * 100);
  margin: 0 auto;
  max-width: 1000px;
  padding-top: 30px;
  padding-left: 50px;
  position: relative;
  z-index: 1;
`;

const BackButtonImage = styled.img`
  position: absolute;
  left: 15px;
  margin-top: -20px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  font-family: Nanum Gothic;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 5px;
  margin-left: 30px;
`;

const Header = styled.header`
  width: 100%;
  height: 150px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -80px;
  margin-left: -50px;
`;

const DateTitle = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-left: -30px;
  margin-bottom: 10px;
`;

const BaeList1 = [
  {
    id: 21,
    name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
    kind: "사료",
    price: "56,000",
    deliverId: "운송장번호: 293-19-192891 (CJ대한통운)",
    date: "2023.05.09",
  },
  {
    id: 22,
    name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
    kind: "사료",
    price: "56,000",
    deliverId: "운송장번호: ...",
    date: "2023.05.09",
  },
  {
    id: 23,
    name: "[안심하고 먹는 유기농] 전연령 사료 6kg",
    kind: "사료",
    price: "56,000",
    deliverId: "운송장번호: ...",
    date: "2023.05.09",
  },
];

function ChangeDelivery() {
  return (
    <PageContainer>
      <Header>
        <Link to="/profile">
          <BackButtonImage src={BackButton} alt="Back" />
        </Link>
        <HeaderTitle>배송 조회 하기</HeaderTitle>
      </Header>
      <DateTitle>2023년 9월 3일 구매</DateTitle>
      {BaeList1.map((item) => (
        <DeliveryList
          key={item.id}
          src={ProductExample}
          name={item.name}
          kind={item.kind}
          deliverId={item.deliverId}
          price={item.price}
        />
      ))}
    </PageContainer>
  );
}

export default ChangeDelivery;
