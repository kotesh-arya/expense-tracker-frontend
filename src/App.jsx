import { useState } from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import LinePlot from "./components/LinePlot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      {/* <Signin /> */}
      <Dashboard />
      {/* <LinePlot  /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
