
<template>
  <div id="home">
    <div class="row">
      <div class="col-sm">
        <center>
          <h1 id="hometext">&nbsp;&nbsp;Dream</h1>
          <h1 id="hometext">&nbsp;Discover</h1>
          <h1 id="hometext">Experience!</h1>
          <h1 id="text">Live more with wonders.</h1>
          <br />
          <br />
          <h2>&nbsp;&nbsp;Try SpotMe free for 30 days*</h2>
          <b-button type="button" class="btn btn-outline-gray" id="free">SPOTME FREE</b-button>
        </center>
      </div>
      <div class="col-sm">
        <img id="image1" src="@/assets/image4.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img id="image2" src="@/assets/image2.jpg" />
        <img id="image" src="@/assets/image3.jpg" />
        <img id="image" src="@/assets/image4.jpg" />
        <img id="image" src="@/assets/image5.jpg" />
        <img id="image" src="@/assets/image6.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
#hometext {
  font-family: "Roboto";
  font-weight: bolder;
  font-size: 80px !important;
  margin-left: 10px !important;
}
h2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #e60000;
  margin-left: 10px !important;
}

#text {
  font-family: "Roboto";
  font-weight: normal;
  font-size: 40px !important;
  margin-left: 10px !important;
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

#free {
  border-radius: 25px;
  border: 3px solid white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #0086b3;
  width: 128px;
  height: 45px;
  color: white;
  font-weight: bold;
  font-size: 12px;
}
</style>