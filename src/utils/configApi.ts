export const config = {
  baseUrl: process.env.REACT_APP_API,
  headers: {
    authorization: process.env.REACT_APP_TOKEN,
    "Content-Type": "application/json",
  },
};