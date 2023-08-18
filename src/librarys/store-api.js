//id: 5 
import Product1Image from "../assets/images/dummydata/무제1-2.webp";
import Product1DescriptionImage from "../assets/images/dummydata/무제1-1.webp";
//id:8 
import Product2Image from "../assets/images/dummydata/무제2-1.webp";
import Product2DescriptionImage from "../assets/images/dummydata/무제2-2.webp";
//id:19
import Product3Image from "../assets/images/dummydata/무제3-1.webp";
import Product3DescriptionImage from "../assets/images/dummydata/무제3-2.webp";
//id:1 - 고양이 사료
import Product4Image from "../assets/images/dummydata/무제4-2.webp";
import Product4DescriptionImage from "../assets/images/dummydata/무제4-1.webp";
//id:2- 고양이 사료
import Product5Image from "../assets/images/dummydata/무제5-1.webp";
import Product5DescriptionImage from "../assets/images/dummydata/무제5-2.webp";
//id:3- 강아지 사료
import Product6Image from "../assets/images/dummydata/무제6-1.webp";
import Product6DescriptionImage from "../assets/images/dummydata/무제6-2.webp";
// 7 시간없어  미안해
//id:18  코코시루 자동 급수기
import Product8Image from "../assets/images/dummydata/무제8-1.webp";
import Product8DescriptionImage from "../assets/images/dummydata/무제8-2.webp";
//id:10 휴먼그레이드의 반려묘 영양제
import Product9Image from "../assets/images/dummydata/무제9-2.webp";
import Product9DescriptionImage from "../assets/images/dummydata/무제9-1.webp";
//id:11 안티러스의 츄르타입 연어 맛 영양제
import Product10Image from "../assets/images/dummydata/무제10-1.webp";
import Product10DescriptionImage from "../assets/images/dummydata/무제10-2.webp";
//id: 9 멍냥타임 사냥놀이 무브 인형
import Product11Image from "../assets/images/dummydata/무제11-1.webp";
import Product11DescriptionImage from "../assets/images/dummydata/무제11-2.webp";
//
import Product12Image from "../assets/images/dummydata/무제12-1.webp";
import Product12DescriptionImage from "../assets/images/dummydata/무제12-2.webp";

import Product13Image from "../assets/images/dummydata/무제13-1.webp";
import Product13DescriptionImage from "../assets/images/dummydata/무제13-2.webp";
//id: 17
import Product15Image from "../assets/images/dummydata/무제15-1.webp";
import Product15DescriptionImage from "../assets/images/dummydata/무제15-2.webp";
//
import Product16Image from "../assets/images/dummydata/무제16-1.webp";
import Product16DescriptionImage from "../assets/images/dummydata/무제16-2.webp";

import Product17Image from "../assets/images/dummydata/무제17-2.webp";
import Product17DescriptionImage from "../assets/images/dummydata/무제17-1.webp";

import Product18Image from "../assets/images/dummydata/무제18-1.webp";
import Product18DescriptionImage from "../assets/images/dummydata/무제18-2.webp";

import Product19Image from "../assets/images/dummydata/무제19-1.jpg";
import Product19DescriptionImage from "../assets/images/dummydata/무제19-2.png";

import Product20Image from "../assets/images/dummydata/무제20-1.png";
import Product20DescriptionImage from "../assets/images/dummydata/무제20-2.jpg";

const productList = [
  {
    id: 1,
    name: "Royal CANIN 프리미엄 고양이 사료",
    thumbnailImage: Product4Image,
    coverImage: Product4Image,
    descriptionImage: Product4DescriptionImage,
    category: 1001,
    price: 21000,
    discount: 16000,
    users: 582,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "Royal CANIN 고양이 사료",
      content:
        "어미의 임신 시기 부터 새끼 고양이의 생후 13개월 까지 맞춤형 프리미엄 고양이 사료를 경험해보세요. ",
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
    tag: [105, 130, 143],
    goalPrice: 905847,
    currentPrice: 1447767,
  },
  {
    id: 2,
    name: "프리미엄 보양식 사료 캣밥",
    thumbnailImage: Product5Image,
    coverImage: Product5Image,
    descriptionImage: Product5DescriptionImage,
    category: 1001,
    price: 93000,
    discount: 0,
    users: 73,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "보양식 사료 캣밥",
      content: "육즙이 살아있는 프리미엄 보양식 사료 캣밥을 경험해보세요",
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
    name: "하림 펫 푸드 강아지 밥이 보약",
    thumbnailImage: Product6Image,
    coverImage: Product6Image,
    descriptionImage: Product6DescriptionImage,
    category: 1001,
    price: 15000,
    discount: 0,
    users: 772,
    endDate: "2023-08-27T03:00:00+09:00",
    notice: {
      title: "밥이 보약! 하림 펫 푸드",
      content:
        "헤어볼 걱정 없이 맞춤 솔루션과 체중과 피모에 따라 여러 종류의 펫 푸드를 경험해보세요.",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "걱정없는 헤어볼",
        price: 15000,
        discount: 0,
      },
      {
        id: 2,
        name: "빛나는 피모",
        price: 15000,
        discount: 0,
      },
      {
        id: 3,
        name: "No 스트레스",
        price: 15000,
        discount: 0,
      },
    ],
    tag: [110, 112, 148],
    goalPrice: 701396,
    currentPrice: 890423,
  },
  {
    id: 5,
    name: "마임 헤어드레스 한날 빗",
    thumbnailImage: Product1Image,
    coverImage: Product1Image,
    descriptionImage: Product1DescriptionImage,
    category: 1002,
    price: 32000,
    discount: 0,
    users: 84,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "한날 빗",
      content: "깨끗한 집과 반려동물을 위한 선택",
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
    name: "모이스처 미스트 독스",
    thumbnailImage: Product19Image,
    coverImage: Product19Image,
    descriptionImage: Product19DescriptionImage,
    category: 1002,
    price: 28000,
    discount: 14000,
    users: 233,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "모이스처 미스트 독스",
      content: "프로폴리스추출물과 하이드롤라이즈드실크를 함유해 피모 보습, 정전기 방지, 컨디셔닝 효과를 선사하며 플로럴 계열 식품첨가물 향을 적용한 프리미엄 피모 케어 모이스처 미스트",
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
    name: "소중형 강아지 선글라스",
    thumbnailImage: Product20Image,
    coverImage: Product20Image,
    descriptionImage: Product20DescriptionImage,
    category: 1003,
    price: 18000,
    discount: 0,
    users: 1209,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "강아지 선글라스",
      content: "소 중형 다양한 사이즈로 강아지 선글라스를 만나보세요!",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "소형",
        price: 18000,
        discount: 0,
      },
      {
        id: 2,
        name: "중형",
        price: 18000,
        discount: 0,
      }
    ],
    tag: [108, 138, 144],
    goalPrice: 917371,
    currentPrice: 268033,
  },
  {
    id: 8,
    name: "귀여운 고양이 후드티",
    thumbnailImage:  Product2Image,
    coverImage: Product2Image,
    descriptionImage: Product2DescriptionImage,
    category: 1003,
    price: 18000,
    discount: 16000,
    users: 322,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "고양이 후드티",
      content: "귀엽고 사랑스러운 고양이 반려묘의 옷을 입혀주세요:)",
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
    name: "멍냥타임 움직이는 사냥놀이 인형",
    thumbnailImage: Product11Image,
    coverImage: Product11Image,
    descriptionImage: Product11DescriptionImage,
    category: 1003,
    price: 15000,
    discount: 12000,
    users: 54,
    endDate: "2023-08-24T12:00:00+09:00",
    notice: {
      title: "사냥놀이 인형",
      content: "분리불안과 우울증을 해소하는 사냥 놀이시간으로 체중조절과 스트레스 해소까지!!",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "물고기",
        price: 15000,
        discount: 12000,
      },
      {
        id: 2,
        name: "말꼬리",
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
    name: "Humangrade 반려묘 영양제",
    thumbnailImage: Product9Image,
    coverImage: Product9Image,
    descriptionImage: Product9DescriptionImage,
    category: 1004,
    price: 30000,
    discount: 28000,
    users: 416,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "휴먼그레이드의 프리미엄 반려묘 영양제",
      content: "질병케어와 영양밸런스의 균형을 위해 인 성분과 나트륨 함량을 맞춰서 만든 리얼 영양간식",
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
    name: "안티러스 캣 츄르타입 영양제",
    thumbnailImage: Product10Image,
    coverImage: Product10Image,
    descriptionImage: Product10DescriptionImage,
    category: 1004,
    price: 43000,
    discount: 0,
    users: 331,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "안티러스의 신제품 츄르 타입 영양제",
      content: "재채기, 눈 염증 등 눈 질환, 호흡기 질환에 도움을 줍니다!",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "연어 맛",
        price: 15000,
        discount: 0,
      },
    ],
    tag: [115, 122, 122],
    goalPrice: 892373,
    currentPrice: 558154,
  },
  {
    id: 12,
    name: "펫앤닥터 피부앤굿",
    thumbnailImage: Product16Image,
    coverImage: Product16Image,
    descriptionImage: Product16DescriptionImage,
    category: 1004,
    price: 24000,
    discount: 0,
    users: 1892,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "펫의 피부건강엔 펫앤닥터 !",
      content: "하루 한번, 피부와 면역을 보호하여 건강한 반려생활을 선물하세요.",
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
    name: "멍냥타임 파스텔 교체형 낚시대",
    thumbnailImage: Product12Image,
    coverImage: Product12Image,
    descriptionImage: Product12DescriptionImage,
    category: 1005,
    price: 12200,
    discount: 0,
    users: 220,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "파스텔 교체형 낚시대",
      content: "낚시놀이는 해주고 싶은데.. 여러가지 사기에는 보관이 불편할 때 이 제품을 추천합니다!",
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
    name: "반려동물 플레이볼",
    thumbnailImage: Product17Image,
    coverImage: Product17Image,
    descriptionImage: Product17DescriptionImage,
    category: 1005,
    price: 15200,
    discount: 13000,
    users: 528,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "반려동물 딸랑딸랑! 플레이볼",
      content: "딸랑이 소리로 호기심을 자극시키는 플레이볼입니다!",
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
    name: "셀프 터그놀이 칫솔봉",
    thumbnailImage: Product18Image,
    coverImage: Product18Image,
    descriptionImage: Product18DescriptionImage,
    category: 1005,
    price: 8330,
    discount: 7700,
    users: 469,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "펫파인더 셀프 터그놀이 칫솔 놀이봉",
      content: "펫 혼자서도 양치질을 잘하기 위해 연습하는 칫솔봉 !",
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
    name: "펫들의 편안한 펫 쿠션",
    thumbnailImage: Product13Image,
    coverImage: Product13Image,
    descriptionImage: Product13DescriptionImage,
    category: 1006,
    price: 12000,
    discount: 0,
    users: 823,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "푹신푹신 펫 쿠션",
      content: "펫들이 좋아하는 쿠션을 장만하세요:) 최고로 푹신함",
      modifiedDate: "2023-08-07T18:23:49+09:00",
    },
    options: [
      {
        id: 1,
        name: "파란",
        price: 12000,
        discount: 0,
      },
      {
        id: 2,
        name: "빨간",
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
    name: "반려동물 배변패드",
    thumbnailImage: Product15Image,
    coverImage: Product15Image,
    descriptionImage: Product15DescriptionImage,
    category: 1006,
    price: 17400,
    discount: 0,
    users: 991,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "Dr. BRO 반려동물 배변패드 ",
      content: "반려동물을 위한 흡수력 좋은 배변패드! 모두를 생각하는 마음으로 제작된 착한 배변패드",
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
    name: "코코시루 자동 급수기",
    thumbnailImage: Product8Image,
    coverImage: Product8Image,
    descriptionImage: Product8DescriptionImage,
    category: 1006,
    price: 27000,
    discount: 18000,
    users: 419,
    endDate: "2023-08-28T00:00:00+09:00",
    notice: {
      title: "코코시루 자동 급수기",
      content: "매일 쓰는 급수기, 아무거나 쓰지 마세요! 코코시루 자동 급수기로 시작하세요:)",
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
  {
    id: 19,
    name: "상처 보호엔 고양이 환자복",
    thumbnailImage:  Product3Image,
    coverImage: Product3Image,
    descriptionImage: Product3DescriptionImage,
    category: 1003,
    price: 18000,
    discount: 16000,
    users: 322,
    endDate: "2023-08-24T00:00:00+09:00",
    notice: {
      title: "고양이 환자복",
      content: "중성화 수술 후 or 상처 보호에 이 고양이 환자복을 입혀주세요:)",
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
