const orderList = [
  {
    id: 1000000,
    product: {
      id: 1,
      name: "뉴트리나 건강백서 포메라니안 강아지사료",
      thumbnailImage: "https://placehold.co/256",
      category: 1001,
    },
    option: [
      {
        id: 1,
        name: "1kg x 1",
        quality: "1",
        price: 1000,
      },
    ],
    shipping: {
      name: "멋쟁이사자",
      phone: "01012345678",
      postal: "12345",
      baseAddress: "한림대학교",
      detailAddress: "공학관 9999호",
      request: "총알 배송 부탁해요~",
    },
    price: 1000,
    status: true,
    pet: 1,
    payment: {
      receipt_id: "dummy",
      order_id: "1000000",
      price: 1000,
      tax_free: 0,
      cancelled_price: 0,
      cancelled_tax_free: 0,
      order_name: "뉴트리나 건강백서 포메라니안 강아지사료",
      company_name: "부트페이 테스트",
      gateway_url: "https://gw.bootpay.co.kr",
      metadata: {},
      sandbox: true,
      pg: "토스",
      method: "카드",
      method_symbol: "card",
      method_origin: "토스",
      method_origin_symbol: "toss",
      purchased_at: "2023-08-11T19:25:31+09:00",
      requested_at: "2023-08-16T22:55:36+09:00",
      status_locale: "결제완료",
      currency: "KRW",
      receipt_url: "https://async-without-sync.vercel.app?receipt_url",
      status: 1,
      card_data: {
        tid: "dummy",
        receipt_url: "https://async-without-sync.vercel.app?receipt_url",
      },
    },
  },
  {
    id: 1000001,
    product: {
      id: 5,
      name: "플러쉬퍼피 컴팩 롱 핀 소프트 슬리커 반려동물 브러쉬",
      thumbnailImage: "https://placehold.co/256",
      category: 1002,
    },
    option: [
      {
        id: 1,
        name: "기본",
        price: 32000,
        discount: 0,
      },
    ],
    shipping: {
      name: "멋쟁이사자",
      phone: "01012345678",
      postal: "12345",
      baseAddress: "한림대학교",
      detailAddress: "공학관 9999호",
      request: "총알 배송 부탁해요~",
    },
    price: 32000,
    status: true,
    pet: 1,
    payment: {
      receipt_id: "dummy",
      order_id: "1000001",
      price: 32000,
      tax_free: 0,
      cancelled_price: 0,
      cancelled_tax_free: 0,
      order_name: "플러쉬퍼피 컴팩 롱 핀 소프트 슬리커 반려동물 브러쉬",
      company_name: "부트페이 테스트",
      gateway_url: "https://gw.bootpay.co.kr",
      metadata: {},
      sandbox: true,
      pg: "토스",
      method: "카드",
      method_symbol: "card",
      method_origin: "토스",
      method_origin_symbol: "toss",
      purchased_at: "2023-08-15T13:32:57+09:00",
      requested_at: "2023-08-16T22:55:36+09:00",
      status_locale: "결제완료",
      currency: "KRW",
      receipt_url: "https://async-without-sync.vercel.app?receipt_url",
      status: 1,
      card_data: {
        tid: "dummy",
        receipt_url: "https://async-without-sync.vercel.app?receipt_url",
      },
    },
  },
  {
    id: 1000002,
    product: {
      id: 6,
      name: "두카메디 셀 케어미스트",
      thumbnailImage: "https://placehold.co/256",
      category: 1002,
    },
    option: [
      {
        id: 1,
        name: "기본",
        price: 32000,
        discount: 0,
      },
    ],
    shipping: {
      name: "멋쟁이사자",
      phone: "01012345678",
      postal: "12345",
      baseAddress: "한림대학교",
      detailAddress: "공학관 9999호",
      request: "총알 배송 부탁해요~",
    },
    price: 32000,
    status: true,
    pet: 2,
    payment: {
      receipt_id: "dummy",
      order_id: "1000002",
      price: 32000,
      tax_free: 0,
      cancelled_price: 0,
      cancelled_tax_free: 0,
      order_name: "두카메디 셀 케어미스트",
      company_name: "부트페이 테스트",
      gateway_url: "https://gw.bootpay.co.kr",
      metadata: {},
      sandbox: true,
      pg: "토스",
      method: "카드",
      method_symbol: "card",
      method_origin: "토스",
      method_origin_symbol: "toss",
      purchased_at: "2023-08-16T22:55:57+09:00",
      requested_at: "2023-08-16T22:55:36+09:00",
      status_locale: "결제완료",
      currency: "KRW",
      receipt_url: "https://async-without-sync.vercel.app?receipt_url",
      status: 1,
      card_data: {
        tid: "dummy",
        receipt_url: "https://async-without-sync.vercel.app?receipt_url",
      },
    },
  },
];

let id = 1000003;

// order 데이터 스키마입니다.
// paymentInfomation 부분은 일단 대충 때려 박았습니다. 추후에 수정 예정...
const order = {
  id: 0,
  product: {
    id: 0,
    name: "",
    thumbnailImage: "",
    category: 0,
  },
  price: 0, // totalPrice
  status: false,
  pet: 0, // 배송 정보 입력시 입력
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
    product: {
      id: 0,
      name: "",
      thumbnailImage: "",
      category: 0,
    },
    option: [
      {
        img: "",
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
    id: id++,
    status: false,
    payment: null,
  };

  orderList.push(order);
  console.log(order);
  return order;
}

export async function removeDraftOrder(id) {
  const index = orderList.findIndex((item) => item.id === id);

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

export async function getOrder(id) {
  const order = orderList.find((item) => item.id === Number(id));

  if (!order) {
    return null;
  }

  return order;
}

export async function checkOrderStatus(id) {
  const order = orderList.find((item) => item.id === Number(id));

  if (!order) {
    return null;
  }

  return order.status;
}

// Note: 원래는 클라이언트가 아닌, bootpay가 직접 백엔드로 결제 성공을 알려줘야 하지만,
// 더미 API 코드에서는 임시로 클라이언트에서 결제 성공을 더미로 보내게 하겠습니다.

// 백엔드 서버랑 연결하게되면 이 함수는 쓸모가 없습니다.
export async function _sendOrderComplete(id, payment) {
  const order = orderList.find((item) => item.id === Number(id));

  if (!order) {
    return false;
  }

  order.status = true;
  order.payment = payment;

  return true;
}
