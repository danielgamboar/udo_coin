<template>
<div class="container-fluid">
  <login></login>
  <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in tempus felis. Cras non accumsan erat. Curabitur sollicitudin iaculis arcu a eleifend. Etiam diam nulla, feugiat eget malesuada ut, dapibus ac sem. Aliquam semper nulla eros. Nunc eget viverra nibh. Morbi pretium nunc eget accumsan semper. Mauris vitae libero luctus, sagittis ipsum ac, convallis tellus. Cras eleifend elementum odio, a efficitur lectus. Ut cursus nunc turpis, et luctus sapien luctus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nisi nisi, mattis a mi sit amet, viverra viverra libero. Phasellus id sem ipsum. Aenean in tristique felis, at aliquam ipsum. Mauris tincidunt id metus a dapibus. Suspendisse faucibus ac purus eu maximus.

Nam ut urna sed sapien scelerisque varius. Aenean tristique vestibulum magna sit amet auctor. Donec tristique est purus, vel pulvinar magna ullamcorper a. Cras id convallis felis. Cras tristique eros tortor, eget bibendum lectus tincidunt et. Suspendisse potenti. Curabitur tempus leo ac quam pellentesque, a hendrerit massa venenatis. Etiam non pellentesque nisi. Quisque eu metus a ex bibendum efficitur et ac elit. Quisque ac aliquet justo. Sed varius interdum risus sit amet efficitur. Vivamus pellentesque tincidunt nulla, et tristique ex elementum non. Fusce eleifend est in sapien semper fermentum. Nunc vitae tempus sapien. Vestibulum eget leo magna. Suspendisse potenti.

Nunc eget ligula suscipit, ullamcorper eros vitae, commodo neque. Fusce dapibus pharetra sagittis. Nulla quis lectus tempor, efficitur eros quis, cursus mi. Ut condimentum egestas condimentum. Quisque at sodales dui. Curabitur diam ex, dignissim a scelerisque ac, ultrices at est. Fusce dapibus egestas erat, eget aliquam dui faucibus ut. Quisque urna metus, mollis vitae orci et, placerat vestibulum elit. Nam malesuada est sed magna pellentesque, a dignissim tortor volutpat. Vivamus fringilla neque pharetra blandit molestie. Donec enim leo, pretium porttitor tortor ac, viverra cursus massa.

Maecenas placerat, ipsum in pulvinar congue, dolor nunc rhoncus purus, vitae ornare nibh leo ut erat. Nulla id posuere mauris. Suspendisse sollicitudin dolor at consectetur varius. Phasellus laoreet nisl in orci facilisis aliquam. Suspendisse non condimentum augue. Curabitur non efficitur diam. Sed posuere blandit ex quis porttitor. Donec sed interdum est. Donec auctor, est vulputate mollis pretium, elit nulla condimentum nisl, vitae porttitor lorem quam ac lacus.

Nullam vel tempor mi. Pellentesque est arcu, ultrices ac velit non, maximus laoreet lorem. Aenean pharetra, justo at tincidunt laoreet, augue enim lacinia lacus, sed aliquet leo est at est. Nulla efficitur dolor at tortor feugiat facilisis. Mauris augue dui, aliquam sit amet elit a, volutpat dictum nisl. Vivamus vel velit vitae felis finibus ultrices in et nisi. Phasellus rhoncus euismod accumsan. Vivamus posuere nibh a lacus commodo pulvinar. Morbi tristique arcu a lorem maximus sagittis. Donec vitae velit viverra, ullamcorper felis sit amet, vehicula enim. Ut sollicitudin rutrum arcu, a posuere nulla condimentum facilisis. Donec consequat elementum metus, sed aliquet augue pellentesque eu. Etiam in turpis laoreet, tristique ante vel, convallis leo. Mauris ornare interdum arcu id blandit. Duis pellentesque dui vitae justo dignissim rhoncus. Pellentesque enim orci, vestibulum id tempor a, facilisis ut urna. </p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5px auto; /* 15% from the top and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  /* Position it in the top right corner outside of the modal */
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

/* Close button on hover */
.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
