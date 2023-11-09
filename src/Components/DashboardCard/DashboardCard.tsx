import { Box, Chip, Typography } from "@mui/material";
import MiniChart from "../Charts/Minichart";
import ImportExportIcon from "@mui/icons-material/ImportExport";
const DashboardCard = () => {
  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box
        width="50%"
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <Typography
          color={"text.grey"}
          fontWeight={400}
          sx={{
            fontSize: {
              lg: 18,
              md: 16,
              sm: 14,
              xs: 12,
            },
          }}
        >
          Guide view
        </Typography>
        <Box display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <Typography
              color={"common.black"}
              sx={{
                fontSize: {
                  lg: 28,
                  md: 24,
                  sm: 20,
                  xs: 16,
                },
              }}
              mr={1}
              fontWeight={600}
            >
              1.240
            </Typography>
            <Chip
              icon={
                <ImportExportIcon
                  sx={{
                    width: { lg: 15, md: 14, sm: 13, xs: 12 },
                    height: { lg: 15, md: 14, sm: 13, xs: 12 },
                  }}
                />
              }
              label="75%"
              size="small"
              sx={{
                fontSize: 8,
              }}
              variant="outlined"
              color="primary"
            />
          </Box>
        </Box>
        <Typography
          color={"text.grey"}
          noWrap
          sx={{
            fontSize: {
              lg: 18,
              md: 16,
              sm: 14,
              xs: 12,
            },
          }}
        >
          views (7 days)
        </Typography>
      </Box>
      <Box paddingBottom={2} width="50%">
        <MiniChart />
      </Box>
    </Box>
  );
};

export default DashboardCard;
