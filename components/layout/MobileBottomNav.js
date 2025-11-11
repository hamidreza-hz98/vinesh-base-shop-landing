"use client";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/PersonOutline";
import React from "react";

export default function MobileBottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: "-1px",
        width: "100%",
        zIndex: 10,
        display: { xs: "block", md: "none" },
        bgcolor: "rgba(34,30,16,0.8)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{
          "& .Mui-selected": { color: "primary.main" },
          color: "grey.400",
        }}
      >
        <BottomNavigationAction label="خانه" icon={<HomeIcon />} />
        <BottomNavigationAction label="دسته‌بندی" icon={<CategoryIcon />} />
        <BottomNavigationAction label="علاقه‌مندی‌ها" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="پروفایل" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
