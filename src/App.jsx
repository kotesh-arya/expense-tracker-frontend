import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Incomes from "./components/Incomes";
import Expenses from "./components/Expenses";
import Transactions from "./components/Transactions";
import ProtectedComponent from "./components/ProtectedComponent";
import { UserProvider } from "./Contexts/userContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedComponent>
        <Dashboard />
      </ProtectedComponent>
    ),
    errorElement: (
      <div>
        404 Not Found <Link className="text-blue-500">Back to main page</Link>
      </div>
    ),
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/incomes",
    element: (
      <ProtectedComponent>
        <Incomes />
      </ProtectedComponent>
    ),
  },
  {
    path: "/expenses",
    element: (
      <ProtectedComponent>
        <Expenses />
      </ProtectedComponent>
    ),
  },
  {
    path: "/transactions",
    element: (
      <ProtectedComponent>
        <Transactions />
      </ProtectedComponent>
    ),
  },
]);
function App() {
  return (
    <UserProvider>
      <div className="relative">
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  );
}

export default App;
