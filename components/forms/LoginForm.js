"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidationSchema } from "@/constants/validation";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { toPersian } from "@/lib/number";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import useNotifications from "@/hooks/useNotifications/useNotifications";
import { login } from "@/store/customer/customer.action";
import routes from "@/constants/landing.routes";
import { useRouter } from "next/navigation";

const LoginForm = ({ onSwitch, onSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const notifications = useNotifications();
    const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginFormValidationSchema) });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => e.preventDefault();

  const onSubmit = async (body) => {
     try {
      const message = await dispatch(login(body)).unwrap();

      notifications.show(message, {
        severity: "success",
        autoHideDuration: 3000,
      });

      onSuccess?.()
    } catch (error) {
      notifications.show(error, {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: 320 }}
    >
      <Typography variant="h5" fontWeight={600} textAlign="center">
        ورود به حساب کاربری
      </Typography>

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="شماره همراه"
            variant="outlined"
            placeholder={toPersian("09129876543")}
            size="small"
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="رمز عبور"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Box
        onClick={onSwitch}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="caption">حساب کاربری ندارید؟</Typography>
        <Typography mr={1} variant="caption" color="primary">
          ثبت نام
        </Typography>
      </Box>

      <Button
        variant="contained"
        type="submit"
        disabled={isSubmitting}
        sx={{ mt: 1 }}
      >
        {isSubmitting ? "Loading..." : "ورود"}
      </Button>
    </Box>
  );
};

export default LoginForm;