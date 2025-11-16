"use client";

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { toPersian } from "@/lib/number";
import Image from "next/image";
import { setFilePath } from "@/lib/media";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import useNotifications from "@/hooks/useNotifications/useNotifications";
import { updateCart } from "@/store/cart/cart.action";
import { selectCart, selectCartLoading } from "@/store/cart/cart.selector";
import nookies from "nookies";

const InCartProductCard = ({ product, quantity }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const notifications = useNotifications();

  const { customer } = nookies.get();
  const cart = useSelector(selectCart);

  const handleAddToCart = async () => {
    try {
      const { message } = await dispatch(
        updateCart({
          _id: cart._id,
          options: {
            customerId: customer || null,
            action: "add",
            productId: product._id,
          },
        })
      ).unwrap();

      notifications.show(message || "سبد خرید با موفقیت ویرایش شد!", {
        severity: "success",
        autoHideDuration: 3000,
      });
    } catch (error) {
      notifications.show(error || "مشکلی پیش آمد!", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  const handleRemoveFromcart = async () => {
    try {
      const { message } = await dispatch(
        updateCart({
          _id: cart._id,
          options: {
            customerId: customer || null,
            action: quantity > 1 ? "decrease" : "remove",
            productId: product._id,
          },
        })
      ).unwrap();

      notifications.show(message || "سبد خرید با موفقیت ویرایش شد!", {
        severity: "success",
        autoHideDuration: 3000,
      });
    } catch (error) {
      notifications.show(error || "مشکلی پیش آمد!", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Card
      elevation={1}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // mobile: column, desktop: row
        p: 1,
        borderRadius: 2,
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 2,
      }}
    >
      {/* ROW 1 → IMAGE + TEXT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          src={setFilePath(product?.media?.[0].path)}
          alt={product?.title}
          width={0}
          height={0}
          sizes="100vw"
          unoptimized
          crossOrigin="anonymous"
          style={{
            width: 80,
            height: 80,
            borderRadius: 8,
            objectFit: "cover",
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            p: "0 !important",
            textAlign: "right",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} noWrap>
            {product?.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product?.excerpt || ""}
          </Typography>
        </CardContent>
      </Box>

      {/* ROW 2 → QUANTITY BOX (moves down on mobile) */}
      <Box
        sx={{
          width: {xs: "100%", sm: "auto"},
          display: "flex",
          justifyContent: { xs: "flex-end" },
          mt: { xs: 1, sm: 0 },
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              mx: 1,
                "&:hover": {
                    color: theme.palette.primary.main,
                  },
            }}
            size="small"
            onClick={handleAddToCart}
          >
            <AddIcon />
          </IconButton>

          <Typography mx={1}>{toPersian(quantity)}</Typography>

          <IconButton
            sx={{
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              mx: 1,
                "&:hover": {
                    color: theme.palette.primary.main,
                  },
            }}
            size="small"
            onClick={handleRemoveFromcart}
          >
            {quantity === 1 ? <DeleteOutlineIcon /> : <RemoveIcon />}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default InCartProductCard;
