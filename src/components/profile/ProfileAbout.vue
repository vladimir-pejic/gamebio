<template>
  <div class="about-container">
    <div class="about-section">
      <h2>Basic Information</h2>
      <div class="info-grid">
        <div class="info-item" v-if="profile.firstName || profile.lastName">
          <span class="label">Name</span>
          <span class="value"
            >{{ profile.firstName }} {{ profile.lastName }}</span
          >
        </div>
        <div class="info-item" v-if="profile.gender">
          <span class="label">Gender</span>
          <span class="value">{{ profile.gender }}</span>
        </div>
        <div class="info-item" v-if="profile.birthDate">
          <span class="label">Birth Date</span>
          <span class="value">{{ formatDate(profile.birthDate) }}</span>
        </div>
        <div class="info-item" v-if="profile.location">
          <span class="label">Location</span>
          <span class="value">{{ profile.location }}</span>
        </div>
        <div class="info-item" v-if="profile.email">
          <span class="label">Email</span>
          <span class="value">{{ profile.email }}</span>
        </div>
        <div class="info-item" v-if="profile.joinDate">
          <span class="label">Joined</span>
          <span class="value">{{ formatDate(profile.joinDate) }}</span>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>Gaming Preferences</h2>
      <div class="tags-container">
        <div class="preferences-group">
          <h3>Favorite Genres</h3>
          <div class="tags">
            <span v-for="genre in profile.genres" :key="genre" class="tag">
              {{ genre }}
            </span>
          </div>
        </div>

        <div class="preferences-group">
          <h3>Platforms</h3>
          <div class="tags">
            <span
              v-for="platform in profile.platforms"
              :key="platform"
              class="tag"
            >
              {{ platform }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>About Me</h2>
      <p class="about-text">{{ profile.aboutMe }}</p>
    </div>

    <div class="about-section">
      <h2>Social Links</h2>
      <div class="social-links">
        <a
          v-for="link in profile.socialLinks"
          :key="link.type"
          :href="link.url"
          target="_blank"
          :class="link.type"
        >
          <i :class="getSocialIcon(link.type)"></i>
          <span>{{ link.platform }}</span>
          <span class="handle">{{ link.handle }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const profile = computed(() => store.state.profileUser)

const formatDate = date => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getSocialIcon = type => {
  const icons = {
    twitter: 'fab fa-x-twitter',
    facebook: 'fab fa-facebook',
    instagram: 'fab fa-instagram',
    youtube: 'fab fa-youtube',
    twitch: 'fab fa-twitch',
    discord: 'fab fa-discord',
    steam: 'fab fa-steam',
  }
  return icons[type]
}
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}

.about-section {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
}

.about-section h2 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  color: #9ca3af;
  font-size: 0.9rem;
}

.value {
  color: #ffffff;
  font-size: 1.1rem;
}

.tags-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.preferences-group h3 {
  color: #9ca3af;
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.about-text {
  color: #ffffff;
  line-height: 1.6;
  white-space: pre-wrap;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.social-links a {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  text-decoration: none;
  padding: 12px;
  border-radius: 12px;
  transition: background-color 0.2s ease;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.05);
}

.social-links i {
  font-size: 1.5rem;
  width: 24px;
  text-align: center;
}

.handle {
  color: #9ca3af;
  margin-left: auto;
}

/* Platform-specific colors */
.twitter i {
  color: #1da1f2;
}
.facebook i {
  color: #1877f2;
}
.instagram i {
  color: #e4405f;
}
.youtube i {
  color: #ff0000;
}
.twitch i {
  color: #9146ff;
}
.discord i {
  color: #5865f2;
}
.steam i {
  color: #00adee;
}

@media (max-width: 768px) {
  .about-section {
    padding: 20px;
    border-radius: 12px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
