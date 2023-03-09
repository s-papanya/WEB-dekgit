import { Route, Routes } from "react-router-dom";

import Contact from "../Pages/Contact/contact";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import AdminCreateActivity from "../Pages/Admin-CreateActivity/admin-createActivity";
import ActivityDetail from "../Pages/Activity-Detail/activityDetail";
import History from "../Pages/History/history";
import { ProtectRoute } from "./provider";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectRoute>
              <Login />
            </ProtectRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectRoute>
              <Contact />
            </ProtectRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />
        <Route
          path="/activityDetail/:activityType/:activityId"
          element={
            <ProtectRoute>
              <ActivityDetail />
            </ProtectRoute>
          }
        />
        <Route
          path="/Admin/CreateActivity"
          element={
            <ProtectRoute>
              <AdminCreateActivity />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
