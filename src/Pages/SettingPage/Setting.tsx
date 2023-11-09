import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Item from "../../Components/Item/Item";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookIcon from "@mui/icons-material/Book";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import { useState } from "react";
import ChangePassword from "../../Components/Change Password/ChangePassword";

const Setting = () => {
  const [Id, setId] = useState("");

  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className="container"
        sx={{ backgroundColor: "background.default" }}
      >
        <Box sx={{ display: "flex" }}>
          <SideDrawer />
          <Box
            component="main"
            p={3}
            sx={{
              flexGrow: 1,
              pt: { lg: 12, md: 12, sm: 8, xs: 8 },
              pl: { lg: 10, md: 10, sm: 10, xs: 8 },
            }}
            width={"100%"}
          >
            <Item
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: {
                    lg: "20%",
                    md: "40%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <List>
                  {[
                    {
                      icon: (
                        <AccountCircleIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "Personal Information",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                    {
                      icon: (
                        <NotificationsIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "Notification Setting",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                    {
                      icon: (
                        <BookIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "Program & resources",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                    {
                      icon: (
                        <PaymentIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "payment Method",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                    {
                      icon: (
                        <HelpOutlineOutlinedIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "FAQ",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                    {
                      icon: (
                        <LockOutlinedIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "Change Password",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                    {
                      icon: (
                        <EventNoteOutlinedIcon
                          sx={{
                            height: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                            width: {
                              lg: "40px",
                              md: "35px",
                              sm: "30px",
                              xs: "20px",
                            },
                          }}
                        />
                      ),
                      title: "Terms and Condition",
                      description: " Lorem, ipsum dolor sit amet",
                    },
                  ].map((item) => (
                    <ListItem
                      sx={{ width: "100%" }}
                      key={item.title}
                      onClick={() => setId(item.title)}
                      className={item.title == Id ? "active" : ""}
                    >
                      <ListItemButton
                        sx={{
                          bgcolor: item.title == Id ? "#eff3ff" : "",
                          borderRadius: item.title == Id ? 2 : "",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        {/* <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-around"
                        > */}
                        <Box
                          display="flex"
                          flexDirection="row"
                          width="100%"
                          color={item.title == Id ? "text.primary" : ""}
                        >
                          {item.icon}

                          <Box
                            sx={{
                              px: {
                                lg: 2,
                                md: 2,
                                sm: 1,
                                xs: 0.5,
                              },
                            }}
                            // px={2}
                          >
                            <Typography
                              fontWeight={500}
                              color="common.black"
                              sx={{
                                fontSize: {
                                  lg: 14,
                                  md: 12,
                                  sm: 12,
                                  xs: 10,
                                },
                              }}
                            >
                              {item.title}
                            </Typography>

                            <Typography fontSize={10} fontWeight={400}>
                              {item.description}
                            </Typography>
                          </Box>
                        </Box>
                        {/* </Box> */}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box
                visibility={"Change Password" == Id ? "visible" : "hidden"}
                flex={1}
                sx={{ p: { lg: 2, md: 2, sm: 1, xs: 0.5 } }}
                display="flex"
                minWidth="40%"
                justifyContent="center"
              >
                <ChangePassword />
              </Box>
            </Item>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Setting;

/* 

*/
