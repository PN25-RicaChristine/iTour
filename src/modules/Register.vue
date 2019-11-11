<template>
  <div>
    <form class="container">
      <div id="divSignin">
        <div class="row">
          <h1 id="RegText">Sign Up</h1>
        </div>
        <div class="row">
          <label id="username" for="inputfname">Username:</label>
          <input
            v-model="content.username"
            class="form-control"
            name="username"
            placeholder="Enter Username"
            required
          >
        </div>
        <br>
        <div class="row">
          <label id="email" for="inputEmail">Email:</label>
          <input
            required
            type="email"
            class="form-control"
            v-model="content.email"
            placeholder="Enter Email"
          >
        </div>
        <br>
        <div class="row">
          <label id="pass" for="inputPassword">Password:</label>
          <input
            required
            type="password"
            v-model="content.password"
            class="form-control"
            name="password"
            id="inputPassword4"
            placeholder="Password"
          >
          <br>
          <br>
        </div>
        <div class="row">
          <label id="conpass" for="inputConPassword">Confirm Password:</label>
          <input
            v-model="content.conpassword"
            required
            type="password"
            class="form-control"
            id="inputConPassword"
            placeholder="Confirm Password"
          >
          <span></span>
          <br>
          <br>
        </div>

        <button id="btnSubmit" type="submit" class="btn btn-primary" @click="submit">
          <h6>Register</h6>
        </button>
        <br>
        <p>Already have an account?</p>
        <router-link to="/Login">Login</router-link>
        <br>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
@import "assets/colors.scss";
h1 {
  color: $warning !important;
  font-weight: bold;
}
#username {
  color: $warning !important;
  font-weight: bold;
}
#pass {
  color: $warning !important;
  font-weight: bold;
}
#email {
  color: $warning !important;
  font-weight: bold;
}
#conpass {
  color: $warning !important;
}
p {
  color: $warning !important;
  font-weight: bold;
}
</style>

<style>
#divSignin {
  float: right;
  width: 400px;
  background: #80bfff;
  mix-blend-mode: normal;
  opacity: 0.8;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

#RegText {
  width: 400px;
  background-color: #0086b3;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
}

input {
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  width: 350px;
}
</style>

<script>
import AUTH from "services/auth";
import jquery from "jquery";
export default {
  data() {
    return {
      auth: AUTH,
      content: {
        username: "",
        email: "",
        password: "",
        conpassword: ""
      }
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      sessionStorage.setItem("Username", this.content.username),
        sessionStorage.setItem("Email", this.content.email),
        sessionStorage.setItem("Password", this.content.password);
      if (
        this.content.username == "" ||
        this.content.email == "" ||
        this.content.password == "" ||
        this.content.conpassword == ""
      ) {
        this.$swal.fire(
          "Please provide inputs",
          "Inputs are required!",
          "warning"
        );
      } else if (this.content.password != this.content.conpassword) {
        this.$swal.fire("Password Mismatch!", "Type properly!", "error");
      } else {
        AUTH.register(
          this.content.username,
          this.content.password,
          this.content.email,
          this.content.conpassword
        );
        this.$swal.fire("You are registered!", "Nice one!", "success");
      }

      let link = `http://localhost:3000/db/create/${this.content.username}/ ${
        this.content.email
      }/${this.content.password}`;
      // let link = `http://localhost:3000/db/update/${this.content.username}/ ${this.content.email}/${this.content.password}`;
      // let link = `http://localhost:3000/db/delete/${this.content.username}/ ${this.content.email}/${this.content.password}`;
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
