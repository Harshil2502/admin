import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import FormInput from "../../Components/FormInput/FormInput";

const ChangePassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [formData, setFormData] = useState({
    oldpassword: "",
    newpassword: "",
    confirmnewpassword: "",
  });

  return (
    <Box
      sx={{
        width: {
          lg: "50%",
          md: "60%",
          sm: "100%",
          xs: "100%",
        },
      }}
    >
      <Typography
        fontWeight={700}
        color="common.black"
        textAlign="left"
        fontSize={20}
      >
        Password
      </Typography>
      <FormInput
        type={showPass ? "text" : "password"}
        label="Password"
        required
        value={formData?.oldpassword}
        onChange={(event) =>
          setFormData({
            ...formData,
            oldpassword: event?.target?.value,
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
      <FormInput
        type={showPass1 ? "text" : "password"}
        label="new password"
        required
        value={formData?.newpassword}
        onChange={(event) =>
          setFormData({
            ...formData,
            newpassword: event?.target?.value,
          })
        }
        className={
          formData?.newpassword === formData?.confirmnewpassword ? "error" : ""
        }
        LeftIcon={() => <Lock color="primary" />}
        RightIcon={() => (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPass1(!showPass1)}
            edge="end"
          >
            {showPass1 ? (
              <VisibilityOff color="primary" />
            ) : (
              <Visibility color="primary" />
            )}
          </IconButton>
        )}
      />
      <FormInput
        type={showPass2 ? "text" : "password"}
        label="confirm password"
        required
        value={formData?.confirmnewpassword}
        color={
          formData?.newpassword === formData?.confirmnewpassword
            ? "primary"
            : "error"
        }
        onChange={(event) =>
          setFormData({
            ...formData,
            confirmnewpassword: event?.target?.value,
          })
        }
        LeftIcon={() => (
          <Lock
            color={
              formData?.newpassword === formData?.confirmnewpassword
                ? "primary"
                : "error"
            }
          />
        )}
        RightIcon={() => (
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPass2(!showPass2)}
            edge="end"
          >
            {showPass2 ? (
              <VisibilityOff
                color={
                  formData?.newpassword === formData?.confirmnewpassword
                    ? "primary"
                    : "error"
                }
              />
            ) : (
              <Visibility
                color={
                  formData?.newpassword === formData?.confirmnewpassword
                    ? "primary"
                    : "error"
                }
              />
            )}
          </IconButton>
        )}
      />
    </Box>
  );
};

export default ChangePassword;
