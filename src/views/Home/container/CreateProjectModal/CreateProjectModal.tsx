import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  styled,
} from "@mui/material";
import Loader from "components/Loader";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getAppList } from "store/container/appList/actions";
import { createProject } from "views/Home/service/requests";
import Success, { Error } from "components/Message";

interface PropTypes{
    open: boolean;
    // eslint-disable-next-line no-unused-vars
    setOpen: (val: boolean)=> void;
}

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(3),
}));

const DialogActionsStyled = styled(DialogActions)(() => ({ padding: "20px 24px", paddingTop: 0 }));

const DialogTitleStyled = styled(DialogTitle)(() => ({ paddingBottom: 0 }));

const CreateProjectModal:React.FC<PropTypes> = ({ open, setOpen }) => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const { error, success, loading } = state;
  const setStateWrapper = (data:any) => setState((prev) => ({ ...prev, ...data }));

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data:any) => {
    setStateWrapper({ loading: true });
    createProject(data)
      .then(() => {
        setStateWrapper({ success: true });
        dispatch(getAppList());
      })
      .catch(() => setStateWrapper({ error: false }))
      .finally(() => {
        setTimeout(() => {
          handleClose();
          setStateWrapper({ loading: false });
        }, 2000);
      });
  };
  return (
    <div>
      <Dialog
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        open={open}
      >
        <DialogTitleStyled>Create Your App</DialogTitleStyled>
        <DialogContent>
          <DialogContentText>
            To create your app, please enter the application details below.
          </DialogContentText>
        </DialogContent>
        { !loading
          ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogContent>
                <Controller
                  control={control}
                  defaultValue=""
                  name="name"
                  render={
                      ({ field }) => (
                        <TextFieldStyled
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...field}
                          label="Name of your app"
                          variant="outlined"
                        />
                      )
                    }
                />
                <Controller
                  control={control}
                  defaultValue=""
                  name="description"
                  render={
                      ({ field }) => (
                        <TextFieldStyled
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...field}
                          label="Description"
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      )
                }
                />
              </DialogContent>
              <DialogActionsStyled>
                <Button
                  color="secondary"
                  disableElevation
                  onClick={handleClose}
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  disableElevation
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </DialogActionsStyled>
            </form>
          ) : (
            <DialogContent>
              <div className="h-200">
                <Loader />
              </div>
            </DialogContent>
          )}
        {error && <Error msg="Error while creating project" />}
        {success && <Success msg="App list fetched successfully" />}
      </Dialog>
    </div>
  );
};

export default CreateProjectModal;
