import React from "react";

import { CssBaseline } from "@mui/material";
import notFound from "images/404.svg";

const NotFound:React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-gray-200">
    <CssBaseline />
    <img alt="not found" className="max-h-96 h-full" src={notFound} />
  </div>
);

export default NotFound;
