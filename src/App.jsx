import styled from "styled-components";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CoverMenu from "./components/CoverMenu.jsx";
import ChangeUserName from "./pages/LoginSignup/ChangeUserName.jsx";
import ChangeUserPW from "./pages/LoginSignup/ChangeUserPW.jsx";
import CheckDelivery from "./pages/LoginSignup/CheckDelivery.jsx";
import UserProfile from "./pages/LoginSignup/UserProfile.jsx";
import AdminStorePage from "./pages/admin/StoreMenu.jsx";
import AdminStoreListPage from "./pages/admin/StoreList.jsx";
import AdminStoreAddPage from "./pages/admin/StoreAdd.jsx";
import AdminStoreModifyPage from "./pages/admin/StoreModify.jsx";
import AdminStoreRemovePage from "./pages/admin/StoreRemove.jsx";
import LoginPage from "./pages/LoginSignup/LoginPage.jsx";
import SignupPage from "./pages/LoginSignup/SignupPage.jsx";
import SignCompelete from "./pages/LoginSignup/SignCompelete.jsx";
import AccountBookPage from "./pages/account-book/AccountBookPage.jsx";
import CalenderPage from "./pages/account-book/CalenderPage.jsx";
import MyPetPage from "./pages/my-pet/MyPetPage.jsx";
import ProductDetail from "./components/main/ProductDetail.jsx";
import OrderInfo from "./components/product-detail/OrderInfo.jsx";
import OrderCompletePage from "./pages/store/OrderCompletePage.jsx";
import DetailPage from "./pages/store/DetailPage.jsx";
import HeaderPage from "./pages/HeaderPage.jsx";
import Main from "./pages/Main.jsx";
import "./App.scss";

const Container = styled.div`
  background-color: transparent;
  height: 100%;
`;

const resize = () => {
  // 실제로 보여지는 면적인 window.innerHeight를 이용하여 vh 단위를 재 측정
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const routerList = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/compelete", element: <SignCompelete /> },
  { path: "/profile", element: <UserProfile />, role: 1 },
  {
    path: "/admin/store",
    element: <AdminStorePage />,
    role: 2,
    redirect: "/main",
  },
  {
    path: "/admin/store/list",
    element: <AdminStoreListPage />,
    role: 2,
    redirect: "/main",
  },
  {
    path: "/admin/store/add",
    element: <AdminStoreAddPage />,
    role: 2,
    redirect: "/main",
  },
  {
    path: "/admin/store/modify/:id",
    element: <AdminStoreModifyPage />,
    role: 2,
    redirect: "/main",
  },
  {
    path: "/admin/store/remove/:id",
    element: <AdminStoreRemovePage />,
    role: 2,
    redirect: "/main",
  },
  { path: "/changename", element: <ChangeUserName />, role: 1 },
  { path: "/changepw", element: <ChangeUserPW />, role: 1 },
  { path: "/checkdelivery", element: <CheckDelivery />, role: 1 },
  { path: "/productDetail/:id", element: <ProductDetail />, role: 1 },
  {
    path: "/productDetail/orderInfo",
    element: <OrderInfo />,
    role: 1,
    redirect: "/main",
  },
  {
    path: "/orderComplete",
    element: <OrderCompletePage />,
    role: 1,
    redirect: "/main",
  },
  { path: "/account-book/calender", element: <CalenderPage /> },
];

const routerHeaderList = [
  { path: "/main", element: <Main /> },
  { path: "/main/list", element: <DetailPage /> },
  { path: "/account-book", element: <AccountBookPage /> },
  { path: "/my-pet", element: <MyPetPage /> },
];

routerList.forEach((item) => {
  if (item.role && item.role > 0) {
    item.element = (
      <ProtectedRoute role={item.role} to={item.redirect}>
        {item.element}
      </ProtectedRoute>
    );
  }
});

routerHeaderList.forEach((item) => {
  item.element = (
    <ProtectedRoute role={item.role} to={item.redirect}>
      {item.element}
    </ProtectedRoute>
  );
});

function App() {
  // iOS Safari에서 vh 단위 조정
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <Container>
      <Router>
        <CoverMenu />
        <Routes>
          {routerList.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}

          <Route element={<HeaderPage />}>
            {routerHeaderList.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
