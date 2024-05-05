import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts-store', {
  // data
  state() {
    return {
      posts: [
        {
          id: '2',
          title: 'The Art of Cooking',
          body: 'Cooking is not just a necessity but also an art form that allows individuals to express their creativity and passion. From simple home-cooked meals to gourmet dishes, the art of cooking brings people together and nourishes both body and soul.',
          author: 'Jane Smith',
          created_at: '05/03/2024',
          is_saved: true
        },
        {
          id: '3',
          title: 'Exploring the Grand Canyon',
          body: 'The Grand Canyon is a breathtaking natural wonder located in Arizona, USA. Exploring the Grand Canyon offers visitors the chance to marvel at stunning landscapes, hike along scenic trails, and learn about geological history.',
          author: 'David Johnson',
          created_at: '05/02/2024',
          is_saved: false
        },
        {
          id: '4',
          title: 'Machine Learning Basics',
          body: 'Machine learning is a subset of artificial intelligence that focuses on developing algorithms capable of learning from data and making predictions without explicit programming. Understanding machine learning basics is essential for data scientists, engineers, and developers.',
          author: 'Emily Brown',
          created_at: '05/01/2024',
          is_saved: true
        },
        {
          id: '5',
          title: 'Traveling on a Budget',
          body: 'Traveling can be affordable with proper planning and budgeting. By choosing budget-friendly destinations, opting for public transportation, and taking advantage of discounts, anyone can enjoy enriching travel experiences without breaking the bank.',
          author: 'Michael Lee',
          created_at: '04/30/2024',
          is_saved: false
        }
      ],
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
