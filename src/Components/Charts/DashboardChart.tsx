import { Box, Chip, Stack, Typography } from "@mui/material";
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
import ImportExportIcon from "@mui/icons-material/ImportExport";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import DropdownButton from "../DropdownButton/DropdownButton";

const DashboardChart = (props: any) => {
  const menu = [
    <Box
      fontWeight={600}
      fontSize={20}
      color={"text.grey"}
      px={2}
      display={"flex"}
    >
      <CalendarMonthIcon fontSize="medium" />
      <Typography alignSelf="center" fontSize={11} textTransform={"capitalize"}>
        april11-april-24
      </Typography>
    </Box>,
    <Box
      fontWeight={600}
      px={2}
      fontSize={10}
      color={"text.grey"}
      display="flex"
    >
      <SimCardDownloadOutlinedIcon fontSize="medium" />
      <Typography alignSelf="center" fontSize={11} textTransform={"capitalize"}>
        Download
      </Typography>
    </Box>,
  ];

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
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction={"row"}
        // p={2}
        // mr={2}
        alignItems="center"
        sx={{
          display: {
            sm: "flex",
            xs: "flex",
          },
          justifyContent: {
            sm: "space-between",
            xs: "space-between",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 26,
              md: 22,
              sm: 18,
              xs: 14,
            },
          }}
          fontWeight={700}
          textAlign="left"
          // p={2}
          color={"text.secondary"}
        >
          Statitics
        </Typography>

        <Stack
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
          direction={"row"}
          flex={1}
          justifyContent="center"
          spacing={2}
          px={2}
        >
          <Chip
            icon={<ImportExportIcon fontSize="small" />}
            label="Income"
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<ImportExportIcon fontSize="small" />}
            label="Expense"
            size="small"
            color="info"
            variant="outlined"
          />
        </Stack>
        <Box
          sx={{
            display: {
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Box
            fontWeight={600}
            fontSize={20}
            color={"text.grey"}
            px={2}
            display={"flex"}
          >
            <CalendarMonthIcon fontSize="medium" />
            <Typography
              alignSelf="center"
              fontSize={13}
              textTransform={"capitalize"}
            >
              april11-april-24
            </Typography>
          </Box>
          <Box
            fontWeight={600}
            px={2}
            fontSize={10}
            color={"text.grey"}
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <SimCardDownloadOutlinedIcon fontSize="medium" />
            <Typography fontSize={16} textTransform={"capitalize"}>
              Download
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "flex",
              xs: "flex",
            },
          }}
          alignSelf="right"
        >
          <DropdownButton title="Filter" menu={menu} />
        </Box>
      </Stack>
      <Box
        width="100%"
        sx={{
          height: {
            lg: 300,
            md: 300,
            sm: 250,
            xs: 200,
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -32,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="4 4" />
            <XAxis dataKey="month" />
            <YAxis />

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
    </Box>
  );
};

export default DashboardChart;
