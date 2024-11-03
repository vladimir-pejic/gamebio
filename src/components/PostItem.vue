<template>
  <div class="post-card">
    <div class="post-header">
      <img :src="post.authorAvatar" class="author-avatar" alt="Author" />
      <div class="post-meta">
        <router-link :to="`/profile/${post.authorId}`" class="author-name">
          {{ post.authorName }}
        </router-link>
        <span class="post-time">{{ formatTime(post.timestamp) }}</span>
      </div>
      <button class="more-options">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>

    <div class="post-content">
      <p class="post-text">{{ post.content }}</p>
      <img
        v-if="post.image"
        :src="post.image"
        class="post-image"
        alt="Post image"
        @click="openImagePreview"
      />
    </div>

    <div class="post-actions">
      <button
        class="action-button"
        :class="{ liked: post.liked }"
        @click="$emit('like', post.id)"
      >
        <i class="fas" :class="post.liked ? 'fa-heart' : 'fa-heart-o'"></i>
        <span>{{ post.likes }}</span>
      </button>

      <button class="action-button" @click="$emit('comment', post.id)">
        <i class="far fa-comment"></i>
        <span>{{ post.comments?.length || 0 }}</span>
      </button>

      <button class="action-button" @click="$emit('share', post.id)">
        <i class="fas fa-share"></i>
        <span>Share</span>
      </button>
    </div>

    <div v-if="post.comments?.length" class="comments-section">
      <!-- Comments implementation -->
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

defineEmits(['like', 'comment', 'share'])

const formatTime = timestamp => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = (now - date) / 1000 // difference in seconds

  if (diff < 60) {
    return 'Just now'
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60)
    return `${minutes}m ago`
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600)
    return `${hours}h ago`
  } else if (diff < 604800) {
    const days = Math.floor(diff / 86400)
    return `${days}d ago`
  } else {
    return date.toLocaleDateString()
  }
}

const openImagePreview = () => {
  // Implement image preview functionality
}
</script>

<style scoped>
.post-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.post-card:hover {
  transform: translateY(-2px);
}

.post-header {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #6d28d9;
}

.post-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author-name {
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.author-name:hover {
  color: #6d28d9;
}

.post-time {
  color: #9ca3af;
  font-size: 0.9rem;
}

.more-options {
  background: none;
  border: none;
  color: #9ca3af;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.more-options:hover {
  background: rgba(255, 255, 255, 0.05);
}

.post-content {
  padding: 0 16px;
}

.post-text {
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 16px;
  white-space: pre-wrap;
}

.post-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.post-image:hover {
  opacity: 0.9;
}

.post-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.action-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.action-button.liked {
  color: #ec4899;
}

.action-button.liked:hover {
  background: rgba(236, 72, 153, 0.1);
}

.action-button i {
  font-size: 1.2rem;
}

.comments-section {
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Animation for like button */
@keyframes likeAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.action-button.liked i {
  animation: likeAnimation 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .post-card {
    border-radius: 0;
  }

  .post-header {
    padding: 12px;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
  }

  .post-content {
    padding: 0 12px;
  }

  .post-actions {
    padding: 12px;
  }
}
</style>
