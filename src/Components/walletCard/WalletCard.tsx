import { Box, Stack, Typography } from "@mui/material";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";
import ImportExportRoundedIcon from "@mui/icons-material/ImportExportRounded";

const WalletCard = () => {
  return (
    <Box
      bgcolor={"text.primary"}
      mt={2}
      borderRadius={3}
      position="relative"
      sx={{
        width: {
          lg: 360,
          md: 360,
          sm: 360,
          xs: 210,
        },
        height: {
          lg: 200,
          md: 200,
          sm: 200,
          xs: 130,
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography
          px={2}
          sx={{
            fontSize: {
              lg: 25,
              md: 25,
              sm: 25,
              xs: 15,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 2,
              xs: 1,
            },
          }}
          fontWeight={600}
          color="common.white"
        >
          LOGO
        </Typography>
        <Box
          px={2}
          sx={{
            cursor: "pointer",
            pt: {
              lg: 2,
              md: 2,
              sm: 2,
              xs: 1,
            },
          }}
        >
          <SignalCellularAltRoundedIcon
            fontSize="small"
            sx={{
              color: "common.white",
            }}
          />
        </Box>
      </Box>
      <Typography
        color="common.white"
        align="left"
        px={2}
        sx={{
          fontSize: {
            lg: 25,
            md: 25,
            sm: 25,
            xs: 15,
          },
          pt: {
            lg: 2,
            md: 2,
            sm: 2,
            xs: 1,
          },
        }}
      >
        My balance
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography
          px={2}
          fontWeight={600}
          color="common.white"
          sx={{
            fontSize: {
              lg: 25,
              md: 25,
              sm: 25,
              xs: 15,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 2,
              xs: 1,
            },
          }}
        >
          $25,463.00
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="center"
          px={2}
          sx={{
            cursor: "pointer",
          }}
        >
          <ImportExportRoundedIcon
            fontSize="small"
            sx={{
              color: "common.white",
            }}
          />
          <Typography color="common.white">+2.5%</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default WalletCard;
