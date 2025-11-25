"use client";
import { Box, Container, Grid, Typography, Link, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import GroupIcon from "@mui/icons-material/Group";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/store/category/category.action";
import { selectCategories } from "@/store/category/category.selector";
import { paramifyLink, setRequestQuery } from "@/lib/request";
import { getSettings } from "@/store/settings/settings.actions";
import { selectSettings } from "@/store/settings/settings.selector";
import { getAllBrands } from "@/store/brand/brand.action";
import nookies from "nookies";
import { createCart, getCart, getCustomerCart } from "@/store/cart/cart.action";
import Image from "next/image";
import routes from "@/constants/landing.routes";
import Loader from "../common/Loader";
import { setFilePath } from "@/lib/media";
import { useSearchParams } from "next/navigation";
import { toPersian } from "@/lib/number";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Instagram } from "@mui/icons-material";

export default function Footer() {
  const dispatch = useDispatch();
  const { categories } = useSelector(selectCategories);
  const { general } = useSelector(selectSettings);
  const { cart, customer } = nookies.get();
  const searchParams = useSearchParams();

  useEffect(() => {
    const body = setRequestQuery({
      filters: {
        children: { type: "hasChildren" },
      },
    });

    // if(!categories && categories.length === 0){
    dispatch(getAllCategories(body));
    // }

    dispatch(getAllBrands(setRequestQuery({ page_size: 100 })));

    dispatch(getSettings());

    if (cart) {
      dispatch(getCart(cart));
    } else if (customer) {
      dispatch(getCustomerCart(customer));
    } else {
      dispatch(createCart());
    }
  }, [
    // categories,
    dispatch,
  ]);

  if (!general || !categories) {
    return <Loader />;
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.default",
        borderTop: "1px solid",
        borderColor: "divider",
        color: "grey.300",
        mt: 8,
        pt: 8,
        pb: { xs: 6, md: 0 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 3 }}>
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
            </Box>

            <div dangerouslySetInnerHTML={{ __html: general.footerText }} />
          </Grid>

          {/* Column 1 */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="h6" color="white" gutterBottom>
              دسترسی سریع
            </Typography>

            <Stack spacing={1}>
              {[
                routes.contact,
                routes.about,
                routes.cart,
                routes.faq,
                routes.terms,
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  underline="none"
                  sx={{
                    color: "grey.400",
                    fontSize: 14,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="h6" color="white" gutterBottom>
              دسته‌بندی‌ها
            </Typography>

            <Stack spacing={1}>
              <Link
                href="/products"
                underline="none"
                sx={{
                  color: "grey.400",
                  fontSize: 14,
                  "&:hover": { color: "primary.main" },
                }}
              >
                همه ی محصولات
              </Link>

              {categories.map((cat, index) => (
                <Link
                  key={index}
                  href={`/products${paramifyLink(searchParams, "filters", {
                    categories: { type: "in", value: [cat._id] },
                  })}`}
                  underline="none"
                  sx={{
                    color: "grey.400",
                    fontSize: 14,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="white" gutterBottom>
              تماس با ما
            </Typography>

            <Stack spacing={1.5}>
              <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
                <LocationOnIcon color="primary" fontSize="small" />
                <Typography fontSize={14} color="grey.400">
                 { general?.contactInfo?.address }
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIphoneIcon color="primary" fontSize="small" />
                <Link
                  href={`tel: ${general?.contactInfo?.mobile}`}
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  { toPersian(general?.contactInfo?.mobile) }
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CallIcon color="primary" fontSize="small" />
                <Link
                  href={`tel: ${general?.contactInfo?.phone}`}
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  { toPersian(general?.contactInfo?.phone) }
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Instagram color="primary" fontSize="small" />
                
                <Link
                  href={general?.social?.whatsapp}
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  پیام به واتس اپ
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Instagram color="primary" fontSize="small" />
                
                <Link
                  href={general?.social?.instagram}
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  اینستاگرام
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Column 4 */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography noWrap textOverflow="clip" variant="h6" color="white" mb={2}>
              نماد اعتماد الکترونیک
            </Typography>

             <Image
                      src="/images/enamad.jpg"
                      alt="نماد تجارت الکترونیک"
                      width={0}
                      height={0}
                      sizes="100vw"
                      unoptimized
                      crossOrigin="anonymous"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            pb: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="grey.500">
            © تمامی حقوق برای امیران واچ محفوظ است. Powered By <Link href="https://www.vinesh-tech.com/" target="_blank" > Vinesh Tech </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
