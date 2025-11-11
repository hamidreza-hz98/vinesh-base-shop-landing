"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { setFilePath } from "@/lib/media";
import Image from "next/image";
import { formatPrice } from "@/lib/number";

const PrimaryProductCard = ({ product }) => {
  const theme = useTheme();

  const hasDiscount = product.discount > 0;
  const inStock = product.stock > 0;

  // calculate discounted price if discount exists
  const finalPrice = hasDiscount
    ? product.price - product.discount
    : product.price;

  // sample image fallback
  const imagePath =
    setFilePath(product.media?.[0]?.path) ||
    "https://via.placeholder.com/400x400?text=No+Image";

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 3,
        overflow: "hidden",
        p: 2,
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: theme.shadows[6],
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* 🔴 Discount Badge */}
      {hasDiscount && inStock && (
        <Box
          sx={{
            position: "absolute",
            top: 24,
            left: 24,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            px: 1.2,
            py: 0.4,
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: 700,
            zIndex: 2,
          }}
        >
          تخفیف
        </Box>
      )}

      {/* 🖼️ Product Image */}
      <Image
        src={imagePath}
        alt={product.title.name}
        width={0}
        height={0}
        sizes="100vw"
        unoptimized
        crossOrigin="anonymous"
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          width: "100%",
          height: "100%",
          borderRadius: 2,
          overflow: "hidden",
          backgroundImage: `url(${imagePath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.4s ease",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />

      {/* ⚫ Out of Stock Overlay */}
      {!inStock && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              border: `2px solid ${theme.palette.text.primary}`,
              borderRadius: 2,
              px: 2,
              py: 0.5,
            }}
          >
            ناموجود
          </Typography>
        </Box>
      )}

      {/* 🧾 Product Details */}
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        <Typography
          variant="subtitle2"
          fontSize={12}
          color="text.secondary"
          mb={0.5}
        >
          {product.brand.name}
        </Typography>

        <Typography
          variant="subtitle1"
          fontWeight={700}
          color="text.primary"
          mb={0.5}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={1.5}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
             whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          {product.excerpt}
        </Typography>

        {/* 💰 Prices */}
        {hasDiscount ? (
          <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
            <Typography color="primary" fontWeight={600} variant="body1">
              {formatPrice(finalPrice)} تومان
            </Typography>

            <Typography
              variant="body2"
              color="text.disabled"
              sx={{ textDecoration: "line-through" }}
            >
              {formatPrice(product.price)} تومان
            </Typography>
          </Box>
        ) : (
          <Typography color="primary" fontWeight={600} variant="body1">
            {formatPrice(product.price)} تومان
          </Typography>
        )}
      </CardContent>

      {/* 🛒 Action Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        <Button
          fullWidth
          variant="contained"
          color={inStock ? "primary" : "inherit"}
          disabled={!inStock}
          sx={{
            color: inStock
              ? theme.palette.primary.contrastText
              : theme.palette.text.disabled,
            fontWeight: 700,
            borderRadius: 2,
            py: 1,
          }}
        >
          افزودن به سبد
        </Button>
      </Box>
    </Card>
  );
};

export default PrimaryProductCard;
