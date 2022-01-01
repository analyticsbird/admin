import React from "react";

import {
  Avatar, Grid, Paper, Typography, styled,
} from "@mui/material";

interface PropTypes{
    Icon: any;
    title: string;
    value: string | number;
    // eslint-disable-next-line react/require-default-props
    iconBg?: string;
}

const PaperStyled = styled(Paper)(() => ({ boxShadow: "none" }));
const CategoryCard:React.FC<PropTypes> = ({
  Icon, iconBg, title, value,
}) => (
  <Grid
    item
    lg={3}
    md={6}
    xl={3}
    xs={12}
  >
    <PaperStyled
      className={`
            flex
            items-center
            flex-grow
            w-full
            h-48 
            sm:mt-8 mt-5 
            sm:mr-8 mr-0 
            rounded-6 shadow-none border 
            border-solid 
            cursor-pointer`}
    >
      <div className="p-8">
        <div className="flex items-center">
          <Avatar
            style={{ width: 50, height: 65, background: iconBg || "#38C172" }}
            variant="rounded"
          >
            <Icon />
          </Avatar>
          <div className="ml-10">
            <div className="mt-auto text-5xl font-semibold text-gray-500 mb-2">
              {value}
            </div>
            <Typography variant="subtitle2" className="text-gray-500">
              {title}
            </Typography>
          </div>
        </div>
      </div>

    </PaperStyled>
  </Grid>
);

export default CategoryCard;
