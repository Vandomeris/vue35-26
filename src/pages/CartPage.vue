<template>
  <div>
    <h1>CartPage</h1>
    <div v-if="cart?.length">
      <CartItem v-for="product in cart" :product="product" :key="product.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItem from '@/components/CartItem.vue'
import type { Product } from '@/types/types'
import { inject, type Ref } from 'vue'

const cart = inject<Ref<Product[]>>('cart')

function deleteFromCart(id: string) {
  const index = cart?.value.findIndex((el) => el.id === id)
  if (index !== -1) {
    cart?.value.splice(index!, 1)
  }
}
</script>
