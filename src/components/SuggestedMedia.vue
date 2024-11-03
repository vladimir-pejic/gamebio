<template>
  <div class="sidebar-card suggested-media">
    <h3>Trending Media</h3>

    <div class="media-carousel">
      <button
        class="nav-button prev"
        @click="prevSlide"
        :disabled="currentIndex === 0"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <div class="media-container" ref="container">
        <div
          v-for="(item, index) in suggestedMedia"
          :key="item.id"
          class="media-item"
          :class="{ active: index === currentIndex }"
        >
          <div class="media-preview">
            <img :src="item.thumbnail" :alt="item.caption" />
            <div class="media-overlay">
              <div class="media-info">
                <span class="author">{{ item.authorName }}</span>
                <span class="stats">
                  <span class="likes"
                    ><i class="fas fa-heart"></i> {{ item.likes }}</span
                  >
                  <span class="comments"
                    ><i class="fas fa-comment"></i> {{ item.comments }}</span
                  >
                </span>
              </div>
            </div>
          </div>
          <p class="media-caption">{{ item.caption }}</p>
        </div>
      </div>

      <button
        class="nav-button next"
        @click="nextSlide"
        :disabled="currentIndex >= suggestedMedia.length - 1"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>

    <div class="carousel-dots">
      <button
        v-for="(_, index) in suggestedMedia"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const container = ref(null)

const suggestedMedia = [
  {
    id: 1,
    thumbnail:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    caption: 'Epic Valorant clutch moment! 🎯',
    authorName: 'Pixel Queen',
    likes: '1.2K',
    comments: 145,
  },
  {
    id: 2,
    thumbnail:
      'https://images.unsplash.com/photo-1603481546239-65e13c5d0f39?w=800',
    caption: 'New gaming setup reveal 🎮',
    authorName: 'ESports Legend',
    likes: '2.5K',
    comments: 230,
  },
  {
    id: 3,
    thumbnail:
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800',
    caption: 'Minecraft castle finished! 🏰',
    authorName: 'Speed Runner',
    likes: '3.1K',
    comments: 312,
  },
]

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextSlide = () => {
  if (currentIndex.value < suggestedMedia.length - 1) {
    currentIndex.value++
  }
}

const goToSlide = index => {
  currentIndex.value = index
}
</script>

<style scoped>
.suggested-media {
  margin-bottom: 16px;
  overflow: hidden;
}

.media-carousel {
  position: relative;
  margin: 16px -8px;
  display: flex;
  align-items: center;
}

.media-container {
  flex: 1;
  overflow: hidden;
}

.media-item {
  display: none;
  padding: 0 8px;
}

.media-item.active {
  display: block;
}

.media-preview {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.media-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  transition: opacity 0.2s;
}

.media-preview:hover .media-overlay {
  opacity: 1;
}

.media-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.author {
  font-weight: 500;
  font-size: 0.9rem;
}

.stats {
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
}

.stats i {
  margin-right: 4px;
}

.media-caption {
  margin-top: 8px;
  font-size: 0.9rem;
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-button {
  background: var(--color-background-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 1;
}

.nav-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button.prev {
  margin-right: 8px;
}

.nav-button.next {
  margin-left: 8px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-text-secondary);
  opacity: 0.3;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.dot.active {
  opacity: 1;
  background: var(--color-primary);
}
</style>
