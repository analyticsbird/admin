import React from "react";

import {
  Divider, Drawer, IconButton, List,
} from "@mui/material";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

import menuConfig from "./menuConfig";
import MenuList from "./MenuList";
import {
  AvatarStyled, ListBottom, ShoppingCartIconStyled, ToolbarBackground,
} from "./Styled";

const LayoutDrawer:React.FC = () => {
  // const theme = useTheme();
  const drawerWidth = 67;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: (theme) => theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          transition: (theme) => theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      }}
      variant="permanent"
    >
      <ToolbarBackground>
        <IconButton>
          <ShoppingCartIconStyled />
        </IconButton>
      </ToolbarBackground>
      <Divider />
      <List sx={{ marginTop: "1.25rem", flexGrow: 1 }}>
        {
              menuConfig.map((val) => (
                <MenuList
                  Icon={val.Icon}
                  key={val.name}
                  name={val.name}
                  selected={val.selected}
                />
              ))
            }
      </List>
      <ListBottom />
      <List>
        <MenuList
          Icon={() => <AvatarStyled>R</AvatarStyled>}
          key="account"
          name="Account"
        />
        <MenuList
          Icon={PowerSettingsNewOutlinedIcon}
          key="Logout"
          name="Logout"
        />
      </List>
    </Drawer>
  );
};

export default LayoutDrawer;
