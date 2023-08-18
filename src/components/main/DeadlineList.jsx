import { styled } from "styled-components";
import { useState, useEffect, useMemo } from "react";
import ProductType from "../NewProductType.jsx";

import { categorys, petTags } from "../../librarys/data.js";

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
  overflow: hidden;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  z-index: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

const Type = styled(ProductType)`
  max-height: 26px;
  margin: 4px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  border-radius: 0 0 10px 10px;
  padding: 15px 0 0 8px;
  line-height: 22px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 17.71%
  );
`;

const Title = styled.p`
  width: 178px;
  height: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #151515;

  margin-bottom: 3px;
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
  line-height: 22px;
  letter-spacing: -0.02em;
`;

const Period = styled.p`
  font-size: 9px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
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

  const types = [
    categoryName,
    ...tag.map((item) => {
      const find = petTags.find((element) => element.id === item);

      return find ? find.title : item;
    }),
  ];

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
      <Wrapper>
        <Type type={types} />
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
      </Wrapper>
    </Page>
  );
};

export default DetailProductList;
