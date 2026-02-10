<script setup lang="ts">
import { ref } from 'vue'

const todos = ref([
  { id: 1, title: 'Убраться в доме', completed: false },
  { id: 2, title: 'Покормить кота', completed: false },
  { id: 3, title: 'Купить корм коту', completed: true },
])

const showAdd = ref(false)

const newTodo = ref('')

function addTodo() {
  todos.value.push({
    id: Date.now(),
    completed: false,
    title: newTodo.value,
  })

  newTodo.value = ''
}
</script>

<template>
  <h1>ToDo List</h1>

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

  <div
    class="todo-item"
    :class="{ completed: todo.completed }"
    v-for="todo in todos"
    :key="todo.id"
  >
    <span>{{ todo.id }}</span>
    <span>{{ todo.title }}</span>
    <input type="checkbox" v-model="todo.completed" />
  </div>
</template>

<style scoped>
h1 {
  color: red;
}

.todo-item {
  display: flex;
  align-items: center;
  column-gap: 40px;
}

.completed {
  text-decoration: line-through;
}
</style>
