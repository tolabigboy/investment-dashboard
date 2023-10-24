import React from "react";
import { history } from "../data/history";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { AiFillApple } from "react-icons/ai";

const PortfolioDashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="mt-[2rem]">
      <div className="flex justify-between items-center">
        <div>Portfolio History</div>
        <div>Per Industry</div>
      </div>

      <div className="card-portfolio grid gap-5 mt-[2rem]">
        <div className="card  bg-[#fbfbfb] p-[31px]">
          <div className="date font-bold relative after:absolute after:w-[24px] after:border-gray-500 after:left-0 after:bottom-0 after:border-b-[3px] pb-[10px]">
            NOV 19
          </div>
          <div className="content mt-[94px]">
            <p className="text-[15px]">portfolio value</p>
            <div className="text-[24px]">$ 9864.34</div>
            <div className="text-[#69ccca] font-bold">234.23(30.34%)</div>
          </div>
        </div>
        <div className="card  bg-[#fbfbfb] p-[31px]">
          <div className="date font-bold relative after:absolute after:w-[24px] after:border-gray-500 after:left-0 after:bottom-0 after:border-b-[3px] pb-[10px]">
            NOV 19
          </div>
          <div className="content mt-[94px]">
            <p className="text-[15px]">portfolio value</p>
            <div className="text-[24px]">$ 9864.34</div>
            <div className="text-[#69ccca] font-bold">234.23(30.34%)</div>
          </div>
        </div>
        <div className="card  bg-[#fbfbfb] p-[31px]">
          <div className="date font-bold relative after:absolute after:w-[24px] after:border-gray-500 after:left-0 after:bottom-0 after:border-b-[3px] pb-[10px]">
            NOV 19
          </div>
          <div className="content mt-[94px]">
            <p className="text-[15px]">portfolio value</p>
            <div className="text-[24px]">$ 9864.34</div>
            <div className="text-[#69ccca] font-bold">234.23(30.34%)</div>
          </div>
        </div>
        <div className="card  bg-blue-700 md:ml-4 grid place-content-center">
          <Doughnut data={data} />
        </div>
      </div>
      <div className="portfolio-symbols my-[2rem] flex items-center justify-between">
        <div className="symbol">
          <p className="text-[10px]">SYMBOL</p>
          <div className="flex items-center justify-between">
            <AiFillApple /> <span className="pl-[.5rem] font-bold">AAPL</span>
          </div>
        </div>
        <div className="price">
          <p className="text-[10px]">PRICE</p>
          <div>= $ 234.00</div>
        </div>
        <div className="return">
          <p className="text-[10px]">% RETURN</p>
          <div className="text-[#0aaeab]">= $ 234.00</div>
        </div>
        <div className="net-cost">
          <p className="text-[10px]">TOTAL NET COST</p>
          <div>= $ 234.00</div>
        </div>
        <div className="market-value">
          <p className="text-[10px]">MARKET VALUE</p>
          <div>= $ 234.00</div>
        </div>
        <div className="total-gain">
          <p className="text-[10px]">TOTAL GAIN</p>
          <div className="text-[#0aaeab]">= $ 234.00</div>
        </div>
        <div className="daily-gain">
          <p className="text-[10px]">DAILY GAIN</p>
          <div className="text-[#fb5253]">= $ 234.00</div>
        </div>
        <div className="portfolio">
          <p className="text-[10px]">% PORTFOLIO</p>
          <div>= $ 234.00</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
