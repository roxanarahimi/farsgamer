<template>
  <div class="home">
    <div class="row">
      <p></p>
      <div v-for="item in data" class="col-1 mb-3">
        <img :src="item.logo" style="width: 100%; height: auto" :title="item.title">
      </div>
    </div>
    <div class="row">
      <div v-for="product in 14" :key="product" class="mb-3 col-12 col-lg-6 col-xl-4 col-xxl-3">
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
</template>

<script>
export default{
  data(){
    return{

     data: []
    }
  },
  mounted() {

    this.getData();
  }
  ,
  methods:{
    getData(){
      axios.get('https://server.elfiro.com/api/v1/home/categories')
      .then((response)=>{
        this.data = response.data.data.most_used_categories.record;
        console.log(this.data)
      })
    }
  }
}

</script>
<style>


</style>