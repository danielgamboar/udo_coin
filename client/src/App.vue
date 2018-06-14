<template>
 <div class="">
   <navigation></navigation>
   <router-view/>
   <foot></foot>
 </div>
</template>
<script>
import navigation from '@/components/navigation.vue'
import foot from '@/components/foot.vue'
export default {
  name: 'App',
  components: {navigation, foot}
}
</script>
<style scoped>
#app {
  font-family: 'Assistant', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
