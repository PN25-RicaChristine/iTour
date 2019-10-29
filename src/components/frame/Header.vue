<template>
  <div>
    <b-navbar toggleable="lg" id="navbar">
      <b-navbar-brand href="#">
        <img id="logo" src="@/assets/logonamo.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button
            @click="redirect('/login')"
            type="button"
            class="btn btn-outline-light"
            id="signupbtn"
          >Log in</b-button>&nbsp;&nbsp;&nbsp;
          <b-button
            @click="redirect('/register')"
            type="button"
            class="btn btn-light"
            id="loginbtn"
          >Sign up</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
#logo {
  max-width: 50px !important;
}
#navbar {
  background-color: #0086b3;
}
#loginbtn {
  border-radius: 20px;
  color: black;
  font-weight: bold;
  font-size: 10px;
  /* border: solid white; */
}
#signupbtn {
  border-radius: 20px;
  font-weight: bold;
  font-size: 10px;
}
</style>

<script>
import ROUTER from "router";
export default {
  methods: {
    redirect(router) {
      ROUTER.push(router);
    }
  }
};
</script>