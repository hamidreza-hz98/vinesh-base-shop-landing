"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import { Container, Grid } from "@mui/material";

const PageHeaderBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));


function PageContainer(props) {
  const { children, breadcrumbs = [] } = props;

  return (
    <Container maxWidth="lg" padding={2} spacing={2}>
        <PageHeaderBreadcrumbs
          aria-label="breadcrumb"
          separator={<ChevronLeftIcon fontSize="small" />}
        >
          {breadcrumbs
            ? breadcrumbs.map((breadcrumb, index) => {
                return breadcrumb.path ? (
                  <MuiLink
                    key={index}
                    component={Link}
                    underline="hover"
                    color="inherit"
                    href={breadcrumb.path}
                  >
                    {breadcrumb.name}
                  </MuiLink>
                ) : (
                  <Typography
                    key={index}
                    sx={{ color: "text.primary", fontWeight: 600 }}
                  >
                    {breadcrumb.name}
                  </Typography>
                );
              })
            : null}
        </PageHeaderBreadcrumbs>

      {children}
    </Container>
  );
}

PageContainer.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node,
};

export default PageContainer;
