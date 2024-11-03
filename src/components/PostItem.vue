<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.authorAvatar" class="avatar" />
      <div class="post-info">
        <router-link :to="`/profile/${post.authorId}`" class="author">
          {{ post.authorName }}
        </router-link>
        <span class="timestamp">{{ formatDate(post.timestamp) }}</span>
      </div>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
      <img v-if="post.image" :src="post.image" class="post-image" />
    </div>
    <div class="post-actions">
      <button
        @click="$emit('like', post.id)"
        :class="{ liked: post.liked }"
        class="action-btn"
      >
        <span class="icon">❤️</span>
        <span class="count">{{ post.likes }}</span>
      </button>
      <button @click="$emit('share', post.id)" class="action-btn">
        <span class="icon">🔄</span>
        <span class="count">Share</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['like', 'share'])

const formatDate = timestamp => {
  return new Date(timestamp).toLocaleDateString()
}
</script>

<style scoped>
.post {
  padding: 15px 20px;
  border-bottom: 1px solid #e1e8ed;
}

.post:hover {
  background-color: #f8f9fa;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.post-info {
  display: flex;
  flex-direction: column;
}

.author {
  font-weight: bold;
  color: #14171a;
  text-decoration: none;
}

.author:hover {
  text-decoration: underline;
}

.timestamp {
  color: #657786;
  font-size: 0.9rem;
}

.post-content {
  margin-left: 60px;
  margin-bottom: 10px;
}

.post-content p {
  margin-bottom: 10px;
  line-height: 1.4;
}

.post-image {
  max-width: 100%;
  border-radius: 15px;
  margin-top: 10px;
}

.post-actions {
  margin-left: 60px;
  display: flex;
  gap: 30px;
}

.action-btn {
  background: none;
  border: none;
  color: #657786;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: rgba(29, 161, 242, 0.1);
  color: #1da1f2;
}

.action-btn.liked {
  color: #e0245e;
}

.action-btn.liked:hover {
  background-color: rgba(224, 36, 94, 0.1);
}

.icon {
  font-size: 1.2rem;
}

.count {
  font-size: 0.9rem;
}
</style>
