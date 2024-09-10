import React from "react";
import { FaRupeeSign } from "react-icons/fa";
const MoneyCard = ({ title, amount, color }) => {
  return (
    <div
      className={`w-52 shadow-md text-${color}-400 flex-col bg-white rounded-lg p-5`}
    >
      <h4>{title}</h4>
      <span className="flex flex-row items-baseline">
        {" "}
        <FaRupeeSign /> <h1>{amount}</h1>
      </span>
    </div>
  );
};

export default MoneyCard;
