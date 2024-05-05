<script setup>
import PostItem from '@/components/PostItem.vue'
import Wrapper from '@/components/ItemWrapper.vue'
import { usePostsStore } from '@/stores/posts'
import { ref } from 'vue'

const postsStore = usePostsStore()

const postFilter = ref('all')

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}
</script>

<template>
  <div class="bg-white py-4 px-16 shadow-sm flex justify-between content-center">
    <div class="relative">
      <h3 class="font-semibold">
        {{ postFilter === 'all' ? 'All Posts' : 'Saved Posts' }}
      </h3>
      <span v-show="postsStore.loading" class="material-icons absolute -right-8 top-0 animate-spin"
        >cached</span
      >
    </div>
    <button
      @click="setPostFilter"
      class="capitalize rounded-md bg-indigo-600 px-3 py-2 text-center text-white text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {{ postFilter === 'all' ? 'Show Saved Posts' : 'Show All Posts' }}
    </button>
  </div>

  <div
    v-if="postsStore.errMsg"
    class="bg-red-200 rounded-2xl p-4 m-16 mt-8 text-center text-red-950 font-bold"
  >
    {{ postsStore.errMsg }}
  </div>

  <div class="grid grid-cols-2 xl:grid-cols-3 gap-4 m-16">
    <template v-if="postFilter === 'all'">
      <div v-for="post in postsStore.sorted" :key="post.id">
        <Wrapper>
          <PostItem :post="post" />
        </Wrapper>
      </div>
    </template>
    <template v-if="postFilter === 'saved'">
      <div v-for="post in postsStore.getFilteredPost" :key="post.id">
        <Wrapper>
          <PostItem :post="post" />
        </Wrapper>
      </div>
    </template>
  </div>
</template>
