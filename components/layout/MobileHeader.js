"use client";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useSelector } from "react-redux";
import { selectSettings } from "@/store/settings/settings.selector";
import Loader from "../common/Loader";
import Image from "next/image";
import { setFilePath } from "@/lib/media";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export default function MobileHeader() {
  const settings = useSelector(selectSettings);
  
  if (!settings) {
    return <Loader />;
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "rgba(34,30,16,0.8)",
        backdropFilter: "blur(8px)",
        display: { xs: "flex", md: "none" },
      }}
      color="text.primary"
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between", height: 64 }}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>

        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={setFilePath(settings.logo.path)}
            alt={settings.name}
            width={48}
            height={48}
            unoptimized
            crossOrigin="anonymous"
            sizes="100vw"
            style={{ borderRadius: "50%" }}
          />

          <Typography mr={1} fontWeight="bold" fontSize="1.2rem">
            {settings.name}
          </Typography>
        </Link>

        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
