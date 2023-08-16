const petList = [
  {
    id: 1,
    name: "멍멍",
    species: "dog",
    size: "small",
    age: 5,
    gender: "male",
    tags: [102, 112, 113, 135],
    image: "https://placehold.co/64",
  },
  {
    id: 2,
    name: "야옹",
    species: "cat",
    size: "large",
    age: 6,
    gender: "female_neutering",
    tags: [109, 121, 131, 134],
    image: "https://placehold.co/64",
  },
  {
    id: 3,
    name: "토끼",
    species: "rabbit",
    size: "medium",
    age: 2,
    gender: "female",
    tags: [103, 134, 142, 147],
    image: "https://placehold.co/64",
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

export async function getPetList() {
  return [...petList];
}

export async function getPet(id) {
  return JSON.parse(
    JSON.stringify(petList.find((item) => item.id === Number(id))),
  );
}

let id = 0;

export async function createPet(data) {
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

export async function removePet(id) {
  const index = petList.findIndex((item) => item.id === Number(id));

  if (!index) {
    return false;
  }

  petList.splice(index, 1);

  return true;
}
