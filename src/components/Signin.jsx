import React from "react";
import Logo from "../../src/assets/money-pulse-logo.png";
import { Link } from "react-router-dom";
const Signin = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.target.elements).forEach((element) => {
      console.log(element.name);
      if (element.name) {
        formData[element.name] = element.value;
      }
    });

    console.log(formData, "form data");
  };
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
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={(e) => handleFormSubmission(e)}
          className="space-y-6"
          //   action="#"
          //   method="POST"
        >
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
              />
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
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-green-600 hover:text-green-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sign in
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
