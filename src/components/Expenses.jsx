import React, { useState } from "react";
import SideNav from "./SideNav";
import { FaRupeeSign } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";
import TranasctionCard from "./TranasctionCard";
import Hamburger from "./Hamburger";
const Expenses = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
  function toggleHamburger() {
    if (isHamburgerVisible) {
      setIsHamburgerVisible(false);
    } else {
      setIsHamburgerVisible(true);
    }
  }
  return (
    <div
      onClick={toggleHamburger}
      className="min-h-screen  p-6 w-full   flex justify-center flex-row gap-10  "
    >
      {/* Side nav container */}
      <SideNav />
      {!isHamburgerVisible ? (
        <TiThMenu
          className="lg:hidden absolute  left-2   md:left-4 top-4 cursor-pointer"
          size={20}
          onClick={toggleHamburger}
        />
      ) : null}
      {isHamburgerVisible ? (
        <Hamburger
          isHamburgerVisible={isHamburgerVisible}
          setIsHamburgerVisible={setIsHamburgerVisible}
        />
      ) : null}
      <div className=" flex flex-col shadow-md  rounded-md  w-10/12 border border-gray-300 px-6 py-2">
        {/* <span className="text-3xl font-extrabold">Incomes</span> */}
        {/* Amount Div */}
        <div className="w-full border-2 border-white my-4 flex flex-col items-center">
          <span className="font-bold text-xl">Total Expense</span>{" "}
          <span className="flex flex-row items-center font-bold text-xl">
            <FaRupeeSign />{" "}
            <span className=" font-bold text-xl text-red-600">5000</span>
          </span>
        </div>
        {/* Form and items container */}
        <div className="w-full flex flex-col lg:flex-row md:justify-between md:gap-8  lg:justify-between">
          {/* form */}
          <div className="md:w-full lg:w-3/12  ">
            <form action="" className="flex flex-col items-end">
              {/* Title input */}
              <input
                type="text"
                placeholder="Title"
                className="w-full mb-8 bg-transparent rounded-md  shadow-md border border-gray-300 focus:border-none focus:outline-none   "
              />
              {/* Amount Input */}
              <input
                type="text"
                placeholder="Amount"
                className="w-full mb-8 bg-transparent rounded-md  shadow-md border border-gray-300 focus:border-none focus:outline-none   "
              />

              {/* Date Input */}
              {/* <input
                type="text"
                className="w-full mb-8 bg-transparent rounded-md  shadow-md border border-gray-300 focus:border-none focus:outline-none   "
              /> */}

              {/* Income category options input */}
              <select
                type="select"
                className="w-full mb-8 bg-transparent rounded-md  shadow-md border border-gray-300 focus:border-none focus:outline-none   "
              >
                <option className="bg-red-100 rounded-sm" value="one">
                  Select Category
                </option>

                <option className="bg-red-100 rounded-sm" value="one">
                  one
                </option>
                <option className="bg-red-100 rounded-sm" value="two">
                  two
                </option>

                <option className="bg-red-100 rounded-sm" value="three">
                  three
                </option>

                <option className="bg-red-100 rounded-sm" value="four">
                  four
                </option>
              </select>

              <input
                type="text"
                placeholder="Description"
                className="w-full mb-8 bg-transparent rounded-md  shadow-md border border-gray-300 focus:border-none focus:outline-dashed   "
              />
            </form>
            <button className=" bg-red-500 hover:bg-red-600 p-2 w-full flex items-center justify-center rounded-xl flex-row shadow-md">
              Add Expense
            </button>
          </div>
          <div className="md:w-full lg:w-8/12 flex flex-col justify-between  ">
            <TranasctionCard
              title="Shopify"
              amount={5000}
              date=""
              type="expense"
              description={"Earnings related to this source of income "}
            />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Expenses;
