<template>
  <div>
    <p>{{ product.title }}</p>
    <p @click="$emit('create')">$$$$${{ product.price }}</p>
    <button @click="deleteClick(product.id)">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'

defineProps<{
  product: Product
}>()

const emits = defineEmits(['delete', 'create'])

function deleteClick(id) {
  emits('delete', id)
}
</script>
