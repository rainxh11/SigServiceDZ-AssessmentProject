import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ContactsView',
    component: () => import(/* webpackChunkName: "contact-view" */ '../views/ContactsView.vue')
  },
  {
    path: '/contact/:id',
    name: 'ContactDetail',
    component: () => import(/* webpackChunkName: "contact-view" */ '../views/ContactDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
