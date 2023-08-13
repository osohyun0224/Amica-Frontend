const productList = [
  {
    id: 1,
    name: "뉴트리나 건강백서 포메라니안 강아지사료",
    thumbnailImage: "https://picsum.photos/256?1",
    coverImage: "https://picsum.photos/512?1",
    descriptionImage: "https://placehold.co/300x700",
    category: 1001,
    price: 21000,
    discount: 16000,
    users: 582,
    percentage: 203,
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
        discount: 16000,
        enabled: true,
      },
      {
        id: 2,
        name: "1kg x 2",
        price: 42000,
        discount: 30000,
        enabled: true,
      },
      {
        id: 3,
        name: "1kg x 3",
        price: 63000,
        discount: 44000,
        enabled: true,
      },
    ],
    tag: ["강아지", "영양만점", "고단백"],
  },
  {
    id: 2,
    name: "나우프레쉬 그레인프리 어덜트 고양이 사료",
    thumbnailImage: "https://picsum.photos/256?2",
    coverImage: "https://picsum.photos/512?2",
    descriptionImage: "https://placehold.co/300x700",
    category: 1001,
    price: 93000,
    discount: 0,
    users: 73,
    percentage: 102,
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
        enabled: true,
      },
    ],
    tag: ["고양이", "대용량", "친환경"],
  },
  {
    id: 3,
    name: "시저 1세 이상 베스트 강아지 주식캔 100g * 10",
    thumbnailImage: "https://picsum.photos/256?3",
    coverImage: "https://picsum.photos/512?3",
    descriptionImage: "https://placehold.co/300x700",
    category: 1001,
    price: 15000,
    discount: 0,
    users: 772,
    percentage: 793,
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
        enabled: true,
      },
      {
        id: 2,
        name: "닭",
        price: 15000,
        discount: 0,
        enabled: false,
      },
      {
        id: 3,
        name: "양",
        price: 15000,
        discount: 0,
        enabled: true,
      },
    ],
    tag: ["강아지", "시저", "인기만점"],
  },
  {
    id: 4,
    name: "휘슬 허브4 약용 반려동물 샴푸",
    thumbnailImage: "https://picsum.photos/256?4",
    coverImage: "https://picsum.photos/512?4",
    descriptionImage: "https://placehold.co/300x700",
    category: 1002,
    price: 9200,
    discount: 7000,
    users: 543,
    percentage: 391,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 5,
    name: "플러쉬퍼피 컴팩 롱 핀 소프트 슬리커 반려동물 브러쉬",
    thumbnailImage: "https://picsum.photos/256?5",
    coverImage: "https://picsum.photos/512?5",
    descriptionImage: "https://placehold.co/300x700",
    category: 1002,
    price: 32000,
    discount: 0,
    users: 84,
    percentage: 61,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 6,
    name: "두카메디 셀 케어미스트",
    thumbnailImage: "https://picsum.photos/256?6",
    coverImage: "https://picsum.photos/512?6",
    descriptionImage: "https://placehold.co/300x700",
    category: 1002,
    price: 28000,
    discount: 14000,
    users: 233,
    percentage: 180,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 7,
    name: "알럽펫 큐트 강아지 선글라스",
    thumbnailImage: "https://picsum.photos/256?7",
    coverImage: "https://picsum.photos/512?7",
    descriptionImage: "https://placehold.co/300x700",
    category: 1003,
    price: 18000,
    discount: 0,
    users: 1209,
    percentage: 1182,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 8,
    name: "스트라이프 후드티 반려동물용",
    thumbnailImage: "https://picsum.photos/256?8",
    coverImage: "https://picsum.photos/512?8",
    descriptionImage: "https://placehold.co/300x700",
    category: 1003,
    price: 18000,
    discount: 16000,
    users: 322,
    percentage: 220,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 9,
    name: "딩동펫 반려동물용 동물튜브",
    thumbnailImage: "https://picsum.photos/256?9",
    coverImage: "https://picsum.photos/512?9",
    descriptionImage: "https://placehold.co/300x700",
    category: 1003,
    price: 15000,
    discount: 12000,
    users: 54,
    percentage: 23,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 10,
    name: "프로젝트21 강아지 퓨어 브레스 케어 영양제",
    thumbnailImage: "https://picsum.photos/256?10",
    coverImage: "https://picsum.photos/512?10",
    descriptionImage: "https://placehold.co/300x700",
    category: 1004,
    price: 30000,
    discount: 28000,
    users: 416,
    percentage: 210,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 11,
    name: "영양제2",
    thumbnailImage: "https://picsum.photos/256?11",
    coverImage: "https://picsum.photos/512?11",
    descriptionImage: "https://placehold.co/300x700",
    category: 1004,
    price: 43000,
    discount: 0,
    users: 331,
    percentage: 182,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 12,
    name: "영양제3",
    thumbnailImage: "https://picsum.photos/256?12",
    coverImage: "https://picsum.photos/512?12",
    descriptionImage: "https://placehold.co/300x700",
    category: 1004,
    price: 24000,
    discount: 0,
    users: 1892,
    percentage: 1402,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 13,
    name: "장난감1",
    thumbnailImage: "https://picsum.photos/256?13",
    coverImage: "https://picsum.photos/512?13",
    descriptionImage: "https://placehold.co/300x700",
    category: 1005,
    price: 12200,
    discount: 0,
    users: 220,
    percentage: 321,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 14,
    name: "장난감2",
    thumbnailImage: "https://picsum.photos/256?14",
    coverImage: "https://picsum.photos/512?14",
    descriptionImage: "https://placehold.co/300x700",
    category: 1005,
    price: 15200,
    discount: 13000,
    users: 528,
    percentage: 120,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 15,
    name: "장난감3",
    thumbnailImage: "https://picsum.photos/256?15",
    coverImage: "https://picsum.photos/512?15",
    descriptionImage: "https://placehold.co/300x700",
    category: 1005,
    price: 8330,
    discount: 7700,
    users: 469,
    percentage: 270,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 16,
    name: "배변용품1",
    thumbnailImage: "https://picsum.photos/256?16",
    coverImage: "https://picsum.photos/512?16",
    descriptionImage: "https://placehold.co/300x700",
    category: 1006,
    price: 12000,
    discount: 0,
    users: 823,
    percentage: 757,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 17,
    name: "배변용품2",
    thumbnailImage: "https://picsum.photos/256?17",
    coverImage: "https://picsum.photos/512?17",
    descriptionImage: "https://placehold.co/300x700",
    category: 1006,
    price: 17400,
    discount: 0,
    users: 991,
    percentage: 795,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
  {
    id: 18,
    name: "배변용품3",
    thumbnailImage: "https://picsum.photos/256?18",
    coverImage: "https://picsum.photos/512?18",
    descriptionImage: "https://placehold.co/300x700",
    category: 1006,
    price: 27000,
    discount: 18000,
    users: 419,
    percentage: 313,
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
        enabled: true,
      },
    ],
    tag: ["태그1", "태그2", "태그3"],
  },
];

export async function getProductList() {
  return productList.map((item) => ({
    id: item.id,
    name: item.name,
    thumbnailImage: item.thumbnailImage,
    category: item.category,
    price: item.price,
    discount: item.discount,
    endDate: item.endDate,
    tag: item.tag,
  }));
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
