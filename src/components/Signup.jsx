import React, { useEffect, useState } from "react";
import Logo from "../../src/assets/money-pulse-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoaderIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { useUser } from "@/Contexts/userContext";

const Signup = () => {
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
  const { setUserUpdate } = useUser();

  const handleFormSubmission = async (data) => {
    setIsLoading(true);
    try {
      //  Todo:  Make this URL dynamic using .env to adapt both local and hosted backend
      const signupResponse = await axios.post(
        "http://localhost:8080/api/auth/register",
        data
      );

      localStorage.setItem("authenticationToken", signupResponse.data.token);
      const authToken = localStorage.getItem("authenticationToken");

      setToken(authToken);
      if (authToken) {
        toast.success("Registered Successfully, Welcome!");
        setUserUpdate((prev) => !prev);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log("error while dealing with token", error.response.data.msg);
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-auto"
          src={Logo}
          alt="Your Company"
          style={{ width: "300px" }}
        />
        <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
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
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-start leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="text-red-500">Username is required</p>
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
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500  focus-visible:outline-green-600"
            >
              {isLoading ? <LoaderIcon className="animate-spin" /> : "Sign up"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already a member?{"  "}
          <Link
            to={"/signin"}
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
