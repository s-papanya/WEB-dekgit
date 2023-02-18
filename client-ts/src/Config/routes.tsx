import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
