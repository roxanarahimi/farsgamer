<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">داشبورد</h3>

  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row px-3 flex-row-reverse">
    <div class="col-lg-3 px-0">
    <div class="card h-100 border-0 mx-0 px-0 px-lg-3">
      <div class="card-body p-0 pt-0">
        <div class="row p-0 m-0">

          <div class="col-lg-12 px-0 m-0 mb-3">
            <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: #eeeeee; ">
              <div class="rounded" style="width: 60px; height: 60px; background-color: rgba(149,69,255,0.55)">

              </div>
              <h2 class="fw-bold text-center">{{ info?.details?.orders }}</h2>
              <p class="fw-bold text-center">تعداد آگهی</p>

            </div>
          </div>
          <div class="col-lg-12 px-0 m-0 mb-3">
            <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: #eeeeee; ">
              <div class="rounded" style="width: 60px; height: 60px; background-color: rgba(149,69,255,0.55)">

              </div>
              <h2 class="fw-bold text-center">{{ info?.details?.orders_views_count }}</h2>
              <p class="fw-bold text-center">تعداد بازدید آگهی ها</p>

            </div>
          </div>
          <div class="col-lg-12 px-0 m-0 mb-3">
            <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: #eeeeee; ">
              <div class="rounded" style="width: 60px; height: 60px; background-color: rgba(149,69,255,0.55)">

              </div>
              <h2 class="fw-bold text-center">{{  info?.details?.orders_has_transaction }}</h2>
              <p class="fw-bold text-center">تعداد آگهی های در حال معامله</p>

            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

    <div class="col-lg-9 p-0 m-0 border rounded "  style="min-height: 600px" v-if="true">

      <table class="table mb-0 rounded-top text-muted">
        <thead class="bg-light rounded-top">
        <tr class=" rounded-top">
          <th  class=" rounded-top">پیام های اخیر</th>

        </tr>
        </thead>
        <tbody class="rounded-top">

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data(){
    return{
      user: JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token'),
      info: {}
    }
  },
  mounted() {
    // console.log(localStorage)
    // localStorage.setItem('token' , '2|bTD2TOfLmLjFZfG2ESsm5TlofIJgmYsMiuNETEQO');
    // console.log(localStorage.getItem('token'))
    // if (!localStorage.getItem('token')){
    //   localStorage.removeItem('user');
    //   this.$router.push({name: 'Login'})
    // }
    this.getdata()
  }
  ,
  methods:{
    getdata(){
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/dashboard')
          .then((response) => {
            this.info = response.data.data;
            console.log(response);

          })
      .catch((error)=>{
        console.log(error);
      })
    }
}
}
</script>

<style scoped>

</style>