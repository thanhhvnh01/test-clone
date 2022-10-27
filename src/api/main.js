import axios from "./base";

//* home section

// dropdown
export const getProductForHomePageAPI = async (lang) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/categories/all?lang=${lang}`, { __auth: false });
};
// best sale products
export const getBestSaleProductsAPI = async (lang) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/products/best-selling?lang=${lang}`, { __auth: false });
};

//* end home section

// subscribe
export const subscribeNewMemberAPI = async (email) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/subscribe/new-subscriber`, email, { __auth: false });
};
