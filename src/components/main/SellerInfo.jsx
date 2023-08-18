import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import PropTypes from "prop-types";

import MoreBtn from "../../assets/images/rightArrow.png";

const Container = styled.div`
  width: 100%;
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
  cursor: pointer;
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
    content:
      "본 제품에 항균물질 등의 의약품을 추가로 급여하고자 할 경우 수의사 처방에 따르십시오.",
  },
  {
    id: 3,
    name: "교환 및 반품 정보",
    content:
      "상품 택 제거 또는 개봉으로 상품 가치 훼손 시에는 상품 수령 후 7일 이내라도 교환 및 반품이 불가능합니다.",
  },
  {
    id: 4,
    name: "배송정보",
    content:
      "상품 평균 배송일은 1~3일이며, 배송사의 사정에 따라 유동적일 수 있습니다.",
  },
  {
    id: 5,
    name: "판매자 정보",
    content: [
      { sellerNameTitle: "사업자명", sellerName: "곽두팔" },
      { sellerNumTitle: "사업자 등록번호", sellerNum: "000-00-00000" },
      {
        sellerAddressTitle: "사업자 주소",
        sellerAddress: "강원특별자치도 어쩌고 저쩌고 빌딩 7층",
      },
    ],
  },
];

const SellerInfo = () => {
  const [open, setOpen] = useState([]);

  const handleToggle = (id) => {
    if (isOpen(id)) {
      setOpen(open.filter((item) => item !== id));
    } else if (id !== 1) {
      setOpen([...open, id]);
    }
  };

  function isOpen(id) {
    return open.includes(id);
  }

  return (
    <Container>
      {SellerInfoList.map((info) => (
        <div key={info.id}>
          <SellerInfoTitle onClick={() => handleToggle(info.id)}>
            {info.name}
            {info.id === 1 ? (
              <SellerPhone> {info.content} </SellerPhone>
            ) : (
              <More
                key={info.id}
                className={isOpen(info.id) ? "clicked" : ""}
                src={MoreBtn}
              />
            )}
          </SellerInfoTitle>
          {isOpen(info.id) ? (
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
            )
          ) : (
            ""
          )}
        </div>
      ))}
    </Container>
  );
};

export default SellerInfo;
