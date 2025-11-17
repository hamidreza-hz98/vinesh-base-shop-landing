"use client";

import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
} from "@mui/material";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import CloseIcon from "@mui/icons-material/Close";

const AuthenticationDialog = ({ open, onClose, onAuthenticated }) => {
  const [form, setForm] = useState("login");
  const theme = useTheme();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogContent
        sx={{
          p: 3,
          bgcolor: theme.palette.background.paper,
          position: "relative", // relative allows absolute children positioning
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 300,
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, left: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Forms */}
        <Box width="100%" display="flex" alignItems="center" justifyContent="center">
          {form === "login" ? (
            <LoginForm
              onSwitch={() => setForm("signup")}
              onSuccess={onAuthenticated}
            />
          ) : (
            <SignupForm
              onSwitch={() => setForm("login")}
              onSuccess={onAuthenticated}
            />
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthenticationDialog;
