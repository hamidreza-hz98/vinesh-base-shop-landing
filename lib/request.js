import qs from "qs";

/**
 * Builds a request body for POST/PUT requests
 */
export const setRequestBody = ({
  filters = {},
  sort = [{ field: "createdAt", order: "desc" }],
  page = 1,
  page_size = 12,
  search = "",
} = {}) => ({
  filters,
  sort,
  page,
  page_size,
  search,
});

/**
 * Builds a query string for GET requests (uses qs)
 * Example output:
 * ?filters[type][value]=category&sort[0][field]=createdAt&sort[0][order]=desc&page=1&page_size=12
 */
export const setRequestQuery = ({
  filters = {},
  sort = [{ field: "createdAt", order: "desc" }],
  page = 1,
  page_size = 12,
  search = "",
} = {}) => {
  const queryObject = {
    filters,
    sort,
    page,
    page_size,
    search,
  };

  return qs.stringify(queryObject, {
    encode: true,
    arrayFormat: "indices", // backend can handle array-like `[0]`, `[1]`
  });
};
