import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import Profile from '@/views/Profile.vue'
import ProfilePosts from '@/components/profile/ProfilePosts.vue'
import ProfileMedia from '@/components/profile/ProfileMedia.vue'
import ProfileAbout from '@/components/profile/ProfileAbout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/profile/:id',
    component: Profile,
    children: [
      {
        path: '',
        name: 'ProfilePosts',
        component: ProfilePosts,
      },
      {
        path: 'media',
        name: 'ProfileMedia',
        component: ProfileMedia,
      },
      {
        path: 'about',
        name: 'ProfileAbout',
        component: ProfileAbout,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
