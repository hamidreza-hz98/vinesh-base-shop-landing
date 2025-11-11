"use client";
import React, { useMemo } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import createAppTheme from "./theme";

/**
 * AppThemeProvider
 * - Provides a single MUI theme (no dark/light mode)
 */
export default function AppThemeProvider({ children }) {
  // Create a single fixed theme (for example, "light" palette)
  const theme = useMemo(() => createAppTheme({ mode: "light" }), []);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
