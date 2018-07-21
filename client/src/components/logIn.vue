<template>
<div class="container fluid">
  <h1 class="txt shadow-orange">Inicie Sesion en <span class="pago shadow-dark">UDOCoin Payment System</span></h1>
  <div class="login-container">
    <div id="output"></div>
    <div class="avatar"></div>
    <div class="form-box">
        <input v-model="cedula" type="text" class="txt" placeholder="cedula">
        <input v-model="password" class="txt" type="password" placeholder="contraseña">
        <button  @click='login' class="btn btn-info btn-block login txt" type="submit">Login</button> <br>
        <div class="danger-alert" v-html="error" />
    </div>
  </div>
  <h2 class="txt">No tienes una cuenta? <p class="" @click="navigateTo({name : 'register'})">Unete, que esperas!</p></h2>
</div>
</template>
<script>
/*eslint-disable*/
import AuthServices from '@/services/AuthenticationService'
export default {
  name: 'log-in',
  data () {
    return {
      cedula: null,
      password: null,
      error: null
    }
  },
  mounted: function () {
    if (this.$store.state.isUsserloggedIn)
      this.$router.push({
        name: 'Index'
      })
  },
  methods: {
    async login () {      
      try {
        const response = await AuthServices.login({
          cedula: this.cedula,
          password: this.password
        })
        this.$store.dispatch('setToken',response.data.token)
        this.$store.dispatch('setUser',response.data.user)
        this.$router.push({
          name: 'Index'
        })
      } catch (err) {
        this.error = err.response.data.error

      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.shadow-dark{
  text-shadow: 1px 1px 2px #393e46;
}
.shadow-orange{
  text-shadow: 1px 1px 2px #f96d00;
}
p{
  color: #f96d00;
}
h1{
  text-align: center;
}
h2{
  font-weight: 100;
  font-size: 1rem;
  text-align: center;
}
.txt{
  font-family: 'Ubuntu';
  color: #5c636e;
}
.pago{
  color: #f96d00;
  font-family: 'Pacifico';
  text-align: center;
}
.btn-info {
    color: #fff;
    background-color: #f96d00;
    border-color: #f96d00;
    margin-left: 0;
}
body{
  background: #f2f2f2;
}
html,body{
    position: relative;
    height: 100%;
}
.login-container{
    position: relative;
    width: 280px;
    margin: 2.5em auto;
    padding: 20px 40px 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #5c636e;
}
#output{
    position: absolute;
    width: 300px;
    top: -75px;
    left: 0;
    color: #fff;
}
#output.alert-success{
    background: rgb(25, 204, 25);
}
#output.alert-danger{
    background: rgb(228, 105, 105);
}
.login-container::before,.login-container::after{
    content: "";
    position: absolute;
    width: 100%;height: 100%;
    top: 3.5px;left: 0;
    background: #fff;
    z-index: -1;
    -webkit-transform: rotateZ(4deg);
    -moz-transform: rotateZ(4deg);
    -ms-transform: rotateZ(4deg);
    border: 1px solid #5c636e;
}
.login-container::after{
    top: 5px;
    z-index: -2;
    -webkit-transform: rotateZ(-2deg);
     -moz-transform: rotateZ(-2deg);
      -ms-transform: rotateZ(-2deg);
}
.avatar{
    width: 100px;height: 100px;
    margin: 10px auto 30px;
    border-radius: 100%;
    border: 2px solid #5c636e;
    background-size: 100px 100px;
    background:  url();
}
.form-box input{
    width: 100%;
    padding: 10px;
    text-align: center;
    height:40px;
    border: 1px solid #5c636e;
    background: #fafafa;
    transition:0.2s ease-in-out;
}
.form-box input:focus{
    outline: 0;
    background: #eee;
}
.form-box input[type="text"]{
    border-radius: 5px 5px 0 0;
    text-transform: lowercase;
}
.form-box input[type="password"]{
    border-radius: 0 0 5px 5px;
    border-top: 0;
}
.form-box button.login{
    margin-top:15px;
    padding: 10px 20px;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
}
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
</style>
