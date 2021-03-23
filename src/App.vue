<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user-list">User List</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
      <template v-if="user.loggedIn">
        <a>{{user.data.dispalyName}}</a>
        <a @click.prevent="signOut">LogOut!</a>
      </template>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './views/Footer.vue'
import {mapGetters} from 'vuex'
import firebase from 'firebase'

export default {
  name: 'App',
  components: {
    Footer
  },
  computed:{
    ...mapGetters({
      user:"user"
    })
  },
  methods:{
    signOut(){
      firebase
      .auth()
      .signOut()
      .then(()=>{
        this.$router.replace({
          name:"home"
        });
      });
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
