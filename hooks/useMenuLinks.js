/* eslint-disable react-hooks/preserve-manual-memoization */
import { useSelector } from "react-redux";
import { selectCategories } from "@/store/category/category.selector";
import { useMemo } from "react";
import routes from "@/constants/landing.routes";
import Loader from "@/components/common/Loader";
import { paramifyLink } from "@/lib/request";
import { useSearchParams } from "next/navigation";

export default function useMenuLinks() {
  const { categories } = useSelector(selectCategories);
  const searchParams = useSearchParams()

  // Create links array dynamically
  const links = useMemo(() => {
    const categoryLinks =
      categories?.map((cat) => ({
        label: cat.name,
        link: `/products${paramifyLink(searchParams, "filters", {
          categories: { type: "in", value: [cat._id] },
        })}`,
      })) || [];

    if (!categories) {
      return <Loader />;
    }

    return [
      routes.products,
      ...categoryLinks,
      routes.about,
      routes.contact,
      routes.terms,
      routes.faq,
    ];
  }, [categories]);

  return links;
}
