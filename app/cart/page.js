import CartPageWrapper from '@/components/wrappers/CartPageWrapper'
import React from 'react'

export const metadata = {
  title: "سبد خرید - فروشگاه امیران واچ",
  description: "مشاهده و مدیریت محصولات موجود در سبد خرید مشتری در فروشگاه امیران واچ.",
  keywords: "سبد خرید, فروشگاه امیران واچ, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <CartPageWrapper />
  )
}

export default page