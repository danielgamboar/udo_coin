<template>
    <b-form-group class="modal-content animate" action="">
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <b-form-input type="text" placeholder="Enter Username" name="uname" required></b-form-input>

        <label for="psw"><b>Password</b></label>
        <b-form-input type="password" placeholder="Enter Password" name="psw" required></b-form-input>

        <b-button type="submit" variant="primary">Login</b-button>
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>
      <div class="container" style="background-color:#f1f1f1">
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </b-form-group>
</template>
<script>
export default {
  name: 'log-in',
  data () {
  }
}
</script>
