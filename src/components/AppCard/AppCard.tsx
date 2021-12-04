import React from "react";
import { useHistory } from "react-router-dom";
import appDefaultIcon from "images/appDefaultIcon.svg";
import { Typography } from "@mui/material";

interface PropTypes{
    name: string;
    appId: string;
}

const AppCard:React.FC<PropTypes> = ({ name, appId }) => {
  const history = useHistory();
  const dashboard = () => history.push(`/dashboard/${appId}/app`);
  return (
    <div
      className={`
        p-10
        h-full 
        mx-auto 
        bg-white 
        rounded-xl
        shadow 
        hover:shadow-lg 
        cursor-pointer 
        space-x-4 
        text-center`}
      onClick={dashboard}
      onKeyPress={dashboard}
      role="button"
      tabIndex={0}
    >
      <div
        className="m-auto"
        style={{
          backgroundImage: `url(${appDefaultIcon})`,
          backgroundRepeat: "no-repeat",
          width: 90,
          height: 90,
        }}
      />
      <div className="mt-5">
        <Typography
          className="text-gray-700"
          display="block"
          gutterBottom
          variant="button"
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default AppCard;
