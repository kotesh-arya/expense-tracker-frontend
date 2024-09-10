import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <div className=" flex  flex-col shadow-md rounded-md bg-amber-100  border-4 border-white  w-2/12">
      {/* User Details */}
      <div className="flex flex-row rounded-tr rounded-tl p-4 border-b-2 border-b-green-500 gap-3">
        <div>
          <img
            className="rounded-full h-14 w-14"
            src="https://i.pravatar.cc/300"
            alt=""
          />
        </div>
        <div className="flex  flex-col p-1">
          <span className="font-bold text-xl pb-1">User</span>
          <span>Your Money</span>
        </div>
      </div>
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

export default SideNav;
