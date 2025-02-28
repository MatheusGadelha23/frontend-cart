<template>
  <transition name="slide">
    <div
      v-if="isOpen && cartItems.length"
      class="fixed right-0 top-0 w-96 h-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-2xl p-6 z-50 rounded-l-2xl flex flex-col"
    >
      <div class="flex justify-between items-center border-b pb-3 mb-4">
        <h2 class="text-xl font-extrabold flex items-center gap-2">
          <ShoppingCartIcon class="w-7 h-7 text-blue-600" /> Carrinho
        </h2>
        <button
          @click="closeCart"
          class="text-gray-500 hover:text-gray-900 transition"
        >
          <XIcon class="w-7 h-7" />
        </button>
      </div>

      <ul class="flex-grow overflow-y-auto space-y-4">
        <li
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center bg-white p-3 shadow-md rounded-lg transition transform hover:scale-105"
        >
          <div class="flex items-center gap-3">
            <img
              :src="'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
              alt="Produto"
              class="w-14 h-14 rounded-lg shadow-sm"
            />
            <div>
              <span class="font-semibold text-gray-700">{{ item.name }}</span>
              <p class="text-sm text-gray-500">{{ item.detail }}</p>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-lg font-bold text-green-600">
              R$ {{ formatPrice(item.price) }}
            </span>
            <button
              @click="removeFromCart(item.name)"
              class="text-red-500 hover:text-red-700 transition flex items-center gap-1"
            >
              <Trash2Icon class="w-5 h-5" /> Remover
            </button>
          </div>
        </li>
      </ul>

      <div class="border-t pt-4 mt-4 flex justify-between items-center">
        <span class="text-lg font-semibold">Total:</span>
        <span class="text-2xl font-bold text-green-700"
          >R$ {{ totalPrice }}</span
        >
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { ShoppingCartIcon, XIcon, Trash2Icon } from "lucide-vue-next";

const props = defineProps({
  cartItems: Array,
  isOpen: Boolean,
});

const emit = defineEmits(["close", "remove"]);

const closeCart = () => emit("close");
const removeFromCart = (name) => emit("remove", name);

const formatPrice = (price) => {
  const numPrice = Number(price);
  return isNaN(numPrice) ? "0.00" : numPrice.toFixed(2);
};

const totalPrice = computed(() => {
  return props.cartItems
    .reduce((total, item) => total + Number(item.price || 0), 0)
    .toFixed(2);
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

@media (max-width: 768px) {
  .fixed {
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 400px;
    z-index: 50;
  }
  .w-96 {
    width: 100%;
  }
}
</style>
