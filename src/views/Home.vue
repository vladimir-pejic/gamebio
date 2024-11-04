<template>
  <div class="home-container">
    <div class="content-wrapper">
      <div class="main-content">
        <div class="create-post">
          <img :src="user?.avatar" class="user-avatar" alt="Profile" />
          <button @click="openPostModal" class="create-post-button">
            <PenLine size="18" />
            What's on your mind?
          </button>
        </div>

        <div class="posts-container">
          <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @like="likePost"
            @share="sharePost"
          />
        </div>
      </div>

      <div class="sidebar">
        <div class="sidebar-card trending">
          <h3>Trending Games</h3>
          <div class="trending-list">
            <div class="trending-item">
              <span class="game-name">#Minecraft</span>
              <span class="post-count">2.4k posts</span>
            </div>
            <div class="trending-item">
              <span class="game-name">#Fortnite</span>
              <span class="post-count">1.8k posts</span>
            </div>
          </div>
        </div>

        <suggested-media />

        <div class="sidebar-card suggested">
          <h3>Suggested Players</h3>
          <div class="suggested-list">
            <div
              class="suggested-item"
              v-for="player in suggestedPlayers"
              :key="player.id"
            >
              <img :src="player.avatar" alt="User" class="suggested-avatar" />
              <div class="suggested-info">
                <span class="suggested-name">{{ player.displayName }}</span>
                <span class="suggested-game"
                  >Playing {{ player.currentGame }}</span
                >
              </div>
              <button class="button button-primary">
                <UserPlus size="16" />
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import PostItem from '@/components/PostItem.vue'
import PostModal from '@/components/PostModal.vue'
import avatar from '@/assets/avatar.svg'
import SuggestedMedia from '@/components/SuggestedMedia.vue'
import { PenLine, UserPlus } from 'lucide-vue-next'

const store = useStore()
const user = computed(() => store.state.user)
const posts = computed(() => store.state.homePosts)
const postModalVisible = computed(() => store.state.postModalVisible)

// Suggested players data
const suggestedPlayers = ref([
  {
    id: 1,
    displayName: 'ProGamer123',
    currentGame: 'Valorant',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=progamer',
  },
  {
    id: 2,
    displayName: 'PixelQueen',
    currentGame: 'Minecraft',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pixel',
  },
  {
    id: 3,
    displayName: 'SpeedRunner',
    currentGame: 'Portal 2',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=speed',
  },
  {
    id: 4,
    displayName: 'ESportsLegend',
    currentGame: 'League of Legends',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=esports',
  },
])

const openPostModal = () => {
  store.commit('setPostModalVisible', true)
}

const closePostModal = () => {
  store.commit('setPostModalVisible', false)
}

const likePost = postId => {
  store.commit('toggleLike', postId)
}

const sharePost = postId => {
  // Implement sharing functionality
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  background: var(--color-background);
}

.content-wrapper {
  max-width: 1265px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(600px, 2fr) 350px;
  gap: 30px;
  padding: 0;
  min-height: 100vh;
}

.main-content {
  border: none;
  min-height: 100vh;
}

.create-post {
  display: flex;
  gap: 12px;
  padding: 16px;
  align-items: center;
  border-bottom: none;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.create-post-button {
  flex: 1;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: 20px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;
}

.create-post-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.sidebar {
  padding: 16px 0;
  position: sticky;
  top: 76px;
  height: calc(100vh - 76px);
  overflow-y: auto;
}

.sidebar-card {
  background: var(--color-background-secondary);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
}

.sidebar-card h3 {
  color: var(--color-text);
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.trending-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.trending-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.game-name {
  color: var(--color-text);
  font-weight: 500;
}

.post-count {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

.suggested-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
}

.suggested-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.suggested-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.suggested-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.suggested-name {
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.95rem;
}

.suggested-game {
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.button {
  padding: 6px 16px;
  font-size: 0.85rem;
  min-width: 90px;
  justify-content: center;
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 1280px) {
  .content-wrapper {
    grid-template-columns: minmax(600px, 1fr) 350px;
  }
}

@media (max-width: 1000px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }
}

@media (max-width: 688px) {
  .content-wrapper {
    max-width: 100%;
  }

  .main-content {
    border-left: none;
    border-right: none;
  }
}
</style>
