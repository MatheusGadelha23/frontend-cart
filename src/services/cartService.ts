import axios from "axios";
import { API_URL } from "@/config/api";
import { useToast } from "vue-toast-notification";

const toast = useToast();

type Product = {
  name: string;
  detail: string;
  price: number;
  hero: string | undefined;
  info: string | undefined;
  offer: string | undefined;
  image: string;
};

export const getCart = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o carrinho: ", error);
  }
};

export const addToCart = async (product: Product) => {
  const cartProducts: Product[] = [];
  cartProducts.push(product);
  try {
    const response = await axios.post(`${API_URL}/cart`, {
      products: cartProducts,
    });
    toast.success(response.data.message);

    return response.data;
  } catch (error) {
    toast.error("Erro ao adicionar ao carrinho!");
  }
};

export const removeFromCart = async (name: string) => {
  const names: string[] = [];
  names.push(name);
  try {
    const response = await axios.delete(`${API_URL}/cart`, { data: { names } });

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    toast.error("Erro ao remover produto do carrinho!");
  }
};
