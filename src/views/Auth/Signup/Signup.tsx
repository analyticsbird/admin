/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import AuthWrapper from "../components/AuthWrapper";
import TextContainer from "../components/Styled";

const Signup:React.FC = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <AuthWrapper
      title="Signup"
      description="Signup to the internal platform"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          defaultValue=""
          name="fullName"
          render={
                  ({ field }) => (
                    <TextField
                      {...field}
                      sx={{
                        width: "100%",
                        marginBottom: (theme) => theme.spacing(3),
                      }}
                      label="Full Name"
                      variant="outlined"
                    />
                  )
                }
        />
        <Controller
          control={control}
          defaultValue=""
          name="email"
          render={
                  ({ field }) => (
                    <TextField
                      {...field}
                      sx={{
                        width: "100%",
                        marginBottom: (theme) => theme.spacing(3),
                      }}
                      label="Email"
                      variant="outlined"
                    />
                  )
                }
        />
        <TextContainer>
          <Controller
            control={control}
            defaultValue=""
            name="password"
            render={
                ({ field }) => (
                  <TextField
                    {...field}
                    sx={{
                      width: "100%",
                    }}
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                )
            }
          />
        </TextContainer>
        <Button
          sx={{
            width: "100%",
            marginBottom: (theme) => theme.spacing(3),
          }}
          color="primary"
          disableElevation
          type="submit"
          variant="contained"
        >
          Signup
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Signup;
