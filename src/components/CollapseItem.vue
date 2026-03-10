<template>
  <button @click="isShown = !isShown">
    <slot name="title"></slot>
  </button>
  <Transition name="spin" @before-enter="console.log('Элемент появляется')">
    <div v-if="isShown">
      <slot name="content"></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShown = ref(false)
</script>
