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
<!-- 
    <div id="home">
      <div class="row">
        <div class="col">1</div>
        <div class="col">
     
        </div>
      </div>
    </div> -->
 
</template>

<style>
#home {
  text-align: center;
  width: 100%;
}



#logo {
  max-width: 50px !important;
}
#navbar {
  background-color:  #0086B3;
  height: 70px;
}
#loginbtn {
  border-radius: 25px;
  border: 3px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #0086B3;
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