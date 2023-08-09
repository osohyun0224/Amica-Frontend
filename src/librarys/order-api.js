const orderList = [];

let orderId = 1000000;

// order 데이터 스키마입니다.
// paymentInfomation 부분은 일단 대충 때려 박았습니다. 추후에 수정 예정...
const order = {
  orderId: 0,
  productId: 0,
  productName: "",
  price: 0, // totalPrice
  status: false,
  option: [
    {
      id: 0,
      name: "",
      quality: 0,
      price: 0, // optionPrice
    },
  ],
  shipping: {
    name: "",
    phone: "",
    address: "",
    request: "",
  },
  payment: {
    receipt_id: "",
    order_id: "",
    price: 0,
    tax_free: 0,
    cancelled_price: 0,
    cancelled_tax_free: 0,
    order_name: "",
    company_name: "부트페이 테스트",
    gateway_url: "https://gw.bootpay.co.kr",
    metadata: {},
    sandbox: true,
    pg: "토스",
    method: "카드",
    method_symbol: "card",
    method_origin: "카드",
    method_origin_symbol: "card",
    purchased_at: "2023-08-10T02:27:35+09:00",
    requested_at: "2023-08-10T02:26:40+09:00",
    status_locale: "결제완료",
    currency: "KRW",
    receipt_url: "",
    status: 1,
    card_data: {
      tid: "",
      card_approve_no: "",
      card_no: "",
      card_quota: 0,
      card_company: "",
      card_type: "신용",
      card_owner_type: "개인",
      receipt_url: "",
    },
  },
};

export async function postDraftOrder(data) {
  //  data의 형식 (참고용)
  const type = {
    productId: 0,
    productName: "",
    option: [
      {
        id: 0,
        name: "",
        quality: 0,
        price: 0, // optionPrice
      },
    ],
    shipping: {
      name: "",
      phone: "",
      address: "",
      request: "",
    },
  };

  // Server logic...
  const totalPrice = data.option.reduce(
    (result, item) => item.quality * item.price + result,
    0,
  );

  const order = {
    ...data,
    price: totalPrice,
    orderId: orderId++,
    status: false,
    payment: null,
  };

  orderList.push(order);

  return order;
}

export async function removeDraftOrder(orderId) {
  const index = orderList.findIndex((item) => item.orderId === orderId);

  if (index) {
    orderList.splice(index, 1);

    return true;
  } else {
    return false;
  }
}

export async function getOrderList() {
  return [...orderList];
}

export async function getOrder(orderId) {
  const order = orderList.find((item) => item.orderId === Number(orderId));

  if (!order) {
    return null;
  }

  return order;
}

export async function checkOrderStatus(orderId) {
  const order = orderList.find((item) => item.orderId === Number(orderId));

  if (!order) {
    return null;
  }

  return order.status;
}

// Note: 원래는 클라이언트가 아닌, bootpay가 직접 백엔드로 결제 성공을 알려줘야 하지만,
// 더미 API 코드에서는 임시로 클라이언트에서 결제 성공을 더미로 보내게 하겠습니다.

// 백엔드 서버랑 연결하게되면 이 함수는 쓸모가 없습니다.
export async function _sendOrderComplete(orderId, payment) {
  const order = orderList.find((item) => item.orderId === Number(orderId));

  if (!order) {
    return false;
  }

  order.status = true;
  order.payment = payment;

  return true;
}
