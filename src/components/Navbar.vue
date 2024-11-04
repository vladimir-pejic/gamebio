<template>
  <nav class="navbar" v-if="user">
    <div class="nav-content">
      <div class="nav-left">
        <router-link to="/" class="nav-brand">GameBio</router-link>
        <router-link to="/" class="button button-secondary">
          <Home size="18" />
          Home
        </router-link>
      </div>

      <div class="nav-actions">
        <button class="button button-primary" @click="openPostModal">
          <PenSquare size="18" />
          New Post
        </button>

        <button class="button button-secondary">
          <Bell size="18" />
        </button>

        <button class="button button-secondary">
          <MessageSquare size="18" />
        </button>

        <div class="profile-dropdown" v-click-outside="closeDropdown">
          <button
            class="button button-secondary profile-button"
            @click="toggleDropdown"
          >
            <img :src="user?.avatar" alt="Profile" class="avatar" />
            <ChevronDown size="18" :class="{ rotate: isDropdownOpen }" />
          </button>

          <div class="dropdown-menu" v-show="isDropdownOpen">
            <router-link :to="`/profile/${user.id}`" class="dropdown-item">
              <User size="18" />
              Profile
            </router-link>
            <router-link to="/settings" class="dropdown-item">
              <Settings size="18" />
              Settings
            </router-link>
            <button @click="signOut" class="dropdown-item">
              <LogOut size="18" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {
  Home,
  Bell,
  MessageSquare,
  ChevronDown,
  PenSquare,
  User,
  Settings,
  LogOut,
} from 'lucide-vue-next'

const store = useStore()
const router = useRouter()
const user = computed(() => store.state.user)
const isDropdownOpen = ref(false)

const openPostModal = () => {
  store.commit('setPostModalVisible', true)
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const signOut = async () => {
  await store.dispatch('signOut')
  router.push('/auth')
}

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = event => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: var(--color-background);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
  backdrop-filter: blur(12px);
}

.nav-content {
  max-width: 1265px;
  margin: 0 auto;
  padding: 0 16px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--color-background-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 8px;
  min-width: 200px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  color: var(--color-text);
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;
  font-size: 0.95rem;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.rotate {
  transform: rotate(180deg);
  transition: transform 0.2s;
}

.profile-button {
  padding: 6px 12px;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .button span {
    display: none;
  }

  .button {
    padding: 8px;
  }
}
</style>
