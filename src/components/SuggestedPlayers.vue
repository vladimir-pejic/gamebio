<template>
  <div class="suggested-item">
    <img :src="player.avatar" alt="User" class="suggested-avatar" />
    <div class="suggested-info">
      <span class="suggested-name">{{ player.displayName }}</span>
      <span class="suggested-game">Playing {{ player.currentGame }}</span>
    </div>
    <button class="follow-button button button-primary">
      <UserPlus />
      Follow
    </button>
  </div>
</template>

<script setup>
import { UserPlus } from 'lucide-vue-next'
// ... rest of the script
</script>

<style scoped>
.follow-button {
  padding: 6px 16px;
  font-size: 0.9rem;
}
</style>
