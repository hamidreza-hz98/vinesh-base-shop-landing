import * as yup from "yup";

const iranPhoneRegex = /^09\d{9}$/;

export const loginFormValidationSchema = yup.object({
  phone: yup
    .string()
    .matches(iranPhoneRegex, "شماره همراه معتبر نیست.")
    .required("شماره همراه الزامی است."),
  password: yup.string().required("رمز عبور الزامی است."),
});

export const signupFormValidationSchema = yup.object({
  firstName: yup.string().required("نام الزامی است."),
  lastName: yup.string().required("نام خانوادگی الزامی است."),
  phone: yup
    .string()
    .matches(iranPhoneRegex, "شماره همراه معتبر نیست.")
    .required("شماره همراه الزامی است."),
  password: yup.string().required("رمز عبور الزامی است."),
});

export const addressFormValidationSchema = yup.object().shape({
    name: yup.string().required("نام آدرس الزامی است"),
    recipientName: yup.string(),
    recipientPhone: yup.string().matches(iranPhoneRegex, "شماره همراه معتبر نیست."),
    address: yup.string().required("آدرس الزامی است"),
    zipCode: yup.string().length(10, "کد پستی باید 10 رقم باشد.").required("کد پستی الزامی است"),
    province: yup.string().required("استان الزامی است"),
    city: yup.string().required("شهر الزامی است"),
  });