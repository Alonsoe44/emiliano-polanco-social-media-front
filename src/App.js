import LoginPage from "./components/pages/LoginPage";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
