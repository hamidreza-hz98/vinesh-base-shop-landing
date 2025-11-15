import ProductDetailsPageWrapper from '@/components/wrappers/ProductDetailsPageWrapper'
import React from 'react'

const page = async ({ params }) => {
  const {slug} = await params
  
  return (
    <ProductDetailsPageWrapper slug={slug} />
  )
}

export default page