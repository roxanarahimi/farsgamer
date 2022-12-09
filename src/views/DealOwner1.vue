<template>
  <div class="row">
    <div class="col-12">
      <ul class="pb-5 pb-lg-0 mb-5 mb-lg-0" style="margin-top: 50px; list-style:none">
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله اول</p>
          <div class="p-2"  style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ; min-height: 350px !important">
            <p class=" text-black fs-6 fw-bold mb-1 0 -3">درخواست معامله</p>
            <div class="row justify-content-center">
            <div class="col-xl-5 mt-4">
              <div class="card  border-0 bg-light" style=" !important; min-height: 50px">
                <div class="card-body text-center">

                  <img class="rounded-circle"  src="/img/avatar.png" style="width: 90px" alt="">
                  <p class="text-primary w-100 text-center fw-bold mb-0 h4 mx-0 mt-1 p">roxana</p>
                  <p class="w-100 text-center text-black-50  mt-1 p" style="font-size: 18px">درخواست معامله با شما را داده آیا این معامله را شروع میکنید؟</p>


                </div>
              </div>
              <div class="d-flex justify-content-center mt-3">
                <btn-primary-shadow class="btn btn-primary mx-2" @click.prevent = "this.$parent.update({})">شروع معامله</btn-primary-shadow>
                <button class="btn btn-outline-primary mx-2 px-4">رد درخواست</button>
              </div>
            </div>
            </div>
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
ul li p:not(.p){
  width: 500px !important;
  overflow-x: visible !important;
}
</style>