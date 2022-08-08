<template>
  <div  id="topBar" class="row bg-white">

    <router-link to="/" class="cursor col-3 col-xl-2 px-xl-3 mb-3 mb-lg-0 float-end">
      <img src="img/logo.png" class="img-fluid ps-lg-5 me-2 me-lg-5" alt="">
    </router-link>
    <div class="col-9 col-lg-3 px-4 px-lg-3 mb-3 mb-lg-0  d-none d-lg-block">

      <input type="text" class="form-control" id="search" placeholder="جستوجو در همه اکانت ها">
    </div>
    <div class="col-9 col-lg-6 px-4 px-lg-3 d-flex justify-content-start flex-row-reverse" style="font-size: 22px">
      <span class="my-2 px-2 pe-1 pe-lg-4 ps-lg-4 border-end me-1 me-lg-4 float-start">09032313681</span>
      <div>
      <span class="my-2 mx-1 px-2 text-primary  cursor position-relative"
            style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i
          class="bi bi-bookmark"></i>
         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle"
               style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
       <span class="my-2 mx-1 px-2 text-primary cursor position-relative d-none d-lg-inline-block"
                           style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i
         class="bi bi-chat-dots"></i></span>
       <span class="my-2 mx-1 px-2 text-primary cursor position-relative"
             style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
          <i class="bi bi-bell"></i>

         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle"
               style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
       <span class="my-2 mx-1 px-2 text-primary cursor position-relative d-none d-lg-inline-block"
             style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i
           class="bi bi-person"></i></span>
      </div>
    </div>
<!--    <hr class="text-muted  mx-3 mx-lg-5 mb-0">-->

  </div>
</template>

<script>
import SideBar from "@/components/ClientSideBar";
export default {
  name: "TopBar",
  components: {SideBar}
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
</style>