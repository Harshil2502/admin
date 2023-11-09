import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import FolderIcon from "@mui/icons-material/Folder";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HistoryIcon from "@mui/icons-material/History";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchInput from "../SearchInput/SearchInput";
import UserMenu from "../UserMenu/UserMenu";
import ForumIcon from "@mui/icons-material/Forum";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AppBar from "../AppBar/AppBar";
import adminImg from "../../Assets/Images/admin-Logo.png";
import { Link } from "react-router-dom";
import { Backdrop } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BackdropSearch from "../Backdrop/BackdropSearch";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [backdropOpen, setbackdropOpen] = React.useState(false);
  const handleClose = () => {
    setbackdropOpen(false);
  };
  const handleOpen = () => {
    setbackdropOpen(true);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="inherit"
        open={open}
        position="fixed"
        sx={{
          px: 0,
        }}
      >
        <Toolbar sx={{ marginRight: 1 }}>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,

              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginRight: 5 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  lg: 16,
                  md: 16,
                  sm: 14,
                  xs: 12,
                },
              }}
              color="text.secondary"
              fontWeight={500}
            >
              Dashboard
            </Typography>
            <Typography
              variant="caption"
              noWrap
              fontSize={10}
              color="text.grey"
              fontWeight={500}
            >
              Let's check your store today
            </Typography>
          </Box>
          <Box
            width="100%"
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <SearchInput />
          </Box>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              marginRight: 5,
              marginLeft: 3,
              color: "text.secondary",
              cursor: "pointer",
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <Avatar
              src="data:image/png;base64,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"
              sx={{ height: 25, width: 25, objectFit: "cover" }}
            />
            <ForumIcon />
            <NotificationsNoneIcon />
            <SettingsIcon />
          </Stack>
          <BackdropSearch
            backdropOpen={backdropOpen}
            top={12}
            handleClose={handleClose}
          />

          <Box display={"flex"} position="absolute" right={3}>
            <IconButton
              onClick={handleOpen}
              sx={{
                display: {
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
            <UserMenu />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{ position: "fixed", zIndex: 1 }}
      >
        <DrawerHeader>
          <img src={adminImg} alt="" height="75%" width="50%" />

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <Box ml={2}>
                <ChevronLeftIcon />
              </Box>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ mt: 2 }}>
          {[
            {
              icon: <HomeIcon />,
              name: "Dashboards",
              link: "/dashboard",
            },
            {
              icon: <ReceiptIcon />,
              name: "Transaction",
              link: "/transaction",
            },
            {
              icon: <AccountBalanceWalletIcon />,
              name: "My Wallet",
              link: "/wallet",
            },
            {
              icon: <AnalyticsIcon />,
              name: "analytics",
              link: "/dashboard",
            },
            {
              icon: <PieChartOutlineIcon />,
              name: "Statistics",
              link: "/dashboard",
            },
            {
              icon: <InboxIcon />,
              name: "Inbox",
              link: "/dashboard",
            },
            {
              icon: <LockRoundedIcon />,
              name: "External",
              link: "/product",
            },
            {
              icon: <FolderIcon />,
              name: "Projects",
              link: "/project",
            },
            {
              icon: <GridViewIcon />,
              name: "Integrations",
              link: "/dashboard",
            },
            {
              icon: <NotificationsNoneIcon />,
              name: "Notification",
              link: "/dashboard",
            },
            {
              icon: <PermIdentityIcon />,
              name: "User",
              link: "/user",
            },
            {
              icon: <HistoryIcon />,
              name: "History",
              link: "/dashboard",
            },
          ].map((text, index) => (
            <Link to={text.link} className="link" key={text.name}>
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.name}
                    sx={{ opacity: open ? 1 : 0, color: "text.secondary" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              icon: <SupportAgentIcon />,
              name: "support",
              link: "/dashboard",
            },
            {
              icon: <SettingsIcon />,
              name: "Settings",
              link: "/setting",
            },
            {
              icon: <LogoutIcon />,
              name: "Logout",
              link: "/dashboard",
            },
          ].map((text, index) => (
            <Link to={text.link} className="link" key={index}>
              <ListItem
                key={text.name}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText
                    color="inherit"
                    primary={text.name}
                    sx={{ opacity: open ? 1 : 0, color: "grey" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
