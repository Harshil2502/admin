import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {
  Chip,
  Box,
  Typography,
  Pagination,
  Stack,
  Checkbox,
  Switch,
} from "@mui/material";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchInput from "../SearchInput/SearchInput";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import DropdownButton from "../DropdownButton/DropdownButton";

function createData(
  Product: string,
  ProductId: string,
  Price: string,
  Stock: string,
  Sales: number,

  Active: ReactJSXElement
) {
  return { Product, ProductId, Price, Stock, Sales, Active };
}

const rows = [
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 1500, <Switch />),
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 1100, <Switch />),
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 100, <Switch />),
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 800, <Switch />),
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 500, <Switch />),
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 1900, <Switch />),
  createData("Basic Hoddie", "1121211", "$3987.00", "235", 300, <Switch />),
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
export default function ProductTable() {
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
            startIcon={<FilterAltIcon />}
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
            <CalendarMonthIcon fontSize="medium" />
            <Typography px={1} fontSize={13} textTransform={"capitalize"}>
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
          >
            <SimCardDownloadOutlinedIcon fontSize="medium" />
            <Typography fontSize={16} textTransform={"capitalize"}>
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
                {" "}
                <Box
                  display={"flex"}
                  // justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Checkbox
                    sx={{
                      mr: 2,
                    }}
                  />
                  Product
                </Box>
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
                Price
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
                Stock
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
                Statistics
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
                Active
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.Sales}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="center"
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
                    <Box
                      display={"flex"}
                      // justifyContent={"center"}
                      alignItems={"center"}
                      flexDirection={"row"}
                    >
                      <Checkbox
                        sx={{
                          borderRadius: "100%",
                          mr: 2,
                        }}
                      />{" "}
                      <Box
                        sx={{
                          height: {
                            lg: "40px",
                            md: "35px",
                            sm: "30px",
                            xs: "25px",
                          },
                          width: {
                            lg: "40px",
                            md: "35px",
                            sm: "30px",
                            xs: "25px",
                          },
                        }}
                        borderRadius={1}
                        bgcolor={"green"}
                      ></Box>{" "}
                      <Typography
                        px={1}
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
                        {row.Product}
                      </Typography>
                    </Box>
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
                    {row.Price}
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
                    {row.Stock}
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
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      width={"100%"}
                    >
                      {1100 <= row.Sales && row.Sales <= 2000 ? (
                        <>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="90%"
                          >
                            <Typography
                              fontSize={13}
                              sx={{
                                fontSize: {
                                  lg: 13,
                                  md: 12,
                                  sm: 11,
                                  xs: 10,
                                },
                              }}
                              fontWeight={700}
                            >
                              Perfect
                            </Typography>
                            <Typography fontSize={10}>{row.Sales}</Typography>
                          </Box>

                          <Box
                            width={`${(row.Sales / 2000) * 100}%`}
                            height={12}
                            bgcolor={"blue"}
                            my={1}
                            borderRadius={15}
                          ></Box>
                        </>
                      ) : 600 < row.Sales && row.Sales < 1100 ? (
                        <>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="90%"
                          >
                            <Typography fontSize={13} fontWeight={700}>
                              Good
                            </Typography>
                            <Typography fontSize={10}>{row.Sales}</Typography>
                          </Box>
                          <Box
                            width={`${(row.Sales / 2000) * 100}%`}
                            height={12}
                            bgcolor={"yellow"}
                            my={1}
                            borderRadius={15}
                          ></Box>
                        </>
                      ) : (
                        <>
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="90%"
                          >
                            <Typography fontSize={13} fontWeight={700}>
                              Bad
                            </Typography>
                            <Typography fontSize={10}>{row.Sales}</Typography>
                          </Box>
                          <Box
                            width={`${(row.Sales / 2000) * 100}%`}
                            height={12}
                            bgcolor={"red"}
                            my={1}
                            borderRadius={15}
                          ></Box>
                        </>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{row.Active}</TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell
                sx={{
                  color: "text.grey",

                  border: "none",
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
