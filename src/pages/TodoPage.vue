<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
import type { EditingInput, Todo } from '../types/types'
import TodoAdd from '@/components/TodoAdd.vue'

const todos = ref<Todo[]>([])

provide('todos', todos)

onMounted(() => {
  if (localStorage.getItem('todos')) {
    todos.value = JSON.parse(localStorage.getItem('todos')!)
  }
  console.log(todos.value)
})

watch(
  () => todos.value,
  () => {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  },
  {
    deep: true,
  },
)

const showModal = ref<boolean>(false)

const editingInput = ref<EditingInput>({
  id: 0,
  text: '',
})

function deleteTodo(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    todos.value.splice(index, 1)
  }
}

function editTodo(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    editingInput.value.id = id
    editingInput.value.text = todos.value[index]!.title
  }

  showModal.value = true
}

function saveTodo() {
  const index = todos.value.findIndex((todo) => todo.id === editingInput.value.id)

  todos.value[index]!.title = editingInput.value.text

  showModal.value = false
}
</script>

<template>
  <h1>ToDo List</h1>

  <TodoAdd />

  <div
    class="todo-item"
    :class="{ completed: todo.completed }"
    v-for="todo in todos"
    :key="todo.id"
  >
    <span>{{ todo.id }}</span>
    <span>{{ todo.title }}</span>
    <input type="checkbox" v-model="todo.completed" />
    <button @click="deleteTodo(todo.id)">Delete</button>
    <button @click="editTodo(todo.id)">Edit</button>
  </div>
  <div v-if="showModal" @click="showModal = false" class="modal-overlay">
    <div class="modal" @click.stop>
      <button @click="showModal = false">X</button>
      <h3>Редактировать дело</h3>
      <form @submit.prevent="saveTodo()">
        <input v-model="editingInput.text" type="text" />
        <button>Сохранить</button>
      </form>
    </div>
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

.completed span {
  text-decoration: line-through;
}

.modal-overlay {
  background-color: #0000005a;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  max-width: 500px;
  width: 100%;
  padding: 25px;
}
</style>
