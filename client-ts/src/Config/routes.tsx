import { Route, Routes } from "react-router-dom";

import Contact from "../Pages/Contact/contact";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import AdminActivityDetail from "../Pages/Admin/Admin-Activity-Detail/admin-activityDetail";
import AdminCreateActivity from "../Pages/Admin/Admin-CreateActivity/admin-createActivity";
import ActivityDetail from "../Pages/Activity-Detail/activityDetail";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/activityDetail/:activityId"
          element={<ActivityDetail />}
        />
        <Route
          path="/AdminActivityDetail/:activityId"
          element={<AdminActivityDetail />}
        />
        <Route path="/AdminCreateActivity" element={<AdminCreateActivity />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
