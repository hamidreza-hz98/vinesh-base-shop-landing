import CustomerOrderDetailsPageWrapper from "@/components/wrappers/CustomerOrderDetailsPageWrapper";
import React from "react";

export const metadata = {
  title: "جزئیات سفارش - فروشگاه امیران واچ",
  description: "مشاهده جزئیات سفارش مشتری شامل محصولات و وضعیت تحویل در فروشگاه امیران واچ.",
  keywords: "جزئیات سفارش, پروفایل, فروشگاه امیران واچ, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};


const page = async ({ params }) => {
  const { code } = await params;

  return <CustomerOrderDetailsPageWrapper code={code} />;
};

export default page;
