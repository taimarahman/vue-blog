import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // data
  state() {
    return {
      posts: [],
      loading: true,
      errMsg: ''
    }
  },

  // computed
  getters: {
    sorted: (state) => {
      return state.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    },
    getFilteredPost: (state) => {
      return state.posts
        .filter((p) => p.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    }
  },

  //methods
  actions: {
    fetchData() {
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
        .catch((e) => {
          this.errMsg = 'Something went wrong!'
          this.loading = false
          console.log(e)
        })
    },
    addPost(post) {
      const newPost = {
        id: this.posts.length + 1,
        author: 'Deo Unbun',
        title: post.title,
        body: post.body,
        created_at: new Date().toLocaleDateString(),
        is_saved: false
      }

      this.posts.push(newPost)

      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost)
      }).catch((e) => console.log(e))
    },
    deletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id)

      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
      }).catch((e) => console.log(e))
    },
    savePost(id) {
      const post = this.posts.find((p) => p.id === id)
      post.is_saved = !post.is_saved

      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ is_saved: post.is_saved })
      }).catch((e) => console.log(e))
    }
  }
})
