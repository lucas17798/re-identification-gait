import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gait from "../views/Gait";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isRouter: true
    },
    children: [
      {
        path: 'gait',
        name: 'Gait',
        component: Gait,
        meta: {
          isRouter: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     isRouter: true
  //   },
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
