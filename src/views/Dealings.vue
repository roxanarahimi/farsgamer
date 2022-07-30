<template>
  <h3 class="mb-5 fw-bold">معاملات</h3>
  <div class="row px-3">
    <div class="col-lg-12 text-center text-xl-start d-flex-wrap  justify-content-center d-xl-flex justify-content-lg-start  px-1 " >
      <button style="min-width: 160px;" class="status px-4 py-2 btn btn-active ms-1 mb-2 mb-lg-0" @click="dealsByType('all')" id="all"> همه معاملات</button>
      <button style="min-width: 160px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0" @click="dealsByType('buy')" id="buy">خرید</button>
      <button style="min-width: 160px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0" @click="dealsByType('sell')" id="sell">فروش</button>
      </div>
    <hr class="text-muted  mt-2">
    <div class="col-12 " v-if="true">
      <div class="mx-auto row  py-5 pt-2 ">

        <div class="card p-0">
          <div class="card-header d-flex justify-content-between">

            <div class="d-flex">
              <p class="mb-0 mt-2 ms-5">تاریخ: 03-05-1401</p>
              <p class="mb-0 mt-2 me-5">شناسه معامله: 1234561401</p>


            </div>
            <div class="d-flex">
  <p class="mb-0 mt-2 ms-2"> وضعیت معامله: تایید اطلاعات</p>
  <button class="btn btn-success text-light">معامله خرید</button>
</div>
          </div>
          <div class="card-body d-flex ">

            <div class="rounded" style="padding-top: 20px; background-color: #eeeeee; width: 105px; height: 105px">
              <img src="img/sample.jpg" class="w-100">
            </div>

            <h4 class="mx-3 my-5" >اکانت فورتنایت از سیزن دو</h4>
            <h6 class="mx-3 my-5 text-muted" >نام فروشنده : <span class="text-primary">roxana</span></h6>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dealings",
  methods:{
    dealsByType(type){
      //api....
      let el = document.querySelector('.btn-active');
      el.classList.remove('btn-active');
      el.classList.add('text-muted');
      document.querySelector('#'+type).classList.add('btn-active');
      document.querySelector('#'+type).classList.remove('text-muted');
    }
  }
}
</script>

<style scoped>
.btn-active, .btn:focus, .btn:hover {
  color: #7007FA;
  background-color: rgba(112, 7, 250, 0.1);
  font-weight: bolder;
  border: 0;

}
</style>