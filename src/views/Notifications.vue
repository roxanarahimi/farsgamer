<template>
  <h3 class="mb-5 fw-bold">اعلانات</h3>
  <div class="row px-3">
<!--    <div class="col-lg-12 text-center px-1 "  style="height: 80px; overflow-x: auto"  >-->
<!--          <div style=" width: 490px"  >-->
<!--          <button style="min-width: 140px;" class="status px-4 py-2 btn btn-active ms-1 mb-2 mb-lg-0" @click="dealsByType('all')" id="all"> همه معاملات</button>-->
<!--          <button style="min-width: 140px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0" @click="dealsByType('buy')" id="buy">خرید</button>-->
<!--          <button style="min-width: 140px;" class="status px-4 py-2 btn text-muted ms-1 mb-2 mb-lg-0" @click="dealsByType('sell')" id="sell">فروش</button>-->
<!--         </div>-->
<!--      </div>-->
    <hr class="text-muted  mt-2">
    <div class="col-12 " v-if="true">
      <div class="mx-auto row  py-5 pt-2 ">

        <div v-for="item in transactions" class="card p-0 mb-3">
          <div class="card-header d-flex justify-content-between d-lg-block">
            <div class="row">
              <div class="d-flex justify-content-between col-lg-5">
                <p class="mb-0 mt-2 ms-lg-5">تاریخ:{{ item.date}}</p>
                <p class="mb-0 mt-2 me-lg-5">شناسه معامله: {{ item.code }}</p>
              </div>
              <div class="d-flex justify-content-between justify-content-lg-endcol-lg-6">
                <p class="mb-0 mt-2 ms-2"> وضعیت معامله: {{ item.status_label }}</p>
                <span class="btn btn-success py-0 text-light">معامله خرید</span>
              </div>
            </div>
          </div>
          <div class="card-body ">



           <div class="row px-3">
             <div class="rounded col-5 col-lg-2 ms-3 px-0 py-4" style="padding-top: 20px; background-color: #eeeeee;">
             <img :src="item.order.image" class="w-100">
           </div>

             <div class="col-7 col-lg-10 row">
               <h4 class="col-lg-7 mt-5" >{{ item.order.name }}</h4>
               <h6 class="col-lg-5  my-3 my-lg-5 pt-2 text-muted float-end " >نام فروشنده :
                 <span class="text-primary">{{  item.seller.name }}</span></h6>
             </div>
             <div class="col-12">
               <router-link :to="'/deal/'+ item.id" class="text-primary h6 w-100 text-start"> مشاهده معامله <i class="bi bi-chevron-left"></i></router-link>
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
  name: "Dealings",
  data(){
    return{
      transactions: {}
    }
  },
  mounted() {
    this.getData();
  },
  methods:{
    getData(){
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/notifications')
          .then((response) => {
            this.transactions = response.data.data.records;
            console.log('aa', this.transactions)
          }).catch((error) => {console.log(error) });
    },
    dealsByType(type){

      this.getData();
      // this.transactions.filter((a)=>{
      //   a.tab = type .....??
      // })
      let el = document.querySelector('.btn-active');
      el.classList.remove('btn-active');
      el.classList.add('text-muted');
      document.querySelector('#'+type).classList.add('btn-active');
      document.querySelector('#'+type).classList.remove('text-muted');
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