import ProductsOverviewPageWrapper from '@/components/wrappers/ProductsOverviewPageWrapper'
import React from 'react'

export const metadata = {
  title: "محصولات - فروشگاه امیران واچ",
  description: "مرور کلی محصولات فروشگاه امیران واچ، نمایندگی رسمی ساعت‌های برند روز.",
  keywords: "محصولات, فروشگاه امیران واچ, ساعت, برند روز, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <ProductsOverviewPageWrapper />
  )
}

export default page