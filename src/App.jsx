import { useState } from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import LinePlot from "./components/LinePlot";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
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
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <RouterProvider router={router} />
      {/* <Signin /> */}
      {/* <Dashboard /> */}
      {/* <LinePlot  /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
