import { CircularProgress } from "@mui/material";
import React from "react";

const Loader:React.FC = () => (
  <div className="w-full h-full flex justify-center items-center">
    <CircularProgress />
  </div>
);

export default Loader;
