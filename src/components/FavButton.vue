<template>
  <button @click="favourites.toggle(product)" :class="{ isFav: isFav }">
    {{ isFav ? 'Удалить из избранного' : 'Добавить в избранное' }}
  </button>
</template>

<style scoped>
.isFav {
  background-color: red;
}
</style>

<script setup lang="ts">
import { favourites } from '@/stores'
import type { Product } from '@/types/types'
import { computed } from 'vue'

const props = defineProps<{
  product: Product
}>()

const isFav = computed(() => {
  const index = favourites.list.findIndex((item) => item.id === props.product.id)
  if (index === -1) {
    return false
  } else {
    return true
  }
})
</script>
