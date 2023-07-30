import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LedgerPage from "./pages/LedgerPage.jsx";
import MyPetPage from "./pages/MyPetPage.jsx";
import HeaderPage from "./pages/HeaderPage.jsx";
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<HeaderPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ledger" element={<LedgerPage />} />
            <Route path="/my-pet" element={<MyPetPage />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
