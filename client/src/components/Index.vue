<template>
<div class="container-fluid">
  <login></login>
</div>
</template>

<script>
import login from '@/components/logIn.vue'
export default {
  name: 'HelloWorld',
  components: {login},
  data () {
    return {
      msg: 'Welcome to UDOCoin Payment System'
    }
  }
}
</script>
<style  scoped>
p{
  font-family: 'Ubuntu';
  font-size: 400;
}
</style>
