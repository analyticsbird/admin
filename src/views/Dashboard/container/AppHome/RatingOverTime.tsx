import React from "react";

import { Paper, styled } from "@mui/material";
import Typo from "components/Typo";

import { Chart } from "react-google-charts";

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));

const data = [
  [
    "",
    "😍",
    "😃",
    "😟",
    "😢",
  ],
  [new Date(2014, 0), -0.5, 5.7, 5.7, 0],
  [new Date(2014, 1), 0.4, 8.7, 0, 10],
  [new Date(2014, 2), 0.5, 12, 0, 0],
  [new Date(2014, 3), 2.9, 15.3, 0, 0],
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};
const RatingOverTime :React.FC = () => (
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
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  </PaperStyled>
);

export default RatingOverTime;
