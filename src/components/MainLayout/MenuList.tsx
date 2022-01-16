import React from "react";

import { ListItem, ListItemIcon } from "@mui/material";
import BootstrapTooltip from "components/BootstrapTooltip";
import {
  Link,
} from "react-router-dom";

interface PropTypes {
    name: string;
    Icon: any;
    // eslint-disable-next-line react/require-default-props
    path?: string;
    // eslint-disable-next-line react/require-default-props
    selected?:boolean;
}

const MenuList: React.FC<PropTypes> = ({
  name, Icon, selected, path,
}) => (
  <>
    <BootstrapTooltip arrow placement="right" title={name}>
      <ListItem
        button
        sx={{
          padding: "16px 24px",
          borderRight: selected ? (theme) => (`3px solid ${theme.palette.primary.main}`) : "none",
        }}
        key={name}
        selected={selected}
        component={Link}
        to={path || "/"}
      >
        <ListItemIcon sx={{
          justifyContent: "center",
          minWidth: "auto",
        }}
        >
          <Icon sx={{
            fontSize: "2rem",
            fontWeight: 300,
            color: "#9AA8BD",
          }}
          />
        </ListItemIcon>
      </ListItem>
    </BootstrapTooltip>
  </>
);

export default MenuList;
