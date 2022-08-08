<template>
<div id="bottomBar" class="d-lg-none">
  <router-link to="" class="bottom-bar-btn">
    <i class="bi bi-card-text"></i>
    <p class="btm-btn-title d-block text-black-50 text-center">آگهی</p>
  </router-link>
 <router-link to="" class="bottom-bar-btn">
    <i class="bi bi-grid"></i>
    <p class="btm-btn-title d-block text-black-50 text-center">دسته بندی</p>
  </router-link>
 <router-link to="/ad+" class="bottom-bar-btn">
    <i class="bi bi-plus-square"></i>
    <p class="btm-btn-title d-block text-black-50 text-center">ثبت آگهی</p>
  </router-link>
 <router-link to="" class="bottom-bar-btn">
    <i class="bi bi-chat-dots"></i>
    <p class="btm-btn-title d-block text-black-50 text-center">چت</p>
  </router-link>
 <router-link to="/dashboard" class="bottom-bar-btn">
    <i class="bi bi-person"></i>
    <p class="btm-btn-title d-block text-black-50 text-center">پروفایل</p>
  </router-link>

</div>
</template>

<script>
import Profile from "@/views/Profile";
export default {
  name: "BottomBar",
  components: {Profile}
}
</script>

<style scoped>

#bottomBar{
  box-shadow: 0px 0 5px rgba(0, 0, 0, 0.8);

  height: 70px;
  padding-top: 5px;
  position: fixed;
  z-index: 1000;
  background-color: whitesmoke;
  bottom: 0;
  right: 0;
  width: 100%;
  color: rgba(0, 0, 0, 0.5);
display: flex;
}
.bottom-bar-btn{
  display: block;
  width: 20% !important;
  height: 100% !important;
  text-align: center !important;
  font-size: 25px;
  line-height: 50px;

}
.btm-btn-title{
  margin-top: -25px; font-size: 14px
}
</style>