import { useState } from "react";
import adminImg from "../../Assets/Images/admin-Logo.png";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Navigation/Navigation";
import FormInput from "../../Components/FormInput/FormInput";

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="container"
      sx={{
        backgroundColor: "primary.light",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box position="absolute" top={40} left={60}>
        <img src={adminImg} alt="Tray Tracker" />
      </Box>
      <Paper
        elevation={3}
        sx={{
          width: "25rem",
          p: 4,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: 2,
        }}
      >
        <Typography fontSize={24} fontWeight={600} color={"primary.main"}>
          LogIn
        </Typography>

        {/* Form */}

        <FormInput
          type="email"
          label="Email"
          required
          value={formData?.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event?.target?.value,
            })
          }
          LeftIcon={() => <Email color="primary" />}
        />

        <FormInput
          type={showPass ? "text" : "password"}
          label="Password"
          required
          value={formData?.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event?.target?.value,
            })
          }
          LeftIcon={() => <Lock color="primary" />}
          RightIcon={() => (
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPass(!showPass)}
              edge="end"
            >
              {showPass ? (
                <VisibilityOff color="primary" />
              ) : (
                <Visibility color="primary" />
              )}
            </IconButton>
          )}
        />

        {/* Submit btn */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          sx={{
            marginTop: 1,
            borderRadius: 5,
          }}
          onClick={() => {
            console.log({ formData });
            navigate(ROUTES.DASHBOARD);
          }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}
