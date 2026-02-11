<script setup lang="ts">
import { ref } from 'vue'

const todos = ref([
  { id: 1, title: 'Убраться в доме', completed: false },
  { id: 2, title: 'Покормить кота', completed: false },
  { id: 3, title: 'Купить корм коту', completed: true },
])

const showAdd = ref(false)

const newTodo = ref('')

const showModal = ref(false)

const editingInput = ref('')

function addTodo() {
  todos.value.push({
    id: Date.now(),
    completed: false,
    title: newTodo.value,
  })

  newTodo.value = ''
}

function deleteTodo(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    todos.value.splice(index, 1)
  }
}

function editTodo(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    editingInput.value = todos.value[index]!.title
  }

  showModal.value = true
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
    <button @click="deleteTodo(todo.id)">Delete</button>
    <button @click="editTodo(todo.id)">Edit</button>
  </div>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal">
      <h3>Редактировать дело</h3>
      <form>
        <input v-model="editingInput" type="text" />
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
