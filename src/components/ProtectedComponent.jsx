import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const authToken = localStorage.getItem("authenticationToken");
      if (authToken) {
        navigate("/");
      } else {
        navigate("/signin");
      }
    } catch (error) {
      console.error("error in the protected route component", error);
    }
  }, []);
  return <div>{children}</div>;
};

export default ProtectedComponent;
