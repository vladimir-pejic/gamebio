<script setup>
import Navbar from '@/components/Navbar.vue'
import PostModal from '@/components/PostModal.vue'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main class="main-container">
      <router-view></router-view>
    </main>
    <post-modal />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: var(--color-background);
}

.main-container {
  min-height: calc(100vh - 60px);
}
</style>
