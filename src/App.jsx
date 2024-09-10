import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Incomes from "./components/Incomes";
import Expenses from "./components/Expenses";
import Transactions from "./components/Transactions";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
    element: <Incomes />,
  },
  {
    path: "/expenses",
    element: <Expenses />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
]);
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
