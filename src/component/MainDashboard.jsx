import React from "react";
import { VscTriangleDown } from "react-icons/vsc";
import { AiOutlineBell } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import sitImg from "../assets/undraw_contemplating_re_ynec.svg";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const MainDashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",

        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",

        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className=" pt-6 after:rounded-tr-2xl relative after:rounded-bl-3xl after:absolute after:h-[286px] after:top-0 after:-z-10  after:w-full after:bg-[#f0f1f5] min-h-[286px] relative">
      <div className="w-[90%] mx-auto">
        <div className="dashboardItems flex justify-between items-center ml-auto gap-6 text-xs lg:w-[70%]">
          <FaBars className="lg:hidden text-xl" />
          <div className="hidden md:block">
            <p className="text-gray-500 font-semibold">
              US Stock market opens in{" "}
              <span className="text-black"> 3 hours</span>{" "}
            </p>
          </div>
          <div className="font-semibold flex items-center gap-5">
            <div className="flex justify-center gap-4 items-center">
              Main Wallert
              <VscTriangleDown />
            </div>
            <div>
              <AiOutlineBell className="text-[28px]" />
            </div>
            <div>
              <BsPlusCircleFill className="text-[42px] text-[#212237]" />
            </div>
          </div>
        </div>
        <div className="upgradeStat grid gap-4 mt-[1rem]">
          <div
            style={{ gridTemplateRows: "40px" }}
            className="card-shadow grid  h-[253px] rounded-[1rem] bg-[#ffffff]"
          >
            <div className="text-[14px] text-center mx-auto font-semibold">
              Upgrade your Account
            </div>
            <div
              className="flex justify-between
            "
            >
              <div className=" flex-1 ">
                <img src={sitImg} alt="" className="h-full object-cover" />
              </div>
              <div style={{ flex: "1.5" }}>
                <p className="text-[11px]">
                  Access many other features and helpful insights
                </p>
                <BsFillArrowRightSquareFill />
              </div>
            </div>
          </div>
          <div className="card-shadow h-[253px] rounded-[1rem] bg-[#ffffff]">
            <Bar options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
