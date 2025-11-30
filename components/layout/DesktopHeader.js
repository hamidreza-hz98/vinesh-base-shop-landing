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
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "@/store/category/category.selector";
import Loader from "../common/Loader";
import { selectSettings } from "@/store/settings/settings.selector";
import Image from "next/image";
import { setFilePath } from "@/lib/media";
import routes from "@/constants/landing.routes";
import SearchDialog from "../drawers/SearchDialog";
import { paramifyLink, setRequestQuery } from "@/lib/request";
import { useRouter, useSearchParams } from "next/navigation";
import { selectCart } from "@/store/cart/cart.selector";
import { toPersian } from "@/lib/number";
import nookies from "nookies";
import AuthenticationDrawer from "../drawers/AuthenticationDrawer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DesktopMegaMenu from "./DesktopMegaMenu";

export default function DesktopHeader() {
  const [openAuth, setOpenAuth] = useState(false);

  const { categories } = useSelector(selectCategories);
  const { general } = useSelector(selectSettings) || {};
  const cart = useSelector(selectCart);

  const { token, customer } = nookies.get();

  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClickProfile = () => {
    if (customer && token) {
      router.push("/profile");
    } else {
      setOpenAuth(true);
    }
  };

  if (!categories || !general || !cart) {
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
            padding: "8px 0px !important",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Link
              href={routes.home.link}
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "primary.main",
              }}
            >
              <Image
                src={setFilePath(general?.logo?.path)}
                alt={general?.name}
                width={64}
                height={64}
                unoptimized
                crossOrigin="anonymous"
                sizes="100vw"
                style={{ borderRadius: "50%" }}
              />

              <Typography mr={1} fontWeight="bold" fontSize="1.2rem">
                {general?.name}
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

              <DesktopMegaMenu
                categories={categories}
                searchParams={searchParams}
              />

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
              onClick={() => setSearchDialogOpen(true)}
            >
              <SearchIcon />
            </IconButton>

            <IconButton
              sx={{
                bgcolor: "grey.700",
                color: "white",
                "&:hover": { bgcolor: "primary.main", color: "black" },
              }}
              LinkComponent={Link}
              href="/cart"
            >
              <Badge
                badgeContent={toPersian(cart?.products?.length)}
                color="primary"
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              sx={{
                bgcolor: "grey.700",
                color: "white",
                "&:hover": { bgcolor: "primary.main", color: "black" },
              }}
              onClick={handleClickProfile}
            >
              <PersonOutlineIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <SearchDialog
        open={searchDialogOpen}
        onClose={() => setSearchDialogOpen(false)}
      />

      <AuthenticationDrawer
        open={openAuth}
        onClose={() => setOpenAuth(false)}
        onAuthenticated={() => {
          setOpenAuth(false);
        }}
      />
    </AppBar>
  );
}
