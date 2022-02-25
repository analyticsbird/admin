import React, { useEffect, useState } from "react";

import { CssBaseline, Grid } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CategoryCard from "components/CategoryCard";

import { ratingReport } from "views/Dashboard/service/requests";
import { useParams } from "react-router-dom";
import _ from "underscore";
import dayjs from "dayjs";
import Header from "./Header";
import EmojiBarChart from "./EmojiBarChart";
import EmojiList from "./EmojiList";
import Rechart from "./Rechart";

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
  const ratingByDateArr:any = _.get(report, "ratingsByDate", []);

  const ratingByDate:any = {};

  ratingByDateArr.forEach((element:any) => {
    const date = element[2];
    const category = element[0];
    const rating1 = element[1];

    if (ratingByDate[date]) {
      ratingByDate[date] = { ...ratingByDate[date], [category]: rating1 };
    } else {
      ratingByDate[date] = { [category]: rating1 };
    }
  });

  let ratingByDateReduce:any[] = [];

  _.each(ratingByDate, (val, key) => {
    const rateArr = [
      dayjs(key).format("ll"),
      val[1] || 0,
      val[2] || 0,
      val[3] || 0,
      val[4] || 0,
      val[5] || 0];
    ratingByDateReduce = [...ratingByDateReduce, rateArr];
  });

  ratingByDateReduce.sort((a, b) => {
    const dateA:any = new Date(a[0]);
    const dateB:any = new Date(b[0]);
    return dateA - dateB;
  });

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
          {/* <RatingOverTime ratingByDate={ratingByDateReduce} /> */}
          <Rechart ratingByDate={ratingByDateReduce} />
        </Grid>
      </Grid>
    </>
  );
};

export default AppHome;
