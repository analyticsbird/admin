import React from "react";

import { ListItem, ListItemIcon } from "@mui/material";
import BootstrapTooltip from "components/BootstrapTooltip";

interface PropTypes {
    name: string;
    Icon: any;
    // eslint-disable-next-line react/require-default-props
    selected?:boolean;
}

const MenuList: React.FC<PropTypes> = ({ name, Icon, selected }) => (
  <>
    <BootstrapTooltip arrow placement="right" title={name}>
      <ListItem
        button
        sx={{ padding: "16px 24px" }}
        key={name}
        selected={selected}
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
