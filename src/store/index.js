import { createStore } from 'vuex'
import { dummyUser, dummyPosts, dummyMedia, homePosts } from '@/data/dummyData'

export default createStore({
  state: {
    user: dummyUser,
    profileUser: dummyUser,
    profilePosts: dummyPosts,
    profileMedia: dummyMedia,
    homePosts: homePosts,
    postModalVisible: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setProfileUser(state, user) {
      state.profileUser = user
    },
    setProfilePosts(state, posts) {
      state.profilePosts = posts
    },
    setProfileMedia(state, media) {
      state.profileMedia = media
    },
    setPostModalVisible(state, visible) {
      state.postModalVisible = visible
    },
  },
  actions: {
    signInWithProvider({ commit }, provider) {
      // Simulate sign in for now
      commit('setUser', dummyUser)
    },
    async fetchProfile({ commit }, userId) {
      // Simulate API call with dummy data
      commit('setProfileUser', dummyUser)
      commit('setProfilePosts', dummyPosts)
      commit('setProfileMedia', dummyMedia)
    },
    async signOut({ commit }) {
      commit('setUser', null)
    },
  },
})
