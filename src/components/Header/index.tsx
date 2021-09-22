/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useLocation } from "react-router-dom";

import {
  Avatar, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SmsIcon from "@mui/icons-material/Sms";
import layoutVisibilityCheck from "utils/someHandyFunctions";
import { styled } from "@mui/system";

interface PropTypes{
  children: React.ReactNode;
}

const ToolbarDiv = styled("div")(({ theme }:any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const ContentMain = styled("main")(({ theme }) => `
  flex-grow: 1;
  padding: ${theme.spacing(3)};
  height: 100vh;
  overflow-y: auto;
`);

const SmsIconStyled = styled(SmsIcon)(({ theme }) => `color: ${theme?.palette?.primary?.main}`);

const Header:React.FC<PropTypes> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const { pathname } = useLocation();
  const showLayout = layoutVisibilityCheck(pathname);
  return (
    <>
      {showLayout ? (
        <>
          <div className="flex">
            <AppBar
              position="fixed"
              sx={{
                background: (theme:any) => theme.palette.primary.contrastText,
                color: (theme:any) => theme.palette.secondary.contrastText,
                zIndex: (theme:any) => theme.zIndex.drawer + 1,
                boxShadow: "none",
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                width: "100%",
                transition: (theme:any) => theme.transitions.create(["width", "margin"], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              }}
            >
              <Toolbar style={{ justifyContent: "flex-end" }}>
                <IconButton>
                  <SmsIconStyled />
                </IconButton>
                <Typography
                  className="text-gray-500"
                  sx={{
                    flexGrow: 1,
                  }}
                  variant="h6"
                >
                  botzap.ai
                </Typography>
                <IconButton
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  aria-label="account of current user"
                  color="inherit"
                  onClick={handleToggle}
                >
                  <Avatar />
                </IconButton>
                <Popper
                  anchorEl={anchorRef.current}
                  disablePortal
                  open={open}
                  role={undefined}
                  style={{ top: "67px", left: "auto" }}
                  transition
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin: placement === "bottom"
                          ? "center top" : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose as any}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Toolbar>
            </AppBar>
          </div>
          <ContentMain>
            <ToolbarDiv />
            {children}
          </ContentMain>
        </>
      )
        : <>{children}</>}
    </>
  );
};

export default Header;
