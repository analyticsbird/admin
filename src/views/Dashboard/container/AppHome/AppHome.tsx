import React from "react";

import { CssBaseline, Grid } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CategoryCard from "components/CategoryCard";

import Header from "./Header";
import EmojiBarChart from "./EmojiBarChart";
import EmojiList from "./EmojiList";
import EmojiMultiLineChart from "./EmojiMultiLineChart";

const AppHome:React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Grid container spacing={2}>
      <CategoryCard
        Icon={SentimentSatisfiedAltIcon}
        iconBg="#F6993F"
        title="Total rating"
      />
      <CategoryCard
        Icon={AssignmentIcon}
        title="Total feedback"
      />
      <EmojiList />
    </Grid>
    <Grid container spacing={2}>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
      >
        <EmojiBarChart />
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
      >
        <EmojiMultiLineChart />
      </Grid>
    </Grid>
  </>
);

export default AppHome;
