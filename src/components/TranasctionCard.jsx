import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";

const TranasctionCard = ({ title, amount, type, date, description }) => {
  return (
    <div className="flex flex-col-reverse items-end md:flex-row justify-between w-full my-2 border border-gray-300 rounded-md  p-4 shadow-md">
      {/* Transaction icon */}
      <div className="flex flex-col md:flex-row justify-start  w-full  items-center md:w-9/12 gap-8">
        {type === "income" ? (
          <div className="text-5xl text-green-500">
            <GiReceiveMoney />
          </div>
        ) : (
          <div className="text-5xl text-red-500">
            <GiPayMoney />
          </div>
        )}

        <div className=" w-full flex flex-col justify-evenly">
          <h4>{title}</h4>
          <div className=" w-full flex flex-row flex-wrap justify-between ">
            <span className="flex flex-row items-center">
              {" "}
              <FaRupeeSign />
              {amount}
            </span>
            <span className="flex flex-row items-center">
              <MdDateRange /> {date}
            </span>
            <span className="flex flex-row items-center">
              {" "}
              <RiMessage3Fill />
              {description}
            </span>
          </div>
        </div>
      </div>
      {/* Delete Transaction Icon */}
      <div className="w-1/12 text-3xl text-red-500 flex flex-row items-center">
        <span className="cursor-pointer">
          <MdDelete />
        </span>
      </div>
    </div>
  );
};

export default TranasctionCard;
