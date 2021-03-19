import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddUser from '../components/users/AddUser.vue'
import UsersList from '../components/users/UsersList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/user-list',
    name: 'UsersList',
    component:UsersList
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component:AddUser
  }
]

const router = new VueRouter({
  routes
})

export default router
