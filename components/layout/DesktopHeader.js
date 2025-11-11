"use client";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Link,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import WatchIcon from "@mui/icons-material/Watch";
import React from "react";

export default function DesktopHeader() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "rgba(18,18,18,0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        zIndex: 50,
      }}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            height: 80,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          {/* Logo + Nav */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Link
              href="#"
              underline="none"
              sx={{ display: "flex", alignItems: "center", gap: 1, color: "primary.main" }}
            >
              <WatchIcon fontSize="large" />
              <Typography variant="h6" fontWeight="bold">
                امیران واچ
              </Typography>
            </Link>
            <Box sx={{ display: "flex", gap: 3 }}>
              {["صفحه اصلی", "لیست محصولات", "فروش ویژه", "درباره ما", "تماس با ما"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{
                      color: "text.primary",
                      fontSize: 14,
                      fontWeight: 500,
                      transition: "color 0.2s",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Box>

          {/* Actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                position: "relative",
                display: { xs: "none", sm: "block" },
              }}
            >
              <SearchIcon
                sx={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "grey.400",
                }}
              />
              <InputBase
                placeholder="جستجو..."
                sx={{
                  bgcolor: "grey.700",
                  borderRadius: 9999,
                  color: "white",
                  px: 2,
                  pr: 5,
                  height: 40,
                  fontSize: 14,
                  "&::placeholder": { color: "grey.400" },
                }}
              />
            </Box>
            <IconButton
              sx={{
                bgcolor: "grey.700",
                color: "white",
                "&:hover": { bgcolor: "primary.main", color: "black" },
              }}
            >
              <Badge badgeContent={3} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              sx={{
                bgcolor: "grey.700",
                color: "white",
                "&:hover": { bgcolor: "primary.main", color: "black" },
              }}
            >
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
