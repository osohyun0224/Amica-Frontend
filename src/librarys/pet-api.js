import { instance } from "./axios.js";
import { getTags } from "./util.js";

import PetImage1 from "../assets/images/pet1.png";
import PetImage2 from "../assets/images/pet2.png";
import PetImage3 from "../assets/images/pet3.png";

const petList = [
  {
    id: 1,
    name: "멍멍",
    species: "dog",
    size: "small",
    age: 5,
    gender: "male",
    tags: [102, 112, 113, 135],
    image: PetImage1,
  },
  {
    id: 2,
    name: "야옹",
    species: "cat",
    size: "large",
    age: 6,
    gender: "female_neutering",
    tags: [109, 121, 131, 134],
    image: PetImage2,
  },
  {
    id: 3,
    name: "토끼",
    species: "rabbit",
    size: "medium",
    age: 2,
    gender: "female",
    tags: [103, 134, 142, 147],
    image: PetImage3,
  },
];

// petList의 스키마
const schema = {
  id: 0,
  name: "",
  species: "dog",
  size: "medium",
  age: 0,
  gender: "",
  tags: [103, 104, 106, 108],
  image: "https://placehold.co/64",
};

export async function _getPetList(userMid, token) {
  const response = await instance.post(
    "pet/auth/getPetList?page=1&size=100",
    {
      userMid,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const list = response.data;

  const result = list.map((item) => ({
    id: item.petId,
    name: item.petName,
    species: item.species,
    size: item.petSize,
    gender: item.sex,
    tags: getTags(item.hashtag),
    image: item.fileNames?.[0],
  }));

  return result;
}

export async function getPetList(userMid, token) {
  return [...petList];
}

export async function _getPet(id, userMid, token) {
  const response = await instance.post(
    "pet/auth/detail/" + id,
    {
      userMid,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const item = response.data;

  const result = {
    id: item.petId,
    name: item.petName,
    species: item.species,
    size: item.petSize,
    gender: item.sex,
    tags: getTags(item.hashtag),
    image: item.fileNames?.[0],
  };

  return result;
}

export async function getPet(id, userMid, token) {
  return JSON.parse(
    JSON.stringify(petList.find((item) => item.id === Number(id))),
  );
}

let id = (petList?.at(-1)?.id || -1) + 1;

export async function _createPet(data, userMid, token) {
  const response = await instance.post(
    "pet/auth/registerPet",
    {
      petName: data.name,
      species: data.species,
      petSize: data.size,
      sex: data.gender,
      hashtag: data.tags,
      userMid,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}

export async function createPet(data, userMid, token) {
  // data 스키마
  const dataSchema = {
    name: "",
    species: "dog",
    size: "medium",
    age: 0,
    gender: "",
    tags: [103, 104, 106, 108],
    image: "https://placehold.co/64",
  };

  petList.push({
    ...data,
    id: id++,
  });

  return true;
}

export async function _modifyPet(id, data, userMid, token) {
  const response = await instance.post(
    "pet/auth/modifyPet/" + id,
    {
      petName: data.name,
      species: data.species,
      petSize: data.size,
      sex: data.gender,
      hashtag: data.tags,
      userMid,
      fileNames: [data.image],
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}

export async function modifyPet(id, data) {
  // data 스키마
  const dataSchema = {
    name: "",
    species: "dog",
    size: "medium",
    age: 0,
    gender: "",
    tags: [103, 104, 106, 108],
    image: "https://placehold.co/64",
  };

  const item = petList.find((item) => item.id === Number(id));

  if (!item) {
    return false;
  }

  item.name = data.name;
  item.species = data.species;
  item.size = data.size;
  item.age = data.age;
  item.gender = data.gender;
  item.tags = data.tags;
  item.image = data.image;

  return true;
}

export async function _removePet(id, userMid, token) {
  const response = await instance.delete("pet/auth/deletePet/" + id, {
    data: {
      userMid,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function removePet(id) {
  const index = petList.findIndex((item) => item.id === Number(id));

  if (!index) {
    return false;
  }

  petList.splice(index, 1);

  return true;
}
export default petList;
