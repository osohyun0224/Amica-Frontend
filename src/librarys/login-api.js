import { instance } from "./axios";

export async function _userLogin(id, password) {
  const accounts = [
    {
      id: "likelion1@example.com",
      password: "qwerty123",
      name: "김멋사",
      admin: false,
    },
    {
      id: "likelion2@example.com",
      password: "qwerty123",
      name: "멋쟁이사자",
      admin: true,
    },
  ];

  const account = accounts.find((item) => item.id === id);

  if (!account) {
    if (account.password !== password) {
      return false;
    }

    return {
      email: account.id,
      name: account.name,
      access_token: "token1",
      refresh_token: "token2",
      admin: account.admin,
    };
  }
  console.log(id, password);

  const response = await instance.post("login", { mid: id, password });
  const item = response.data;
  const payload = JSON.parse(btoa(item.accessToken.split(".")[1])).name;

  const result = {
    email: id,
    name: item.name,
    admin: payload.role === "ROLE_ADMIN",
    access_token: item.accessToken,
    refresh_token: item.refreshToken,
  };

  return result;
}

export async function userLogin(id, password) {
  const accounts = [
    {
      id: "likelion1@example.com",
      password: "qwerty123",
      name: "김멋사",
      admin: false,
    },
    {
      id: "likelion2@example.com",
      password: "qwerty123",
      name: "멋쟁이사자",
      admin: true,
    },
  ];

  const account = accounts.find((item) => item.id === id);

  if (!account) {
    return null;
  }

  if (account.password !== password) {
    return null;
  }

  return {
    email: account.id,
    name: account.name,
    access_token: "token1",
    refresh_token: "token2",
    admin: account.admin,
  };
}

export async function registerUser(mid, password, name, phone) {
  const response = await instance.post("user/join", {
    mid,
    password,
    name,
    phone,
  });

  return response.data;
}

export async function changePassword(mid, currentPassword, newPassword) {
  const response = await instance.post("user/auth/change-password", {
    mid,
    currentPassword,
    newPassword,
  });

  return response.data;
}

export async function changeName(mid, currentName, newName) {
  const response = await instance.post("user/auth/change-name", {
    mid,
    currentName,
    newName,
  });

  return response.data;
}
