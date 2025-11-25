"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchResultCard from "../cards/SearchResultCard";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/category/category.action";
import { getAllProducts } from "@/store/product/product.action";
import { setRequestQuery } from "@/lib/request";
import {
  selectProductLoading,
  selectProducts,
} from "@/store/product/product.selector";
import {
  selectCategories,
  selectCategoryLoading,
} from "@/store/category/category.selector";
import Link from "next/link";

export default function SearchDialog({ open, onClose }) {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const productsLoading = useSelector(selectProductLoading);
  const categoriesLoading = useSelector(selectCategoryLoading);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (query.length > 3) {
      const fetchData = async () => {
        const reqQuery = setRequestQuery({ search: query, page_size: 3 });

        const catResult = await dispatch(getAllCategories(reqQuery)).unwrap();

        const prodResult = await dispatch(getAllProducts(reqQuery)).unwrap();

        setCategories(catResult.categories);
        setProducts(prodResult.products);
      };

      fetchData();
    }
  }, [query]);

  const noResults =
    !categoriesLoading &&
    !productsLoading &&
    query.length > 3 &&
    categories?.length === 0 &&
    products?.length === 0;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: isMobile ? 1 : 4 }}
      >
        <Typography> جستجو </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: isMobile ? 1 : 4, pb: 0 }}>
        <TextField
          fullWidth
          autoFocus
          variant="outlined"
          size={ isMobile ? "small" : "medium" }
          placeholder="جستجوی محصول یا دسته بندی..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ mb: 3 }}
        />

        {noResults && (
          <Typography color="text.secondary" textAlign="center" py={4}>
            موردی پیدا نشد!
          </Typography>
        )}

        {!noResults && (
          <>
            {/* Categories */}
            {categories.length > 0 && (
              <Box mb={4}>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography variant="h6">دسته بندی ها</Typography>

                  <Button
                    LinkComponent={Link}
                    href={`/products?search=${query}`}
                    onClick={onClose}
                    variant="text"
                    >
                    مشاهده همه
                  </Button>
                </Box>

                <Grid container spacing={2}>
                  {categories.map((cat, i) => (
                    <Grid size={{ xs: 12, sm: "auto" }} key={i}>
                      <SearchResultCard entity={cat} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Products */}
            {products.length > 0 && (
              <Box>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography variant="h6">محصولات</Typography>

                  <Button
                    LinkComponent={Link}
                    href={`/products?search=${query}`}
                    onClick={onClose}
                    variant="text"
                  >
                    مشاهده همه
                  </Button>
                </Box>

                <Grid container spacing={2}>
                  {products.map((prod, i) => (
                    <Grid size={{ xs: 12, sm: "auto" }} key={i}>
                      <SearchResultCard entity={prod} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
