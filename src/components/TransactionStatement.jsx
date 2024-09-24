import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const TransactionStatement = ({ text, amount, type }) => {
  return (
    <div className="flex flex-row shadow-md items-center justify-between w-full bg-white rounded-md mb-4 mt-8 p-2 border border-gray-300">
      <span className="">{text}</span>
      <span
        className={`text-${
          type === "expense" ? "red" : "green"
        }-500 flex flex-row items-center`}
      >
        {type === "expense" ? "-" : "+"} <FaRupeeSign /> {amount}
      </span>
    </div>
  );
};

export default TransactionStatement;
