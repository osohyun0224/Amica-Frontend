import styled from "styled-components";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CoverMenu from "./components/CoverMenu.jsx";
import UserProfile from "./pages/LoginSignup/UserProfile.jsx";
import LoginPage from "./pages/LoginSignup/LoginPage.jsx";
import SignupPage from "./pages/LoginSignup/SignupPage.jsx";
import SignCompelete from "./pages/LoginSignup/SignCompelete.jsx";
import AccountBookPage from "./pages/account-book/AccountBookPage.jsx";
import CalenderPage from "./pages/account-book/CalenderPage.jsx";
import MyPetPage from "./pages/my-pet/MyPetPage.jsx";
import ProductDetail from "./components/main/ProductDetail.jsx";
import OrderInfo from "./components/product-detail/OrderInfo.jsx";
import SearchPage from "./pages/store/SearchPage.jsx";
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/compelete" element={<SignCompelete />} />
          <Route
            path="/productDetail/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/productDetail/orderInfo" 
            element={
              <ProtectedRoute>
                <OrderInfo />
              </ProtectedRoute>
            } 
          />
          <Route element={<HeaderPage />}>
            <Route
              path="/main"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <SearchPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account-book"
              element={
                <ProtectedRoute>
                  <AccountBookPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account-book/calender"
              element={
                <ProtectedRoute>
                  <CalenderPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-pet"
              element={
                <ProtectedRoute>
                  <MyPetPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
