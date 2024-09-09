import React from "react";

const TransactionStatement = ({ text, amount }) => {
  return (
    <div className="flex flex-row shadow-md items-center justify-between w-full bg-white rounded-md mb-4 mt-3 p-2">
      <span className="">{text}</span>
      <span className="">{amount}</span>
    </div>
  );
};

export default TransactionStatement;
