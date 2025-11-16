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