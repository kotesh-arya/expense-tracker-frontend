import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Hamburger = ({ setIsHamburgerVisible, isHamburgerVisible }) => {
  function toggleHamburger() {
    if (isHamburgerVisible) {
      setIsHamburgerVisible(false);
    } else {
      setIsHamburgerVisible(true);
    }
  }
  return (
    <div
      className={`flex absolute left-0 top-0 z-50 lg:hidden flex-col items-end bg-amber-100 h-screen  transform ${
        isHamburgerVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <span className="p-4 cursor-pointer" onClick={toggleHamburger}>
        <ImCross />
      </span>
      <ul className="p-6">
        <li className="font-bold text-md pb-4">
          <NavLink
            className={`flex items-center justify-start gap-1 cursor-pointer  ${({
              isActive,
              isPending,
            }) => {
              console.log(isActive, " is it active ?? ");
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
    </div>
  );
};

export default Hamburger;
