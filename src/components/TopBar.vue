<template>
  <div class="row">
    <div class="col-12 col-lg-4 px-4 px-lg-5 mb-3 mb-lg-0">
      <input type="text" class="form-control" id="search" placeholder="جستوجوی در همه اکانت ها">
    </div>
    <div class="col-12 col-lg-8 px-4 px-lg-5 d-flex justify-content-between flex-row-reverse" style="font-size: 22px">
     <div class="">


      <span class="my-2 mx-1 px-2 text-primary position-relative"
            style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i
          class="bi bi-bookmark"></i>
         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle"
               style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
       <span class="my-2 mx-1 px-2 text-primary position-relative"
                           style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i
         class="bi bi-chat-dots"></i></span>
       <span class="my-2 mx-1 px-2 text-primary position-relative"
             style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
          <i class="bi bi-bell"></i>

         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle"
               style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
       <span class="my-2 mx-1 px-2 text-primary position-relative"
             style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i
           class="bi bi-person-fill"></i></span>

       <span class="my-2 px-2 pe-2 pe-lg-5 ps-lg-5 border-end me-2 me-lg-5 float-start">09032313681</span>

     </div>
      <span class=" mx-1 text-primary d-lg-none " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
            style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i class="bi bi-list"></i></span>

    </div>
  </div>


  <hr class="text-muted  mx-3 mx-lg-5  mb-5">


</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  name: "TopBar",
  components: {SideBar}
}
</script>

<style scoped>

</style>