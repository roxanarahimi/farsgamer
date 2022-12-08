<template>
  <div class="row">
    <div class="col-3">

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
          <div class="p-2"
               style="border-right:  3px dashed #7007FA; margin: -22px -25px 0 0 ; padding-bottom: 350px !important">
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
    <div class="col-9 row ">
      <div class="col-2"></div>
      <div class="col-lg-6 text-center">
        <img class="" src="/img/2.jpg" style="margin-top: 50px !important;width: 400px" alt="">
        <div class="card bg-light" style="   min-height: 50px">
          <div class="card-body text-center">
            <p class=" text-center text-primary fw-bold  mt-1">
              {{ this.$parent.transaction.record.current_status_data.message }}
            </p>
          </div>
        </div>
        <div class="card bg-light mt-3" style="   min-height: 50px">
          <div class="card-body text-center">
            <p class=" text-center text-primary fw-bold  mt-1">12:00:00</p>
          </div>
        </div>
        <p class="text-center h3  mt-3">
          <span class="text-primary" id="chargeAmount">{{ this.$parent.transaction.record.order.price }}</span>
          تومان</p>

        <div class="d-flex justify-content-center mt-3">
          <btn-primary-shadow class="btn btn-primary mx-2" @click.prevent="payOrder">پرداخت</btn-primary-shadow>
          <button class="btn btn-outline-primary mx-2 px-4">لغو معامله</button>
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
  components: {BtnPrimaryShadow, Profile},
  methods: {
    payOrder() {

      alert(document.querySelector('#chargeAmount').innerText)
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .post('https://server.elfiro.com/api/v1/client/accounting/charge', {
            price: document.querySelector('#chargeAmount').innerText,
            gateway: 'zarinpal',
            // call_back_address: 'https://farsgamer.webagent.ir/deal/'+this.$route.params.id
            call_back_address: 'http://localhost:8080/deal/' + this.$route.params.id
          })
          .then((res) => {
            window.location = res.data.data.gateway.link;
          })
          .then(() => {
            this.$parent.update({});
          })
          .catch((err) => {
            console.log(err)
          })
    }
  },


}
</script>

<style scoped>

</style>