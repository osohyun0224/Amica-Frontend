import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../Button";
import ProductOrder from "../product-detail/ProductOrder";

import HeaderTitle from "../HeaderTitle.jsx";

import SellerInfo from "./SellerInfo.jsx";

import UpArrowImage from "../../assets/images/upArrow.png";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ImageModal from "./ImageModal.jsx";
import NoticeModal from "./NoticeModal.jsx";

dayjs.extend(duration);

import { getProduct } from "../../librarys/store-api.js";

import SimpleBar from "simplebar-react";
import { useRef } from "react";
import { selectIsAdmin } from "../../redux/userSlice";
import { show } from "../../redux/modalSlice";

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

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
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
  line-height: 25px;
`;

const SubProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2px;
`;

const Percent = styled.p`
  margin-right: 7px;
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

const CostPrice = styled.p`
  font-size: 13px;
  font-weight: 400;
  text-decoration: line-through;
  letter-spacing: -0.02em;
  color: rgba(21, 21, 21, 0.3);
`;

const DiscountAmount = styled.p`
  margin-left: 7px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #f2b366;
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
  margin-bottom: -13px;
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
  display: flex;

  transition: opacity 0.2s;

  justify-content: center;

  &.hidden {
    opacity: 0;
  }
`;

const OverlayBackground = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: #00000033;
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
  aspect-ratio: auto;
  min-height: 500px;
`;

const Notice = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 20px 0 25px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const NoticeTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const NoticeContent = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #000000;
`;

const NoticeModifiedDate = styled.p`
  display: flex;
  justify-content: end;
  margin-top: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #667080;
`;

const NoticeEditButton = styled.a`
  margin-top: 4px;
  margin-bottom: 8px;
  border: none;
  display: flex;
  justify-content: flex-end;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 400;
  color: #667080;
  cursor: pointer;
`;

const ScrollToTopButton = styled.img`
  width: 36px;
  height: 36px;
  padding: 8px;
  position: fixed;
  object-fit: contain;
  bottom: 20px;
  right: 20px;
  border: none;
  color: white;
  background-color: #d94a56;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;

  transition: opacity 0.1s;

  &.hidden {
    opacity: 0;
  }
`;

const ProductDetail = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [data, setData] = useState({});
  const [percent, setPercent] = useState(0);
  const [period, setPeriod] = useState("");

  const [clickMenu, setClickMenu] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getProduct(id);

      if (data) {
        setPercent(Math.floor((1 - data.discount / data.price) * 100));
        setInterval(() => {
          const ms = dayjs(data.endDate) - dayjs();

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

  const onClickOrder = () => setOpenOrder((prev) => !prev);

  const ModifyDate = dayjs(data?.notice?.modifiedDate).format("YYYY-MM-DD");
  const percentage = Math.round((data.currentPrice / data.goalPrice) * 100);

  // 스크롤 버튼 구현 코드 영역
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (ref) {
      if (ref.current.scrollTop > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    }
  };

  useEffect(() => {
    ref.current.addEventListener("scroll", handleScroll);
  }, [ref]);

  const scrollToTop = () => {
    if (ref) {
      ref.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  function onImageClick() {
    if (isAdmin) {
      dispatch(show("upload_image"));
    }
  }

  function onNoticeClick() {
    if (isAdmin) {
      dispatch(show("modify_notice"));
    }
  }

  return (
    <Container scrollableNodeProps={{ ref }}>
      <ImageModal />
      <NoticeModal />
      <HeaderTitle url="/main" title="" />
      {openOrder && (
        <Overlay
          className={openOrder ? null : "hidden"}
          onClick={() => setOpenOrder(false)}
        >
          <OverlayBackground />
        </Overlay>
      )}
      <Image onClick={onImageClick} src={data.coverImage} alt="상품 이미지" />
      <ProductInfoContainer>
        <ProductName> {data.name} </ProductName>
        <SubProductInfo>
          <Percent style={{ display: percent > 0 ? null : "none" }}>
            {percent}%
          </Percent>
          <Price>
            {" "}
            {(data.discount || data.price || 0).toLocaleString()}원{" "}
          </Price>
        </SubProductInfo>
        <SubProductInfo>
          <CostPrice style={{ display: percent > 0 ? null : "none" }}>
            {(data.price || 0).toLocaleString()}원
          </CostPrice>
          <DiscountAmount style={{ display: percent > 0 ? null : "none" }}>
            할인금액 {(data.price - data.discount).toLocaleString()}원
          </DiscountAmount>
        </SubProductInfo>
        <GroupPurchaseContainer>
          <GPSubContainer>
            <GPTitle> 공동구매 달성률 </GPTitle>
            <GPTime> 공동구매 마감까지 {period} 남음 </GPTime>
          </GPSubContainer>
          <GPSubContainer>
            <Percent> {percentage}% </Percent>
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
            <NoticeTitle> {data.notice.title} </NoticeTitle>
            <NoticeContent> {data.notice.content} </NoticeContent>
            <NoticeModifiedDate> 최근 수정일: {ModifyDate} </NoticeModifiedDate>
            <NoticeEditButton
              className={isAdmin ? null : "hidden"}
              onClick={onNoticeClick}
            >
              편집하기
            </NoticeEditButton>
          </Notice>
        ) : (
          <PromotionalImage src={data.descriptionImage} />
        )}
      </SelectionContainer>
      <SellerInfo />
      <ScrollToTopButton
        className={showScrollToTop ? null : "hidden"}
        src={UpArrowImage}
        onClick={scrollToTop}
      />
    </Container>
  );
};

export default ProductDetail;
