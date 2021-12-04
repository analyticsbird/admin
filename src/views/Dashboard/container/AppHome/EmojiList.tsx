/* eslint-disable max-len */
import React from "react";

import {
  Grid, Paper, Typography, styled,
} from "@mui/material";

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));
const EmojiList:React.FC = () => (
  <Grid
    item
    lg={6}
    md={12}
    xl={6}
    xs={12}
  >
    <PaperStyled
      className={`
            w-full
            h-48
            sm:mt-8 mt-5 
            sm:mr-8 mr-0 
            rounded-6 shadow-none border 
            border-solid 
            cursor-pointer`}
    >
      <div className="p-8 flex h-full flex-wrap items-center">
        <div className="sm:w-52 sm:min-w-ful w-12 h-full text-center md:mt-0 mt-2 flex flex-col justify-center">
          <span className="text-5xl">😍</span>
          <Typography variant="h6" className="mt-auto text-24 font-semibold text-gray-500">
            43
          </Typography>
        </div>
        <div className="sm:w-52 sm:min-w-ful w-12 h-full text-center md:mt-0 mt-2 flex flex-col justify-center">
          <span className="text-5xl">😃</span>
          <Typography variant="h6" className="mt-auto text-24 font-semibold text-gray-500">
            32
          </Typography>
        </div>
        <div className="sm:w-52 sm:min-w-ful w-12 h-full text-center md:mt-0 mt-2 flex flex-col justify-center">
          <span className="text-5xl">😟</span>
          <Typography variant="h6" className="mt-auto text-24 font-semibold text-gray-500">
            243
          </Typography>
        </div>
        <div className="sm:w-52 sm:min-w-ful w-12 h-full text-center md:mt-0 mt-2 flex flex-col justify-center">
          <span className="text-5xl">😢</span>
          <Typography variant="h6" className="mt-auto text-24 font-semibold text-gray-500">
            10
          </Typography>
        </div>
        <div className="sm:w-52 sm:min-w-ful w-12 h-full text-center md:mt-0 mt-2 flex flex-col justify-center">
          <span className="text-5xl">😠</span>
          <Typography variant="h6" className="mt-auto text-24 font-semibold text-gray-500">
            3
          </Typography>
        </div>
      </div>

    </PaperStyled>
  </Grid>
);

export default EmojiList;
