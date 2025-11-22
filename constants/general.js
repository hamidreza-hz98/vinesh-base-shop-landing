
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CreditCardOffOutlinedIcon from "@mui/icons-material/CreditCardOffOutlined";

export const paymentGateways = [
  {
    name: "پرداخت زرین پال",
    bank: "zarrin_pal",
    logo: "/images/gateways/zarinpal.svg",
  },

  {
    name: "درگاه شاپرک",
    bank: "shaparak",
    logo: "/images/gateways/shaparak.png",
  },
  {
    name: "سپهر",
    bank: "sepehr",
    logo: "/images/gateways/sepehr.png",
  },
  {
    name: "درگاه پرداخت یک پی",
    bank: "yekpay",
    logo: "/images/gateways/yek-pay.jpg",
  },
];

export const orderStatuses = {
  pending_payment: {
    name: "در انتظار پرداخت",
    color: "text",
    icon: <RestoreOutlinedIcon color="text" />,
  },
  processing: {
    name: "در حال پردازش",
    color: "primary",
    icon: <HourglassBottomOutlinedIcon color="primary" />,
  },
  failed: {
    name: "پرداخت ناموفق",
    color: "error",
    icon: <CreditCardOffOutlinedIcon color="error" />,
  },
  shipping: {
    name: "در حال ارسال",
    color: "warning",
    icon: <RocketLaunchOutlinedIcon color="warning" />,
  },
  delivered: {
    name: "ارسال شده",
    color: "success",
    icon: <CheckCircleOutlineOutlinedIcon color="success" />,
  },
  // canceled: {
  //   name: "Canceled",
  //   color: "error",
  //   icon: <CancelOutlinedIcon />,
  // },
};