import { Box, Button, Divider, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  Tooltip,
} from "recharts";
const data01 = [
  { name: "Active viewers", value: 90 },
  { name: "Inactive viewers", value: 25 },
  { name: "non subscriber", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Piechart = () => {
  // const { ref, width } = useGetResponsiveDimensions();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
      // ref={ref}
      flex={1}
    >
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Typography
          sx={{
            fontSize: {
              lg: 22,
              md: 18,
              sm: 14,
              xs: 12,
            },
          }}
          fontWeight={600}
          textTransform={"capitalize"}
          color={"common.black"}
          // margin={1}
          padding={1}
        >
          total view performance{" "}
        </Typography>
        <MoreHorizIcon
          sx={{
            margin: 1,
          }}
        />
      </Box>
      <Divider />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        flexDirection={"column"}
        sx={{
          height: {
            lg: 400,
            md: 350,
            sm: 300,
            xs: 200,
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data01}
              dataKey={"value"}
              innerRadius={"75%"}
              outerRadius={"98%"}
              startAngle={0}
              endAngle={180}
            >
              {data01.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
              <Label />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          marginTop={2}
        >
          <Typography
            marginTop={2}
            sx={{
              fontSize: {
                lg: 20,
                md: 18,
                sm: 14,
                xs: 12,
              },
            }}
          >
            total count
          </Typography>
          <Typography
            fontSize={28}
            fontWeight={600}
            sx={{
              color: "common.black",
              fontSize: {
                lg: 28,
                md: 25,
                sm: 22,
                xs: 18,
              },
            }}
          >
            1.375
          </Typography>
          <Typography
            width={"70%"}
            padding={2}
            sx={{
              fontSize: {
                lg: 18,
                md: 16,
                sm: 14,
                xs: 10,
              },
              p: {
                lg: 2,
                md: 2,
                sm: 1,
                xs: 0,
              },
              pb: {
                xs: 1,
              },
            }}
          >
            keep your info upadated to increase the number of interaction{" "}
          </Typography>
          <Button
            variant="contained"
            sx={{
              height: 25,
              width: 30,
              fontSize: 10,
              p: 0,
            }}
          >
            See more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Piechart;
