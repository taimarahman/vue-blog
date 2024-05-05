<script setup>
import { usePostsStore } from '@/stores/posts'

defineProps({
  post: {
    type: Object,
    required: true
  }
})

const postsStore = usePostsStore()
</script>

<template>
  <div class="bg-primary flex justify-between p-4">
    <h4 class="text-white">Written by {{ post.author }} on {{ post.created_at }}</h4>
    <div class="space-x-1">
      <button
        @click="postsStore.deletePost(post.id)"
        class="text-red-600 rounded-full bg-white material-icons"
      >
        delete
      </button>
      <button
        @click="postsStore.savePost(post.id)"
        class="text-green-700 rounded-full bg-white material-icons"
      >
        {{ post.is_saved ? 'bookmark' : 'bookmark_border' }}
      </button>
    </div>
  </div>
  <div class="p-4 bg-elbg text-ink">
    <h1 class="uppercase font-bold text-2xl mb-2">{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>
