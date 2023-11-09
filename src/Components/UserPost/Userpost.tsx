import { Avatar, Box, InputBase, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const Userpost = () => {
  return (
    <Box
      sx={{
        width: {
          lg: "80%",
          md: "80%",
          sm: "100%",
          xs: "100%",
        },
      }}
      display="flex"
      alignItems="center"
      flexDirection="column"
      my={2}
    >
      <Box bgcolor="#fff" width="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
          >
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: "text.primary",
                ml: 3,
                mt: 2,
              }}
            >
              D
            </Avatar>
            <Box
              px={3}
              pt={2}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography
                color="common.black"
                sx={{ fontSize: { lg: 12, md: 12, sm: 12, xs: 10 } }}
              >
                Darcel Ballentine
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ fontSize: { lg: 8, md: 8, sm: 7, xs: 6 } }}
                textAlign="left"
              >
                12 April at 19:00
              </Typography>
            </Box>
          </Box>
          <MoreHorizIcon sx={{ color: "text.grey", mr: 3 }} />
        </Box>

        <Box width="100%">
          <Typography
            textAlign="left"
            p={3}
            color="common.black"
            sx={{ fontSize: { lg: 12, md: 12, sm: 12, xs: 10 } }}
            letterSpacing={0.3}
          >
            Peace on earth a wornderful way but no wish
          </Typography>
          {/*all contents of post comes here*/}
        </Box>

        <Box
          width="100%"
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          {[
            {
              icon: <ChatBubbleOutlineIcon fontSize="small" />,
              text: "comments",
            },
            { icon: <FavoriteBorderIcon fontSize="small" />, text: "likes" },
            { icon: <ShareOutlinedIcon fontSize="small" />, text: "share" },
            {
              icon: <TurnedInNotOutlinedIcon fontSize="small" />,
              text: "saved",
            },
          ].map((item) => (
            <Box
              key={item.text}
              display="flex"
              flexWrap="nowrap"
              alignItems="center"
              flexDirection="row"
              color="text.grey"
              sx={{
                ":hover": {
                  color: "blue",
                },
              }}
            >
              {item.icon}
              <Typography
                px={0.6}
                sx={{
                  fontSize: { lg: 12, md: 11, sm: 10, xs: 10 },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box display="flex" flexWrap="nowrap">
          <Avatar
            sx={{
              width: 30,
              height: 30,
              bgcolor: "text.primary",
              ml: 3,
              mt: 2,
            }}
          >
            D
          </Avatar>
          <Box width="95%" p={2} position="relative">
            {" "}
            <InputBase
              fullWidth
              placeholder="Write your comment"
              sx={{
                px: 1,
                color: "text.grey",
                border: "none",
                fontSize: { lg: 12, md: 12, sm: 12, xs: 8 },
                borderRadius: 2,
                bgcolor: "background.default",
              }}
            />
            <Box
              position="absolute"
              right={20}
              top={20}
              display="flex"
              alignItems="center"
              flexDirection="row"
              flexWrap="nowrap"
              color="text.grey"
              gap={0.5}
            >
              <AttachFileOutlinedIcon
                sx={{
                  width: {
                    lg: "20px",
                    md: "20px",
                    sm: "20px",
                    xs: "10px",
                  },
                  height: {
                    lg: "25px",
                    md: "25px",
                    sm: "20px",
                    xs: "10px",
                  },
                }}
              />
              <SentimentSatisfiedAltOutlinedIcon
                sx={{
                  width: {
                    lg: "20px",
                    md: "20px",
                    sm: "20px",
                    xs: "10px",
                  },
                  height: {
                    lg: "25px",
                    md: "25px",
                    sm: "20px",
                    xs: "10px",
                  },
                }}
              />
              <ImageOutlinedIcon
                sx={{
                  width: {
                    lg: "20px",
                    md: "20px",
                    sm: "20px",
                    xs: "10px",
                  },
                  height: {
                    lg: "20px",
                    md: "20px",
                    sm: "20px",
                    xs: "10px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Userpost;
