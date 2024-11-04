<template>
  <div v-if="visible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3>Create Post</h3>
        <button class="close-button" @click="closeModal">×</button>
      </div>

      <div class="modal-content">
        <div class="user-info">
          <img :src="user?.avatar" class="user-avatar" alt="Profile" />
          <span class="user-name">{{ user?.displayName }}</span>
        </div>

        <textarea
          v-model="content"
          class="post-input"
          placeholder="What's on your mind?"
          rows="4"
        ></textarea>

        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreview" alt="Preview" />
          <button class="remove-image" @click="removeImage">×</button>
        </div>

        <div class="modal-actions">
          <label class="media-button button button-secondary">
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="hidden"
            />
            <ImagePlus />
            Add Photo
          </label>

          <button
            @click="createPost"
            class="post-button button button-primary"
            :disabled="!content && !imagePreview"
          >
            <Send />
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Image, ImagePlus, Send } from 'lucide-vue-next'

const store = useStore()
const content = ref('')
const imagePreview = ref(null)

const user = computed(() => store.state.user)
const visible = computed(() => store.state.postModalVisible)

const closeModal = () => {
  store.commit('setPostModalVisible', false)
  content.value = ''
  imagePreview.value = null
}

const handleImageUpload = event => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  imagePreview.value = null
}

const createPost = () => {
  // Here you would normally send the post to your backend
  console.log('Creating post:', {
    content: content.value,
    image: imagePreview.value,
  })
  closeModal()
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: var(--color-background-secondary);
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h3 {
  color: var(--color-text);
  font-size: 1.25rem;
}

.close-button {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
}

.modal-content {
  padding: 16px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  color: var(--color-text);
  font-weight: 500;
}

.post-input {
  width: 100%;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.1rem;
  resize: none;
  margin-bottom: 16px;
}

.post-input:focus {
  outline: none;
}

.image-preview {
  position: relative;
  margin-bottom: 16px;
}

.image-preview img {
  width: 100%;
  border-radius: 12px;
}

.remove-image {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.media-button {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  transition: background-color 0.2s;
}

.media-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.hidden {
  display: none;
}

.post-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.post-button:hover {
  background: var(--color-primary-hover);
}

.post-button:disabled {
  background: #4b5563;
  cursor: not-allowed;
}
</style>
