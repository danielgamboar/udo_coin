<template>
<div class="fluid">
  <b-navbar toggleable="md" type="dark" variant="info" fixed="top">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand id="title" href="#">UDOCoin<span class="pago"> Payment System</span></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item  href="#"><span class="txt">Home</span></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 txt" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <em class="txt">User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
export default {
  name: 'navigation'
}
</script>
<style scoped>
.btn-secondary {
    color: #fff;
    background-color: #76323f;
    border-color: #76323f;
}
.dropdown-item:hover, .dropdown-item:focus {
    color: #565656;
    text-decoration: none;
    background-color: #fff;
}
#title{
  font-family: 'Pacifico';
}
.pago{
  color: #76323f;
}
.bg-info {
  background-color: #c09f80 !important;
}
.txt{
  color: #565656;
}
</style>
