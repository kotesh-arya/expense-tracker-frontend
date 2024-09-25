import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context object
const UserContext = createContext(null);

// Define the UserProvider component
const UserProvider = ({ children }) => {
  console.log("User provider component is rendering");
  // Initialize state
  const [userUpdate, setUserUpdate] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  async function fetchUserDetails() {
    console.log("fetching user details now");
    if (!localStorage.getItem("authenticationToken")) {
      return;
    }
    try {
      // setIsLoading(true);
      console.log("api called to get current user detalls");
      //  Todo:  Make this URL dynamic using .env to adapt both local and hosted backend
      const userDetailsResponse = await axios.get(
        "http://localhost:8080/api/me",
        {
          headers: {
            "x-auth-token": localStorage.getItem("authenticationToken"),
          },
        }
      );

      setUserDetails(userDetailsResponse.data);
    } catch (error) {
      // toast.error("Failed to Register, please Try again!");
      console.error("error accessing details of user", error);
    }
  }
  useEffect(() => {
    console.log("from useEffect");
    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ userDetails, setUserUpdate }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
