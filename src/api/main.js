import axios from "./base";

//* home section

// dropdown
export const getProductForHomePageAPI = async (lang) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/categories/product-types?lang=${lang}`, { __auth: false });
};
// best sale products
export const getBestSaleProductsAPI = async (lang) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/products/best-selling?lang=${lang}`, { __auth: false });
};
// subscribe
export const subscribeNewMemberAPI = async (email) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/subscribe/new-subscriber`, email, { __auth: false });
};

// * end home section

// * product section
// category
export const getCategoriesAPI = async (lang) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/categories/all-enabled?lang=${lang}`);
};

// product type
export const getProductTypesAPI = async (categoryId, lang) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/product-types/all-enabled?categoryId=${categoryId}&lang=${lang}`);
};

// product
export const getProductsAPI = async (pageSize, pageNumber, keyword = "", lang, data) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/products/all-enabled?pageSize=${pageSize}&pageNumber=${pageNumber}&keyword=${keyword}&lang=${lang}`,
    data
  );
};
// * end category section
