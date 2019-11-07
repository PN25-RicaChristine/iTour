<template>
  <div>
    <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
      <form class="container">
        <br />
        <br />
        <center>
          <img id="logo" src="@/assets/user final.png" />
        </center>
        <hr />
        <div class="row">
          <label id="username" for="loginUsername">Username:</label>
          <input
            required
            v-model="username"
            name="username"
            class="form-control"
            placeholder="Enter Username"
          />
          <br />
        </div>
        <br />
        <div class="row">
          <label id="pass" for="loginPassword">Password:</label>
          <input
            required
            v-model="password"
            type="password"
            name="password"
            class="form-control"
            id="loginPassword"
            placeholder="Enter Password"
          />
        </div>
        <br />
        <center>
          <button id="btnLogin" class="btn btn-primary" @click="submit">
            <h6>Login</h6>
          </button>
          <br />
          <br />
          <button
            class="btn btn-link"
            id="login"
            style="font-size:larger"
            type="button"
          >Forgot Password?</button>
          <p style="color:white">
            Don’t have an account?
            <a href="http://localhost:8080/#/register">Sign up here!</a>
          </p>
        </center>
        <br />
      </form>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
h1 {
  color: $warning !important;
}
#forgot {
  color: $primary !important;
}
#username,
h6 {
  color: white;
}
#pass {
  color: white;
}
#divLogin {
  float: right;
  width: 500px;
  margin-right: 150px !important;
  background-color: #828282;
  opacity: 0.8;
}
#logo {
  width: 700px;
  height: 100px;
}
#btnLogin {
  border-radius: 25px;
  border: 3px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #0086b3;
  width: 128px;
  height: 52px;
  color: white;
  font-weight: bold;
  font-size: 12px;
}
input {
  border: black;
}
</style>

<style>
body {
  background-image: url("../assets/logreg.jpg");
  background-size: cover;
}
</style>

<script>
import AUTH from "services/auth";
import ROUTER from "router";
import jquery from "jquery";
export default {
  data() {
    AUTH;
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      let user = AUTH.login(this.username, this.password);
      if (this.username == "" || this.password == "") {
        this.$swal.fire(
          "Please provide inputs",
          "Inputs are required!",
          "warning"
        );
      } else {
        this.$swal.fire(
          "Please register first!",
          "You need to register!",
          "error"
        );
        AUTH.setUser(user);
        if (user !== null) {
          this.$swal.fire("Successfully Login!", "Nice one!", "success");
          ROUTER.push("/Dashboard");
        }
      }
      let link = `http://localhost:3000/db/create/$`;
      jquery
        .ajax({
          url: link,
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          alert(response.username);
        });
    }
  }
};
</script>