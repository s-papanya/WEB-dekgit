import Home from "../Pages/Home/home";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
