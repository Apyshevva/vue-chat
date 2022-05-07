import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { auth } from '../firebase/config'

const requireAuthMiddleWare = (to, from, next) => {
  const user = auth.currentUser;
  
  if (!user) {
    return next({ name: 'Welcome' })
  }

  return next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom,
      beforeEnter: requireAuthMiddleWare
    }
  ]
})

export default router
