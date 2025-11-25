import FaqPageWrapper from '@/components/wrappers/FaqPageWrapper'
import React from 'react'

export const metadata = {
  title: "سوالات متداول - فروشگاه امیران واچ",
  description: "پرسش و پاسخ‌های متداول مشتریان فروشگاه امیران واچ درباره محصولات و خدمات.",
  keywords: "سوالات متداول, FAQ, فروشگاه امیران واچ, ساعت, نمایندگی رسمی",
  robots: "index, follow",
};

const page = () => {
  return (
    <FaqPageWrapper />
  )
}

export default page