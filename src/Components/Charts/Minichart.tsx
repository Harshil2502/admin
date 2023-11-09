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

const MiniChart = () => {
  const data = [
    {
      month: "jan",
      uv: 11,
    },
    {
      month: "feb",
      uv: 20,
    },
    {
      month: "mar",
      uv: 75,
    },
    {
      month: "apr",
      uv: 22,
    },
    {
      month: "may",
      uv: 38,
    },
    {
      month: "jun",
      uv: 28,
    },
    {
      month: "jul",
      uv: 12,
    },
    {
      month: "aug",
      uv: 42,
    },
    {
      month: "sep",
      uv: 32,
    },
    {
      month: "oct",
      uv: 88,
    },
    {
      month: "nov",

      uv: 68,
    },
    {
      month: "dec",
      uv: 4,
    },
  ];
  return (
    <Box
      width="100%"
      sx={{ display: "flex", flexDirection: "column", marginTop: 5 }}
    >
      <ResponsiveContainer width="100%" height={70}>
        <LineChart
          // width={150}
          // height={70}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            horizontal={false}
            vertical={false}
            strokeDasharray="4 4"
          />
          <XAxis dataKey="month" hide />
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
    </Box>
  );
};

export default MiniChart;
