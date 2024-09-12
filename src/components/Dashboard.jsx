import React, { useState } from "react";
import SideNav from "./SideNav";
import LinePlot from "./LinePlot";
import MoneyCard from "./MoneyCard";
import TransactionStatement from "./TransactionStatement";
import Hamburger from "./Hamburger";
import { TiThMenu } from "react-icons/ti";
const Dashboard = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
  function toggleHamburger() {
    if (isHamburgerVisible) {
      setIsHamburgerVisible(false);
    } else {
      setIsHamburgerVisible(true);
    }
  }
  let allTransations = [
    { date: "2023-04-30T12:00:00.00+00:00", value: 1000 },
    { date: "2023-05-01T12:00:00.00+00:00", value: 6000 },
    { date: "2023-05-02T12:00:00.00+00:00", value: 1200 },
    { date: "2023-05-03T12:00:00.00+00:00", value: 7000 },
    { date: "2023-05-04T12:00:00.00+00:00", value: 1000 },
    { date: "2023-05-05T12:00:00.00+00:00", value: 1020 },
    { date: "2023-05-06T12:00:00.00+00:00", value: 4000 },
  ];

  let incomes = [
    { date: "2023-04-30T12:00:00.00+00:00", value: 4 },
    { date: "2023-05-01T12:00:00.00+00:00", value: 6 },
    { date: "2023-05-02T12:00:00.00+00:00", value: 8 },
    { date: "2023-05-03T12:00:00.00+00:00", value: 7 },
    { date: "2023-05-04T12:00:00.00+00:00", value: 10 },
    { date: "2023-05-05T12:00:00.00+00:00", value: 12 },
    { date: "2023-05-06T12:00:00.00+00:00", value: 4 },
  ];
  let expenses = [
    { date: "2023-04-30T12:00:00.00+00:00", value: 4 },
    { date: "2023-05-01T12:00:00.00+00:00", value: 6 },
    { date: "2023-05-02T12:00:00.00+00:00", value: 8 },
    { date: "2023-05-03T12:00:00.00+00:00", value: 7 },
    { date: "2023-05-04T12:00:00.00+00:00", value: 10 },
    { date: "2023-05-05T12:00:00.00+00:00", value: 12 },
    { date: "2023-05-06T12:00:00.00+00:00", value: 4 },
  ];
  let tranasctionsData = allTransations.map((d) => ({
    ...d,
    date: new Date(d.date),
  }));
  let incomesData = incomes.map((d) => ({ ...d, date: new Date(d.date) }));
  let expensesData = expenses.map((d) => ({ ...d, date: new Date(d.date) }));

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-100 to-violet-100 p-6 w-full   flex justify-center flex-row gap-10  ">
      {/* Side nav container */}
      <SideNav />
      {/* <span>huhu</span> */}
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
      <div className=" flex flex-col lg:flex-row shadow-md justify-between rounded-md bg-amber-100 w-11/12 lg:w-10/12 border-4 border-white  p-6">
        <div className="md:w-full lg:w-7/12  flex flex-col  ">
          <span className="text-3xl font-extrabold ">Monthly balance</span>
          {/* New charts  */}
          <div className="flex flex-col justify-between">
            <div className="h-40 mt-0">
              <LinePlot data={tranasctionsData} />
            </div>

            <div className="h-40 mt-4">
              <span className="text-3xl font-extrabold ">Incomes</span>
              <LinePlot data={incomesData} />
            </div>

            <div className="h-40 mt-14">
              <span className="text-3xl font-extrabold ">Expenses</span>
              <LinePlot data={expensesData} />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-center p-7 mt-10 ">
            <MoneyCard title={"Total Income"} amount={20000} color="green" />
            <MoneyCard title={"Total Expenses"} amount={5000} color="red" />
            <MoneyCard title={"Total Balace"} amount={15000} color="black" />
          </div>
        </div>
        <div className="md:w-full lg:w-5/12 ">
          <span className="text-3xl font-extrabold ">Recent History</span>
          <TransactionStatement text="Shopify" amount="5000" type={"income"} />
          <TransactionStatement text="Stocks" amount="5000" type={"income"} />
          <TransactionStatement
            text=" Dentist Appointment "
            amount="5000"
            type={"expense"}
          />
          <TransactionStatement text="Shopify" amount="5000" type={"income"} />
          <TransactionStatement
            text="Investment returns"
            amount="5000"
            type={"income"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
