<template>
  <div class="row mt-5 pt-2" v-if="order">
    <div class="col-lg-6">
      <div class="row">
        <div class="col-2  p-0">
          <div class="card mb-2 p-0">
            <div class="card-body px-1">
              <img src="/img/sample.jpg" style="width: 100%; height: 100%" alt="">

            </div>
          </div>
          <div class="card mb-2 p-0">
            <div class="card-body px-1">
              <img src="/img/sample.jpg" style="width: 100%; height: 100%" alt="">

            </div>
          </div>
          <div class="card mb-2 p-0">
            <div class="card-body px-1">
              <img src="/img/sample.jpg" style="width: 100%; height: 100%" alt="">

            </div>
          </div>
          <div class="card pb-2 p-0">
            <div class="card-body px-1">
              <img src="/img/sample.jpg" style="width: 100%; height: 100%" alt="">

            </div>
          </div>
        </div>
        <div class="col-10   pb-2">
          <div class="card h-100">
            <div class="card-body px-1 py-5">
              <div class="bg-light" style=" position: absolute;top: 200px; right:10px;
               font-size: 25px; width: 30px;height: 30px ;border-radius: 50%">
                <i class="bi bi-chevron-right " ></i>
              </div>
              <img src="/img/sample.jpg" style="width: 100%; height: 100%" alt="">
              <div class="bg-light text-center" style=" position: absolute;top: 200px; left: 10px;
               font-size: 25px; width: 30px;height: 30px ;border-radius: 50%">
                <i class="bi bi-chevron-left" ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2"></div>
        <div class="col-10 mb-3">
          <div class="card bg-light">
            <h4 class="py-3 px-2 ">
              گزارش تخلف
            </h4>
          </div>
        </div>
      </div>



    </div>
    <div class="col-lg-6">
      <div class="card ">
      <a :href="order?.user?.user_profile" class="card-header d-flex">

        <img src="/img/sample.jpg" style="width: 60px; height: 60px; border-radius: 50%" alt="">

        <div class="pe-3">
          <p class="mb-0 mt-2">{{ order?.user?.user_name }}</p>
          <small>فروشنده احراظ هویت شده</small>
        </div>

      </a>
       <div class="card-body ps-0 d-flex w-100">
         <div class="" style="width: 60%">
           <p class="fw-bold mb-0 px-3 mt-3"> {{ order.name }}</p>
           <small class="px-3 mb-3"> اکانت فورتناین از سیزن دو</small>
         </div>
         <div style="width: 40%" class="text-start ps-3 border-primary border-start border-5 float-end">
           <small class="text-black-50 "> تومان </small><br>
           <span class="fw-bold h5 text-center mb-0 d-inline-block">{{ order.price }}</span>

         </div>
       </div>
      </div>

      <div class="text-start mt-4">


        <a @click="ChatOnline" style="cursor: pointer" class="text-primary"  >چت آنلاین</a>
        <a :href="'tel:'+order?.user?.phone" class="btn btn-outline-primary  me-4" style="height: 42px" >اطلاعات تماس</a>
        <btn-primary-shadow  class=" me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">معامله آنلاین</btn-primary-shadow>

      </div>
      <div>
        <h4 class="mt-4">مشخصات</h4>
        <table class=" w-100 ">
          <tbody>
          <tr class="border-bottom">
            <td class="border-start ">بتل پس :1تا5 مدرن وارفر 2تا4  کلدوار</td>
            <td class="pe-4">لول کوین: 85</td>
          </tr>
          <tr class=" border-bottom">
            <td class="border-start">لول کوین: 85</td>
            <td class="pe-4">لول کوین: 85</td>
          </tr>
          <tr  class="border-bottom">
            <td class="border-start">لول کوین: 85</td>
            <td class="pe-4">لول کوین: 85</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h4 class="mt-4" >توضیحات</h4>
        <p style="text-align: justify !important;">
        کانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزت فورتناین از سیزن دوکانت فورتناین از سیزن دو
        </p>
      </div>
    </div>

  </div>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" dir="ltr">
      <div class="modal-content px-4" >
        <button type="button" class="btn-close px-0 mt-5 " style="text-align: left !important" data-bs-dismiss="modal" aria-label="Close"></button>

        <br>
        <div class="modal-header ">
          <h5 class="modal-title mb-4 text-center w-100" id="staticBackdropLabel">قوانین معامله آنلاین</h5>
        </div>
        <div class="modal-body">
          <p style="text-align: justify !important;">
            کانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزن دو اکانت فورتناین از سیزن دوکانت فورتناین از سیزت فورتناین از سیزن دوکانت فورتناین از سیزن دو
          </p>
        </div>
        <div class="modal-footer py-4 text-center d-flex justify-content-center" dir="rtl">

          <div class="form-check w-100">

            <input class="ms-2" type="checkbox" id="terms" @click="termsToggle">
          <label  for="terms" @click="termsToggle">قوانین را خوانده ام و با آن موافقم</label>

          </div>
          <button disabled id="reqBtn" type="button" class="btn btn-outline-primary d-inline-block py-3" data-bs-dismiss="modal" >درخواست معامله</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientSideBar from "@/components/ClientSideBar";
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import {onMounted} from "vue";
export default {
  name: "Ad",
  components: {BtnPrimaryShadow, ClientSideBar},
  data(){
   return{
     order: {},
   }
  },
  mounted() {

    axios.get('https://server.elfiro.com/api/v1/orders/'+this.$route.params.id)
    .then((response)=>{
      this.order = response.data.data.order.record;
      console.log(this.order.user.user_name)
    }).catch((error)=>{console.log(error)});
  },
  methods: {
    ChatOnline(){
      console.log(this.order)
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      }).post('https://server.elfiro.com/api/v1/client/chat/new',{
        confirmLaw: 1,
        user_target: this.order.user.id
      })
      .then((response)=>{
        console.log(response)
        localStorage.setItem('chat_g_id',response.data.data.group.record.id)

        window.location = '/chat'
      }).catch((error)=>{
            console.log(error)})
    },
    termsToggle(){
      document.querySelector('#terms').checked
          ?
          document.querySelector('#reqBtn').removeAttribute('disabled')
          :
          document.querySelector('#reqBtn').setAttribute('disabled', 'disabled');

    }
  }

}
</script>

<style scoped>

</style>