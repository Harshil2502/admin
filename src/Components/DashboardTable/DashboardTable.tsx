import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, Box, Typography, Pagination } from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchInput from "../SearchInput/SearchInput";

function createData(
  Campaign: string,
  cost: string,
  sales: number,
  sessions: number,
  Impressions: number,
  status: ReactJSXElement
) {
  return { Campaign, cost, sales, sessions, Impressions, status };
}

const rows = [
  createData(
    "Facebook Ads",
    "$159",
    6.0,
    24,
    4.0,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
  createData(
    "Instagram Ads",
    "$237",
    9.0,
    37,
    4.3,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
  createData(
    "Tictok Ads",
    "$262",
    16.0,
    24,
    6.0,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
  createData(
    "Louis Vuitton",
    "$305",
    3.7,
    67,
    4.3,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
  createData(
    "Gillette",
    "$356",
    16.0,
    49,
    3.9,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
  createData(
    "Pizza Hut",
    "$159",
    6.0,
    24,
    4.0,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
  createData(
    "Starbucks",
    "$237",
    9.0,
    37,
    4.3,
    <Chip
      label="active"
      variant="outlined"
      color="success"
      sx={{
        fontSize: {
          lg: 16,
          md: 14,
          sm: 12,
          xs: 10,
        },
      }}
    />
  ),
];

export default function DashboardTable() {
  return (
    <>
      <Box display={"flex"} padding={1} justifyContent={"space-between"}>
        <Typography
          sx={{
            fontSize: {
              lg: 18,
              md: 16,
              sm: 12,
              xs: 10,
            },
          }}
          p={1}
          fontWeight={700}
          color={"common.black"}
        >
          Recent Marketing
        </Typography>
        <Box flex={1}>
          <SearchInput />
        </Box>
        <Button
          startIcon={<FilterAltIcon />}
          size="small"
          sx={{
            textTransform: "capitalize",
            color: "text.grey",
          }}
        >
          Filter
        </Button>
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
                Campaign
              </TableCell>
              <TableCell
                align="right"
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
                Cost
              </TableCell>
              <TableCell
                align="right"
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
                Sales
              </TableCell>
              <TableCell
                align="right"
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
                Sessions
              </TableCell>
              <TableCell
                align="right"
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
                Impressions
              </TableCell>
              <TableCell
                align="right"
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
            {rows.map((row) => (
              <TableRow
                key={row.Campaign}
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
                  {row.Campaign}
                </TableCell>
                <TableCell
                  align="right"
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
                  {row.cost}
                </TableCell>
                <TableCell
                  align="right"
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
                  {row.sales}
                </TableCell>
                <TableCell
                  align="right"
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
                  {row.sessions}
                </TableCell>
                <TableCell
                  align="right"
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
                  {row.Impressions}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                align="right"
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
    </>
  );
}
