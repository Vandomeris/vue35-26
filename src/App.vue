<template>
  <header class="flex justify-between container mx-auto py-5">
    <div>LOGO</div>

    <nav class="flex gap-x-5">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/todos">Список дел</RouterLink>
    </nav>
  </header>

  <main class="mx-auto container">
    <RouterView />
  </main>
</template>

<script setup lang="ts"></script>
