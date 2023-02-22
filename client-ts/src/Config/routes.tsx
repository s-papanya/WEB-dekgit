import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contact from "../Pages/Contact/contact";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import AdminFocusContent from "../Pages/Admin/Admin-FocusContent/admin-focusContent"
import AdminCreateActivity from "../Pages/Admin/Admin-CreateActivity/admin-createActivity"

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AdminFocusContent" element={<AdminFocusContent />} />
        <Route path="/AdminCreateActivity" element={<AdminCreateActivity />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default AppRoutes;
