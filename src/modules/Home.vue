<template>
  <div id="home">
    <div class="row">
      <div class="col-sm">
        <h1 id="hometext">&nbsp;&nbsp;&nbsp;&nbsp;DREAM,</h1>
        <h1 id="hometext">&nbsp;DISCOVER,</h1>
        <h1 id="hometext">EXPERINCE!</h1>
      </div>
      <div class="col-sm">
        <img id="image1" src="@/assets/image4.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image2" src="@/assets/image2.jpg" />
        <!-- <img id="image" src="@/assets/image3.jpg" />
          <img id="image" src="@/assets/image4.jpg" />
          <img id="image" src="@/assets/image5.jpg" />
        <img id="image" src="@/assets/image6.jpg" />-->
      </div>
    </div>
  </div>
</template>

<style scoped>
#hometext {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  font-weight: bold !important;
  font-size: 80px !important;
  margin-left: 200px !important;
}
#home {
  margin-top: 90px !important;
}
#image1 {
  width: 400px !important;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}
#image2 {
  width: 250px !important;
    margin-top: 100px !important;
  -ms-transform: rotate(20deg); /* IE 9 */
  -webkit-transform: rotate(20deg); /* Safari 3-8 */
  transform: rotate(20deg);
}
</style>