import {
  CssBaseline, Grid, Paper, styled,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from "underscore";
import { getFeedback } from "views/Dashboard/service/requests";
import FeedbackTable from "./FeedbackTable";
import Header from "./Header";

const Feedback:React.FC = () => {
  const [state, setState] = useState({
    loading: false,
    feedback: [],
  });
  const { appId } = useParams<{appId: string}>();

  useEffect(() => {
    setState((prev) => ({ ...prev, loading: true }));
    getFeedback(appId).then((res) => {
      const { data: { data } } = res;
      console.log(data);
      const feedback = _.get(data, "feedback", []);
      console.log(feedback);
      setState((prev) => ({ ...prev, feedback }));
    }).finally(() => setState((prev) => ({ ...prev, loading: false })));
  }, [appId]);

  const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));
  const { feedback } = state;
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
              <FeedbackTable tableData={feedback} />

            </PaperStyled>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Feedback;
