<template>
<div class="container-fluid">
  <login></login>
  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tempus felis. Cras non accumsan erat. Curabitur sollicitudin iaculis arcu a eleifend. Etiam diam nulla, feugiat eget malesuada ut, dapibus ac sem. Aliquam semper nulla eros. Nunc eget viverra nibh. Morbi pretium nunc eget accumsan semper. Mauris vitae libero luctus, sagittis ipsum ac, convallis tellus. Cras eleifend elementum odio, a efficitur lectus. Ut cursus nunc turpis, et luctus sapien luctus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nisi nisi, mattis a mi sit amet, viverra viverra libero. Phasellus id sem ipsum. Aenean in tristique felis, at aliquam ipsum. Mauris tincidunt id metus a dapibus. Suspendisse faucibus ac purus eu maximus.

Nam ut urna sed sapien scelerisque varius. Aenean tristique vestibulum magna sit amet auctor. Donec tristique est purus, vel pulvinar magna ullamcorper a. Cras id convallis felis. Cras tristique eros tortor, eget bibendum lectus tincidunt et. Suspendisse potenti. Curabitur tempus leo ac quam pellentesque, a hendrerit massa venenatis. Etiam non pellentesque nisi. Quisque eu metus a ex bibendum efficitur et ac elit. Quisque ac aliquet justo. Sed varius interdum risus sit amet efficitur. Vivamus pellentesque tincidunt nulla, et tristique ex elementum non. Fusce eleifend est in sapien semper fermentum. Nunc vitae tempus sapien. Vestibulum eget leo magna. Suspendisse potenti.

Nunc eget ligula suscipit,oreet Nulla efficitur. Donec consequat elementum metus, sed aliquet augue pellentesque eu. Etiam in turpis laoreet, tristique ante vel, convallis leo. Mauris ornare interdum arcu id blandit. Duis pellentesque dui vitae justo dignissim rhoncus. Pellentesque enim orci, vestibulum id tempor a, facilisis ut urna. </p>
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
  font-family: 'Assistant';
  font-size: 400;
}
</style>
