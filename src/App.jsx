import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage.jsx";
import './App.css';

const StyledApp = styled.div`
  background-color: transparent;
  color: #f9fbfd;
  min-height: auto;
  padding: 0 50px;
`;

function App() {
  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
