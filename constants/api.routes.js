export const uploadMediaApi = `${process.env.NEXT_PUBLIC_BASE_URL}/media/upload`;

export const getAllMediaApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/media/all?${query}`;

export const modifyMediaApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/media/${id}`;

export const createBrandApi = `${process.env.NEXT_PUBLIC_BASE_URL}/brand`;

export const brandDetailsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/brand/details?${query}`;

export const modifyBrandApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/brand/${id}`;

export const getAllBrandsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/brand?${query}`;

export const createTagApi = `${process.env.NEXT_PUBLIC_BASE_URL}/tag`;

export const modifyTagApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/tag/${id}`;

export const getAllTagsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/tag?${query}`;

export const createCategoryApi = `${process.env.NEXT_PUBLIC_BASE_URL}/category`;

export const categoryDetailsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/category/details?${query}`;

export const modifyCategoryApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/category/${id}`;

export const getAllCategoriesApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/category?${query}`;

export const createProductApi = `${process.env.NEXT_PUBLIC_BASE_URL}/product`;

export const productDetailsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/product/details?${query}`;

export const modifyProductApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`;

export const getAllProductsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/product?${query}`;

export const loginApi = `${process.env.NEXT_PUBLIC_BASE_URL}/customer/login`;

export const signupApi = `${process.env.NEXT_PUBLIC_BASE_URL}/customer/signup`;

export const getSettingsApi = (section) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/settings/${section}`;

export const modifySettingsApi = `${process.env.NEXT_PUBLIC_BASE_URL}/settings`;
