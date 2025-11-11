"use client";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Badge,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "@/store/category/category.selector";
import Loader from "../common/Loader";
import { selectSettings } from "@/store/settings/settings.selector";
import Image from "next/image";
import { setFilePath } from "@/lib/media";
import routes from "@/constants/landing.routes";

export default function DesktopHeader() {
  const { categories } = useSelector(selectCategories);
  const settings = useSelector(selectSettings);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (!categories || !settings) {
    return <Loader />;
  }

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
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Toolbar
          sx={{
            height: 80,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            height: "100%",
            padding: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Link
              href="#"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "primary.main",
              }}
            >
              <Image
                src={setFilePath(settings.logo.path)}
                alt={settings.name}
                width={64}
                height={64}
                unoptimized
                crossOrigin="anonymous"
                sizes="100vw"
                style={{ borderRadius: "50%" }}
              />

              <Typography mr={1} fontWeight="bold" fontSize="1.2rem">
                {settings.name}
              </Typography>
            </Link>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link
                href={routes.products.link}
                underline="none"
                sx={{
                  color: "text.primary",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s",
                  "&:hover": { color: "primary.main" },
                }}
              >
                همه ی محصولات
              </Link>

              {/* Mega Menu Trigger */}
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
                onMouseEnter={handleOpen}
              >
                دسته بندی ها
              </Typography>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  onMouseEnter: handleOpen,
                  onMouseLeave: handleClose,
                  sx: {
                    display: "flex",
                    gap: 4,
                    p: 2,
                  },
                }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                sx={{
                  "& .MuiPaper-root": {
                    top: "45px !important",
                    maxWidth: "fit-content",
                    p: 2,
                  },
                }}
              >
                {categories.map((cat) => (
                  <Box
                    key={cat.slug}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    {/* Parent category */}
                    <Link
                      href={`/products?categories=${cat.slug}`}
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {cat.name}
                    </Link>

                    {/* Children */}
                    {cat.children?.map((child) => (
                      <MenuItem
                        key={child.slug}
                        component="a"
                        href={`/products?categories=${child.slug}`}
                        onClick={handleClose}
                        sx={{ p: 0, my: 0.5 }}
                      >
                        {child.name}
                      </MenuItem>
                    ))}
                  </Box>
                ))}
              </Menu>

              {[routes.about, routes.contact, routes.faq].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  underline="none"
                  sx={{
                    color: "text.primary",
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "color 0.2s",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              sx={{
                bgcolor: "grey.700",
                color: "white",
                "&:hover": { bgcolor: "primary.main", color: "black" },
              }}
            >
              <SearchIcon />
            </IconButton>

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
