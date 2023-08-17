const productList = [
  {
    id: 1,
    name: "뉴트리나 건강백서 포메라니안 강아지사료",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1001,
    price: 21000,
    discount: 16000,
    users: 582,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "배송 안내",
      content:
        "배송 폭증으로 인해서 배송이 다소 늦어지고 있습니다.\n불편을 드려 죄송합니다. 최대한 빠르게 저희 제품을 만나보실 수 있도록 하겠습니다.",
      modifiedDate: "2023-08-05T17:12:04+09:00",
    },
    options: [
      {
        id: 1,
        name: "1kg x 1",
        price: 21000,
        discount: 1000,
      },
      {
        id: 2,
        name: "1kg x 2",
        price: 42000,
        discount: 30000,
      },
      {
        id: 3,
        name: "1kg x 3",
        price: 63000,
        discount: 44000,
      },
    ],
    tag: [105, 121, 144],
    goalPrice: 905847,
    currentPrice: 1447767,
  },
  {
    id: 2,
    name: "나우프레쉬 그레인프리 어덜트 고양이 사료",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1001,
    price: 93000,
    discount: 0,
    users: 73,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "공지사항",
      content: "공지사항입니다.\n\n안녕하세요.",
      modifiedDate: "2023-08-06T11:33:39+09:00",
    },
    options: [
      {
        id: 1,
        name: "7kg 기본",
        price: 93000,
        discount: 0,
      },
    ],
    tag: [105, 130, 143],
    goalPrice: 825317,
    currentPrice: 587896,
  },
  {
    id: 3,
    name: "시저 1세 이상 베스트 강아지 주식캔 100g * 10",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1001,
    price: 15000,
    discount: 0,
    users: 772,
    endDate: "2023-08-27T03:00:00+09:00",
    notice: {
      title: "품절 안내",
      content:
        "안녕하세요.\n여러분들의 뜨거운 관심 덕분에 닭 제품군 전량 품절되었습니다. 감사합니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "소",
        price: 15000,
        discount: 0,
      },
      {
        id: 2,
        name: "닭",
        price: 15000,
        discount: 0,
      },
      {
        id: 3,
        name: "양",
        price: 15000,
        discount: 0,
      },
    ],
    tag: [110, 112, 148],
    goalPrice: 701396,
    currentPrice: 890423,
  },
  {
    id: 4,
    name: "휘슬 허브4 약용 반려동물 샴푸",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1002,
    price: 9200,
    discount: 7000,
    users: 543,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 9200,
        discount: 0,
      },
    ],
    tag: [120, 135, 138],
    goalPrice: 545266,
    currentPrice: 656838,
  },
  {
    id: 5,
    name: "플러쉬퍼피 컴팩 롱 핀 소프트 슬리커 반려동물 브러쉬",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1002,
    price: 32000,
    discount: 0,
    users: 84,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 32000,
        discount: 0,
      },
    ],
    tag: [122, 134, 143],
    goalPrice: 712276,
    currentPrice: 1055795,
  },
  {
    id: 6,
    name: "두카메디 셀 케어미스트",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1002,
    price: 28000,
    discount: 14000,
    users: 233,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 28000,
        discount: 14000,
      },
    ],
    tag: [101, 106, 117],
    goalPrice: 767749,
    currentPrice: 1189054,
  },
  {
    id: 7,
    name: "알럽펫 큐트 강아지 선글라스",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1003,
    price: 18000,
    discount: 0,
    users: 1209,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 18000,
        discount: 0,
      },
    ],
    tag: [108, 138, 144],
    goalPrice: 917371,
    currentPrice: 268033,
  },
  {
    id: 8,
    name: "스트라이프 후드티 반려동물용",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1003,
    price: 18000,
    discount: 16000,
    users: 322,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 18000,
        discount: 16000,
      },
    ],
    tag: [109, 131, 148],
    goalPrice: 867050,
    currentPrice: 1287257,
  },
  {
    id: 9,
    name: "딩동펫 반려동물용 동물튜브",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1003,
    price: 15000,
    discount: 12000,
    users: 54,
    endDate: "2023-08-24T12:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 15000,
        discount: 12000,
      },
    ],
    tag: [115, 121, 122],
    goalPrice: 840356,
    currentPrice: 906233,
  },
  {
    id: 10,
    name: "프로젝트21 강아지 퓨어 브레스 케어 영양제",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1004,
    price: 30000,
    discount: 28000,
    users: 416,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 30000,
        discount: 28000,
      },
    ],
    tag: [106, 107, 128],
    goalPrice: 770165,
    currentPrice: 1456222,
  },
  {
    id: 11,
    name: "영양제2",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1004,
    price: 43000,
    discount: 0,
    users: 331,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 43000,
        discount: 0,
      },
    ],
    tag: [115, 122, 122],
    goalPrice: 892373,
    currentPrice: 558154,
  },
  {
    id: 12,
    name: "영양제3",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1004,
    price: 24000,
    discount: 0,
    users: 1892,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 24000,
        discount: 0,
      },
    ],
    tag: [113, 121, 134],
    goalPrice: 574616,
    currentPrice: 1052983,
  },
  {
    id: 13,
    name: "장난감1",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1005,
    price: 12200,
    discount: 0,
    users: 220,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 12200,
        discount: 0,
      },
    ],
    tag: [111, 134, 145],
    goalPrice: 761654,
    currentPrice: 1479090,
  },
  {
    id: 14,
    name: "장난감2",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1005,
    price: 15200,
    discount: 13000,
    users: 528,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 15200,
        discount: 13000,
      },
    ],
    tag: [121, 135, 146],
    goalPrice: 652626,
    currentPrice: 827092,
  },
  {
    id: 15,
    name: "장난감3",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1005,
    price: 8330,
    discount: 7700,
    users: 469,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 8330,
        discount: 7700,
      },
    ],
    tag: [131, 138, 148],
    goalPrice: 711370,
    currentPrice: 160349,
  },
  {
    id: 16,
    name: "배변용품1",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1006,
    price: 12000,
    discount: 0,
    users: 823,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 12000,
        discount: 0,
      },
    ],
    tag: [116, 125, 140],
    goalPrice: 843215,
    currentPrice: 531653,
  },
  {
    id: 17,
    name: "배변용품2",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1006,
    price: 17400,
    discount: 0,
    users: 991,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 17400,
        discount: 0,
      },
    ],
    tag: [111, 124, 137],
    goalPrice: 554188,
    currentPrice: 179352,
  },
  {
    id: 18,
    name: "배변용품3",
    thumbnailImage: "https://placehold.co/256",
    coverImage: "https://placehold.co/512",
    descriptionImage: "https://placehold.co/300x700",
    category: 1006,
    price: 27000,
    discount: 18000,
    users: 419,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안내",
      content: "공지사항입니다.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "기본",
        price: 27000,
        discount: 18000,
      },
    ],
    tag: [102, 118, 126],
    goalPrice: 693352,
    currentPrice: 374623,
  },
];

export async function getProductList() {
  return JSON.parse(
    JSON.stringify(
      productList.map((item) => ({
        id: item.id,
        name: item.name,
        thumbnailImage: item.thumbnailImage,
        category: item.category,
        price: item.price,
        discount: item.discount,
        endDate: item.endDate,
        tag: item.tag,
      })),
    ),
  );
}

export async function searchProduct(keyword) {
  return JSON.parse(
    JSON.stringify(
      productList.filter(
        (item) =>
          item.name.includes(keyword) ||
          item.tag.some((tag) => tag === keyword),
      ),
    ),
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export async function getFeaturedProduct(categoryId) {
  let list = [...productList];

  if (categoryId) {
    list = list.filter((item) =>
      categoryId ? item.category === Number(categoryId) : true,
    );
  }

  shuffleArray(list);

  return {
    deadlineItems: list.slice(0, 3),
    recentItems: list.slice(0, 3),
    popularItems: list.slice(0, 3),
  };
}

export async function getProduct(id) {
  return JSON.parse(
    JSON.stringify(productList.find((item) => item.id === Number(id)) || null),
  );
}
