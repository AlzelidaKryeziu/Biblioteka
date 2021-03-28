<template>
<div>
<nav class="navbar navbar-expand-md">
  <img alt="Library Logo" src="../assets/librarylogo.png">
  <div class="collapse navbar-collapse" id="main-navigation">
    <ul class="navbar-nav">
      <li class="nav-item" >
         <router-link class="nav-link" to="/" >
          <a>Home</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/About" >
          <a>About</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user-list" >
          <a>Users</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact" >
          <a>Contact us</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/book-list" >
          <a>Books</a>
        </router-link>
      </li>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <template v-if="user.loggedIn">
            <li class="nav-item">
             <a class="nav-link"> {{user.data.displayName}} </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
            <li class="nav-item">
              <router-link to="contact-list">Contact List</router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="Login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
      </div>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
    computed:{
        ...mapGetters({
            user:"user"
        })
    }, methods:{
        signOut(){
            firebase
            .auth()
            .signOut()
            .then(()=>{
                this.$router.replace({
                    name:"Home"
                });
            });
        }
    }
}
</script>
<style scoped>
img{
  width: 5%;
}
</style>