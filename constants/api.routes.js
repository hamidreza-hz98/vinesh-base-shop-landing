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

export const customerInfoApi = (_id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/customer/${_id}`;

export const loginApi = `${process.env.NEXT_PUBLIC_BASE_URL}/customer/login`;

export const signupApi = `${process.env.NEXT_PUBLIC_BASE_URL}/customer/signup`;

export const getSettingsApi = (section) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/settings/${section}`;

export const modifySettingsApi = `${process.env.NEXT_PUBLIC_BASE_URL}/settings`;

export const cartApi = `${process.env.NEXT_PUBLIC_BASE_URL}/cart`;

export const modifyCartApi = (_id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/cart/update/${_id}`;

export const getCartApi = (_id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/cart/details/${_id}`;

export const getCustomerCartApi = (customerId) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/cart/${customerId}`;

export const modifyAddressApi = (_id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/address/${_id}`;

export const addressApi = `${process.env.NEXT_PUBLIC_BASE_URL}/address`;

export const orderApi = `${process.env.NEXT_PUBLIC_BASE_URL}/order`;

export const customerOrdersApi = ({ _id, query }) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/order/customer/${_id}?${query}`;

export const customerOrderDetailsApi = (_id, customerId) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/order/details/customer/${_id}?customerId=${customerId}`;

export const contactApi = `${process.env.NEXT_PUBLIC_BASE_URL}/contact`;

export const initiateTransactionApi = `${process.env.NEXT_PUBLIC_BASE_URL}/transaction/initiate`;

export const verifyTransactionApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/transaction/verify?${query}`;

export const retryTransactionApi = `${process.env.NEXT_PUBLIC_BASE_URL}/transaction/retry`;
