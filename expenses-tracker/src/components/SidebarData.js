import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SavingsIcon from "@mui/icons-material/Savings";
import PageviewIcon from "@mui/icons-material/Pageview";
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <BarChartIcon />,
    path: "/dashboard",
  },
  {
    title: "Expenses",
    icon: <ShoppingCartIcon />,
    path: "/expenses",
  },
  {
    title: "Income",
    icon: <SavingsIcon />,
    path: "/income",
  },
  {
    title: "Transactions",
    icon: <PageviewIcon />,
    path: "/transactions",
  },
];
