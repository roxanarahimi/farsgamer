<template>
  <div class="home">
    <p class="text-primary">بیشترین معامله</p>

    <div class="row justify-content-between">
      <div v-for="item in data" class=" col-4 col-md-3 log-g-2 col-xl-1 mb-3 text-center">
        <img class="rounded" :src="item.logo" style="width: 100%; height: auto" :title="item.title">
        <p class="text-primary text-center mb-0">{{ item.title }}</p>
        <small class="text-black-50 "> تعداد آگهی: {{ item.orders_count }}</small>

      </div>
    </div>
    <div class="row">
      <div v-for="item in orders" :key="item" class="mb-3 col-12 col-lg-6 col-xl-4 col-xxl-3">
        <div class="card ">
          <div class="card-body px-0 py-3">

            <div class="d-flex p-2">
              <img :src="item.image" style="width: 80px; height: 80px" class="mb-2 rounded-circle" alt="">

              <div class=" me-2">
                <p class="fw-bold  text-center mb-0 mt-3">{{ item.name }}</p>
                <small class="text-black-50 "> {{ item.created_at }} </small>

              </div>
            </div>
            <div class="mx-2">
              <img :src="item.category.default_image" class="w-100 rounded" alt="">

            </div>
            <p class="fw-bold text-center py-2 px-4">اکانت فورتنایت از سیزن دو اکانت فورتنایت از سیزن دو </p>
            <div class="d-flex justify-content-between">
              <div></div>
              <div class="text-start ps-3 border-primary border-start border-5">
                <small class="text-black-50 "> تومان </small>
                <p class="fw-bold h5 text-center mb-0">{{ item.price }}</p>

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
  data() {
    return {

      data: [],
      orders: []
    }
  },
  mounted() {
    this.getData();
    this.getOrders();
  }
  ,
  methods: {
    getOrders() {
      axios.get('https://server.elfiro.com/api/v1/home')
          .then((response) => {
            this.orders = response.data.data.orders.records;
            console.log(this.data)
          })
    },
    getData() {
      axios.get('https://server.elfiro.com/api/v1/home/categories')
          .then((response) => {
            this.data = response.data.data.most_used_categories.record;
            console.log(this.data)
          })
    }
  }
}

</script>
<style>


</style>