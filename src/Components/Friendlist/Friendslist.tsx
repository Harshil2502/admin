import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FriendListCard from "../FriendListCard/FriendListCard";

const Friendslist = () => {
  return (
    <Box width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        bgcolor={"white"}
      >
        <Typography
          fontWeight={600}
          noWrap
          color="common.black"
          sx={{
            fontSize: {
              lg: 20,
              md: 16,
              sm: 12,
              xs: 10,
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
                md: 12,
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
        <FilterAltIcon sx={{ bgcolor: "#fff", color: "text.grey" }} />
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
            key={index}
            name={item.name}
            caption={item.caption}
            src={item.src}
            username={item.username}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Friendslist;
