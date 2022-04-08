import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styled from "@mui/system/styled";
import React from "react";
import { SketchPicker } from "react-color";
import Header from "./Header";
import PositionSelect from "./PositionSelect";

const Customization:React.FC = () => {
  const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
        >
          <div className="mb-8">
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

                <PositionSelect />
                <SketchPicker />
              </div>

            </PaperStyled>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Customization;
