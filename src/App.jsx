import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginSignup/LoginPage.jsx";
import SignupPage from "./pages/LoginSignup/SignupPage.jsx";
import PasswordPage from "./pages/LoginSignup/PasswordPage.jsx";
import SignCompelete from "./pages/LoginSignup/SignCompelete.jsx";
import AccountBookPage from "./pages/account-book/AccountBookPage.jsx";
import MyPetPage from "./pages/my-pet/MyPetPage.jsx";
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
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/compelete" element={<SignCompelete />} />
          <Route element={<HeaderPage />}>
            <Route path="/main" element={<Main />} />
            <Route path="/account-book" element={<AccountBookPage />} />
            <Route path="/my-pet" element={<MyPetPage />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
