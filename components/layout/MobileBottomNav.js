"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import routes from "@/constants/landing.routes";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(0);

  // Set selected index based on current pathname
  useEffect(() => {
    const currentIndex = [routes.home, routes.products, routes.cart, routes.profile].findIndex(
      (item) => pathname === item.link
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (currentIndex !== -1) setValue(currentIndex);
  }, [pathname]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    router.push([routes.home, routes.products, routes.cart, routes.profile][newValue].link);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 10,
        display: { xs: "block", md: "none" },
        bgcolor: "rgba(34,30,16,0.8)",
        backdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
      elevation={0}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange} sx={{ "& .Mui-selected": { color: "primary.main" }, color: "grey.400" }}>
        {[routes.home, routes.products, routes.cart, routes.profile].map((item, index) => (
          <BottomNavigationAction key={index} label={item.label} icon={item.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
