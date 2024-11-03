<template>
  <div class="posts-container">
    <div v-if="posts.length === 0" class="no-posts">
      <i class="far fa-newspaper"></i>
      <h3>No posts yet</h3>
      <p v-if="isOwnProfile">Share your gaming moments with your followers!</p>
    </div>

    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @like="likePost"
      @share="sharePost"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PostItem from '@/components/PostItem.vue'

const store = useStore()
const posts = computed(() => store.state.profilePosts)
const isOwnProfile = computed(
  () => store.state.user?.id === store.state.profileUser?.id,
)

const likePost = postId => {
  store.dispatch('likePost', postId)
}

const sharePost = postId => {
  store.dispatch('sharePost', postId)
}
</script>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.no-posts {
  text-align: center;
  padding: 60px 20px;
  color: #9ca3af;
}

.no-posts i {
  font-size: 48px;
  margin-bottom: 16px;
}

.no-posts h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 8px;
}

.no-posts p {
  font-size: 1.1rem;
}
</style>
