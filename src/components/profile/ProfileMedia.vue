<template>
  <div class="media-container">
    <div class="media-filters">
      <button
        v-for="filter in filters"
        :key="filter.type"
        :class="{ active: currentFilter === filter.type }"
        @click="currentFilter = filter.type"
      >
        <i :class="filter.icon"></i>
        {{ filter.label }}
      </button>
    </div>

    <div v-if="filteredMedia.length === 0" class="no-media">
      <i class="far fa-images"></i>
      <h3>No media yet</h3>
      <p v-if="isOwnProfile">
        Share photos and videos from your gaming sessions!
      </p>
    </div>

    <div v-else class="media-grid">
      <div
        v-for="item in filteredMedia"
        :key="item.id"
        class="media-item"
        @click="openMediaPreview(item)"
      >
        <img v-if="item.type === 'image'" :src="item.url" :alt="item.caption" />
        <div v-else-if="item.type === 'video'" class="video-thumbnail">
          <img :src="item.thumbnail" :alt="item.caption" />
          <i class="fas fa-play"></i>
        </div>
        <div class="media-overlay">
          <div class="media-stats">
            <span><i class="fas fa-heart"></i> {{ item.likes }}</span>
            <span><i class="fas fa-comment"></i> {{ item.comments }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Media Preview Modal -->
  <div
    v-if="selectedMedia"
    class="media-preview-modal"
    @click.self="closeMediaPreview"
  >
    <div class="preview-content">
      <button class="close-preview" @click="closeMediaPreview">×</button>
      <img
        v-if="selectedMedia.type === 'image'"
        :src="selectedMedia.url"
        :alt="selectedMedia.caption"
      />
      <video
        v-else-if="selectedMedia.type === 'video'"
        :src="selectedMedia.url"
        controls
      ></video>
      <div class="preview-info">
        <div class="preview-header">
          <img :src="profile.avatar" class="preview-avatar" />
          <div class="preview-meta">
            <span class="preview-username">{{ profile.displayName }}</span>
            <span class="preview-date">{{
              formatDate(selectedMedia.createdAt)
            }}</span>
          </div>
        </div>
        <p class="preview-caption">{{ selectedMedia.caption }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const currentFilter = ref('all')
const selectedMedia = ref(null)

const profile = computed(() => store.state.profileUser)
const isOwnProfile = computed(() => store.state.user?.id === profile.value?.id)

const filters = [
  { type: 'all', label: 'All', icon: 'fas fa-th' },
  { type: 'images', label: 'Images', icon: 'far fa-image' },
  { type: 'videos', label: 'Videos', icon: 'fas fa-video' },
]

const media = computed(() => store.state.profileMedia)
const filteredMedia = computed(() => {
  if (currentFilter.value === 'all') return media.value
  return media.value.filter(item => item.type === currentFilter.value)
})

const openMediaPreview = media => {
  selectedMedia.value = media
}

const closeMediaPreview = () => {
  selectedMedia.value = null
}

const formatDate = date => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.media-container {
  padding: 20px 0;
}

.media-filters {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.media-filters button {
  background: none;
  border: none;
  color: #9ca3af;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.media-filters button.active {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.media-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

.media-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.media-item:hover img {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-item:hover .media-overlay {
  opacity: 1;
}

.media-stats {
  color: white;
  display: flex;
  gap: 20px;
  font-size: 1.1rem;
}

.media-stats span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-thumbnail i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.media-preview-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 40px;
}

.preview-content {
  max-width: 1000px;
  max-height: 90vh;
  width: 100%;
  background: #1f2937;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.close-preview {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1;
}

.preview-info {
  padding: 20px;
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.preview-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
