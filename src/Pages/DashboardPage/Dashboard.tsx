import { Container, Box } from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Grid from "@mui/material/Grid";
import Item from "../../Components/Item/Item";
import DashboardChart from "../../Components/Charts/DashboardChart";
import DashboardTable from "../../Components/DashboardTable/DashboardTable";
import DashboardCard from "../../Components/DashboardCard/DashboardCard";
import DashboardRightSidebar from "../../Components/DashboardRightSidebar/DashboardRightSidebar";

export default function Dashboard() {
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
            m={0}
            p={2}
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
                  <Grid item xs md sm>
                    <Item>
                      <DashboardCard />
                    </Item>
                  </Grid>
                  <Grid item xs md sm>
                    <Item>
                      <DashboardCard />
                    </Item>
                  </Grid>
                  <Grid item xs md sm>
                    <Item>
                      <DashboardCard />
                    </Item>
                  </Grid>

                  <Grid item xs={12}>
                    <Item>
                      <DashboardChart />
                    </Item>
                  </Grid>
                  <Grid item xs={12}>
                    <Item>
                      <DashboardTable />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
              <Box
                ml={2}
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
                  }}
                >
                  <DashboardRightSidebar />
                </Item>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
