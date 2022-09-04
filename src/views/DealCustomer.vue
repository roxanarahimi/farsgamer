<template>
  <div class="row">
    <div class="col-3">
      <div class="card mt-5 mb-2">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12 mb-3">
              <!--          <p>قابل برداشت</p>-->
              <div class=" mx-auto rounded " style="overflow: hidden; background-color: #eeeeee; ">
                <div class="d-flex w-100 h-100 py-3 px-3 " style="border-left:8px solid #7007FA;  ">
                  <p class="mb-0 w-100 text-center fw-lighter"><span class="fw-bold h3">1,500,000</span> تومان</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="card ">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12 mb-3">
              <!--          <p>قابل برداشت</p>-->
              <p class="mb-0 w-100 text-center fw-bold text-primary h4 mt-3 ">معامله با واسطه امن</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="col-2">

      <ul style="margin-top: 50px ; list-style:none">
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله اول</p>
          <div class="p-2"  style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ; padding-bottom: 250px !important">
            <p class="text-black fs-6 fw-bold mb-1 0 -3">درخواست معامله</p>
          </div>
        </li>
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله دوم</p>
          <div class="p-2" style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ">
            <p class="text-black fs-6 fw-bold mb-1 0 -3">پرداخت</p>
          </div>
        </li>
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله سوم</p>
          <div class="p-2" style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ">
            <p class="text-black fs-6 fw-bold mb-1 0 -3">دریافت محصول</p>
          </div>
        </li>
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله چهارم</p>
          <div class="p-2" style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ">
            <p class="text-black fs-6 fw-bold mb-1 0 -3">تایید و تغییر اطلاعات</p>
          </div>
        </li>
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله پنجم</p>
          <div class="p-2" style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ">
            <p class="text-black fs-6 fw-bold mb-0 mt-3">تکمیل فرایند</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-7 row ">
      <div class="col-1"></div>
      <div class="col-lg-7">
        <div class="card  border-0 bg-light" style=" margin-top: 250px !important;  min-height: 50px">
          <div class="card-body  text-center">

            <img class="rounded-circle"  src="img/avatar.png" style="width: 90px" alt="">
            <p class="text-primary w-100 text-center fw-bold mb-0 h5 mt-1">roxana</p>
            <p class="w-100 text-center text-black-50  mt-1">درخواست معامله با شما را داده آیا این معامله را شروع میکنید؟</p>


          </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <btn-primary-shadow class="btn btn-primary mx-2">شروع معامله</btn-primary-shadow>
          <button class="btn btn-outline-primary mx-2 px-4">رد درخواست</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "@/views/Profile";
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
export default {
  name: "Deal",
  components: {BtnPrimaryShadow, Profile}
}
</script>

<style scoped>

</style>