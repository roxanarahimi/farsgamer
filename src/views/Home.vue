<template>
  <div class="home">
    <div class="row">
      <p></p>
      <div v-for="item in data" class="col-1 mb-3">
        <img :src="item.logo" style="width: 100%; height: auto" :title="item.title">
      </div>
    </div>
    <div class="row">
      <div v-for="item in orders" :key="item" class="mb-3 col-12 col-lg-6 col-xl-4 col-xxl-3">
        <div class="card ">
          <div class="card-body p-2">
            <img :src="item.image" class="w-100 rounded" alt="">

            <p class="fw-bold text-center py-2 px-4">اکانت فورتنایت از سیزن دو اکانت فورتنایت از سیزن دو </p>
            <div class="d-flex justify-content-between">
              <di></di>
              <di>{{ item.price }}</di>
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