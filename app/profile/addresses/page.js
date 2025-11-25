import CustomerAddressPageWrapper from '@/components/wrappers/CustomerAddressPageWrapper'
import React from 'react'

export const metadata = {
  title: "آدرس‌های من - فروشگاه امیران واچ",
  description: "مدیریت و ویرایش آدرس‌های ثبت شده مشتری در فروشگاه امیران واچ.",
  keywords: "آدرس‌ها, پروفایل, فروشگاه امیران واچ, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CustomerAddressPageWrapper />
  )
}

export default page