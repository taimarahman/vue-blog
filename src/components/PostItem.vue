<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="bg-blue-400 flex justify-between p-4">
    <span>Written by {{ post.author }} on {{ post.created_at }}</span>
    <div class="space-x-1">
      <button class="text-red-600 rounded-full bg-white material-icons">delete</button>
      <button class="text-green-400 rounded-full bg-white material-icons">bookmark_border</button>
    </div>
  </div>
  <div class="p-4">
    <h1 class="uppercase font-bold text-2xl mb-2">{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
