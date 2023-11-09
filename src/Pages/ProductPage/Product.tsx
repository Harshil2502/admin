import {
  Container,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Button,
} from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Grid from "@mui/material/Grid";

import ProductTable from "../../Components/ProductTable/ProductTable";
import Item from "../../Components/Item/Item";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import DropdownButton from "../../Components/DropdownButton/DropdownButton";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Calendar from "../../Components/Calendar/Calendar";

const Product = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className="container"
        sx={{ backgroundColor: "background.default" }}
      >
        <Box display="flex">
          <SideDrawer />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pt: { lg: 12, md: 12, sm: 8, xs: 8 },
              pl: { lg: 10, md: 10, sm: 10, xs: 8 },
              pr: { lg: 2, md: 1.5, sm: 1, xs: 0.8 },
            }}
            width={"100%"}
          >
            <Box width={"100%"}>
              <Box
                width={"100%"}
                display="flex"
                sx={{
                  flexDirection: {
                    lg: "row",
                    md: "column",
                    sm: "column",
                    xs: "column",
                  },
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs>
                    <Box width="100%" display="none">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                      >
                        <Box
                          width="30%"
                          mb={2}
                          display="flex"
                          flexDirection="row"
                        >
                          <Item
                            sx={{
                              p: 1,
                              mr: 2,
                              width: "50%",
                              borderBottom: "none",
                            }}
                          >
                            <ToggleButtonGroup color="primary" exclusive>
                              <ToggleButton
                                value="row"
                                sx={{ border: "none" }}
                                size="small"
                              >
                                <TableRowsIcon />
                              </ToggleButton>
                              <ToggleButton
                                value="column"
                                sx={{ border: "none" }}
                                size="small"
                              >
                                <ViewColumnIcon />
                              </ToggleButton>
                            </ToggleButtonGroup>
                          </Item>
                          <Item sx={{ p: 0, width: "50%" }}>
                            <Box
                              display="flex"
                              justifyContent="space-evenly"
                              flexDirection="row"
                              alignItems="center"
                              height="100%"
                            >
                              <Typography
                                color="text.grey"
                                sx={{
                                  fontSize: {
                                    lg: 14,
                                    md: 10,
                                    sm: 10,
                                    xs: 8,
                                  },
                                }}
                                fontWeight={500}
                                pl={1}
                              >
                                Show:
                              </Typography>
                              <DropdownButton title="Product" />
                            </Box>
                          </Item>
                        </Box>
                        <Box
                          width="40%"
                          mb={2}
                          display="flex"
                          justifyContent="flex-end"
                          flexDirection="row"
                          flexWrap="nowrap"
                          mr={1}
                        >
                          <Item sx={{ p: 1, mr: 2, width: "45%" }}>
                            <Box
                              display="flex"
                              justifyContent="space-evenly"
                              flexDirection="row"
                              alignItems="center"
                            >
                              <Typography
                                color="text.grey"
                                sx={{
                                  fontSize: {
                                    lg: 14,
                                    md: 10,
                                    sm: 10,
                                    xs: 8,
                                  },
                                }}
                                fontWeight={500}
                                pl={1}
                              >
                                SortBy:
                              </Typography>
                              <DropdownButton title="Default" />
                            </Box>
                          </Item>
                          <Item sx={{ p: 0, width: "40%" }}>
                            <Button
                              startIcon={<AddIcon />}
                              variant="contained"
                              color="primary"
                              sx={{
                                height: "100%",
                                width: "100%",
                                fontSize: {
                                  lg: 14,
                                  md: 10,
                                  sm: 8,
                                  xs: 8,
                                },
                              }}
                            >
                              {" "}
                              AddProduct
                            </Button>
                          </Item>
                        </Box>
                      </Box>
                    </Box>
                    <Item>
                      <ProductTable />
                    </Item>
                  </Grid>
                </Grid>
                <Box
                  display="flex"
                  justifyContent="center"
                  sx={{
                    width: {
                      lg: "35%",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    mt: {
                      lg: 0,
                      md: 2,
                      sm: 2,
                      xs: 2,
                    },
                    ml: {
                      lg: 2,
                      md: 0,
                      sm: 0,
                      xs: 0,
                    },
                  }}
                >
                  <Item
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="95%"
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
                        Sales History
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
                    {[
                      {
                        name: "Rompi Berkancing",
                        price: "$400.98",
                        date: "29April,2023",
                        rate: 324.75,
                      },
                      {
                        name: "Blazer Assorted Pocket",
                        price: "$550.08",
                        date: "28April,2023",
                        rate: 350.74,
                      },
                      {
                        name: "Pattern Top with Knot",
                        price: "$210.98",
                        date: "28April,2023",
                        rate: 234,
                      },
                    ].map((item) => (
                      <Box
                        width="90%"
                        p={1}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          width="70%"
                          flexWrap={"nowrap"}
                        >
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
                            bgcolor={"red"}
                          />
                          <Box pl={1}>
                            <Typography
                              textAlign={"left"}
                              noWrap
                              sx={{
                                fontSize: {
                                  lg: 15,
                                  md: 12,
                                  sm: 10,
                                  xs: 8,
                                },
                              }}
                              fontWeight={500}
                              color="common.black"
                            >
                              {item.name}
                            </Typography>
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="flex-end"
                            >
                              <Typography
                                sx={{
                                  fontSize: {
                                    lg: 10,
                                    md: 10,
                                    sm: 8,
                                    xs: 8,
                                  },
                                }}
                                fontWeight={600}
                                color="blue"
                              >
                                {item.price}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: {
                                    lg: 10,
                                    md: 10,
                                    sm: 8,
                                    xs: 8,
                                  },
                                }}
                                fontWeight={600}
                                color="text.secondary"
                              >
                                {item.date}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: {
                              lg: 14,
                              md: 12,
                              sm: 10,
                              xs: 8,
                            },
                          }}
                          fontWeight={600}
                          color="lightgreen"
                        >
                          {item.rate}
                        </Typography>
                      </Box>
                    ))}
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="95%"
                    >
                      <Typography
                        px={2}
                        pt={2}
                        fontSize={20}
                        fontWeight={600}
                        color="common.black"
                      >
                        Select date
                      </Typography>
                    </Box>
                    <Box
                      width="80%"
                      mt={2}
                      bgcolor="background.default"
                      borderRadius={3}
                    >
                      <Calendar />
                    </Box>
                  </Item>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Product;
