import { styled } from "styled-components";
import { useState, useEffect, useMemo } from "react";
import ProductType from "../ProductType";

import { categorys } from "../../librarys/data.js";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const Page = styled.div`
  width: 195px;
  height: 195px;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 5px 10px 5px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 7px 7px 0 0;
  position: relative;
`;

const Detail = styled.div`
  width: 195px;
  height: 80px;
  border-radius: 0 0 10px 10px;
  /* margin-bottom: 60px; */
  margin-top: -44px;
  padding: 8px 0 0 8px;
  line-height: 22px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 17.71%
  );
  display: block;
`;

const Title = styled.p`
  width: 178px;
  height: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #151515;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Period = styled.p`
  font-size: 9px;
  font-weight: 400;
  color: rgba(21, 21, 21, 0.5);
`;

const DetailProductList = ({
  src,
  name,
  category,
  discount,
  price,
  end,
  tag = [],
}) => {
  const [period, setPeriod] = useState("");
  const percent = useMemo(
    () => (discount > 0 ? Math.floor((1 - discount / price) * 100) : 0),
    [discount, price],
  );
  const categoryName = useMemo(() => {
    const result = categorys.find((item) => item.id === category);

    if (result) {
      return result.title;
    } else {
      return null;
    }
  }, [category]);

  useEffect(() => {
    const endDate = dayjs(end);
    setInterval(() => {
      const ms = endDate - dayjs();

      if (ms <= 0) {
        setPeriod("00:00:00:00");
      } else {
        const duration = dayjs.duration(ms);
        setPeriod(
          [
            duration.days(),
            duration.hours(),
            duration.minutes(),
            duration.seconds(),
          ]
            .map((item) => item.toString().padStart(2, "0"))
            .join(":"),
        );
      }
    }, 200);
  }, [end]);

  return (
    <Page>
      <Image src={src} alt="상품이미지" />
      <InfoContainer>
        <ProductType type={categoryName} />
        {tag.map((item) => (
          <ProductType key={item} type={item} />
        ))}
      </InfoContainer>
      <Detail>
        <Title> {name} </Title>
        <InfoContainer>
          <Info
            style={{
              display: discount > 0 ? null : "none",
              color: "#D94A56",
              marginRight: "7px",
            }}
          >
            {percent}%
          </Info>
          <Info>{(discount || price).toLocaleString()}원</Info>
        </InfoContainer>
        <Period> 공동구매 마감까지 {period} 남음 </Period>
      </Detail>
    </Page>
  );
};

export default DetailProductList;
