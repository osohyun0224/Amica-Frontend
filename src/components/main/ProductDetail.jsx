import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";
import DropDown from "../product-detail/Dropdown";
import ProductOrder from "../product-detail/ProductOrder";

import MoreBtn from "../../assets/images/rightArrow.png";
import back from "../../assets/images/getback.png";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

import { getProduct } from "../../librarys/store-api.js";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: #667080;
`;

const Back = styled.img`
  width: 35px;
  height: 35px;
  margin: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 390px;
  background-color: #eef1f4;
`;

const ProductInfoContainer = styled.div`
  width: 100%;
  padding: 18px 25px 0 25px;
`;

const ProductName = styled.p`
  color: #151515;
  font-size: 17.29px;
  font-weight: 400;
  line-height: 34.57px;
`;

const PerPrice = styled.div`
  display: flex;
  flex-direction: row;
`;

const Percent = styled.p`
  margin-right: 11px;
  font-size: 22px;
  font-weight: 700;
  color: #d94a56;
  line-height: 34.57px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #151515;
  line-height: 34.57px;
`;

const GroupPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
`;

const GPSubContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -10px;
`;

const GPTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #151515;
`;

const GPTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #d94a56;
  line-height: 22px;
  letter-spacing: -0.02em;
`;

const OrderBtn = styled(Button)`
  width: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  background-color: #d94a56;
  border: none;
  box-shadow: none;
  margin-top: 5px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const SelectionContainer = styled.div`
  margin-top: 20px;
`;

const SelectionButton = styled.div`
  width: 50%;
  height: 48px;
  border: none;
  border-bottom: 1px solid rgba(102, 112, 128, 0.3);
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  float: left;

  &:hover {
    background-color: #efefef;
  }

  &.select {
    color: #d94a56;
    border-bottom: 2px solid #d94a56;
    font-weight: 600;
  }
`;

const PromotionalImage = styled(Image)`
  height: 876px;
  margin: 0;
`;

const Notice = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  margin-top: 50px;
`;

const SellerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const SellerDetailInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #667080;
  line-height: 22px;
  letter-spacing: -0.02em;
  display: flex;
  flex-direction: column;
`;

const SellerInfoTitle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px;
  border: 1px solid #eef1f4;
`;

const SellerInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0 20px 20px;
`;

const SellerPhone = styled(SellerDetailInfo)`
  font-weight: 600;
  border: none;
  padding: 0;
  border-bottom: 1px solid #667080;
`;

const DropdownList = styled.li`
  display: flex;
  padding: 6px 16px;
  cursor: pointer;
`;

const Line = styled.hr`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

const More = styled.img`
  width: 9px;
  height: 16px;
  transform: rotate(90deg);
  cursor: pointer;

  &.clicked {
    transform: rotate(270deg);
  }
`;

const SellerInfoList = [
  {
    id: 1,
    name: "문의사항",
    content: "0000-0000",
  },
  {
    id: 2,
    name: "상품필수정보",
    content: "어쩌고 저쩌고",
  },
  {
    id: 3,
    name: "교환 및 반품 정보",
    content: "알아서 하세요",
  },
  {
    id: 4,
    name: "배송정보",
    content: "1년 내 배송됨",
  },
  {
    id: 5,
    name: "판매자 정보",
    // content: [
    //     { sellerNameTitle: "사업자명", sellerName: "곽두팔" },
    //     { sellerNumTitle: "사업자 등록번호", sellerNum: "000-00-00000" },
    //     { sellerAddressTitle: "사업자 주소", sellerAddressTitle: "강원특별자치도 어쩌고 저쩌고 빌딩 7층" },
    // ]
  },
];

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [percent, setPercent] = useState(0);
  const [period, setPeriod] = useState("");

  const [clickMenu, setClickMenu] = useState(false); // 정보/공지사항 전환
  const [openOrder, setOpenOrder] = useState(false); // 구매하기 버튼 클릭
  const [selectInfo, setSelectInfo] = useState(false);
  const [openMenu, setOpenMenu] = useState(""); // 하단 구매자 정보
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProduct(id);
      console.log(data);
      if (data) {
        setPercent(
          data.discount > 0
            ? Math.floor((1 - data.discount / data.price) * 100)
            : 0,
        );

        const endDate = dayjs(data.endDate);
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

        setData(data);
      }
    })();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickOrder = () => setOpenOrder((prev) => !prev);

  const onClickInfo = (id) => {
    setSelectInfo(!selectInfo);
  };

  return (
    <>
      <PageContainer>
        <Link to={"/main"}>
          <Back src={back} />
        </Link>
        <Image src={data.coverImage} alt="상품 이미지" />
        <ProductInfoContainer>
          <ProductName> {data.name} </ProductName>
          <PerPrice>
            <Percent style={{ display: percent > 0 ? null : "none" }}>
              {percent}%
            </Percent>
            <Price>
              {" "}
              {(data.discount || data.price || 0).toLocaleString()}원{" "}
            </Price>
          </PerPrice>
          <GroupPurchaseContainer>
            <GPSubContainer>
              <GPTitle> 공동구매 달성률 </GPTitle>
              <GPTime> 공동구매 마감까지 {period} 남음 </GPTime>
            </GPSubContainer>
            <GPSubContainer>
              <Percent> {data.percentage}% </Percent>
              <GPTitle>
                {" "}
                {(data.users || 0).toLocaleString()}명이 참가했어요{" "}
              </GPTitle>
            </GPSubContainer>
          </GroupPurchaseContainer>
          <OrderBtn onClick={onClickOrder}> 구매하기 </OrderBtn>
          {openOrder && <ProductOrder show={openOrder} />}
        </ProductInfoContainer>

        <SelectionContainer>
          <SelectionButton
            className={`${clickMenu === false ? "select" : ""}`}
            onClick={() => setClickMenu(false)}
          >
            정보
          </SelectionButton>
          <SelectionButton
            className={`${clickMenu === true ? "select" : ""}`}
            onClick={() => setClickMenu(true)}
          >
            공지사항
          </SelectionButton>
          {clickMenu ? (
            <Notice>
              공지사항 예시입니다
              <br />
              [내용] 우왕
            </Notice>
          ) : (
            <PromotionalImage />
          )}
        </SelectionContainer>
        <SellerInfo>
          <SellerDetailInfo>
            {SellerInfoList.map((info) => (
              <SellerInfoTitle key={info.id}>
                {info.name}
                {info.id === 1 ? (
                  <SellerPhone> {info.content} </SellerPhone>
                ) : (
                  <More
                    key={info.id}
                    className={selectInfo ? "clicked" : ""}
                    src={MoreBtn}
                    onClick={() => setSelectInfo(!selectInfo)}
                  />
                )}
              </SellerInfoTitle>
            ))}
            {selectInfo && (
              <div>
                {SellerInfoList.map((list) => (
                  <DropdownList key={list.id}> {list.content} </DropdownList>
                ))}
              </div>
            )}
          </SellerDetailInfo>
        </SellerInfo>
      </PageContainer>
      {openOrder && (
        <Overlay show={openOrder} onClick={() => setOpenOrder(false)} />
      )}
    </>
  );
};

export default ProductDetail;
