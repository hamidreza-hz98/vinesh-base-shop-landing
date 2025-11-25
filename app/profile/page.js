import CustomerInformationPageWrapper from '@/components/wrappers/CustomerInformationPageWrapper'
import React from 'react'

export const metadata = {
  title: "اطلاعات مشتری - فروشگاه امیران واچ",
  description: "مدیریت اطلاعات شخصی و پروفایل مشتری در فروشگاه امیران واچ.",
  keywords: "پروفایل, اطلاعات مشتری, فروشگاه امیران واچ, نمایندگی رسمی, ساعت",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CustomerInformationPageWrapper />
  )
}

export default page