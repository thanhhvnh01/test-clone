import axios from "./base";

// dropdown
export const getProductForHomePageAPI = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/home/all-products`, { __auth: false });
};

// subscribe
export const subscribeNewMemberAPI = async (email) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/subscribe/new-subscriber`, email, { __auth: false });
};
