import { Container, Box } from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Chart from "../../Components/Charts/DashboardChart";
import Grid from "@mui/material/Grid";
import TransactionTable from "../../Components/TransactionTable/TransactionTable";
import Transactionwallet from "../../Components/Transactionwallet/Transactionwallet";
import Item from "../../Components/Item/Item";

const Wallet = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        className="container"
        sx={{ backgroundColor: "background.default" }}
      >
        <Box sx={{ display: "flex" }}>
          <SideDrawer />
          <Box
            component="main"
            p={3}
            sx={{
              flexGrow: 1,
              pt: { lg: 12, md: 12, sm: 8, xs: 8 },
              pl: { lg: 10, md: 10, sm: 10, xs: 8 },
            }}
            width={"100%"}
          >
            <Box
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
              <Box
                display="flex"
                sx={{
                  width: {
                    lg: "35%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  mt: {
                    md: 0,
                    sm: 2,
                    xs: 2,
                  },
                  mr: {
                    lg: 2,
                    md: 0,
                    sm: 0,
                    xs: 0,
                  },
                }}
              >
                <Item sx={{ width: "100%" }}>
                  <Transactionwallet width="100%" cardhieght={200} />
                </Item>
              </Box>
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                sx={{
                  mt: {
                    md: 0,
                    sm: 2,
                    xs: 2,
                  },
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs>
                    <Item>
                      <Chart />
                    </Item>
                  </Grid>
                  <Grid item xs>
                    <Item>
                      <TransactionTable />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Wallet;
