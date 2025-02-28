<template>
  <div class="container mx-auto p-6">
    <div
      class="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-8"
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1676800604863-f2802da12794?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Banner Compras"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2
          class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center"
        >
          Encontre os Melhores Produtos!
        </h2>
      </div>
    </div>

    <h2 class="text-4xl sm:text-5xl font-bold mb-8 text-center">Produtos</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <div
        v-for="(product, index) in products"
        :key="index"
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      >
        <img
          :src="
            product.image ||
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          "
          alt="Product Image"
          class="w-full h-64 object-cover"
          @error="
            (e) =>
              (e.target.src =
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
          "
        />

        <div class="p-4">
          <h3 class="text-xl sm:text-2xl font-semibold mb-2">
            {{ product.name }}
          </h3>
          <p class="text-gray-700 text-lg">
            R$ {{ formatPrice(product.price) }}
          </p>
          <button
            @click="addProductToCart(product)"
            class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>

    <div v-if="loading" class="text-center mt-4">Carregando produtos...</div>
    <div v-if="error" class="text-red-500 text-center mt-4">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { getProducts } from "@/services/productService";

const handleAddToCart = inject("handleAddToCart");

const products = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchProducts = async () => {
  try {
    const response = await getProducts();
    products.value = response.products;
  } catch (err) {
    error.value = "Erro ao carregar produtos.";
  } finally {
    loading.value = false;
  }
};

const addProductToCart = async (product) => {
  try {
    await handleAddToCart(product);
  } catch (err) {
    console.error("Erro ao adicionar ao carrinho", err);
  }
};

const formatPrice = (price) => {
  const numPrice = Number(price);
  return isNaN(numPrice) ? "0.00" : numPrice.toFixed(2);
};

onMounted(fetchProducts);
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
