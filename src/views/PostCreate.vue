<script setup>
import ItemWrapper from '@/components/ItemWrapper.vue'
import { usePostsStore } from '@/stores/posts'
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

const newPost = reactive({
  title: '',
  body: ''
})

const isFormInvalid = computed(() => {
  return newPost.title === '' || newPost.body === ''
})

const postsStore = usePostsStore()
const router = useRouter()
const submit = () => {
  postsStore.addPost(newPost)
  router.push({ name: 'home' })
}
console.log(new Date(postsStore.posts[4].created_at))
</script>
<template>
  <ItemWrapper class="m-16">
    <form @submit.prevent="submit" class="bg-white p-8 space-y-4">
      <h3 class="text-xl font-semibold mb-4">Create New Post</h3>
      <div class="space-y-2">
        <label for="title" class="blockleading-6 capitalize text-gray-900">Post title</label>
        <input
          type="text"
          id="title"
          v-model="newPost.title"
          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div class="space-y-2">
        <label for="body" class="block leading-6 capitalize text-gray-900">Post body</label>
        <textarea
          id="body"
          rows="4"
          v-model="newPost.body"
          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
      <div class="mt-2">
        <button
          :disabled="isFormInvalid"
          :class="{ 'cursor-not-allowed bg-gray-500 hover:bg-gray-600': isFormInvalid }"
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
      </div>
    </form>
  </ItemWrapper>
</template>
