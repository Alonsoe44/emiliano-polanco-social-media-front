import LoginPage from "./components/pages/LoginPage";

import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/profile" element={<LoginPage />}></Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
