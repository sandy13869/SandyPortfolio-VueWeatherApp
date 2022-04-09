import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Slider from '../views/Slider.vue'
import Feature from '../views/Feature.vue'
import Location from '../views/Location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/slider',
    name: 'slider',
    component: Slider
  },
  {
    path: '/feature',
    name: 'feature',
    component: Feature
  },
  {
    path: '/location',
    name: 'location',
    component: Location
  }
]

// const router = createRouter({
//   history: createWebHistory(),
//   routes: routes
// })
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
