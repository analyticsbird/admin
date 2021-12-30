import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

import { Paper, styled } from "@mui/material";
import Typo from "components/Typo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "😍",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "😃",
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 1)",
    },
    {
      label: "😟",
      data: [3, 5, 6, 13, 6, 9],
      fill: false,
      backgroundColor: "rgba(255, 206, 86, 1)",
      borderColor: "rgba(255, 206, 86, 1)",
    },
    {
      label: "😢",
      data: [4, 1, 6, 11, 13, 4],
      fill: false,
      backgroundColor: "rgba(75, 192, 192, 1)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: "😠",
      data: [11, 3, 8, 5, 14, 12],
      fill: false,
      backgroundColor: "rgba(153, 102, 255, 1)",
      borderColor: "rgba(153, 102, 255, 1)",
    },
  ],
};

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));

const EmojiMultiLineChart :React.FC = () => (
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
      <Typo text="Rating over time" type="subheading" />
      <Line data={data} />
    </div>
  </PaperStyled>
);

export default EmojiMultiLineChart;
