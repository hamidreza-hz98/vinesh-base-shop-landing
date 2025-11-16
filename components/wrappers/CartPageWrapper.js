"use client";

import {
  Box,
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import PageContainer from "../common/PageContainer";
import CartCheckoutPageWrapper from "./CartCheckoutPageWrapper";
import CartShipmentPageWrapper from "./CartShipmentPageWrapper";
import CartFinalizePageWrapper from "./CartFinalizePageWrapper";
import { calculateFinalPrice, formatPrice, toPersian } from "@/lib/number";
import { useSelector } from "react-redux";
import { selectCart, selectCartLoading } from "@/store/cart/cart.selector";
import Loader from "../common/Loader";

const PersianStepIcon = (props) => {
  const { icon, active, completed } = props;
  const theme = useTheme();

  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor:
          active || completed
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {toPersian(icon)} {/* convert number to Persian */}
    </div>
  );
};



const CartPageWrapper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
    const loading = useSelector(selectCartLoading)

    
    const cart = useSelector(selectCart)
    
    
  if(!cart || loading) {
    return <Loader />
  }

const steps = ["سبد خرید", "مشخصات ارسال", "پرداخت"];
const stepNextButtonLabel = [ "انتخاب روش ارسال", "نهایی سازی سفارش", "پرداخت سفارش" ]
const StepComponents = [
  <CartCheckoutPageWrapper key={0} />,
  <CartShipmentPageWrapper key={1} />,
  <CartFinalizePageWrapper key={2} />,
];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <PageContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={PersianStepIcon} {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {
        <Grid mt={2} spacing={4} container>
          <Grid size={{ xs: 12, md: 8 }}>{StepComponents[activeStep]}</Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", p: 2, height: "100%", backgroundColor: theme.palette.background.paper, borderRadius: 2 }}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">
                  قیمت محصولات
                </Typography>
              
                <Typography variant="body1">
                  {
                    formatPrice(cart?.price?.products)
                  }{" "}
                  تومان
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">
                  هزینه ارسال
                </Typography>
              
                <Typography variant="body1">
                  {
                    formatPrice(cart?.price?.shipment)
                  }{" "}
                  تومان
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="space-between" color={theme.palette.success.light}>
                <Typography variant="body2">
                 تخفیف
                </Typography>
              
                <Typography variant="body1">
                  {
                    formatPrice(cart?.price?.discounts)
                  }{" "}
                  تومان
                </Typography>
              </Box>
              
              <Box display="flex" alignItems="center" justifyContent="space-between" color={theme.palette.primary.main}>
                <Typography variant="h5">
                 قیمت نهایی
                </Typography>
              
                <Typography variant="h5">
                  {
                    formatPrice(calculateFinalPrice(cart?.price))
                  }{" "}
                  تومان
                </Typography>
              </Box>
              
              <Button variant="contained" fullWidth onClick={handleNext} sx={{ mt: 2}}>
                {stepNextButtonLabel[activeStep]}
              </Button>

              <Button
                variant="outlined"
                fullWidth
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{mt:1}}
              >
                بازگشت
              </Button>
            </Box>
          </Grid>
        </Grid>
      }
    </PageContainer>
  );
};

export default CartPageWrapper;
