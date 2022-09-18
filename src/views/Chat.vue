<template>
  <div class="border-bottom pt-3">
    <h6 class="text-primary my-3 w-100 text-center ">چت فارس گیمر</h6>
  </div>
  <div class="chat row p-5 pt-0 " style="">

    <div class="d-flex justify-content-center">
      <div class="col-4 mt-3 p-3 bg-light border border-primary rounded mb-3"
           style="background-color: lightgrey !important">
        <p>قوانین چت</p>
        <p>1.</p>
        <p>2.</p>
        <p>3.</p>
        <p>4.</p>
      </div>
    </div>
    <hr class="border-primary my-5">
    <div class="w-100">
      <div class="myMsg py-1">
        <p class="m-3 mx-4">salam aldfr f rf tr ft rtg fr</p>
      </div>
    </div>
    <div class="w-100">
      <div class="theirMsg">
        <p class="m-3 mx-4">werft tgy uj y76 hgt 6yh u7j iu kj u7jhyb trt tgy uj y76 hgt 6yh u7j iu kj u7jhyb trt tgy uj
          y76
          hgt 6yh u7j iu kj u7jhyb trt tgy uj y76 hgt 6yh u7j iu kj u7jhyb trt tgy uj y76 hgt 6yh u7j iu kj u7jhyb trt
          tgy uj y76 hgt 6yh u7j iu kj u7jhyb trt tgy uj y76 hgt 6yh u7j iu kj u7jhyb trt tgy uj y76 hgt 6yh u7j iu kj
          u7jhyb trg th yy 6hu6 t</p>
      </div>
    </div>
    <div class="w-100">
      <div class="myMsg py-1">
        <p class="m-3 mx-4">salam aldfr f rf tr ft rtg fr</p>
      </div>
    </div>
    <div class="w-100">
      <div class="myMsg py-1">
        <p class="m-3 mx-4">salam aldfr f rf tr ft rtg fr</p>
      </div>
    </div>
    <div class="w-100">
      <div class="theirMsg py-1">
        <p class="m-3 mx-4">salam aldfr f rf tr ft rtg fr</p>
      </div>
    </div>
    <div class="w-100">
      <div class="myMsg py-1">
        <p class="m-3 mx-4">salam aldfr f rf tr ft rtg fr</p>
      </div>
    </div>
  </div>
  <div class="border-top d-flex " style="background-color: whitesmoke; ">
    <span style="width: 50px; font-size: 30px;margin-top: 25px; text-align: left"><i
        class="bi bi-send text-primary"></i></span>
    <input type="text" class="form-control bg-white  m-3" style="width: calc(100% - 100px)">
    <span style="width: 50px; font-size: 30px;margin-top: 25px; text-align: right"><i
        class="bi bi-paperclip text-primary"></i></span>
  </div>
</template>

<script>
export default {
  name: "Chat"
}
</script>

<style scoped>
.myMsg {
  background-color: white;
  border-radius: 30px 0 30px 30px;
  max-width: 300px;
  margin-bottom: 10px;
}

.theirMsg {
  background-color: lightgrey;
  border-radius: 0 30px 30px 30px;
  max-width: 300px;
  float: left !important;
  margin-bottom: 10px;

}

.chat {
  background-color: whitesmoke;
  height: calc(100vh - 240px);
  overflow-y: scroll;
  margin-right: 1px;
  margin-left: 1px
}

@media (max-width: 760px) {
  .chat {
    height: calc(100vh - 300px);
  }
}
</style>