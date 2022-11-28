<template>
  <div class="row" id="dealFrame">
    <component is="dealOwner5" class="dealLevel"></component>
  </div>
</template>

<script>
import Profile from "@/views/Profile";
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import dealOwner1 from "@/views/DealOwner1";
import dealOwner2 from "@/views/DealOwner2";
import dealOwner3 from "@/views/DealOwner3";
import dealOwner4 from "@/views/DealOwner4";
import dealOwner5 from "@/views/DealOwner5";
import dealCustomer1 from "@/views/DealCustomer1";
import dealCustomer2 from "@/views/DealCustomer2";
import dealCustomer3 from "@/views/DealCustomer3";
import dealCustomer4 from "@/views/DealCustomer4";
import dealCustomer5 from "@/views/DealCustomer5";

export default {
  name: "Deal",
  components: {
    BtnPrimaryShadow, Profile,
    dealOwner1, dealOwner2, dealOwner3, dealOwner4, dealOwner5,
    dealCustomer1, dealCustomer2, dealCustomer3, dealCustomer4, dealCustomer5
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      status: '',
      transaction: {}
    }
  },
  mounted() {
    // alert(this.$route.params.id)
    axios.create({
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }
    })
        .get('https://server.elfiro.com/api/v1/client/transactions/'+ this.$route.params.id)
        .then((response) => {
          this.transaction = response.data.data;
          console.log('aa', this.transaction.transaction.record.seller.id)
          if (this.user.id === this.transaction.transaction.record.seller.id){
            // alert('seller')
            switch (this.status) {
              case "requested": {
                break;
              }
              case "wait_for_confirm": {

                break;

              }
              case "wait_for_pay": {
                break;

              }
              case "wait_for_send": {
                break;

              }
              case "wait_for_control": {
                break;

              }
              case "wait_for_receive": {
                break;

              }
              case "not_received": {
                break;

              }
              case "completed": {
                break;

              }
              case "returned": {
                break;

              }
              case "canceled": {
                break;

              }
              case "success": {
                break;

              }
            }
          }
          if (this.user.id === this.transaction.transaction.record.customer.id){
            // alert('customer')
            switch (this.status) {
              case "requested": {
                break;
              }
              case "wait_for_confirm": {

                break;
              }
              case "wait_for_pay": {

                break;

              }
              case "wait_for_send": {
                break;

              }
              case "wait_for_control": {
                break;

              }
              case "wait_for_receive": {
                break;

              }
              case "not_received": {
                break;

              }
              case "completed": {
                break;

              }
              case "returned": {
                break;

              }
              case "canceled": {
                break;

              }
              case "success": {
                break;

              }
            }

          }
        }).catch((error) => {console.log(error) });





  }
}
</script>

<style scoped>

</style>