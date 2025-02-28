import axios from "axios";
import { API_URL } from "@/config/api";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
