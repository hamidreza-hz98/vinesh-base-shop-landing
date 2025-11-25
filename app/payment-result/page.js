import PaymentResultPageWrapper from '@/components/wrappers/PaymentResultPageWrapper'
import React from 'react'

export const metadata = {
  title: "نتیجه پرداخت - فروشگاه امیران واچ",
  description: "نمایش نتیجه تراکنش و پرداخت مشتری در فروشگاه امیران واچ.",
  keywords: "پرداخت, نتیجه تراکنش, فروشگاه امیران واچ, ساعت, نمایندگی رسمی",
  robots: "noindex, nofollow",
};

const page = () => {
  return (
    <PaymentResultPageWrapper />
  )
}

export default page