import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/ProductList.vue";
import Cart from "@/components/CartComponent.vue";
import Sobre from "@/components/SobreComponent.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/cart", component: Cart },
  { path: "/about", component: Sobre },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
