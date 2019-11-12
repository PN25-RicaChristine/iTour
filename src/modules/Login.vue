<template>
  <div style="padding-right:200px;">
    <div id="divLogin">
      <div class="row" style="padding-left:14px;">
        <h1 id="LoginText" >Log In</h1>
      </div>
      <div class="row"  style="padding-left:10px;">
        <form class="container">
        <br>
        <center>
          <img id="logo" src="@/assets/logoKo.png">
        </center>
        <div class="col-sm-4 my-sm-5">
          <label id="username" for="loginUsername">Username:</label>
          <input
            required
            v-model="username"
            name="username"
            class="form-control"
            placeholder="Enter Username"
          >
        </div>
        <div class="col-sm-4 my-sm-5">
          <label id="pass" for="loginPassword">Password:</label>
          <input
            required
            v-model="password"
            type="password"
            name="password"
            class="form-control"
            id="loginPassword"
            placeholder="Enter Password"
          >
        </div>
        <center>
          <button id="btnLogin" class="btn btn-primary" @click="submit">
            <h6>Login</h6>
          </button>
          <br>
          <br>
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
        <br>
      </form>
      </div>
      
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
h1 {
  color: black;
}
#forgot {
  color: $primary !important;
}
#username,
h6 {
  color: black;
  font-weight: bold;
}
#pass {
  color: black;
  font-weight: bold;
}
#divLogin {
  float: right;
  width: 400px;
  background: #80bfff;
  mix-blend-mode: normal;
  opacity: 0.8;
  // border:1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  //padding-right: 5%;
  // opacity: 0.8;
}

#LoginText {
  float: right;
  width: 400px;
  background-color: #0086b3;
  text-align: center;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  font-family: "Roboto";
  font-weight: bolder;
}

// #logo {
//   width: 500px;
//   height: 100px;
// }

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
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  width: 350px;
}
</style>

<style>
body {
  background-image: url("../assets/logreg.jpg");
  /* background-image: url("https://cdn.shopify.com/s/files/1/1419/3224/products/Sumilon_Island_Oslob_Tour_package.jpg?v=1550543098"); */
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
