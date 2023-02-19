import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default AppRoutes;
