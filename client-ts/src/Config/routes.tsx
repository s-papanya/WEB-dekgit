import { Route, Routes } from "react-router-dom";

import Contact from "../Pages/Contact/contact";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import AdminCreateActivity from "../Pages/Admin-CreateActivity/admin-createActivity";
import ActivityDetail from "../Pages/Activity-Detail/activityDetail";
import History from "../Pages/History/history";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/activityDetail/:activityId"
          element={<ActivityDetail />}
        />
        <Route path="/Admin/CreateActivity" element={<AdminCreateActivity />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
