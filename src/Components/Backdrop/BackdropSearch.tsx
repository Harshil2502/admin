import { Backdrop, Box, IconButton } from "@mui/material";
import SearchInput from "../SearchInput/SearchInput";
import CloseIcon from "@mui/icons-material/Close";

const BackdropSearch = ({ backdropOpen, top, handleClose }: any) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={backdropOpen}
    >
      <Box
        width="85%"
        bgcolor="#fff"
        top={top}
        position="absolute"
        display="flex"
      >
        <SearchInput />
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Backdrop>
  );
};

export default BackdropSearch;
