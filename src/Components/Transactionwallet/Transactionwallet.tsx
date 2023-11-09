import { Avatar, Box, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WalletCard from "../walletCard/WalletCard";
const Transactionwallet = ({ width, cardhieght }: any) => {
  console.log("width", width);
  return (
    <Box width={width}>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography
            sx={{
              fontSize: {
                lg: 20,
                md: 18,
                sm: 16,
                xs: 14,
              },
              px: {
                lg: 2,
                md: 2,
                sm: 2,
                xs: 1,
              },
              pt: {
                lg: 2,
                md: 2,
                sm: 1,
                xs: 1,
              },
            }}
            fontWeight={600}
            color="common.black"
          >
            My Wallet
          </Typography>
          <Box
            px={2}
            pt={1}
            sx={{
              cursor: "pointer",
            }}
          >
            <MoreHorizIcon />
          </Box>
        </Box>

        <WalletCard />

        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          position="absolute"
          width={400}
          height={40}
          sx={{
            width: {
              lg: 400,
              md: 400,
              sm: 400,
              xs: 230,
            },
            top: {
              lg: 240,
              md: 240,
              sm: 240,
              xs: 170,
            },
          }}
        >
          <Box
            bgcolor="#FFBF00"
            width="30%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            color="common.white"
            borderRadius={3}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <AccountBalanceWalletIcon fontSize="small" />
            <Typography
              sx={{
                fontSize: {
                  lg: 12,
                  md: 12,
                  sm: 12,
                  xs: 10,
                },
              }}
            >
              Deposit
            </Typography>
          </Box>
          <Box
            bgcolor="common.white"
            width="30%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            borderRadius={3}
            color="common.black"
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            sx={{
              cursor: "pointer",
            }}
          >
            <AccountBalanceWalletIcon fontSize="small" />
            <Typography
              sx={{
                fontSize: {
                  lg: 12,
                  md: 12,
                  sm: 12,
                  xs: 10,
                },
              }}
            >
              Withdraw
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={8}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 15,
              md: 15,
              sm: 13,
              xs: 11,
            },
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          }}
          fontWeight={500}
          color="common.black"
        >
          Customer
        </Typography>
        <Box
          sx={{
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
            cursor: "pointer",
          }}
        >
          <Typography color="lightgreen" fontSize={12}>
            Edit
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
      >
        <Avatar
          sx={{
            width: {
              lg: 38,
              md: 38,
              sm: 30,
              xs: 30,
            },
            height: {
              lg: 38,
              md: 38,
              sm: 30,
              xs: 30,
            },
            bgcolor: "text.primary",
            ml: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            mt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          }}
        >
          D
        </Avatar>
        <Box
          sx={{
            cursor: "pointer",
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          }}
        >
          <Typography
            color="common.black"
            sx={{
              fontSize: {
                lg: 15,
                md: 15,
                sm: 13,
                xs: 11,
              },
            }}
          >
            Darcel Ballentine
          </Typography>
          <Typography color="text.secondary" fontSize={10} textAlign="left">
            Los Angeles,USA
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={3}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 15,
              md: 15,
              sm: 13,
              xs: 11,
            },
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          }}
          fontWeight={500}
          color="common.black"
        >
          Contact Information
        </Typography>
        <Box
          sx={{
            cursor: "pointer",
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          }}
        >
          <Typography color="lightgreen" fontSize={12}>
            Edit
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        pt={2}
      >
        <MailOutlineIcon
          fontSize="small"
          sx={{
            color: "text.primary",
            ml: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
          }}
        />
        <Box
          px={2}
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            color="text.grey"
            sx={{
              fontSize: {
                lg: 12,
                md: 12,
                sm: 10,
                xs: 10,
              },
            }}
            fontWeight={500}
          >
            darcelballentine@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        pt={2}
      >
        <PhoneOutlinedIcon
          fontSize="small"
          sx={{
            color: "text.primary",
            ml: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
          }}
        />
        <Box
          px={2}
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            color="text.grey"
            sx={{
              fontSize: {
                lg: 12,
                md: 12,
                sm: 10,
                xs: 10,
              },
            }}
            fontWeight={500}
          >
            (671)555-0110
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={3}
      >
        <Typography
          sx={{
            fontSize: {
              lg: 15,
              md: 15,
              sm: 13,
              xs: 11,
            },
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
          }}
          fontWeight={500}
          color="common.black"
        >
          Default Address
        </Typography>
        <Box
          sx={{
            px: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
            pt: {
              lg: 2,
              md: 2,
              sm: 1,
              xs: 1,
            },
            cursor: "pointer",
          }}
        >
          <Typography color="lightgreen" fontSize={12}>
            Edit
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        width="100%"
        pt={2}
      >
        <LocationOnOutlinedIcon
          fontSize="small"
          sx={{
            color: "text.primary",
            ml: {
              lg: 3,
              md: 3,
              sm: 2,
              xs: 1,
            },
          }}
        />
        <Box
          px={2}
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            color="text.grey"
            sx={{
              fontSize: {
                lg: 12,
                md: 12,
                sm: 10,
                xs: 10,
              },
            }}
            fontWeight={500}
          >
            2715 Ash Dr. San Jose, South Dakota
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Transactionwallet;
