import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Chip, Box, Typography, Pagination, Checkbox } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchInput from "../SearchInput/SearchInput";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import DropdownButton from "../DropdownButton/DropdownButton";

function createData(
  Customer: string,
  date: string,
  amount: string,
  payment: ReactJSXElement,
  status: ReactJSXElement
) {
  return { Customer, date, amount, payment, status };
}

const rows = [
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip
      label="paid"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />,
    <Chip
      label="unfilled"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
      color="primary"
      variant="outlined"
    />
  ),
  createData(
    "Jenny wilson",
    "Apr 27,2023",
    "$3987.00",
    <Chip label="paid" color="success" variant="outlined" />,
    <Chip label="unfilled" color="primary" variant="outlined" />
  ),
];

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
  <Box fontWeight={600} px={2} fontSize={10} color={"text.grey"} display="flex">
    <SimCardDownloadOutlinedIcon fontSize="medium" />
    <Typography alignSelf="center" fontSize={11} textTransform={"capitalize"}>
      Download
    </Typography>
  </Box>,
  <Button
    startIcon={<FilterAltIcon />}
    size="small"
    sx={{
      textTransform: "capitalize",
      color: "text.grey",
      px: 2,
    }}
  >
    Filter
  </Button>,
];

export default function TransactionTable() {
  return (
    <Box>
      <Box display={"flex"} padding={3} justifyContent="space-between">
        <Box flex={1}>
          <SearchInput />
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            startIcon={<FilterAltIcon fontSize="small" />}
            size="small"
            sx={{
              textTransform: "capitalize",
              color: "text.grey",
              px: 2,
              display: {
                lg: "inherit",
                md: "inherit",
                sm: "none",
                xs: "none",
              },
            }}
          >
            Filter
          </Button>
          <Box
            sx={{
              display: {
                lg: "none",
                md: "none",
                sm: "inherit",
                xs: "inherit",
              },
            }}
          >
            <DropdownButton title="Filter" menu={menu} />
          </Box>
          <Box
            fontWeight={600}
            fontSize={20}
            color={"text.grey"}
            px={2}
            sx={{
              cursor: "pointer",
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <CalendarMonthIcon fontSize="small" />
            <Typography
              px={1}
              alignSelf="center"
              fontSize={13}
              textTransform={"capitalize"}
            >
              april11-april-24
            </Typography>
          </Box>
          <Box
            fontWeight={400}
            px={2}
            fontSize={13}
            color={"text.grey"}
            sx={{
              cursor: "pointer",
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
            }}
            alignSelf="center"
          >
            <SimCardDownloadOutlinedIcon fontSize="small" />
            <Typography fontSize={13} textTransform={"capitalize"}>
              Download
            </Typography>
          </Box>
        </Box>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                color="text.secondary"
                sx={{
                  color: "common.black",
                  fontWeight: 600,
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                <Checkbox
                  sx={{
                    mr: 2,
                  }}
                />
                Customer
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: "common.black",
                  fontWeight: 600,
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                Date
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "common.black",
                  fontWeight: 600,
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                Amount
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "common.black",
                  fontWeight: 600,
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                Payment
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "common.black",
                  fontWeight: 600,
                  fontSize: {
                    lg: 16,
                    md: 14,
                    sm: 12,
                    xs: 10,
                  },
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: {
                      lg: 16,
                      md: 14,
                      sm: 12,
                      xs: 10,
                    },
                  }}
                >
                  {" "}
                  <Checkbox
                    sx={{
                      borderRadius: "100%",
                      mr: 2,
                    }}
                  />
                  {row.Customer}
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: {
                      lg: 16,
                      md: 14,
                      sm: 12,
                      xs: 10,
                    },
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: {
                      lg: 16,
                      md: 14,
                      sm: 12,
                      xs: 10,
                    },
                  }}
                >
                  {row.amount}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: {
                      lg: 16,
                      md: 14,
                      sm: 12,
                      xs: 10,
                    },
                  }}
                >
                  {row.payment}
                </TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  color: "text.grey",
                }}
              >
                <Pagination
                  count={10}
                  shape="rounded"
                  sx={{
                    float: "right",
                    boxShadow: "none",
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
