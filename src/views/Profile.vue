<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="cover-image">
        <img :src="profile.coverImage" alt="Cover" />
        <div v-if="isOwnProfile" class="edit-cover">
          <button @click="triggerCoverUpload">
            <i class="fas fa-camera"></i>
            Edit cover photo
          </button>
        </div>
      </div>

      <div class="profile-info-bar">
        <div class="profile-avatar">
          <img :src="profile.avatar" alt="Profile" />
          <div v-if="isOwnProfile" class="edit-avatar">
            <button @click="triggerAvatarUpload">
              <i class="fas fa-camera"></i>
            </button>
          </div>
        </div>

        <div class="profile-actions">
          <template v-if="!isOwnProfile">
            <button
              class="action-button button button-primary"
              :class="{ following: isFollowing }"
              @click="toggleFollow"
            >
              <UserPlus v-if="!isFollowing" />
              <UserCheck v-else />
              {{ isFollowing ? 'Following' : 'Follow' }}
            </button>
            <button class="action-button button button-secondary">
              <Mail />
              Message
            </button>
          </template>
          <button v-else class="action-button button button-secondary">
            <Settings />
            Edit Profile
          </button>
        </div>
      </div>

      <div class="profile-info">
        <h1 class="profile-name">{{ profile.displayName }}</h1>
        <p class="profile-username">@{{ profile.username }}</p>
        <p class="profile-bio">{{ profile.bio }}</p>

        <div class="profile-stats">
          <span class="stat">
            <strong>{{ profile.followers }}</strong> Followers
          </span>
          <span class="stat">
            <strong>{{ profile.following }}</strong> Following
          </span>
        </div>
      </div>

      <nav class="profile-nav">
        <router-link
          :to="`/profile/${profile.id}`"
          class="nav-link"
          exact-active-class="active"
        >
          Posts
        </router-link>
        <router-link :to="`/profile/${profile.id}/media`" class="nav-link">
          Media
        </router-link>
        <router-link :to="`/profile/${profile.id}/about`" class="nav-link">
          About
        </router-link>
      </nav>
    </div>

    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { UserPlus, UserCheck, Mail, Settings } from 'lucide-vue-next'

const store = useStore()
const route = useRoute()

const profile = computed(() => store.state.profileUser)
const isOwnProfile = computed(() => store.state.user?.id === profile.value?.id)
const isFollowing = computed(() => false) // Replace with actual following logic

onMounted(() => {
  store.dispatch('fetchProfile', route.params.id)
})

const triggerCoverUpload = () => {
  // Implement cover upload logic
}

const triggerAvatarUpload = () => {
  // Implement avatar upload logic
}

const toggleFollow = () => {
  // Implement follow logic
}

const openMessages = () => {
  // Implement messages logic
}

const editProfile = () => {
  // Implement edit profile logic
}
</script>

<style scoped>
.profile-container {
  min-height: 100vh;
  background: var(--color-background);
}

.profile-header {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.cover-image {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
}

.cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info-bar {
  max-width: 1265px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -48px;
}

.profile-avatar {
  position: relative;
  margin-bottom: 16px;
}

.profile-avatar img {
  width: 133px;
  height: 133px;
  border-radius: 50%;
  border: 4px solid var(--color-background);
  background: var(--color-background);
}

.profile-info {
  max-width: 1265px;
  margin: 0 auto;
  padding: 16px;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.profile-username {
  color: var(--color-text-secondary);
  margin-bottom: 12px;
}

.profile-bio {
  margin-bottom: 16px;
  line-height: 1.5;
}

.profile-stats {
  display: flex;
  gap: 20px;
}

.stat {
  color: var(--color-text-secondary);
}

.stat strong {
  color: var(--color-text);
  margin-right: 4px;
}

.profile-nav {
  max-width: 1265px;
  margin: 0 auto;
  display: flex;
  gap: 32px;
  padding: 0 16px;
  margin-top: 16px;
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 16px 0;
  position: relative;
  font-weight: 500;
}

.nav-link.active {
  color: var(--color-text);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-primary);
  border-radius: 4px 4px 0 0;
}

.content-wrapper {
  max-width: 1265px;
  margin: 0 auto;
  padding: 0 16px;
}

.action-button {
  min-width: 120px;
}

.action-button.following {
  background: var(--color-background-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text);
}

@media (max-width: 688px) {
  .profile-info-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-actions {
    margin-top: 16px;
    width: 100%;
    display: flex;
    gap: 12px;
  }

  .action-button {
    flex: 1;
  }
}
</style>
