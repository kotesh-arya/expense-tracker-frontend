import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context object
const UserContext = createContext(null);

// Define the UserProvider component
const UserProvider = ({ children }) => {
  // Initialize state
  const [userDetails, setUserDetails] = useState({});
  async function fetchUserDetails() {
    if (!localStorage.getItem("authenticationToken")) {
      return;
    }
    try {
      // setIsLoading(true);
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
    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ userDetails }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const { userDetails } = useContext(UserContext);
  return userDetails;
};

export { UserProvider, useUser };
