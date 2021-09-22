import { CssBaseline } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

import layoutVisibilityCheck from "utils/someHandyFunctions";
import ContentMain, { Toolbar } from "./Styled";

import LayoutDrawer from "./LayoutDrawer";
import LayoutHeader from "./LayoutHeader";

interface PropTypes {
  children: React.ReactNode
}
const MainLyout:React.FC<PropTypes> = ({ children }) => {
  const { pathname } = useLocation();
  const showLayout = layoutVisibilityCheck(pathname);

  return (showLayout
    ? (
      <div className="flex">
        <CssBaseline />
        <LayoutHeader />
        <LayoutDrawer />
        <ContentMain>
          <Toolbar />
          <div>
            {children}
          </div>
        </ContentMain>
      </div>
    )
    : <>{children}</>);
};

export default MainLyout;
