import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Paper, styled } from "@mui/material";
import Typo from "components/Typo";

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));
interface PropTypes{
  ratingByDate:any[]
}
const Rechart:React.FC<PropTypes> = ({ ratingByDate }) => {
  console.log(ratingByDate);

  const data = ratingByDate.map((val) => ({
    name: val[0],
    "😠": val[1],
    "😢": val[2],
    "😟": val[3],
    "😃": val[4],
    "😍": val[5],
  }));
  console.log(data);
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
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              strokeWidth={2}
              type="monotone"
              dataKey="😠"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              strokeWidth={2}
              type="monotone"
              dataKey="😢"
              stroke="#82ca9d"
            />
            <Line
              strokeWidth={2}
              type="monotone"
              dataKey="😟"
              stroke="#ffdb84"
            />
            <Line
              strokeWidth={2}
              type="monotone"
              dataKey="😃"
              stroke="#6ebaf0"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </PaperStyled>
  );
};

export default Rechart;
