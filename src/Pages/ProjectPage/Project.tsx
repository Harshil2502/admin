import { Box, Container, Grid, Typography } from "@mui/material";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Item from "../../Components/Item/Item";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const data = [
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
  {
    heading: "Implement Login",
    subheading: "Development",
    textcontent:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia veniam quae adipisci laboriosam perferendis ipsa.",
    label: "mar",
    labelicon: (
      <CalendarMonthIcon
        sx={{
          height: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
          width: { lg: "20px", md: "20px", sm: "15px", xs: "12px" },
        }}
      />
    ),
  },
];
const headerdata = [
  {
    heading: "To Do",
    headingnumber: "(03)",
    color: "black",
  },
  {
    heading: "In Progress",
    headingnumber: "(02)",
    color: "blue",
  },
  {
    heading: "In Review",
    headingnumber: "(10)",
    color: "yellow",
  },
  {
    heading: "Done",
    headingnumber: "(10)",
    color: "green",
  },
];
const Project = () => {
  return (
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
          pr={3}
          pb={3}
          sx={{
            flexGrow: 1,
            pt: { lg: 12, md: 12, sm: 10, xs: 8 },
            pl: { lg: 10, md: 10, sm: 10, xs: 8 },
          }}
          width={"100%"}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {headerdata.map((item) => (
              <Grid item xs={2} sm={4} md={3} p={2}>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    p={1}
                  >
                    <Typography
                      color={item.color}
                      noWrap
                      sx={{
                        fontSize: {
                          lg: 14,
                          md: 12,
                          sm: 10,
                          xs: 8,
                        },
                      }}
                      fontWeight={600}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: 14,
                          md: 12,
                          sm: 10,
                          xs: 6,
                        },
                      }}
                    >
                      {item.headingnumber}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    // p={1}
                  >
                    <AddIcon
                      sx={{
                        // mx: 1,
                        fontSize: {
                          lg: "medium",
                          md: "medium",
                          sm: "small",
                          xs: "small",
                        },
                      }}
                    />
                    <MoreHorizIcon
                      sx={{
                        // mx: 1,
                        fontSize: {
                          lg: "medium",
                          md: "medium",
                          sm: "small",
                          xs: "small",
                        },
                      }}
                    />
                  </Box>
                </Item>
              </Grid>
            ))}
            {data.map((item) => (
              <Grid item xs={2} sm={4} md={3} p={2}>
                <Item>
                  <ProjectCard
                    heading={item.heading}
                    subheading={item.subheading}
                    textcontent={item.textcontent}
                    label={item.label}
                    labelicon={item.labelicon}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Project;
