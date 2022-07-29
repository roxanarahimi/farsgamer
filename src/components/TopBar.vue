<template>
    <div class="row">
      <div class="col-6 col-lg-3 px-5">
        <input type="text" class="form-control" id="search" placeholder="جستوجوی در همه اکانت ها">
      </div>
      <div class="col-6 col-lg-9 d-flex justify-content-start flex-row-reverse" style="font-size: 22px">
       <span class="px-5 border-end me-5">09032313681</span>
        <span class="mx-1 text-primary position-relative" style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i class="bi bi-person-fill"></i></span>

        <span class="mx-1 text-primary position-relative"
              style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; ">
          <i class="bi bi-bell"></i>

         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle" style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>

        <span class="mx-1 text-primary position-relative" style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i class="bi bi-chat-dots"></i></span>
        <span class="mx-1 text-primary position-relative" style=" line-height:37px;width: 37px; height: 37px; background-color: #eeeeee; border-radius: 5px; text-align: center; "><i class="bi bi-bookmark"></i>
         <span class="position-absolute translate-middle bg-danger border border-light rounded-circle" style="top:5px;right:0; padding: 2.5px">
          <span class="visually-hidden">New alerts</span>
         </span>
        </span>
      </div>
    </div>


  <hr class="text-muted mx-5 mb-5">


</template>

<script>
export default {
  name: "TopBar"
}
</script>

<style scoped>

</style>