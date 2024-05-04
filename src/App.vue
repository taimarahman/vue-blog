<script setup>
import { usePostsStore } from './stores/posts';

const postsStore = usePostsStore()
postsStore.fetchData()
</script>

<template>
  <header class="bg-blue-600 px-16 py-4">
  <nav class="text-xl font-semibold text-white space-x-8"  >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/create-post">New Post</RouterLink>
    </nav>
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
