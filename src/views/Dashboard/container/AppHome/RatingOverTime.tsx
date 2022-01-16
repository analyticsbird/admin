import React from "react";

import { Paper, styled } from "@mui/material";
import Typo from "components/Typo";

import { Chart } from "react-google-charts";

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));

const options = {
  curveType: "function",
  legend: { position: "bottom" },
  vAxis: {
    format: "long",
  },
  series: {
    0: { color: "#f64959" },
    1: { color: "#f7c662" },
    2: { color: "#3368ff" },
    3: { color: "#343435" },
    4: { color: "#20b8a8" },
  },
  tooltip: { isHtml: true },
};

interface PropTypes{
  ratingByDate:any[]
}
const RatingOverTime :React.FC <PropTypes> = ({ ratingByDate }) => {
  const data = [
    [
      "",
      "😠",
      "😢",
      "😟",
      "😃",
      "😍",
    ],
    ...ratingByDate,
  ];
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
};

export default RatingOverTime;
