import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography, Box } from "@mui/material";
import Chart2 from "../Charts/Chart2";
import Piechart from "../Charts/Piechart";

export default function DashboardRightSidebar() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      flexWrap="nowrap"
      flexDirection="column"
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        size="small"
        onChange={handleChange}
        aria-label="Platform"
        sx={{
          marginTop: 2,
        }}
      >
        <ToggleButton value="week">Week</ToggleButton>
        <ToggleButton value="month">Month</ToggleButton>
        <ToggleButton value="year">Year</ToggleButton>
      </ToggleButtonGroup>
      <Typography
        color={"text.grey"}
        // padding={}
        marginTop={3}
        sx={{
          textTransform: "capitalize",
        }}
      >
        Total spending
      </Typography>
      <Typography
        color={"common.black"}
        fontWeight={700}
        fontSize={30}
        sx={{
          textTransform: "capitalize",
          fontSize: {
            lg: 30,
            md: 25,
            sm: 20,
            xs: 18,
          },
        }}
      >
        $1,549.00
      </Typography>
      <Box
        bgcolor={"#f6f7fa"}
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        marginTop={2}
        width="90%"
        sx={
          {
            // borderRadius: 5,
            // marginRight: 3,
            // marginLeft: 3,
          }
        }
      >
        <Chart2 />
      </Box>
      <Box
        bgcolor={"#f6f7fa"}
        marginTop={2}
        width="90%"
        sx={
          {
            // borderRadius: 5,
            // marginRight: 3,
            // marginLeft: 3,
          }
        }
      >
        <Piechart />
      </Box>
    </Box>
  );
}
