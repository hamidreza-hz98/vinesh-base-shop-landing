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
import { setRequestQuery } from "@/lib/request";
import { getSettings } from "@/store/settings/settings.actions";
import { selectSettings } from "@/store/settings/settings.selector";
import { getAllBrands } from "@/store/brand/brand.action";

export default function Footer() {
  const dispatch = useDispatch();
  const { categories } = useSelector(selectCategories);
  const settings = useSelector(selectSettings)

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

    dispatch(getSettings("general"))
  }, [
    // categories,
    dispatch,
  ]);

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
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Column 1 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="white" gutterBottom>
              دسترسی سریع
            </Typography>
            <Stack spacing={1}>
              {["پیگیری سفارش", "قوانین و مقررات", "سوالات متداول"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{
                      color: "grey.400",
                      fontSize: 14,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Stack>
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="white" gutterBottom>
              دسته‌بندی‌ها
            </Typography>
            <Stack spacing={1}>
              {["ساعت مردانه", "ساعت زنانه", "برندهای منتخب"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  sx={{
                    color: "grey.400",
                    fontSize: 14,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item}
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CallIcon color="primary" fontSize="small" />
                <Link
                  href="tel:555-021-1234"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  555-021-1234
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon color="primary" fontSize="small" />
                <Link
                  href="mailto:info@amiranwatch.com"
                  sx={{
                    color: "grey.400",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  info@amiranwatch.com
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Column 4 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="white" gutterBottom>
              ما را دنبال کنید
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link
                href="#"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <PhotoCameraIcon />
              </Link>
              <Link
                href="#"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <SendIcon />
              </Link>
              <Link
                href="#"
                sx={{ color: "grey.400", "&:hover": { color: "primary.main" } }}
              >
                <GroupIcon />
              </Link>
            </Stack>

            <Typography variant="h6" color="white" sx={{ pt: 4 }}>
              نمادهای پرداخت
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Box
                sx={{
                  bgcolor: "grey.700",
                  color: "grey.400",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                زرین‌پال
              </Box>
              <Box
                sx={{
                  bgcolor: "grey.700",
                  color: "grey.400",
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                بانک سامان
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="grey.500">
            © تمامی حقوق برای امیران واچ محفوظ است.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
