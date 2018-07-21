<template>
  <div class="container">
  <h1 class="txt shadow-orange">Registrese en <span class="pago shadow-dark">UDOCoin Payment System</span></h1>
  <div class="login-container">
    <div id="output"></div>
    <div class="avatar"></div>
    <div class="form-box">
        <input type="txt" class="top-input" v-model="name" placeholder="nombre">
        <input type="txt" class="mid-input" v-model="lastname" placeholder="apellido">
        <input type="txt" class="mid-input" v-model="cedula" placeholder="cedula">
        <input v-model="email" class="mid-input" type="txt"  placeholder="email">
        <input type="password" v-model="password" class="txt" placeholder="contraseña">
        <button class="btn btn-info btn-block login txt" @click="registro" type="submit">Registrar</button>
      <br>
        <div class="danger-alert" v-html="message" />
        <br>
    </div>
  </div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      name: null,
      lastname: null,
      cedula: null,
      email: null,
      password: null,
      message: null
    }
  },
  mounted () {
    if (this.$store.state.isUsserloggedIn) {
      this.$router.push({
        name: 'Index'
      })
    }
  },
  methods: {
    async registro () {
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          lastname: this.lastname,
          cedula: this.cedula,
          email: this.email,
          password: this.password
        })
        this.message = response.data.message
        this.error = null
        this.$router.push({
          name: 'Login'
        })
      } catch (err) {
        this.message = err.response.data.message
      }
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
.top-input{
  border-radius: 5px 5px 0 0;
}
.mid-input{
  border-top: 0 !important;
}
a {
  color: #f96d00;
}
h1 {
  text-align: center;
}
h2 {
  font-weight: 100;
  font-size: 1rem;
  text-align: center;
}
.txt {
  font-family: "Ubuntu";
  color: #5c636e;
}
.pago {
  color: #f96d00;
  font-family: "Pacifico";
  text-align: center;
}
.btn-info {
  color: #fff;
  background-color: #f96d00;
  border-color: #f96d00;
  margin-left: 0;
}
body {
  background: #f2f2f2;
}
html,
body {
  position: relative;
  height: 100%;
}
.login-container {
  position: relative;
  width: 300px;
  margin: 2.5em auto;
  padding: 20px 40px 40px;
  text-align: center;
  background: #fff;
  border: 1px solid #5c636e;
}
#output {
  position: absolute;
  width: 300px;
  top: -75px;
  left: 0;
  color: #fff;
}
#output.alert-success {
  background: rgb(25, 204, 25);
}
#output.alert-danger {
  background: rgb(228, 105, 105);
}
.login-container::before,
.login-container::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 3.5px;
  left: 0;
  background: #fff;
  z-index: -1;
  -webkit-transform: rotateZ(4deg);
  -moz-transform: rotateZ(4deg);
  -ms-transform: rotateZ(4deg);
  border: 1px solid #5c636e;
}
.login-container::after {
  top: 5px;
  z-index: -2;
  -webkit-transform: rotateZ(-2deg);
  -moz-transform: rotateZ(-2deg);
  -ms-transform: rotateZ(-2deg);
}
.avatar {
  width: 100px;
  height: 100px;
  margin: 10px auto 30px;
  border-radius: 100%;
  border: 2px solid #5c636e;
  background-size: 100px 100px;
  background-image: url();
}
.form-box input {
  width: 100%;
  padding: 10px;
  text-align: center;
  height: 40px;
  border: 1px solid #5c636e;
  background: #fafafa;
  transition: 0.2s ease-in-out;
}
.form-box input:focus {
  outline: 0;
  background: #eee;
}
.form-box input[type="text"] {
  border-radius: 5px 5px 0 0;
  text-transform: lowercase;
}
.form-box input[type="password"] {
  border-radius: 0 0 5px 5px;
  border-top: 0;
}
.form-box button.login {
  margin-top: 15px;
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
