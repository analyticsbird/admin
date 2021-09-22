/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import {
  Avatar,
  ClickAwayListener,
  CssBaseline,
  Grow, IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
} from "@mui/material";
import { AppBarStyled } from "./Styled";

const LayoutHeader: React.FC = () => {
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

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <>
      <CssBaseline />
      <AppBarStyled position="fixed">
        <Toolbar style={{ justifyContent: "flex-end" }}>
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
                style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
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
      </AppBarStyled>
    </>
  );
};

export default LayoutHeader;
