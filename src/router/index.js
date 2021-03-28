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
import ContactList from '../views/ContactList.vue'
import ContactDetails from '../views/ContactDetails.vue'
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
    component:AddUser,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/show-user:id',
    name: 'ShowUsers',
    component:ShowUsers,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/edit-user:id',
    name: 'EditUser',
    component:EditUser,
    meta:{
      requiresAuth:true
    }
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
    component:BookList
  },
  {
    path: '/add-books',
    name: 'AddBooks',
    component:AddBooks,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/show-books',
    name: 'ShowBooks',
    component:ShowBooks,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/edit-books',
    name: 'EditBooks',
    component:EditBooks,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contacts
  },
  {
    path: '/contact-list',
    name: 'ContactList',
    component:ContactList,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/contact-details:id',
    name: 'ContactDetails',
    component:ContactDetails,
    meta:{
      requiresAuth:true
    }
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
