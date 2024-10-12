import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  method: "get",
});

export const getProduct = async () => {
  // const asin ="B0CFSX431Z"
  try {
    const response = await api.get("/products");
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const newArrivals = async () => {
  // const asin ="B0CFSX431Z"
  try {
    const response = await api.get(
      `/products?limit=5&skip=10&select=title,price`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
