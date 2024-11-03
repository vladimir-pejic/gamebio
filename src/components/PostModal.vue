<template>
  <div class="modal-overlay">
    <div class="modal">
      <textarea
        v-model="content"
        placeholder="What's happening?"
        rows="4"
      ></textarea>
      <input type="file" accept="image/*" @change="handleImageUpload" />
      <div class="preview" v-if="imagePreview">
        <img :src="imagePreview" />
      </div>
      <div class="actions">
        <button @click="$emit('close')">Cancel</button>
        <button @click="createPost" :disabled="!content">Post</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits(['close'])

const content = ref('')
const imagePreview = ref(null)
const imageFile = ref(null)

const handleImageUpload = event => {
  const file = event.target.files[0]
  if (file) {
    imageFile.value = file
    imagePreview.value = URL.createObjectURL(file)
  }
}

const createPost = () => {
  const post = {
    id: Date.now(),
    content: content.value,
    image: imagePreview.value,
    authorId: store.state.user.id,
    authorName: store.state.user.name,
    authorAvatar: store.state.user.avatar,
    timestamp: new Date(),
    likes: 0,
    liked: false,
  }
  store.commit('addPost', post)
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

textarea {
  width: 100%;
  margin-bottom: 1rem;
}

.preview img {
  max-width: 100%;
  max-height: 300px;
  margin: 1rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>
