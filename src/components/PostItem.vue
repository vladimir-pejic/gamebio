<template>
  <div class="post-card">
    <div class="post-header">
      <img :src="post.authorAvatar" alt="Avatar" class="author-avatar" />
      <div class="post-meta">
        <div class="author-name">{{ post.authorName }}</div>
        <div class="post-time">{{ formatTime(post.timestamp) }}</div>
      </div>
    </div>

    <div class="post-content">
      <p class="post-text">{{ post.content }}</p>
      <img
        v-if="post.image"
        :src="post.image"
        alt="Post image"
        class="post-image"
      />
    </div>

    <div class="post-actions">
      <button
        class="action-button button button-secondary"
        :class="{ liked: post.liked }"
        @click="handleLike"
      >
        <Heart :fill="post.liked ? 'currentColor' : 'none'" />
        {{ post.likes }}
      </button>

      <button class="action-button button button-secondary">
        <MessageCircle />
        {{ post.comments }}
      </button>

      <button class="action-button button button-secondary">
        <Share2 />
        Share
      </button>
    </div>
  </div>
</template>

<script setup>
import { Heart, MessageCircle, Share2 } from 'lucide-vue-next'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const formatTime = timestamp => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now - date

  // Convert milliseconds to minutes, hours, etc.
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (minutes < 1) {
    return 'just now'
  } else if (minutes < 60) {
    return `${minutes}m ago`
  } else if (hours < 24) {
    return `${hours}h ago`
  } else if (days < 7) {
    return `${days}d ago`
  } else {
    return date.toLocaleDateString()
  }
}

const handleLike = () => {
  // Implement like functionality
}
</script>

<style scoped>
.post-card {
  background: var(--color-background-secondary);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author-name {
  font-weight: 500;
  color: var(--color-text);
}

.post-time {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.post-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-text {
  white-space: pre-wrap;
  line-height: 1.5;
}

.post-image {
  width: 100%;
  border-radius: 12px;
  max-height: 400px;
  object-fit: cover;
}

.post-actions {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.action-button {
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.action-button.liked {
  color: #ec4899;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
