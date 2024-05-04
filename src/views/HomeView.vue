<script setup>
import PostItem from '@/components/PostItem.vue'
import Wrapper from '@/components/ItemWrapper.vue'

const posts = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    body: 'JavaScript is a powerful programming language used for creating dynamic and interactive web pages. With JavaScript, developers can add features like form validation, animations, and interactive maps to their web applications.',
    author: 'John Doe',
    created_at: '2024-05-04',
    is_saved: false
  },
  {
    id: 2,
    title: 'The Art of Cooking',
    body: 'Cooking is not just a necessity but also an art form that allows individuals to express their creativity and passion. From simple home-cooked meals to gourmet dishes, the art of cooking brings people together and nourishes both body and soul.',
    author: 'Jane Smith',
    created_at: '2024-05-03',
    is_saved: true
  },
  {
    id: 3,
    title: 'Exploring the Grand Canyon',
    body: 'The Grand Canyon is a breathtaking natural wonder located in Arizona, USA. Exploring the Grand Canyon offers visitors the chance to marvel at stunning landscapes, hike along scenic trails, and learn about geological history.',
    author: 'David Johnson',
    created_at: '2024-05-02',
    is_saved: false
  },
  {
    id: 4,
    title: 'Machine Learning Basics',
    body: 'Machine learning is a subset of artificial intelligence that focuses on developing algorithms capable of learning from data and making predictions without explicit programming. Understanding machine learning basics is essential for data scientists, engineers, and developers.',
    author: 'Emily Brown',
    created_at: '2024-05-01',
    is_saved: true
  },
  {
    id: 5,
    title: 'Traveling on a Budget',
    body: 'Traveling can be affordable with proper planning and budgeting. By choosing budget-friendly destinations, opting for public transportation, and taking advantage of discounts, anyone can enjoy enriching travel experiences without breaking the bank.',
    author: 'Michael Lee',
    created_at: '2024-04-30',
    is_saved: false
  }
]
</script>

<template>
  <div class="grid grid-cols-2 xl:grid-cols-3 gap-4">
    <div v-for="post in posts" :key="post.id">
      <Wrapper>
        <PostItem :post="post" />
      </Wrapper>
    </div>
  </div>
</template>
