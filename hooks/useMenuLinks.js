import { useSelector } from "react-redux";
import { selectCategories } from "@/store/category/category.selector";
import { useMemo } from "react";
import routes from "@/constants/landing.routes";
import Loader from "@/components/common/Loader";

export default function useMenuLinks() {
  const { categories } = useSelector(selectCategories);

  // Create links array dynamically
  const links = useMemo(() => {
    const categoryLinks =
      categories?.map((cat) => ({
        label: cat.name,
        link: `/products?categories=${cat.slug}`,
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
