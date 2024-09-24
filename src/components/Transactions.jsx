import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import SideNav from "./SideNav";
import TranasctionCard from "./TranasctionCard";
import Hamburger from "./Hamburger";

const Transactions = () => {
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
      <div className=" flex flex-col shadow-md  rounded-md  w-10/12 border border-gray-300  p-6">
        <span className="text-3xl my-2 font-extrabold ">Transactions</span>
        <div className="flex flex-col justify-between">
          <TranasctionCard
            title="Shopify"
            amount={5000}
            date=""
            type="income"
            description={"Earnings related to this source of income "}
          />
          <TranasctionCard
            title="Shopify"
            amount={5000}
            date=""
            type="expense"
            description={"Expense related to this means of expense "}
          />
          <TranasctionCard
            title="Shopify"
            amount={5000}
            date=""
            type="income"
            description={"Earnings related to this source of income "}
          />
          <TranasctionCard
            title="Shopify"
            amount={5000}
            date=""
            type="income"
            description={"Earnings related to this source of income "}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
