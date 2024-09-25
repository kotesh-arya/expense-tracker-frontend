import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { LogOut } from "lucide-react";

import { useUser } from "@/Contexts/userContext";
const Hamburger = ({ setIsHamburgerVisible, isHamburgerVisible }) => {
  const navigate = useNavigate();

  function toggleHamburger() {
    if (isHamburgerVisible) {
      setIsHamburgerVisible(false);
    } else {
      setIsHamburgerVisible(true);
    }
  }
  const logOutUser = () => {
    localStorage.removeItem("authenticationToken");
    navigate("/signin");
  };

  const { userDetails } = useUser();
  return (
    <div
      className={`flex absolute left-0 top-0 z-50 lg:hidden flex-col items-end backdrop-blur-xl bg-white/30 rounded-lg p-4 h-screen  transform ${
        isHamburgerVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <h2>{userDetails.username}</h2>
      <span className="p-2 cursor-pointer" onClick={toggleHamburger}>
        <ImCross />
      </span>
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

export default Hamburger;
