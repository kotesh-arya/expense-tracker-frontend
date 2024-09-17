import React, { useState } from "react";
import SideNav from "./SideNav";
import LinePlot from "./LinePlot";
import MoneyCard from "./MoneyCard";
import TransactionStatement from "./TransactionStatement";
import Hamburger from "./Hamburger";
import { TiThMenu } from "react-icons/ti";
import { TransactionsBarChart } from "./TransactionsBarChart";
import { IncomeRadialChart } from "./IncomeRadialChart";

const Dashboard = () => {
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
      <div className=" flex flex-col  shadow-md justify-between rounded-md w-10/12 border border-gray-300  p-6">
        <div className="w-full flex flex-row">
          <div className="md:w-full lg:w-7/12  flex flex-col  ">
            <span className="text-3xl font-extrabold ">Monthly Statistics</span>
            {/* New charts  */}
            <div className="flex flex-col justify-between">
              <div className="h-40 mt-10">
                <TransactionsBarChart />
              </div>
            </div>
          </div>

          <div className="md:w-full lg:w-5/12  ">
            <span className="text-3xl font-extrabold mb-10 ">
              Recent History
            </span>
            <TransactionStatement
              text="Shopify"
              amount="5000"
              type={"income"}
            />
            <TransactionStatement text="Stocks" amount="5000" type={"income"} />
            <TransactionStatement
              text=" Dentist Appointment "
              amount="5000"
              type={"expense"}
            />
            <TransactionStatement
              text="Shopify"
              amount="5000"
              type={"income"}
            />
            <TransactionStatement
              text="Investment returns"
              amount="5000"
              type={"income"}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-8 justify-center p-7 mt-1 ">
            <MoneyCard title={"Total Income"} amount={20000} color="green" />
            <MoneyCard title={"Total Expenses"} amount={5000} color="red" />
            <MoneyCard title={"Total Balance"} amount={15000} color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
