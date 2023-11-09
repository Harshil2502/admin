import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Userpost from "../../Components/UserPost/Userpost";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Friendslist from "../../Components/Friendlist/Friendslist";
import CloseIcon from "@mui/icons-material/Close";
const UserPage = () => {
  const [Id, setId] = useState("Post");
  const [backdropOpen, setbackdropOpen] = useState(false);
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
            m={0}
            p={3}
            sx={{
              flexGrow: 1,
              pt: { lg: 12, md: 12, sm: 8, xs: 8 },
              pl: { lg: 10, md: 10, sm: 10, xs: 8 },
            }}
            width={"100%"}
          >
            <Box width="100%" display="flex" alignItems="space-between">
              <Box
                sx={{
                  width: {
                    lg: "70%",
                    md: "70%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  bgcolor="#fff"
                  sx={{
                    width: "100%",
                    p: 1,
                  }}
                >
                  <Box
                    width="100%"
                    sx={{
                      height: {
                        lg: "250px",
                        md: "220px",
                        sm: "200px",
                        xs: "180px",
                      },
                    }}
                    position="relative"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRN-rVbii9oznGSuALlQWape2Yjfyt8t6n9w&usqp=CAU"
                      alt=""
                      width="100%"
                      height="100%"
                      style={{ borderRadius: "10px 10px 0px 0px" }}
                    />
                    <Box position="absolute" top={25} right={25}>
                      <Button
                        sx={{
                          outline: "1px solid common.white",
                          textTransform: "capitalize",
                          bgcolor: "black",
                          opacity: 0.6,
                          color: "common.white",
                          fontSize: {
                            lg: 12,
                            md: 12,
                            sm: 10,
                            xs: 8,
                          },
                        }}
                      >
                        Edit profile
                      </Button>
                    </Box>
                    <Box
                      position="absolute"
                      sx={{
                        top: { lg: 165, md: 155, sm: 145, xs: 135 },
                        left: { lg: 50, md: 40, sm: 30, xs: 20 },
                      }}
                      display="flex"
                      justifyContent="center"
                    >
                      <Box
                        sx={{
                          width: {
                            lg: "125px",
                            md: "105px",
                            sm: "85px",
                            xs: "45px",
                          },
                          height: {
                            lg: "125px",
                            md: "105px",
                            sm: "85px",
                            xs: "45px",
                          },
                        }}
                        borderRadius="50%"
                        bgcolor={"#fff"}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {" "}
                        <Avatar
                          sx={{
                            width: {
                              lg: "120px",
                              md: "100px",
                              sm: "80px",
                              xs: "40px",
                            },
                            height: {
                              lg: "120px",
                              md: "100px",
                              sm: "80px",
                              xs: "40px",
                            },
                          }}
                        >
                          H
                        </Avatar>
                      </Box>
                      <Box
                        sx={{
                          px: {
                            lg: 3,
                            md: 2,
                            xs: 1,
                            sm: 1,
                          },
                          py: {
                            lg: 2,
                            md: 1,
                            xs: 1,
                            sm: 1,
                          },
                        }}
                        display="flex"
                        alignItems="flex-start"
                        flexDirection="column"
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              lg: 20,
                              md: 16,
                              sm: 14,
                              xs: 12,
                            },
                          }}
                          color="common.white"
                        >
                          Ajoy Sarker
                        </Typography>
                        <Typography color="common.white" fontSize={10}>
                          @ajoysarker
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      width="70%"
                      sx={{
                        float: "right",
                        width: {
                          lg: "70%",
                          md: "70%",
                          sm: "100%",
                          xs: "100%",
                        },
                      }}
                      pt={1}
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-evenly"
                    >
                      {[
                        { title: "Post", number: "10.3k" },
                        { title: "Followers", number: "2,564" },
                        { title: "Following", number: "3,154" },
                        { title: "Likes", number: "12.2k" },
                        { title: "Photos", number: "35" },
                        { title: "Videos", number: "24" },
                        { title: "Saved", number: "18" },
                      ].map((item) => (
                        <Box
                          sx={{
                            bgcolor: item.title == Id ? "#eff3ff" : "",
                            borderBottom: item.title == Id ? 3 : "",
                            borderColor: "lightblue",
                            cursor: "pointer",
                            px: {
                              lg: 2,
                              md: 1,
                              sm: 1,
                              xs: 0,
                            },
                            mt: {
                              lg: 0,
                              md: 0,
                              sm: 4,
                              xs: 2,
                            },
                          }}
                          key={item.title}
                        >
                          <div onClick={() => setId(item.title)}>
                            <Typography
                              sx={{
                                fontSize: {
                                  lg: 12,
                                  md: 12,
                                  sm: 10,
                                  xs: 8,
                                },
                              }}
                              color={item.title == Id ? "#0096FF" : "text.grey"}
                              textAlign="center"
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  lg: 16,
                                  md: 14,
                                  sm: 12,
                                  xs: 10,
                                },
                              }}
                              fontWeight={700}
                              textAlign="center"
                              color={
                                item.title == Id ? "#0096FF" : "common.black"
                              }
                            >
                              {item.number}
                            </Typography>
                          </div>
                        </Box>
                      ))}
                      <Box
                        display={"flex"}
                        alignItems="center"
                        sx={{
                          display: {
                            lg: "none",
                            md: "none",
                            sm: "flex",
                            xs: "flex",
                          },
                          px: {
                            lg: 2,
                            md: 1,
                            sm: 1,
                            xs: 0,
                          },
                          mt: {
                            lg: 0,
                            md: 0,
                            sm: 4,
                            xs: 2,
                          },
                        }}
                      >
                        <IconButton
                          disableRipple
                          disableFocusRipple
                          onClick={() => setbackdropOpen(true)}
                        >
                          {" "}
                          <PeopleAltIcon fontSize="small" />
                        </IconButton>
                      </Box>
                      <Backdrop
                        sx={{
                          color: "#fff",
                          zIndex: (theme) => theme.zIndex.drawer + 1,

                          overflow: "scroll",
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                        open={backdropOpen}
                      >
                        <Box width={420} height={180} bgcolor={"#fff"}>
                          <Friendslist />
                        </Box>
                        <IconButton
                          sx={{
                            color: "white",
                            width: 30,
                            height: 30,
                            top: 10,
                            right: 20,
                            position: "absolute",
                          }}
                          onClick={() => setbackdropOpen(false)}
                        >
                          <CloseIcon />{" "}
                        </IconButton>
                      </Backdrop>
                    </Box>
                  </Box>
                </Box>

                <Box
                  width="100%"
                  display="flex"
                  sx={{
                    flexDirection: {
                      lg: "row",
                      md: "row",
                      sm: "column-reverse",
                      xs: "column-reverse",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        lg: "30%",
                        md: "35%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                  >
                    <Box px={2} py={1} bgcolor="#fff" my={2}>
                      <Typography
                        fontSize={14}
                        letterSpacing={1}
                        py={2}
                        fontWeight={500}
                        color="common.black"
                      >
                        Complete Your Profile
                      </Typography>
                      <Box display="flex" alignItems="center">
                        {" "}
                        <Box
                          width={"100%"}
                          height={10}
                          bgcolor={"#ADD8E6"}
                          my={1}
                          borderRadius={15}
                          display="flex"
                          alignItems="center"
                          // justifyContent="center"
                        >
                          {" "}
                          <Box
                            width={"75%"}
                            height={10}
                            bgcolor={"#728FCE"}
                            my={1}
                            borderRadius={15}
                          />
                        </Box>
                        <Typography color="common.black" px={1}>
                          75%
                        </Typography>
                      </Box>
                    </Box>
                    <Box py={1} bgcolor="#fff" my={2}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                      >
                        <Typography
                          px={2}
                          pt={1}
                          fontSize={14}
                          fontWeight={600}
                          color="common.black"
                        >
                          About me
                        </Typography>
                        <Box
                          px={2}
                          pt={1}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          <MoreHorizIcon sx={{ color: "text.grey" }} />
                        </Box>
                      </Box>
                      <Typography
                        p={2}
                        color="common.black"
                        sx={{
                          fontSize: {
                            lg: 12,
                            md: 12,
                            sm: 10,
                            xs: 10,
                          },
                        }}
                        letterSpacing={1}
                      >
                        "Pushing pixels and experience in digtal products for
                        Sebostudio"
                      </Typography>

                      <List>
                        {[
                          {
                            icon: (
                              <LocationOnIcon sx={{ color: "text.grey" }} />
                            ),
                            text: "Dhaka, Bangladesh",
                          },
                          {
                            icon: <LanguageIcon sx={{ color: "text.grey" }} />,
                            text: "dribble.com/ajoysarker",
                          },
                          {
                            icon: (
                              <TextSnippetIcon sx={{ color: "text.grey" }} />
                            ),
                            text: "Joined on June 2012",
                          },
                          {
                            icon: (
                              <WorkOutlineIcon sx={{ color: "text.grey" }} />
                            ),
                            text: "Working At Sebo Studio",
                          },
                        ].map((item) => (
                          <ListItem key={item.text}>
                            {item.icon}
                            <Typography
                              px={2}
                              color="common.black"
                              sx={{
                                fontSize: {
                                  lg: 13,
                                  md: 12,
                                  sm: 11,
                                  xs: 10,
                                },
                              }}
                              letterSpacing={1}
                            >
                              {item.text}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box py={1} bgcolor="#fff" my={2}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                      >
                        <Typography
                          px={2}
                          pt={1}
                          sx={{
                            fontSize: {
                              lg: 14,
                              md: 13,
                              sm: 11,
                              xs: 10,
                            },
                          }}
                          fontWeight={600}
                          color="common.black"
                        >
                          Photos and Videos
                        </Typography>
                        <Box
                          px={2}
                          pt={1}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            fontSize={10}
                            color="blue"
                            textTransform="uppercase"
                          >
                            see all
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        width="100%"
                        display="flex"
                        flexWrap="wrap"
                        my={4}
                        gap={0.5}
                        justifyContent="center"
                      >
                        {[
                          {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
                          },
                          {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
                          },
                          {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
                          },
                          {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
                          },
                          {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
                          },
                          {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU",
                          },
                        ].map((item, index) => (
                          <Box width={"28%"} borderRadius={2} key={index}>
                            <img
                              src={item.src}
                              alt=""
                              width={"100%"}
                              style={{ borderRadius: "5px" }}
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        lg: "75%",
                        md: "75%",
                        sm: "100%",
                        xs: "100%",
                      },
                    }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Userpost />
                    <Userpost />
                    <Userpost />
                    <Userpost />
                    <Userpost />
                  </Box>
                </Box>
              </Box>
              <Box
                width="30%"
                borderRadius={2}
                ml={2}
                sx={{
                  display: {
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <Friendslist />
                {/* <Box width="100%">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                  >
                    <Typography
                      fontWeight={600}
                      noWrap
                      color="common.black"
                      sx={{
                        fontSize: {
                          lg: 25,
                          md: 20,
                          sm: 16,
                          xs: 14,
                        },
                      }}
                    >
                      Friend List
                    </Typography>
                    <Box bgcolor={"#fff"} m={1}>
                      {" "}
                      <Button
                        startIcon={<SearchIcon fontSize="large" />}
                        sx={{ color: "text.grey" }}
                        disableRipple
                        size="large"
                      />
                    </Box>
                    <Box display="flex" alignItems="center" bgcolor={"#fff"}>
                      <Typography
                        color="text.grey"
                        sx={{
                          fontSize: {
                            lg: 14,
                            md: 10,
                            sm: 10,
                            xs: 8,
                          },
                        }}
                        fontWeight={500}
                        pl={1}
                      >
                        Show:
                      </Typography>
                      <DropdownButton title="newest" />
                    </Box>
                    <FilterAltIcon
                      sx={{ bgcolor: "#fff", color: "text.grey" }}
                    />
                  </Box>
                  <Box>
                    {[
                      {
                        name: "harshil",
                        username: "@harshil",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6p19-lCN_Z6xx6RJK-avH6TfvkorbWQMJg&usqp=CAU",
                        caption: "Noat a man But a Ghost",
                      },
                      {
                        name: "harshil",
                        username: "@harshil",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6p19-lCN_Z6xx6RJK-avH6TfvkorbWQMJg&usqp=CAU",
                        caption: "Noat a man But a Ghost",
                      },
                      {
                        name: "harshil",
                        username: "@harshil",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6p19-lCN_Z6xx6RJK-avH6TfvkorbWQMJg&usqp=CAU",
                        caption: "Noat a man But a Ghost",
                      },
                      {
                        name: "harshil",
                        username: "@harshil",
                        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6p19-lCN_Z6xx6RJK-avH6TfvkorbWQMJg&usqp=CAU",
                        caption: "Noat a man But a Ghost",
                      },
                    ].map((item, index) => (
                      <FriendListCard
                        name={item.name}
                        caption={item.caption}
                        src={item.src}
                        username={item.username}
                      />
                    ))}
                  </Box>
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default UserPage;
