<template>
 <div>
   <div class="row" >
<!--     <component v-show="status === 'wait_for_confirm' "  is = "deal-customer1"/>-->
     <component  v-for = "component in components" :is = "component.name"/>
   </div>
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
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";

export default {
  name: "Deal",
  components: {
    BtnPrimaryShadow, Profile,
    dealOwner1, dealOwner2, dealOwner3, dealOwner4, dealOwner5,
    dealCustomer1, dealCustomer2, dealCustomer3, dealCustomer4, dealCustomer5
  },
  setup(){
    const user= JSON.parse(localStorage.getItem('user'));
       const status = ref('none');
        const transaction= ref({});
        const components= ref([]);
        const start = () => {

          axios.create({
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': localStorage.getItem('token'),
            }
          })
              .get('https://server.elfiro.com/api/v1/client/transactions/'+ useRoute().params.id)
              .then((response) => {
                transaction.value = response.data.data.transaction;
                status.value = transaction.value.record.status;
                console.log('aa', response.data.data)
              })
              .then(()=>{

                if (user.id === transaction.value.record.seller.id){
                  // alert('seller')
                  switch (status.value) {
                    case "requested": {
                      components.value.push({name:'deal-owner1'});
                      break;
                    }
                    case "wait_for_confirm": {
                      components.value.push({name:'deal-owner1'});

                      break;

                    }
                    case "wait_for_pay": {
                      components.value.push({name:'deal-owner2'});

                      break;

                    }
                    case "wait_for_send": {
                      components.value.push({name:'deal-owner3'});

                      break;

                    }
                    case "wait_for_control": {
                      break;

                    }
                    case "wait_for_receive": {
                      components.value.push({name:'deal-owner4'});
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
                      components.value.push({name:'deal-owner5'});

                      break;

                    }
                  }
                }
                if (user.id === transaction.value.record.customer.id){
                  // alert('customer')
                  // document.onreadystatechange = () => {
                  //   if (document.readyState == "complete") {
                  //     console.log('Page completed with image and files!')
                  switch (status.value) {
                    case "requested": {
                      break;
                    }
                    case 'wait_for_confirm': {
                      components.value.push({name:'deal-customer1'});

                      break;
                    }
                    case "wait_for_pay": {
                      components.value.push({name:'deal-customer2'});
                      break;

                    }
                    case "wait_for_send": {
                      components.value.push({name:'deal-customer3'});

                      break;

                    }
                    case "wait_for_control": {

                      break;

                    }
                    case "wait_for_receive": {
                      components.value.push({name:'deal-customer4'});
                      break;

                    }
                    case "not_received": {
                      break;

                    }
                    case "completed": {
                      components.value.push({name:'deal-customer5'});

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
                // }
                // }

              })
              .catch((error) => {console.log(error) });


        }

    onMounted(()=>{


          start();



    });



    return{
      user, transaction, status,start, components
    }
  },


  methods: {
    update(params){
      // alert(this.$route.params.id)
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      }).post('https://server.elfiro.com/api/v1/client/transactions/'+this.$route.params.id, params)
      .then((response)=>{
        console.log(response)
      }).catch((error)=>console.error(error))
    }
  }
}
</script>

<style scoped>

</style>