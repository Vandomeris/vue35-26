<template>
  <h1>PlaygroundPage</h1>
  <div>
    <ButtonItem>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </ButtonItem>
    <CollapseItem>
      <template #title>
        <div class="flex justify-between">
          <span>Как купить товар?</span>
          <span>></span>
        </div>
      </template>

      <template #content>
        <div class="grid grid-cols-2">
          <div>
            1 вариант:
            <p>Купить на сайте</p>
          </div>
          <div>
            2 вариант:
            <p>Купить в магаине</p>
          </div>
        </div>
      </template>
    </CollapseItem>
  </div>
</template>

<script setup lang="ts">
import ButtonItem from '@/components/ButtonItem.vue'
import CollapseItem from '@/components/CollapseItem.vue'
</script>
