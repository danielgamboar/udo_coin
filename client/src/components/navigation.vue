<template>
<div class="container fluid">
  <b-navbar toggleable="md" type="dark" variant="info" fixed="top">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand id="title" @click="navigateTo({name : 'Index'})">UDOCoin<span class="pago"> Payment System</span></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item @click="navigateTo({name : 'Index'})" ><span class="txt">Home</span></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 txt" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" id="navbtn" type="submit">Search</b-button>
        </b-nav-form>
        <!--si el no esta logueado-->
        <b-nav-item-dropdown v-if="!$store.state.isUsserloggedIn" right>
          <template slot="button-content">
            <em  class="txt">User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="navigateTo({name : 'register'})"> register</b-dropdown-item>
          <b-dropdown-item @click="navigateTo({name : 'Login'})"> login</b-dropdown-item>
        </b-nav-item-dropdown>
        <!--si el usuario esta logueado-->
        <b-nav-item-dropdown v-if="$store.state.isUsserloggedIn" right>
          <template slot="button-content">
            <em  class="txt" >{{$store.state.user.name}} {{$store.state.user.lastname}}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout()">logout</b-dropdown-item>
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
  font-family: 'Pacifico';
}
.pago{
  color: #f96d00;
}
.bg-info {
  background-color: #393e46 !important;
}
.txt{
  font-family: 'Ubuntu';
  color: #fdb44b;
}
</style>
