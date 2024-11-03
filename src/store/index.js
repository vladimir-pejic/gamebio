import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { auth } from '@/firebase/config'
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
} from 'firebase/auth'

export default createStore({
  plugins: [createPersistedState()],
  state: {
    user: null,
    posts: [],
    postModalVisible: false,
    loading: false,
    error: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
    },
    setCurrentUser(state, user) {
      state.currentUser = user
    },
    addPost(state, post) {
      state.posts.unshift(post)
    },
    setPostModalVisible(state, visible) {
      state.postModalVisible = visible
    },
    toggleLike(state, postId) {
      const post = state.posts.find(p => p.id === postId)
      if (post) {
        post.likes = post.liked ? post.likes - 1 : post.likes + 1
        post.liked = !post.liked
      }
    },
  },
  actions: {
    async signInWithProvider({ commit }, provider) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        let authProvider
        switch (provider) {
          case 'google':
            authProvider = new GoogleAuthProvider()
            break
          case 'facebook':
            authProvider = new FacebookAuthProvider()
            break
          case 'twitter':
            authProvider = new TwitterAuthProvider()
            break
          case 'twitch':
            authProvider = new OAuthProvider('twitch.tv')
            break
          default:
            throw new Error('Invalid provider')
        }

        const result = await signInWithPopup(auth, authProvider)
        const user = {
          id: result.user.uid,
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
          provider: provider,
        }
        commit('setUser', user)
      } catch (error) {
        commit('setError', error.message)
      } finally {
        commit('setLoading', false)
      }
    },

    async signOut({ commit }) {
      try {
        await auth.signOut()
        commit('setUser', null)
      } catch (error) {
        commit('setError', error.message)
      }
    },
  },
})
