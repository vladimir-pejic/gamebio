<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const user = computed(() => store.state.user)

const createPost = () => {
  store.commit('setPostModalVisible', true)
}

const signOut = () => {
  store.dispatch('signOut')
}
</script>

<template>
  <div id="app">
    <nav class="navbar" v-if="user">
      <div class="nav-content">
        <div class="nav-left">
          <router-link to="/" class="logo"
            >GAME<span class="highlight">BIO</span></router-link
          >
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link :to="`/profile/${user.id}`" class="nav-link"
            >Profile</router-link
          >
        </div>
        <div class="nav-right">
          <button @click="createPost" class="post-btn">New Post</button>
          <div class="user-menu">
            <img :src="user.avatar" class="user-avatar" />
            <button @click="signOut" class="signout-btn">Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.navbar {
  width: 100%;
  background: #13151a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
}

.nav-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 24px;
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
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #6d28d9;
}

.post-btn {
  background: #6d28d9;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.post-btn:hover {
  background: #5b21b6;
}

.main-container {
  width: 100%;
  padding-top: 60px; /* Height of navbar */
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-content {
    padding: 0 16px;
  }

  .nav-link {
    display: none;
  }

  .logo {
    font-size: 1.2rem;
  }
}
</style>
