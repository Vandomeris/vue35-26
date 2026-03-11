<template>
  <h1>OrderPage</h1>

  <InputItem v-model="form.name" placeholder="Введите имя" />
  <InputItem v-model="form.surname" placeholder="Введите фамилию" />

  <p>Name</p>
  <p>{{ form.name }}</p>
  <p>Surname</p>
  <p>{{ form.surname }}</p>
</template>

<script setup lang="ts">
import InputItem from '@/components/InputItem.vue'
import { reactive } from 'vue'

const form = reactive({
  name: '',
  surname: '',
})
</script>
