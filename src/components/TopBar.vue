<template>
  <div  id="topBar" class="row bg-white justify-content-between">

    <router-link to="/" class="cursor col-3 col-xl-2 px-xl-3 mb-3 mb-lg-0 float-end">
      <img src="/img/logo.png" class="img-fluid ps-lg-5 me-2 me-lg-5" alt="">
    </router-link>
    <div class="col-9 col-lg-3 px-4 px-lg-3 mb-3 mb-lg-0  d-none d-lg-block">

      <input type="text" class="form-control" id="search" placeholder="جستوجو در همه اکانت ها">
    </div>
    <div class="col-9 col-lg-6 px-4 px-lg-3 d-flex justify-content-start flex-row-reverse" style="font-size: 22px">
      <span class="my-2 px-2 px-5   border-end me-1 me-lg-4 float-start">{{  user?.phone }}</span>
      <div>
      <span class="my-2 mx-1 px-2 text-primary  cursor position-relative"
            style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
               <img src="/iconsax/Svg/All/linear/bookmark-2.svg" class="text-primary" width="20" alt="">

         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle"
               style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
       <router-link to="/chat" class="my-2 mx-1 px-2 text-primary cursor position-relative d-none d-lg-inline-block"
                           style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
         <img src="/iconsax/Svg/All/linear/message-2.svg" class="text-primary" width="20" alt="">

       </router-link>
       <span class="my-2 mx-1 px-2 text-primary cursor position-relative"
             style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
<img src="/iconsax/Svg/All/linear/notification-bing.svg" class="text-primary" width="20" alt="">

         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle" style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
       <span @click="ddToggle" class="my-2 mx-1 px-2 ms-5 text-primary cursor position-relative d-none d-lg-inline-block"
             style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
         <img src="/iconsax/Svg/All/linear/user.svg" class="text-primary" width="20" alt="">
       </span>
      </div>
    </div>
<!--    <hr class="text-muted  mx-3 mx-lg-5 mb-0">-->

  </div>
  <div v-show="show" class="p-3 "
       style="width: 280px;  box-shadow: 0 1px 1px 1px darkgray; position: absolute; top:69px; z-index: 1000;
        left: 80px ; background-color: white">
    <div class="pt-1 d-flex">
      <img class="rounded rounded-circle" :src="user?.profile_image" style="width: 65px; height:65px;" alt="">
     <div>
       <p class="fw-bold mt-3 mx-2">سلام
       <span class="text-primary">{{ user.name }}</span>
       </p>
       <p class="fw-lighter mt-3"> خوش آمدی</p>
     </div>
    </div>
    <hr>
    <div class="pt-1 pb-1"><p>مشاهده پروفایل</p></div>
    <div class="pt-1 pb-1"><p>احرااز هویت</p></div>
    <div class="pt-1 pb-1"><p>آگهی های من</p></div>
    <hr>
    <div class=" d-flex">
      <img  src="/iconsax/Svg/All/linear/logout.svg" class="text-primary ms-2" style="margin-top: -15px" width="20" alt="">
      <p>خروج</p>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/ClientSideBar";
export default {
  name: "TopBar",
  components: {SideBar},
  data(){
    return{
      user: JSON.parse(localStorage.getItem('user')),
      show: false
    }

  },  mounted(){
console.log(this.user)
  },
  methods:{
    ddToggle(){
      this.show = !this.show
    }
  }

}
</script>

<style >
.cursor
{
  cursor: pointer;
}
#topBar{
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  padding-top: 10px;

  box-shadow: 0 4px 2px -2px darkgray;

}
/*path{*/
/*  stroke: #7007FA !important;*/
/*}*/
</style>