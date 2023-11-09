import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import Item from "../Item/Item";
type Data = {
  name: string;
  src: string;
  username: string;
  caption: string;
};
const FriendListCard = ({ name, src, username, caption }: Data) => {
  return (
    <Box height={180} p={0} mt={2} bgcolor="#fff" borderRadius={2}>
      <Box
        borderRadius={2}
        position="relative"
        height="100%"
        width="100%"
        sx={{}}
      >
        <img
          src={src}
          alt="banner"
          height="50%"
          width="100%"
          className="image"
          style={{ borderRadius: "8px 8px 0px 0px" }}
        />
        <Box
          sx={{
            width: {
              lg: "85px",
              md: "65px",
              sm: "65px",
              xs: "65px",
            },
            height: {
              lg: "85px",
              md: "65px",
              sm: "65px",
              xs: "65px",
            },
          }}
          borderRadius="50%"
          position="absolute"
          top={50}
          left={18}
          bgcolor={"#fff"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{
              width: {
                lg: "80px",
                md: "60px",
                sm: "60px",
                xs: "60px",
              },
              height: {
                lg: "80px",
                md: "60px",
                sm: "60px",
                xs: "60px",
              },
            }}
          >
            H
          </Avatar>
        </Box>
        <Box
          display="flex"
          justifyContent={"space-between"}
          width="75%"
          p={1}
          sx={{ float: "right " }}
        >
          <Box p={0}>
            <Typography
              color="common.black"
              fontWeight={600}
              fontSize={14}
              //   pt={1}
              letterSpacing={1}
              textAlign={"left"}
            >
              {name}
            </Typography>
            <Typography color="text.grey" fontSize={8} textAlign={"left"}>
              {username}
            </Typography>
            <Typography color="common.black" fontSize={12} textAlign={"left"}>
              {caption}
            </Typography>
          </Box>

          <Button
            color="primary"
            size="small"
            sx={{
              height: 30,
              fontSize: {
                lg: 12,
                md: 12,
                sm: 10,
                xs: 8,
              },
              textTransform: "capitalize",
            }}
            // autoCapitalize=" Following"
            variant="outlined"
          >
            Following
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FriendListCard;
