import axios, { handleRefreshToken } from "./base";

// dropdown

// subscribe
export const subscribeNewMemberAPI = async (email) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/subcribe/new-subcriber`, email, { __auth: false });
};
