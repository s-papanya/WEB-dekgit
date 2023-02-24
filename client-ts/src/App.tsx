import AppRoutes from "./Config/routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AppRoutes />
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

export default App;
