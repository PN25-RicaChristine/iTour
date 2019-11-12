<template>
  <div id="home">
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
            id="loginbtn"
          >Log in</b-button>&nbsp;&nbsp;&nbsp;
          <b-button
            @click="redirect('/register')"
            type="button"
            class="btn btn-light"
            id="signupbtn"
          >Sign up</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#home {
  font-family: "Roboto";
}

#logo {
  max-width: 50px !important;
}
#navbar {
  background-color: #0086b3;
  height: 70px;
}
#loginbtn {
  border-radius: 25px;
  border: 3px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #0086b3;
  width: 128px;
  height: 45px;
  color: white;
  font-weight: bold;
  font-size: 12px;
  /* border: solid white; */
}
#signupbtn {
  width: 128px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 45px;
  background: white;
  border-radius: 25px;
  font-weight: bold;
  font-size: 12px;
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