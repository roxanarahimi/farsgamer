<template>
  <div class="row">
    <div class="d-none d-lg-block col-lg-3">

      <ul style="margin-top: 50px ; list-style:none">
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله اول</p>
          <div class="p-2"
               style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ">
            <p class="text-black fs-6 fw-bold mb-1 0 -3">درخواست معامله</p>

          </div>
        </li>
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله دوم</p>
          <div class="p-2" style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ; ">
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
            <p class="text-black fs-6 fw-bold mb-1 ">تایید و تغییر اطلاعات</p>
          </div>
        </li>
        <li class="text-primary mb-0" style="font-size: 40px; ">
          <p class="text-black-50 fs-6 mb-4 mt-2 " style="margin-right: -31px !important">
            <i class="bi bi-circle-fill text-primary"></i>
            مرحله پنجم</p>
          <div class="p-2" style=" margin: -22px -25px 0 0 ">
            <p class="text-black fs-6 fw-bold mb-0 ">تکمیل فرایند</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-12 col-lg-9             row ">
      <div class="col-2"></div>
      <div class="col-lg-6 text-center">
        <img class="" src="/img/5.jpg" style="margin-top: 50px !important;width: 100%"  alt="">
        <div class="card bg-light" style="   min-height: 50px">
          <div class="card-body text-center">
            <p class=" text-center text-primary fw-bold  mt-1">1 روز و12 ساعت دیگر تا واریز وجه برای فروشنده</p>
          </div>
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