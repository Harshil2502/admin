import { InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchInputProps = {
  showLeftIcon?: boolean;
  RightIcon?: () => JSX.Element;
};

const SearchContainer = styled("div")(({ theme }) => ({
  //   position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.light,
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.light, 0.5),
  },
  display: "flex",
  alignItems: "center",
  flex: 1,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0, 0, 1),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    width: "100%",
    color: theme.palette.text.grey,
    fontSize: "12px",
    fontWeight: 600,
  },
}));

export default function SearchInput(props: SearchInputProps) {
  const { showLeftIcon = true, RightIcon } = props;

  return (
    <SearchContainer>
      {showLeftIcon && (
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              color: "text.grey",
            }}
          />
        </SearchIconWrapper>
      )}
      <StyledInputBase
        placeholder="Search Something"
        inputProps={{ "aria-label": "search" }}
      />
      {RightIcon && (
        <SearchIconWrapper>
          <RightIcon />
        </SearchIconWrapper>
      )}
    </SearchContainer>
  );
}
