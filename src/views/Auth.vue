<template>
  <div class="auth-container">
    <div class="auth-content">
      <div class="auth-box">
        <div class="auth-header">
          <div class="logo">
            <span class="logo-text"
              >GAME<span class="highlight">BIO</span></span
            >
            <div class="logo-tagline">Connect. Play. Share.</div>
          </div>
        </div>

        <div class="auth-section">
          <h2 class="section-title">Sign In</h2>

          <div class="auth-buttons">
            <button
              @click="signIn('google')"
              class="auth-button google"
              :disabled="loading"
            >
              <img src="@/assets/google-icon.svg" alt="Google" />
              <span>Continue with Google</span>
              <div class="button-shine"></div>
            </button>

            <button
              @click="signIn('x')"
              class="auth-button x"
              :disabled="loading"
            >
              <img src="@/assets/x-icon.svg" alt="X" />
              <span>Continue with X</span>
              <div class="button-shine"></div>
            </button>

            <button
              @click="signIn('facebook')"
              class="auth-button facebook"
              :disabled="loading"
            >
              <img src="@/assets/facebook-icon.svg" alt="Facebook" />
              <span>Continue with Facebook</span>
              <div class="button-shine"></div>
            </button>
          </div>
        </div>

        <div v-if="error" class="error-message">
          <i class="fas fa-exclamation-circle"></i>
          {{ error }}
        </div>

        <div v-if="loading" class="loading-spinner">
          <div class="spinner"></div>
          Connecting...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const loading = computed(() => store.state.loading)
const error = computed(() => store.state.error)
const user = computed(() => store.state.user)

const signIn = async provider => {
  await store.dispatch('signInWithProvider', provider)
  if (store.state.user) {
    router.push('/')
  }
}

// Redirect if user is already logged in
if (user.value) {
  router.push('/')
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.auth-content {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-box {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.auth-header {
  text-align: center;
  margin-bottom: 48px;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.logo-text {
  font-family: var(--font-family);
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-text);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.highlight {
  color: #6d28d9;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #6d28d9, #9333ea);
  border-radius: 2px;
}

.logo-tagline {
  font-size: 1.2rem;
  color: #9ca3af;
  font-weight: 500;
}

.section-title {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.auth-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
}

.auth-button:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
}

.auth-button img {
  width: 24px;
  height: 24px;
}

.button-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: 0.5s;
}

.auth-button:hover .button-shine {
  left: 100%;
}

.google {
  border-color: rgba(255, 255, 255, 0.2);
}
.x {
  border-color: #000000;
}
.facebook {
  border-color: #1877f2;
}

.error-message {
  text-align: center;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 16px;
  border-radius: 12px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.loading-spinner {
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #6d28d9;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .auth-content {
    max-width: 90%;
  }

  .auth-box {
    padding: 32px 24px;
  }

  .logo-text {
    font-size: 2.5rem;
  }

  .logo-tagline {
    font-size: 1rem;
  }

  .auth-button {
    padding: 14px;
    font-size: 1rem;
  }
}
</style>
