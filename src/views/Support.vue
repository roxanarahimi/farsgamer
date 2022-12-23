<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">پشتیبانی</h3>
    <router-link to="/send/ticket" class="btn btn-outline-primary mx-2 py-3 mt-4 mb-3">
      <i class="bi bi-shield-check"></i>
      درخواست پشتیبانی
    </router-link>
  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row px-3">
    <div class="col-12 p-0 m-0" v-if="true">

      <div>

        <div class="  p-0 m-0 border rounded  mb-3 d-none d-lg-block" style="min-height: 600px" v-if="true">
          <table class="table mb-0 rounded-top text-muted">
            <thead class="bg-light rounded-top">
            <tr class=" rounded-top">
              <th scope="col" class=" rounded-top">شناسه</th>
              <th scope="col">موضوع درخواست</th>
              <th scope="col">متن درخواست</th>
              <th scope="col">وضعیت</th>
              <th scope="col">آخرین بروز رسانی</th>
              <th class=" rounded-top" scope="col"></th>
            </tr>
            </thead>
            <tbody class="rounded-top">
            <tr v-for="item in tickets">
              <td></td>
              <td class="text-primary">{{ item.subject }}</td>
              <td>{{ item.ticket_id }}</td>
              <td>{{ item.status_label }} تومان</td>
              <td>{{ item.date }} تومان</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
  data(){

   return  {
      tickets: ''
    }
  },
  mounted() {
    axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }
    })
        .get('https://server.elfiro.com/api/v1/client/tickets')
        .then((response) => {
          this.tickets = response.data.data.tickets.records;
          // this.tickets = [ { "subject": "aaaa", "priority_label": "زیاد", "status_label": "در انتظار پاسخ", "date": "دوشنبه, 08 فروردین 1401" }, { "subject": "aaaa", "priority_label": "متوسط", "status_label": "پاسخ مشتری", "date": "دوشنبه, 08 فروردین 1401" } ];
          console.log('nn', this.tickets)
        }).catch((error) => {
      console.log(error)
    });
  }
}
</script>

<style scoped>

</style>