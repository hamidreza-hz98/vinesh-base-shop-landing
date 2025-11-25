import CustomerOrdersOverviewPageWrapper from '@/components/wrappers/CustomerOrdersOverviewPageWrapper'
import React from 'react'

export const metadata = {
  title: "سفارش‌های من - فروشگاه امیران واچ",
  description: "مشاهده و مدیریت سفارش‌های ثبت شده مشتری در فروشگاه امیران واچ.",
  keywords: "سفارش‌ها, پروفایل, فروشگاه امیران واچ, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CustomerOrdersOverviewPageWrapper />
  )
}

export default page