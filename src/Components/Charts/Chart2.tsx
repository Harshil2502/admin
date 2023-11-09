import React from "react";
import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useGetResponsiveDimensions from "../../Hooks/useGetResponsiveDimensions";

const Chart2 = () => {
  // const { width, ref } = useGetResponsiveDimensions();
  const data = [
    {
      uv: 16,
    },
    {
      uv: 28,
    },
    {
      uv: 75,
    },
    {
      uv: 2,
    },
    {
      uv: 38,
    },
    {
      uv: 28,
    },
    {
      uv: 12,
    },
    {
      uv: 42,
    },
    {
      uv: 32,
    },
    {
      uv: 80,
    },
    {
      uv: 68,
    },
    {
      uv: 4,
    },
  ];
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="90%"
      // ref={ref}
      sx={{
        flexDirection: "column",
      }}
    >
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="4 4" />
          <XAxis hide />
          {/* <YAxis /> */}
          <Tooltip />

          <Line
            type="monotone"
            dataKey="uv"
            activeDot={{ r: 8 }}
            strokeWidth={3}
            stroke="#446CFF"
            dot={false}
            isAnimationActive
          />
        </LineChart>
      </ResponsiveContainer>
      <Box
        width={"80%"}
        padding={2}
        marginTop={2}
        marginBottom={3}
        sx={{
          bgcolor: "common.white",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 18,
              md: 16,
              sm: 14,
              xs: 10,
            },
          }}
        >
          {" "}
          your spending decreased by -7.8% from last month. Good job!{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Chart2;
