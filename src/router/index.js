import Home from '../views/Home.vue'
import AddUser from '../components/users/AddUser.vue'
import UsersList from '../components/users/UsersList.vue'
import ShowUsers from '../components/users/ShowUsers.vue'
import EditUser from '../components/users/EditUser.vue'
import Login from '../components/authentification/Login.vue'
import Register from '../components/authentification/Register.vue'
import BookList from '../components/books/BookList.vue'
import AddBooks from '../components/books/AddBooks.vue'
import ShowBooks from '../components/books/ShowBooks.vue'
import EditBooks from '../components/books/EditBooks.vue'
import Contacts from '../views/Contacts.vue'
import VueRouter from 'vue-router'
import firebase from '../Firebase'
import router from './index'



export default new VueRouter({
  routes: [
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
    path: '/user-list',
    name: 'UsersList',
    component:UsersList
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component:AddUser
  },
  {
    path: '/show-user:id',
    name: 'ShowUsers',
    component:ShowUsers
  },
  {
    path: '/edit-user:id',
    name: 'EditUser',
    component:EditUser
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/register',
    name: 'register',
    component:Register
  },
  {
    path: '/book-list',
    name: 'BookList',
    component:BookList,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/add-books',
    name: 'AddBooks',
    component:AddBooks
  },
  {
    path: '/show-books',
    name: 'ShowBooks',
    component:ShowBooks
  },
  {
    path: '/edit-books',
    name: 'EditBooks',
    component:EditBooks
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contacts
  }
]
})
router.beforeEach(async(to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('login');
  }
  else {
    next();
  }
})
