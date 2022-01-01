import React from "react";
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

import { Paper, styled } from "@mui/material";
import Typo from "components/Typo/Typo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labelMapping:any = {
  1: "😍", 2: "😃", 3: "😟", 4: "😢", 5: "😠",
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));

const EmojiBarChart :React.FC<any> = ({ rating }) => {
  const labels: string[] = [];
  const dataValue: string[] = [];
  Object.keys(rating).map((key: string| number) => {
    labels.push(labelMapping[key]);
    dataValue.push(rating[key]);
    return ({ key, value: rating[key] });
  });
  const data = {
    labels,

    legend: {
      display: false,
    },
    datasets: [
      {
        label: "",
        data: dataValue,
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
    <PaperStyled
      className={`
        flex-grow
        h-full
        sm:mt-8 mt-5
        rounded-6 shadow-0 border border 
        border-solid
        border-gray-300`}
    >
      <div className="p-8">
        <Typo text="Total Rating" type="subheading" />
        <Bar data={data} options={options as any} />
      </div>
    </PaperStyled>
  );
};

export default EmojiBarChart;
