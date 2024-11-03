<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import PostModal from '@/components/PostModal.vue'

const store = useStore()
const router = useRouter()
const showUserMenu = ref(false)
const menuTrigger = ref(null)
const dropdownMenu = ref(null)

const user = computed(() => store.state.user)

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const createPost = () => {
  store.commit('setPostModalVisible', true)
}

const signOut = async () => {
  await store.dispatch('signOut')
  router.push('/auth')
}

// Close dropdown when clicking outside
const handleClickOutside = event => {
  if (
    menuTrigger.value &&
    !menuTrigger.value.contains(event.target) &&
    !dropdownMenu.value?.contains(event.target)
  ) {
    showUserMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="app-wrapper">
    <nav class="navbar" v-if="user">
      <div class="nav-content">
        <div class="nav-left">
          <router-link to="/" class="logo"
            >GAME<span class="highlight">BIO</span></router-link
          >
          <router-link to="/" class="nav-link">Home</router-link>
        </div>

        <div class="nav-right">
          <button @click="createPost" class="post-btn">
            <i class="fas fa-plus"></i>
            New Post
          </button>

          <div class="user-menu" @click="toggleUserMenu" ref="menuTrigger">
            <img :src="user.avatar" class="user-avatar" :alt="user.name" />
            <i class="fas fa-chevron-down"></i>

            <!-- Dropdown Menu -->
            <div v-if="showUserMenu" class="dropdown-menu" ref="dropdownMenu">
              <router-link :to="`/profile/${user.id}`" class="menu-item">
                <i class="fas fa-user"></i>
                Profile
              </router-link>
              <router-link to="/settings" class="menu-item">
                <i class="fas fa-cog"></i>
                Settings
              </router-link>
              <div class="menu-divider"></div>
              <button @click="signOut" class="menu-item">
                <i class="fas fa-sign-out-alt"></i>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="main-container">
      <router-view></router-view>
    </div>
    <post-modal />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background-color: var(--color-background);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: var(--color-background-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
}

.nav-content {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 1px;
}

.highlight {
  color: #6d28d9;
}

.nav-link {
  color: #9ca3af;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.post-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #6d28d9;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.post-btn:hover {
  background: #5b21b6;
}

.user-menu {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px;
  border-radius: 20px;
  transition: background-color 0.2s;
}

.user-menu:hover {
  background: rgba(255, 255, 255, 0.05);
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #1f2937;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 200px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.2s;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.menu-item i {
  width: 16px;
  color: #9ca3af;
}

.menu-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 4px 0;
}

@media (max-width: 768px) {
  .nav-link {
    display: none;
  }

  .post-btn span {
    display: none;
  }

  .post-btn {
    padding: 8px;
  }
}
</style>
