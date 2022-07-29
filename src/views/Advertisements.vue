<template>
  <h3 class="mb-5 fw-bold">آگهی ها</h3>
  <div class="row px-3">
    <div class="col-lg-12 text-center text-xl-start d-flex-wrap  justify-content-center d-xl-flex justify-content-lg-start  px-1 " >
      <button style="min-width: 160px;" class="status px-4 py-2 btn btn-active ms-1 mb-2 mb-lg-0"  @click="adsByStatus('all')" id="all"> همه اگهی ها</button>
      <button style="min-width: 160px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0" @click="adsByStatus('confirmed')" id="confirmed">تایید شده</button>
      <button style="min-width: 160px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0" @click="adsByStatus('pending')" id="pending">در انتظار تایید</button>
      <button style="min-width: 160px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0"  @click="adsByStatus('rejected')" id="rejected">رد شده</button>
      <button style="min-width: 160px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0"  @click="adsByStatus('sold')" id="sold">فروخته شده</button>
    </div>
    <hr class="text-muted  mt-2">
    <div class="col-12 p-0 m-0" v-if="true">


      <div class="mx-auto row  py-5 pt-2 ">


        <div v-for="product in 4" :key="product" class=" col-12 col-lg-6 col-xl-4 col-xxl-3">
          <div class="card ">
            <div class="card-body p-2">
              <img src="img/sample.jpg" class="w-100 rounded" alt="">

              <p class="fw-bold text-center py-2 px-4">اکانت فورتنایت از سیزن دو اکانت فورتنایت از سیزن دو </p>
              <div class="d-flex justify-content-between">
                <button class="btn border text-primary py-2 " style="width: 33%; font-size: 12px">ویرایش</button>
                <button class="btn border text-secondary py-2 " style="width: 33%; font-size: 12px">فروخته شد</button>
                <button class="btn border text-danger py-2 " style="width: 33%; font-size: 12px">حذف</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Advertisements",
  methods:{
    adsByStatus(status){
      //api....
      let el = document.querySelector('.btn-active');
      el.classList.remove('btn-active');
      el.classList.add('text-muted');
      document.querySelector('#'+status).classList.add('btn-active');
      document.querySelector('#'+status).classList.remove('text-muted');
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