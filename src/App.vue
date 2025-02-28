<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header
      class="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-5 shadow-md"
    >
      <div
        class="container mx-auto flex justify-between items-center flex-wrap"
      >
        <h1
          class="text-3xl font-extrabold tracking-wide flex items-center gap-2"
        >
          <ShoppingBagIcon class="w-7 h-7" />
          Meus Produtos
        </h1>

        <button
          class="md:hidden flex items-center"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <MenuIcon class="w-6 h-6" />
        </button>

        <nav
          :class="{ hidden: !menuOpen, 'md:flex': true }"
          class="w-full md:w-auto"
        >
          <ul class="flex space-x-6 text-lg justify-center md:justify-end">
            <li>
              <router-link
                to="/"
                class="flex items-center gap-2 hover:underline hover:text-yellow-300 transition"
              >
                <HomeIcon class="w-6 h-6" /> Home
              </router-link>
            </li>
            <li>
              <button
                @click="toggleCart"
                class="flex items-center gap-2 hover:underline hover:text-yellow-300 transition"
              >
                <ShoppingCartIcon class="w-6 h-6" />
                Carrinho
                <span
                  class="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm"
                >
                  {{ cartItems.length }}
                </span>
              </button>
            </li>
            <li>
              <router-link
                to="/about"
                class="flex items-center gap-2 hover:underline hover:text-yellow-300 transition"
              >
                <InfoIcon class="w-6 h-6" /> Sobre
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="flex-grow flex container mx-auto p-6">
      <router-view @add-to-cart="handleAddToCart" />
    </main>

    <CartComponent
      :cartItems="cartItems"
      :isOpen="cartOpen"
      @close="toggleCart"
      @remove="handleRemoveFromCart"
    />

    <footer
      class="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 shadow-inner"
    >
      <div class="container mx-auto text-center">
        <p class="text-lg">
          &copy; 2025 Meus Produtos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import { getCart, addToCart, removeFromCart } from "@/services/cartService";
import CartComponent from "@/components/CartComponent.vue";
import {
  HomeIcon,
  ShoppingCartIcon,
  InfoIcon,
  ShoppingBagIcon,
  MenuIcon,
} from "lucide-vue-next";

const cartItems = ref([]);
const cartOpen = ref(false);
const menuOpen = ref(false);

const fetchCart = async () => {
  const response = await getCart();
  cartItems.value = [...response.cart] || [];
};

onMounted(fetchCart);

const toggleCart = () => {
  cartOpen.value = !cartOpen.value;
};

const handleAddToCart = async (product) => {
  await addToCart(product);
  await fetchCart();
  cartOpen.value = true;
};

const handleRemoveFromCart = async (name) => {
  await removeFromCart(name);
  await fetchCart();
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

provide("cartItems", cartItems);
provide("cartOpen", cartOpen);
provide("toggleCart", toggleCart);
provide("handleAddToCart", handleAddToCart);
provide("handleRemoveFromCart", handleRemoveFromCart);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  header .container {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    width: 100%;
  }

  nav ul li {
    width: 100%;
    text-align: left;
  }

  .md:hidden {
    display: block;
  }

  .md:flex {
    display: none;
  }

  .w-full {
    width: 100%;
  }

  .nav-menu {
    transition: max-height 0.3s ease;
    overflow: hidden;
  }
}
</style>
