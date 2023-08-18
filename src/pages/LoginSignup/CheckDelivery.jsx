import styled from "styled-components";
import BackButton from "../../assets/images/getback.png";
import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { getOrderList } from "../../librarys/order-api";
import { useState } from "react";

import HeaderTitle from "../../components/HeaderTitle.jsx";
import ProductListItem from "../../components/ProductListItem.jsx";
import dayjs from "dayjs";

import SimpleBar from "simplebar-react";

const Container = styled(SimpleBar)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(var(--vh) * 100);
  overflow: auto;

  &.freeze > .simplebar-track {
    display: none;
  }

  & .simplebar-content {
    min-height: calc(var(--vh) * 100);
    display: flex;
    flex-direction: column;
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

const DateTitle = styled.div`
  margin: 12px 24px;
  margin-top: 36px;
  font-size: 16px;
  font-weight: 700;
`;

const Item = styled(ProductListItem)`
  padding: 12px 24px;
`;

function ChangeDelivery() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getOrderList();

      if (data) {
        setOrders(
          data.reduce((result, item) => {
            const date = dayjs(item.payment.purchased_at).format("YYYY-MM-DD");
            const find = result.find((element) => element.date === date);

            if (find) {
              find.list.push(item);
            } else {
              result.push({
                date,
                list: [item],
              });
            }

            return result;
          }, []),
        );
      }
    })();
  }, []);

  console.log(orders);

  return (
    <Container>
      <HeaderTitle to="/userProfile" title="주문 조회" />
      {orders.map((element) => (
        <>
          <DateTitle>
            {dayjs(element.date).format("YYYY년 MM월 DD일")} 구매
          </DateTitle>
          {element.list.map((item) => (
            <Item
              key={item.id}
              src={item.product.thumbnailImage}
              name={item.product.name}
              category={item.product.category}
              price={item.price}
              onClick={() => navigate(`/productDetail/${item.product.id}`)}
            />
          ))}
        </>
      ))}
    </Container>
  );
}

export default ChangeDelivery;
