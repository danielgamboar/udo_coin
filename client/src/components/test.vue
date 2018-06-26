<template>
<div class="container fluid">
<b-form-group horizontal
                breakpoint="lg"
                label="Shipping Address"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
    <b-form-group horizontal
                  label="Street:"
                  label-class="text-sm-right"
                  label-for="nestedStreet">
      <b-form-input id="nestedStreet"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="City:"
                  label-class="text-sm-right"
                  label-for="nestedCity">
      <b-form-input id="nestedCity"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="State:"
                  label-class="text-sm-right"
                  label-for="nestedState">
      <b-form-input id="nestedState"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="Country:"
                  label-class="text-sm-right"
                  label-for="nestedCountry">
      <b-form-input id="nestedCountry"></b-form-input>
    </b-form-group>
    <b-form-group horizontal
                  label="Ship via:"
                  label-class="text-sm-right"
                  class="mb-0">
      <b-form-radio-group class="pt-2" :options="['Air', 'Courier', 'Mail']" />
    </b-form-group>
  </b-form-group>
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
