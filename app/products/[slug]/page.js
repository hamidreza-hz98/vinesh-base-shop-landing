import ProductDetailsPageWrapper from "@/components/wrappers/ProductDetailsPageWrapper";
import React from "react";

let productSchema = {};

async function fetchSeoData(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/seo`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch SEO data");

    const { data } = await res.json();
    const { seo, schema } = data;

    productSchema = schema;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      robots: "noindex, nofollow", 
      // seo.robots,
      canonical: seo.canonical,
      additionalMetaTags: seo.additionalMetaTags,
      openGraph: {
        title: seo.ogTitle || seo.title,
        description: seo.ogDescription || seo.description,
        url: seo.canonical,
        images: seo.ogImage ? [`${baseUrl}${seo.ogImage.path}`] : [],
        siteName: "امیران واچ",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: seo.twitterTitle || seo.title,
        description: seo.twitterDescription || seo.description,
        images: seo.twitterImage ? [`${baseUrl}${seo.twitterImage.path}`] : [],
      },
    };
  } catch (error) {
    console.error("Fetch SEO data error:", err);
  }
}

export async function generateMetadata() {
  return await fetchSeoData();
}

const page = async ({ params }) => {
  const { slug } = await params;

  return (
    <>
      <ProductDetailsPageWrapper slug={slug} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
};

export default page;
