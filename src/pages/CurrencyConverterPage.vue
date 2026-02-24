<template>
  <h1>Обмен валют</h1>
  <div class="flex items-center gap-x-10">
    <input v-model="ruble" type="number" placeholder="Rubles" />

    <select v-model="valuta">
      <option value="dollar">Доллар</option>
      <option value="euro">Евро</option>
    </select>

    <div>
      <p>Получите валюты</p>
      <p>{{ result.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const ruble = ref()
const valuta = ref()

const result = computed(() => {
  if (valuta.value === 'dollar') {
    return ruble.value / 75
  } else {
    return ruble.value / 90
  }
})
</script>
