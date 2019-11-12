<template>
  <div id="app">
    <Header></Header>
    <Sidebar
      id="side"
      v-show="$route.path === '/Dashboard' || $route.path === '/Subjects' || $route.path === '/PersonalInfo' || $route.path === '/Update'? true : false"
    ></Sidebar>
    <AppBody></AppBody>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
#side {
  margin-top: 55px;
  padding-bottom: 50px;
}
</style>
<script>
import Header from "router/frame/Header.vue";
import AppBody from "router/frame/Body.vue";
import Sidebar from "router/frame/Sidebar.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody,
    Sidebar
  }
};
</script>


