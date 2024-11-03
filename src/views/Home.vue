<template>
  <div class="home">
    <div class="timeline">
      <div class="timeline-header">
        <h2>Home</h2>
      </div>
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @like="likePost"
        @share="sharePost"
      />
    </div>
    <aside class="sidebar">
      <div class="sidebar-card">
        <h3>Who to follow</h3>
        <!-- Add suggested users here -->
      </div>
      <div class="sidebar-card">
        <h3>Trending</h3>
        <!-- Add trending topics here -->
      </div>
    </aside>
    <post-modal v-if="postModalVisible" @close="closeModal" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PostItem from '@/components/PostItem.vue'
import PostModal from '@/components/PostModal.vue'

const store = useStore()

const posts = computed(() => store.state.posts)
const postModalVisible = computed(() => store.state.postModalVisible)

const likePost = postId => {
  store.commit('toggleLike', postId)
}

const sharePost = postId => {
  // Implement sharing functionality
}

const closeModal = () => {
  store.commit('setPostModalVisible', false)
}
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .home {
    grid-template-columns: 2fr 1fr;
  }
}

.timeline {
  background: white;
  border-radius: 15px;
  border: 1px solid #e1e8ed;
  overflow: hidden;
}

.timeline-header {
  padding: 15px 20px;
  border-bottom: 1px solid #e1e8ed;
}

.timeline-header h2 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #14171a;
}

.sidebar {
  display: none;
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}

.sidebar-card {
  background: white;
  border-radius: 15px;
  border: 1px solid #e1e8ed;
  padding: 15px;
  margin-bottom: 20px;
}

.sidebar-card h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: #14171a;
}
</style>
