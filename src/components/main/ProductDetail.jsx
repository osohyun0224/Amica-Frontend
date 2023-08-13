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
  position: relative;
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
  color: #F2B366;
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
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #667080;
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
align-items: center;
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
  flex-direction: column;
  padding: 6px 25px;
  margin: 10px 0;
  cursor: pointer;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #667080;
`;

const DropDownItem = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const ScrollToTopButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border: none;
  color:white;
  background-color: #D94A56;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  z-index: 9999;  
  &:hover {
    background-color: #555;
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
    content: "본 제품에 항균물질 등의 의약품을 추가로 급여하고자 할 경우 수의사 처방에 따르십시오.",
  },
  {
    id: 3,
    name: "교환 및 반품 정보",
    content: "상품 택 제거 또는 개봉으로 상품 가치 훼손 시에는 상품 수령 후 7일 이내라도 교환 및 반품이 불가능합니다.",
  },
  {
    id: 4,
    name: "배송정보",
    content: "상품 평균 배송일은 1~3일이며, 배송사의 사정에 따라 유동적일 수 있습니다.",
  },
  {
    id: 5,
    name: "판매자 정보",
    content: [
        { sellerNameTitle: "사업자명", sellerName: "곽두팔" },
        { sellerNumTitle: "사업자 등록번호", sellerNum: "000-00-00000" },
        { sellerAddressTitle: "사업자 주소", sellerAddress: "강원특별자치도 어쩌고 저쩌고 빌딩 7층" },
    ]
  },
];

const ProductDetail = () => {
  const [data, setData] = useState({});
  const [percent, setPercent] = useState(0);
  const [period, setPeriod] = useState("");

  const [clickMenu, setClickMenu] = useState(false); 
  const [openOrder, setOpenOrder] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenID, setIsOpenID] = useState(0);

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

  const handleToggle = (id) => {
    const ItemIndex = SellerInfoList.find(item => item.id === id);
    if (ItemIndex) {
      setIsOpen(!isOpen);
      setIsOpenID(id);
    }
  };

  const date = new Date();
  const ModifyDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').reverse().join('-');


  // 스크롤 버튼 구현 코드 영역
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
      if (window.pageYOffset > 200) {  
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
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
              <NoticeTitle> {data.notice.title} </NoticeTitle>
              <NoticeContent> {data.notice.content} </NoticeContent>
              <NoticeModifiedDate> 최근 수정일: {ModifyDate} </NoticeModifiedDate>
            </Notice>
          ) : (
            <PromotionalImage />
          )}
        </SelectionContainer>
        <SellerInfo>
          <SellerDetailInfo>
            {SellerInfoList.map((info) => (
              <>
                <SellerInfoTitle key={info.id}>
                  {info.name}
                  {info.id === 1 ? (
                    <SellerPhone> {info.content} </SellerPhone>
                  ) : (
                    <More
                      key={info.id}
                      className= {(isOpen && isOpenID === info.id) ? "clicked" : ""}
                      src={MoreBtn}
                      onClick={()=> handleToggle(info.id)}
                    />
                  )}
                </SellerInfoTitle>
                {isOpen && info.id === isOpenID ? (
                  Array.isArray(info.content) ? (
                  info.content.map((item, index) => (
                    <DropdownList key={index}>
                      <DropDownItem>
                        <div> {item.sellerNameTitle} </div> 
                        <div> {item.sellerName} </div>
                      </DropDownItem>
                      <DropDownItem>
                        <div> {item.sellerNumTitle} </div>
                        <div> {item.sellerNum} </div>
                      </DropDownItem>
                      <DropDownItem>
                        <div> {item.sellerAddressTitle} </div>
                        <div>{item.sellerAddress} </div>
                      </DropDownItem>
                    </DropdownList>
                  ))
                ) : (
                  <DropdownList> {info.content} </DropdownList>
                )) : ("")}
              </>
            ))}
          </SellerDetailInfo>
        </SellerInfo>
        {showScrollToTop && (
        <ScrollToTopButton onClick={scrollToTop}>
          ^
        </ScrollToTopButton>
      )}
      </PageContainer>
      {openOrder && (
        <Overlay show={openOrder} onClick={() => setOpenOrder(false)} />
      )}
    </>
  );
};

export default ProductDetail;

