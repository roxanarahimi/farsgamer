<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">داشبورد</h3>

  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row px-3">
    <div class="col-9 p-0 m-0 border rounded "  style="min-height: 600px" v-if="true">

      <table class="table mb-0 rounded-top text-muted">
        <thead class="bg-light rounded-top">
        <tr class=" rounded-top">
          <th scope="col" class=" rounded-top">پیام های اخیر</th>

        </tr>
        </thead>
        <tbody class="rounded-top">

        </tbody>
      </table>
    </div>
    <div class="col-3">
      <div class="card h-100 border-0">
        <div class="card-body  pt-0">
          <div class="row">

            <div class="col-lg-12 mb-3">
              <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: #eeeeee; ">
                <div class="rounded" style="width: 60px; height: 60px; background-color: rgba(149,69,255,0.55)">

                </div>
                  <h2 class="fw-bold text-center">1</h2>
                  <p class="fw-bold text-center">تعداد آگهی</p>

              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: #eeeeee; ">
                <div class="rounded" style="width: 60px; height: 60px; background-color: rgba(149,69,255,0.55)">

                </div>
                  <h2 class="fw-bold text-center">300</h2>
                  <p class="fw-bold text-center">تعداد بازدید آگهی ها</p>

              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: #eeeeee; ">
                <div class="rounded" style="width: 60px; height: 60px; background-color: rgba(149,69,255,0.55)">

                </div>
                  <h2 class="fw-bold text-center">0</h2>
                  <p class="fw-bold text-center">تعداد آگهی های در حال معامله</p>

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
  name: "Dashboard"
}
</script>

<style scoped>

</style>