<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">حسابداری</h3>
  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row flex-row-reverse px-3">
    <div class=" col-xxl-3 p-0 m-0 px-xxl-3 mb-3">
    <div class="card h-100">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12 mb-3">
            <div class="credit-card mx-auto text-light">

              <p class="small p-2">
                موجودی کیف پول
              </p>
              <h3 class="text-center mt-4">
                3,000,000 تومان
              </h3>
            </div>

          </div>
          <div class="col-lg-12 mb-3">
            <p>قابل برداشت</p>
            <div class=" mx-auto rounded " style="overflow: hidden; background-color: #eeeeee; ">
              <div class="d-flex w-100 h-100 py-3 px-3 " style="border-left:8px solid #00da34;  ">
                <p class="mb-0 w-100 text-center fw-lighter"> <span class="fw-bold h3">1,500,000</span> تومان</p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mb-3">
            <p>در حال معامله</p>
            <div class=" mx-auto rounded " style="overflow: hidden; background-color: #eeeeee;  ">
              <div class="d-flex w-100 h-100 py-3 px-3 " style="border-left:8px solid #ffbf00;  ">
                <p class="mb-0 w-100 text-center fw-lighter"> <span class="fw-bold h3">1,500,000</span> تومان</p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 mb-3">
            <btn-primary-shadow class="w-100 d-none d-lg-block" >
              برداشت وجه
            </btn-primary-shadow>
          </div>

          <div class="col-lg-12 mb-3 d-flex">
            <input type="text" class="rounded-0 rounded-end px-2" style="width: calc(100% - 120px)" placeholder="مبلغ به تومان">
            <btn-primary-shadow class="h-100"  style="width: 135px !important; margin-right: -5px; font-size: 14px">
              شارژ کیف پول
            </btn-primary-shadow>
          </div>


        </div>
      </div>
    </div>
  </div>

    <div class=" col-xxl-9 p-0 m-0 border rounded  mb-3 d-none d-lg-block"  style="min-height: 600px" v-if="true">
      <table class="table mb-0 rounded-top text-muted">
        <thead class="bg-light rounded-top">
        <tr class=" rounded-top">
          <th scope="col" class=" rounded-top">تاریخ</th>
          <th scope="col">وضعیت</th>
          <th scope="col">کد پیگیری</th>
          <th class=" rounded-top" scope="col">مبلغ</th>
        </tr>
        </thead>
        <tbody class="rounded-top">
        <tr>
          <td scope="row">1401-04-03</td>
          <td class="text-primary">برداشت وجه</td>
          <td>123456789</td>
          <td>154000 تومان</td>
        </tr>
       <tr>
          <td scope="row">1401-04-03</td>
          <td class="text-success">واریز وجه</td>
          <td>123456789</td>
          <td>154000 تومان</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-lg-9 p-0 m-0 border-lg rounded  mb-3 d-lg-none"  style="min-height: 600px" v-if="true">
      <div v-for="item in 3" :key="item" class="card mb-3 " >
        <div class="card-header">

          <div class="d-flex justify-content-between py-2">
            <small>تاریخ: 03-02-1401</small>
            <small>ش پیگیری: 12345678</small>

          </div>
        </div>
        <div class="card-body px-0">
          <div class="d-flex justify-content-between px-3">
            <small>وضعیت</small>
            <small class="text-primary">برداشت وجه</small>
          </div>
          <hr>
          <div class="d-flex justify-content-between px-3">
            <p class="h5">مبلغ</p>
            <p class="text-primary h5">100,000 تومان</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
export default {
  name: "Accounting",
  components: {BtnPrimaryShadow}
}
</script>

<style scoped>

.credit-card{
  height: 165px;
  width: 100%;
  border-radius: 8px;
  background-image: conic-gradient(from 30deg, #7007FA 10%, #9d56ff 120%, #7007FA 100%);
}
</style>