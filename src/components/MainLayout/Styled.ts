import { AppBar, Avatar, styled } from "@mui/material";
import { orange, red } from "@mui/material/colors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ContentMain = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  height: "100vh",
  overflowY: "auto",
}));

export const Toolbar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const ToolbarBackground = styled(Toolbar)(({ theme }) => ({
  background: theme.palette.primary.main,
  justifyContent: "center",
  alignItems: "center",
}));

export const ListBottom = styled("span")(() => ({
  "&:before": {
    content: "\"\"",
    display: "block",
    position: "absolute",
    minWidth: 16,
    borderTop: "2px solid",
    opacity: 0.2,
    marginLeft: 25,
  },
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  marginLeft: -10,
  color: theme.palette.getContrastText(red[700]),
  backgroundColor: orange[500],
}));

export const ShoppingCartIconStyled = styled(ShoppingCartIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

const drawerWidth = 67;

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
}));
export default ContentMain;
