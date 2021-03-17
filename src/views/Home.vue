<template>
  <div class="home">
    <img alt="Library Logo" src="../assets/librarylogo.png">
    <HelloWorld msg="Online Library"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
img{
  width: 10%;
}
</style>