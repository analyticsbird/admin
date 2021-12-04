/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header";
import Success, { Error } from "components/Message";
import { getAppList } from "store/container/appList/actions";
import { Button, CssBaseline, Grid } from "@mui/material";
import Search from "components/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import _ from "underscore";
import AppCard from "components/AppCard";

import createProject from "images/createProject.svg";
import CreateProjectModal from "./CreateProjectModal";

const Home: React.FC = () => {
  const [createModal, setCreateModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppList());
  }, [dispatch]);

  const { apiData, error, pending } = useSelector((globalState:any) => globalState.appList);
  const data = _.get(apiData, "data", {});
  return (
    <>
      <Header>
        <>
          <CssBaseline />
          {
            apiData?.status && (
            <>
              {
                data?.user_app.length === 0
                && (
                <>
                  <div className="flex items-center justify-center" style={{ height: "calc(100% - 64px)" }}>
                    <div className="md:p-24 p-8 max-w-256 mx-auto bg-white rounded-xl shadow space-x-4 text-center">
                      <div className="text-center">
                        <img alt="ChitChat Logo" className="md:h-96 h-52 w-auto" src={createProject} />
                      </div>
                      <div className="mt-10">
                        <Button
                          color="primary"
                          disableElevation
                          onClick={() => setCreateModal(true)}
                          startIcon={<AddOutlinedIcon />}
                          variant="contained"
                        >
                          create project
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
                )
              }

              {
                data?.user_app.length > 0
                && (
                <>
                  <div className="mb-14 flex flex-col sm:flex-row">
                    <Search />
                    <div className="ml-0 sm:ml-5 flex flex-col sm:flex-row">
                      <Button
                        color="primary"
                        disableElevation
                        onClick={() => setCreateModal(true)}
                        size="small"
                        startIcon={<AddOutlinedIcon />}
                        variant="contained"
                      >
                        Create project
                      </Button>
                    </div>
                  </div>
                  <Grid container spacing={4}>
                    {
                    data?.user_app.map((val:any) => (
                      <Grid
                        item
                        key={val.app_id}
                        lg={2}
                        md={4}
                        sm={4}
                        xs={12}
                      >
                        <AppCard appId={val.app_id} name={val.name} />
                      </Grid>
                    ))
                  }

                    {error && <Error msg={error.message} />}
                    {!pending && <Success msg="App list fetched successfully" />}
                  </Grid>
                </>
                )
              }
            </>
            )
          }
          {createModal && <CreateProjectModal open={createModal} setOpen={setCreateModal} />}
        </>
      </Header>
    </>
  );
};

export default Home;
