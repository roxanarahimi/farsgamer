<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">حسابداری</h3>

  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row px-3">
    <div class="col-9 p-0 m-0 border rounded "  style="min-height: 600px" v-if="true">

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
    <div class="col-3">
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
              <btn-primary-shadow class="w-100" >
                برداشت وجه
              </btn-primary-shadow>
            </div>

            <div class="col-lg-12 mb-3 d-flex">
              <input type="text" placeholder="مبلغ به تومان">
              <btn-primary-shadow class="h-100" >
                واریز وجه
              </btn-primary-shadow>
            </div>


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