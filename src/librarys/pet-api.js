const petList = [];

// petList의 스키마
const schema = {
  id: 0,
  name: "",
  species: "dog",
  size: "medium",
  age: 0,
  gender: "",
  tags: [103, 104, 106, 108],
  imageUrl: "https://placehold.co/64",
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
    imageUrl: "https://placehold.co/64",
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
    imageUrl: "https://placehold.co/64",
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
  item.imageUrl = data.imageUrl;

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
