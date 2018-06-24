<template>
<div class="container fluid">
  <b-navbar toggleable="md" type="dark" variant="info" fixed="top">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand id="title" @click="navigateTo({name : 'Index'})">UDOCoin<span class="pago"> Payment System</span></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <!-- Si el usuario esta logueado -->
      <b-navbar-nav v-if="!$store.state.isUsserloggedIn">
        <b-nav-item @click="navigateTo({name : 'Index'})" ><span class="txt">Home</span></b-nav-item>
        <b-nav-item @click="navigateTo({name : '#'})"><span class="txt">About Us</span></b-nav-item>
      </b-navbar-nav>
        <b-navbar-nav v-if="!$store.state.isUsserloggedIn" class="ml-auto">
        <b-nav-item @click="navigateTo({name : 'register'})"><span class="txt">Register</span></b-nav-item>
        <b-nav-item @click="navigateTo({name : 'Login'})"><span class="txt">Login</span></b-nav-item>
      </b-navbar-nav>
        <!--si el usuario esta logueado-->
        <b-navbar-nav v-if="$store.state.isUsserloggedIn">
          <b-nav-item @click="navigateTo({name : 'Index'})" ><span class="txt">Home</span></b-nav-item>
          <b-nav-item @click="navigateTo({name : '#'})"><span class="txt">About Us</span></b-nav-item>
          <b-nav-item @click="navigateTo({name : 'sendMoney'})"><span class="txt">Send Money</span></b-nav-item>
          <b-nav-item @click="navigateTo({name : 'dashboard'})"><span class="txt">Your Transactions</span></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-if="$store.state.isUsserloggedIn" class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2 txt" type="text" placeholder="Su saldo aparecera aqui"/>
          </b-nav-form>
          <b-nav-item-dropdown  right>
            <template slot="button-content">
              <em  class="txt" >{{$store.state.user.name}} {{$store.state.user.lastname}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="navigateToLogout({name: 'Index'})">logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
export default {
  name: 'navigation',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    },
    navigateToLogout (route) {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
#navbtn{
  font-family: 'Ubuntu';
}
.btn-secondary {
    color: #fff;
    background-color: #f96d00;
    border-color: #f96d00;
}
.dropdown-item:hover, .dropdown-item:focus {
    color: #f96d00;
    text-decoration: none;
    background-color: #5c636e;
}
#title{
  font-family: 'Ubuntu';
}
.pago{
  color: #f96d00;
  font-family: 'Pacifico';
}
.bg-info {
  background-color: #393e46 !important;
}
.txt{
  font-family: 'Ubuntu';
  color: #fdb44b;
}
</style>
