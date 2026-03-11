<template>
  <input v-model="model" type="text" :placeholder="placeholder" />
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string
}>()

const model = defineModel({ required: true })
</script>
