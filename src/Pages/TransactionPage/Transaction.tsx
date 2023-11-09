import { Container, Box } from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Grid from "@mui/material/Grid";

import TransactionTable from "../../Components/TransactionTable/TransactionTable";
import Transactionwallet from "../../Components/Transactionwallet/Transactionwallet";
import Item from "../../Components/Item/Item";

function Transaction() {
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
              pt: { lg: 12, md: 12, sm: 10, xs: 8 },
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
              width="100%"
            >
              <Box
                sx={{
                  width: {
                    lg: "65%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
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
                      <TransactionTable />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
              <Box
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
                  ml: {
                    lg: 2,
                    md: 0,
                    sm: 0,
                    xs: 0,
                  },
                }}
                display="flex"
              >
                <Item
                  sx={{
                    width: "100%",
                  }}
                >
                  <Transactionwallet width="100%" cardhieght={200} />
                </Item>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Transaction;
