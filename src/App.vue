<script setup></script>

<template>
  <header class="bg-blue-600 px-16 py-4">
  <nav class="text-xl font-semibold text-white space-x-8"  >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create-post">New Post</RouterLink>
    </nav>
  </header>

  <div class="p-16">
    <RouterView />
  </div>
</template>

<style scoped></style>
