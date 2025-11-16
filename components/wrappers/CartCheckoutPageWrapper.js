"use client";

import { Stack } from "@mui/material";
import React from "react";
import InCartProductCard from "../cards/InCartProductCard";
import { useSelector } from "react-redux";
import { selectCart } from "@/store/cart/cart.selector";

const CartCheckoutPageWrapper = () => {
  const cart = useSelector(selectCart)

  return (
    <Stack spacing={2}>
      {cart?.products?.map(({ product, quantity }, index) => (
        <InCartProductCard key={index} quantity={quantity} product={product} />
      ))}
    </Stack>
  );
};

export default CartCheckoutPageWrapper;
