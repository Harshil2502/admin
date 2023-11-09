import { Avatar, AvatarGroup, Box, Chip, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
interface props {
  heading: string;
  subheading: string;
  textcontent: string;
  label: string;
  labelicon: ReactJSXElement;
}
const ProjectCard = ({
  heading,
  subheading,
  textcontent,
  label,
  labelicon,
}: props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="30%"
      >
        <Typography
          pt={1}
          px={1}
          sx={{
            fontSize: {
              lg: 16,
              md: 14,
              sm: 10,
              xs: 8,
            },
          }}
          fontWeight={500}
          textTransform="capitalize"
          color="common.black"
        >
          {heading}
        </Typography>
        <Box
          px={2}
          sx={{
            cursor: "pointer",
          }}
        >
          <MoreHorizIcon
            sx={{
              fontSize: {
                lg: "medium",
                md: "medium",
                sm: "small",
                xs: "small",
              },
            }}
          />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="row" px={1}>
        <FiberManualRecordIcon sx={{ fontSize: ".7rem", color: "blue" }} />
        <Typography
          fontSize={15}
          fontWeight={500}
          px={1}
          color="common.black"
          textTransform="capitalize"
          sx={{
            fontSize: {
              lg: 14,
              md: 12,
              sm: 10,
              xs: 8,
            },
          }}
        >
          {subheading}
        </Typography>
      </Box>
      <Typography
        fontWeight={500}
        textAlign="left"
        sx={{
          fontSize: {
            lg: 14,
            md: 12,
            sm: 10,
            xs: 8,
          },
        }}
        color="text.secondary"
        pt={1}
        px={1}
      >
        {textcontent}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        pt={2}
      >
        <Chip
          variant="filled"
          sx={{
            size: "small",
            fontSize: {
              lg: 10,
              md: 10,
              sm: 8,
              xs: 8,
            },
            p: 0,
          }}
          label={label}
          icon={labelicon}
        />
        <Box
          px={2}
          pt={1}
          sx={{
            cursor: "pointer",
          }}
        >
          <AvatarGroup>
            <Avatar
              sx={{
                height: { lg: "25px", md: "20px", sm: "15px", xs: "10px" },
                width: { lg: "25px", md: "20px", sm: "15px", xs: "10px" },
              }}
            >
              H
            </Avatar>
            <Avatar
              sx={{
                height: { lg: "25px", md: "20px", sm: "15px", xs: "10px" },
                width: { lg: "25px", md: "20px", sm: "15px", xs: "10px" },
              }}
            >
              H
            </Avatar>
          </AvatarGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
