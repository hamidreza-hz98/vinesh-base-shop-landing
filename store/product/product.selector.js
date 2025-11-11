export const selectLoading = (state) => state?.product?.loading;
export const selectProduct = (state) => state?.product?.product;
export const selectProducts = (state) => state?.product?.products || [];
