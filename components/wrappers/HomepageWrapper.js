/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import PageContainer from "../common/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectSettings } from "@/store/settings/settings.selector";
import Loader from "../common/Loader";
import HeroSlider from "../common/HeroSlider";
import { selectCategories } from "@/store/category/category.selector";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { setFilePath } from "@/lib/media";
import { selectBrands } from "@/store/brand/brand.selector";
import { getAllProducts } from "@/store/product/product.action";
import { setRequestQuery } from "@/lib/request";
import PrimaryProductCard from "../cards/PrimaryProductCard";
import { productsSliderOptions } from "@/constants/slider-options";
import Slider from "../common/Slider";

const HomepageWrapper = () => {
  const dispatch = useDispatch();

  const [mostSoldProducts, setMostSoldProducts] = useState([]);
  const [productsWithDiscount, setProductsWithDiscount] = useState([]);

  const { general } = useSelector(selectSettings);
  const { categories } = useSelector(selectCategories);
  const { brands } = useSelector(selectBrands);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const mostSoldResponse = await dispatch(
          getAllProducts(
            setRequestQuery({
              page_size: 10,
              sort: [{ field: "soldNumber", order: "desc" }],
            })
          )
        ).unwrap();
        console.log(mostSoldResponse);

        setMostSoldProducts(mostSoldResponse.products);

        const discountResponse = await dispatch(
          getAllProducts(
            setRequestQuery({
              page_size: 10,
              filters: { discount: { type: "gt", value: 0 } },
            })
          )
        ).unwrap();
        setProductsWithDiscount(discountResponse.products);
      } catch (err) {
        console.error(error.message || "");
      }
    };

    fetchProducts();
  }, [dispatch]);

  console.log(mostSoldProducts);

  if (
    !general ||
    !categories ||
    !brands ||
    mostSoldProducts.length === 0 ||
    productsWithDiscount.length === 0
  ) {
    return <Loader />;
  }

  const setProductsSlides = (products) => {
    return products.map((product, index) => (
      <PrimaryProductCard key={index} product={product} />
    ));
  };

  return (
    <PageContainer>
      <HeroSlider slides={general?.homepageSlider} />

      <Grid container mt={6} spacing={4}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h1">دسته بندی ها</Typography>
        </Grid>

        {categories.map((cat, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
            <Link
              href={`/products/categories=${cat.slug}`}
              style={{
                display: "block",
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1", // Ensures perfect square
                borderRadius: "50%", // Circle container
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Image
                  src={setFilePath(cat.image.path)}
                  alt={cat.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  unoptimized
                  crossOrigin="anonymous"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: 600,
                    textAlign: "center",
                    p: 1,
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    minWidth: "60%",
                    zIndex: 2,
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography variant="subtitle1">{cat.name}</Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid container mt={6} spacing={4}>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h1">برند ها</Typography>
        </Grid>

        {brands.map((item, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
            <Box
              component={Link}
              href={`/products?brands=${item.slug}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                backgroundColor: "background.paper",
                p: 2,
              }}
            >
              <Image
                src={setFilePath(item.logo.path)}
                alt={item.name}
                width={0}
                height={0}
                sizes="100vw"
                unoptimized
                crossOrigin="anonymous"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <Typography>{item.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {mostSoldProducts && mostSoldProducts.length !== 0 && (
        <>
          <Typography mt={6}>پرفروش ترین محصولات</Typography>

          <Slider
            options={{
              ...productsSliderOptions,
              slides: setProductsSlides(mostSoldProducts),
            }}
          />
        </>
      )}

      {productsWithDiscount && productsWithDiscount.length !== 0 && (
        <>
          <Typography mt={6}>تخفیف ها</Typography>

          <Slider
            options={{
              ...productsSliderOptions,
              slides: setProductsSlides(productsWithDiscount),
            }}
          />
        </>
      )}
    </PageContainer>
  );
};

export default HomepageWrapper;
