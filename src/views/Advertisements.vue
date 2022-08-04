<template>
  <h3 class="mb-5 fw-bold">آگهی ها</h3>
  <div class="row px-3">
    <div class="col-lg-12  px-1 " style="height: 80px; overflow-x: auto"  >

    </div>
    <hr class="text-muted  mt-2">
    <div class="col-12 p-0 m-0" v-if="true">


      <div class="mx-auto row  py-5 pt-2 ">


        <div v-for="product in 14" :key="product" class=" col-12 col-lg-6 col-xl-4 col-xxl-3">
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