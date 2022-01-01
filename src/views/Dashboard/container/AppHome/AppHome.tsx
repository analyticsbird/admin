import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CategoryCard from "components/CategoryCard";

import { ratingReport } from "views/Dashboard/service/requests";
import { useParams } from "react-router-dom";
import _ from "underscore";
import Header from "./Header";
import EmojiBarChart from "./EmojiBarChart";
import EmojiList from "./EmojiList";
import EmojiMultiLineChart from "./EmojiMultiLineChart";

const AppHome:React.FC = () => {
  const [state, setState] = useState({
    loading: false,
    report: {},
  });
  const { appId } = useParams<{appId: string}>();

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    ratingReport(appId).then((res) => {
      const { data } = res;
      const report = _.get(data, "data", {});
      console.log(report, res, "ol");
      setState((prev) => ({ ...prev, report }));
    }).finally(() => setState((prev) => ({ ...prev, loading: false })));
  }, [appId]);

  const { report } = state;

  const rating: any = _.get(report, "ratings", {});
  const ratingGraph = _.values(rating);
  console.log(ratingGraph);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2}>
        <CategoryCard
          Icon={SentimentSatisfiedAltIcon}
          iconBg="#F6993F"
          title="Total rating"
          value={_.get(report, "totalRating", 0) as number}
        />
        <CategoryCard
          Icon={AssignmentIcon}
          title="Total feedback"
          value={_.get(report, "totalFeedback", 0) as number}
        />
        <EmojiList rating={rating} />
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={12}
        >
          <EmojiBarChart rating={rating} />
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
};

export default AppHome;
