import React from "react";
import SideNav from "./SideNav";
import LinePlot from "./LinePlot";
import MoneyCard from "./MoneyCard";
import TransactionStatement from "./TransactionStatement";

const Dashboard = () => {
  const expenseData = {
    totalIncome: 11000,
    totalExpenses: 0,
    expensesByCategory: {},
    budgetUtilization: [300, 500, 700, 1000, 1200],
    savingsProgress: [100, 200, 400, 600, 800],
  };
  return (
    <div className="min-h-screen bg-white p-6 w-full   flex justify-center flex-row gap-10  ">
      {/* Side nav container */}
      <SideNav />
      <div className=" flex flex-row shadow-md justify-between rounded-md bg-amber-100 w-10/12  p-6">
        <div className="w-7/12">
          <span className="font-bold text-xl ">All Transactions</span>
          <LinePlot data={expenseData} />
          <div className="flex flex-wrap gap-8 justify-center p-7 ">
            <MoneyCard title={"Total Income"} amount={20000} color={"green"} />
            <MoneyCard title={"Total Expenses"} amount={10000} color={"red"} />
            <MoneyCard title={"Total Balace"} amount={10000} color={"white"} />
          </div>
        </div>
        <div className="w-5/12 ">
          <span className="font-bold text-xl ">Recent History</span>
          <TransactionStatement
            text="Dentist Appointment"
            amount="2000"
            type={"expense"}
          />
          <TransactionStatement
            text="Travelling"
            amount="2000"
            type={"expense"}
          />
          <TransactionStatement
            text="From Frelance"
            amount="20000"
            type={"income"}
          />
          <TransactionStatement
            text="Dentist Appointment"
            amount="2000"
            type={"expense"}
          />
          <TransactionStatement
            text="Dentist Appointment"
            amount="2000"
            type={"expense"}
          />
          <TransactionStatement
            text="Dentist Appointment"
            amount="2000"
            type={"expense"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
