/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import TextContainer from "../components/Styled";

const Login:React.FC = () => {
  const { control, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <AuthWrapper
      title="Login"
      description="Log in to the internal platform"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="text-right mt-6">
            <a
              className={`
                text-13 
                font-semibold 
                no-underline
                text-gray-600 
                hover:text-blue 
                focus:text-blue-600`}
              href="#"
            >
              Forgot Password?
            </a>
          </div>
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
          Login
        </Button>
        <Button
          sx={{
            width: "100%",
            marginBottom: (theme) => theme.spacing(3),
          }}
          color="primary"
          disableElevation
          variant="outlined"
          onClick={() => history.push("/auth/signup")}
        >
          Signup
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Login;
