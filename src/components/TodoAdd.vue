<template>
  <div>
    <button @click="showAdd = !showAdd">
      {{ showAdd ? 'Отмена' : 'Добавить дело  ' }}
    </button>

    <form v-if="showAdd" @submit.prevent="addTodo()">
      <input v-model="newTodo" type="text" placeholder="Введите дело" />
      <button>Создать</button>
    </form>
    <div v-else>Подсказка: нажмите на кнопку сверху</div>
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '@/types/types'
import { inject, ref, type Ref } from 'vue'

const todos = inject<Ref<Todo[]>>('todos')

const showAdd = ref<boolean>(false)
const newTodo = ref<string>('')

function addTodo() {
  todos!.value.push({
    id: Date.now(),
    completed: false,
    title: newTodo.value,
  })

  newTodo.value = ''
}
</script>
