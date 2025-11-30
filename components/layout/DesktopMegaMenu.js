/* eslint-disable react-hooks/refs */
"use client";

import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Paper,
  Popper,
  Grid,
  ClickAwayListener,
  Grow,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { paramifyLink } from "@/lib/request";

export default function DesktopMegaMenu({ categories, searchParams }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
        <Box
          ref={anchorRef}
          onMouseEnter={handleOpen}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: 0.5,
            color: "text.primary",
            fontSize: 14,
            fontWeight: 500,
            transition: "0.2s",
            "&:hover": { color: "primary.main" },
          }}
        >
          <Typography fontSize="14px">دسته بندی ها</Typography>
          <ExpandMoreIcon fontSize="small" />
        </Box>

        {/* Mega Menu */}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
          onMouseLeave={handleClose}
          sx={{
            zIndex: 1200,
          }}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} timeout={250}>
              <Paper
                sx={{
                  mt: 2,
                  p: 3,
                  maxWidth: 900,
                  borderRadius: 3,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                  background:
                    "linear-gradient(180deg, rgba(30,30,30,0.9), rgba(10,10,10,0.85))",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Grid container spacing={4}>
                  {categories.map((cat) => (
                    <Grid item xs={6} md={4} key={cat._id}>
                      <Typography
                        component={Link}
                        href={`/products${paramifyLink(
                          searchParams,
                          "filters",
                          {
                            categories: { type: "in", value: [cat._id] },
                          }
                        )}`}
                        fontWeight="bold"
                        underline="none"
                        color="primary"
                        sx={{
                          display: "block",
                          mb: 1,
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {cat.name}
                      </Typography>

                      {cat.children?.map((child) => (
                        <Typography
                          key={child._id}
                          component={Link}
                          href={`/products?${paramifyLink(
                            searchParams,
                            "filters",
                            {
                              categories: { type: "in", value: [child._id] },
                            }
                          )}`}
                          underline="none"
                          color="text.secondary"
                          display="block"
                          my={0.5}
                          fontSize={13}
                          sx={{
                            transition: "0.2s",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          {child.name}
                        </Typography>
                      ))}
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
}
