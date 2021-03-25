<template>
  <div id="app">
    <app-Header></app-Header>
    <router-view></router-view>
    <app-Footer></app-Footer>
  </div>
</template>

<script>
/* eslint-disable */
    import Header from './views/Header.vue';
    import Footer from './views/Footer.vue';
    export default {
        data(){
            return{
                text:'Hello World'
            }
        },filters:{
            toUpperCase(value){
                return value.toUpperCase();
            }
        },
        components:{
            appHeader:Header,
            appFooter:Footer
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
