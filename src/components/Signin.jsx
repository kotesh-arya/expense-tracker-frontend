import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { LoaderIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

import Logo from "../../src/assets/money-pulse-logo.png";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {
  // console.log("current environment --->", import.meta.env.VITE_ENVIRONMENT);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmission = async (data) => {
    try {
      setIsLoading(true);
   
      const loginResponse = await axios.post(
        `${
          import.meta.env.VITE_ENVIRONMENT === "prod"
            ? "https://expense-tracker-backend-x1v1.onrender.com"
            : "http://localhost:8080"
        }/api/auth/login`,
        data
      );

      localStorage.setItem("authenticationToken", loginResponse.data.token);
      const authToken = localStorage.getItem("authenticationToken");

      setToken(authToken);
      if (authToken) {
        toast.success("Logged In Successfully !");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log("Error while Logging in ", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8  mt-0">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-auto"
          src={Logo}
          alt="Your Company"
          style={{ width: "300px" }}
        />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in with your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(handleFormSubmission)}
          className="space-y-6"
          //   action="#"
          //   method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-start leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                {...register("password", { required: true, minLength: 6 })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">
                Password is required and must be at least 6 characters long
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              {isLoading ? <LoaderIcon className="animate-spin" /> : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member ?{"  "}
          <Link
            to={"/signup"}
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
