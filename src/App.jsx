import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import LoginPage from "./pages/LoginSignup/LoginPage.jsx";
import SignupPage from "./pages/LoginSignup/SignupPage.jsx";
import SignCompelete from "./pages/LoginSignup/SignCompelete.jsx";
import AccountBookPage from "./pages/account-book/AccountBookPage.jsx";
import CalenderPage from "./pages/account-book/CalenderPage.jsx";
import MyPetPage from "./pages/my-pet/MyPetPage.jsx";
import ProductDetail from "./components/main/ProductDetail.jsx";
import HeaderPage from "./pages/HeaderPage.jsx";
import Main from "./pages/Main.jsx";
import "./App.scss";

const Container = styled.div`
  background-color: transparent;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/compelete" element={<SignCompelete />} />
          <Route
            path="/productDetail/:id"
            element={
              <ProtectedRoute>
                <ProductDetail />
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
