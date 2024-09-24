import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { LogOut } from "lucide-react";

import { CircleUser } from "lucide-react";
import { useUser } from "@/Contexts/userContext.jsx";

const SideNav = () => {
  const navigate = useNavigate();
  const logOutUser = () => {
    localStorage.removeItem("authenticationToken");
    navigate("/signin");
  };
  const userDetails = useUser();
  return (
    <div className=" hidden lg:flex  lg:flex-col shadow-md rounded-md   border border-gray-300  w-2/12 ">
      {/* User Details */}
      <div className="flex flex-row rounded-tr rounded-tl p-4 items-center   gap-3 border">
        {/*  Replace icon with user uploaded image later!! */}
        <CircleUser width={44} height={44} />
        <div className="flex  flex-col p-1">
          <span className="font-bold text-xl pb-1">{userDetails.username}</span>
          <span className="flex flex-row items-center">
            <FaRupeeSign /> 15000
          </span>
        </div>
      </div>
      <ul className="p-6">
        <li className="font-bold text-md pb-4">
          <NavLink
            className={`flex items-center justify-start gap-1 cursor-pointer  ${({
              isActive,
              isPending,
            }) => {
              return isPending
                ? "text-black"
                : isActive
                ? "text-green-500"
                : "text-red-500";
            }}} `}
            to={"/"}
          >
            {" "}
            <RxDashboard /> Dashboard
          </NavLink>
        </li>
        <li className="font-bold text-md pb-4">
          <NavLink
            className={`flex items-center justify-start gap-1 cursor-pointer  `}
            to={"/transactions"}
          >
            <FaMoneyBillTransfer /> <span>Transactions</span>
          </NavLink>
        </li>
        <li className="font-bold text-md pb-4">
          <NavLink
            className={`flex items-center justify-start gap-1 cursor-pointer  `}
            to={"/incomes"}
          >
            <GiReceiveMoney /> <span>Incomes</span>
          </NavLink>
        </li>
        <li className="font-bold text-md pb-4">
          <NavLink
            className={`flex items-center justify-start gap-1 cursor-pointer  `}
            to={"/expenses"}
          >
            <GiPayMoney /> <span>Expenses</span>
          </NavLink>
        </li>
      </ul>
      <div className="w-full ">
        <span
          onClick={logOutUser}
          className="cursor-pointer font-bold text-red-500 flex justify-evenly w-full"
        >
          Log out <LogOut />
        </span>
      </div>
    </div>
  );
};

export default SideNav;
