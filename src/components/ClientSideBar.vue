<template>
  <div id="client_side_bar"  class="h-100 side_bar d-none d-lg-block mt-5">
    <div class="card me-5 px-3 px-xl-5 px-3 pt-4 pb-5 me-2">

      <div class="text-center">
        <img :src="user?.profile_image"  class="rounded rounded-circle"  style="width: 92px; height:92px;" alt="">

        <h4 class="fw-bolder text-primary text-center mt-2">{{  user?.name }}</h4>
        <btn-primary-shadow>
          <i class="bi bi-plus d-inline-block" style="font-size: 20px"></i>ثبت آگهی
        </btn-primary-shadow>


      </div>
      <hr class="text-muted">


      <router-link to="/dashboard" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Dashboard'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small text-muted icon">
            <img src="/iconsax/Svg/All/linear/chart-square.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">داشبورد</p>
          </div>

        </div>
      </router-link>
      <router-link to="/ads" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Advertisements'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small text-muted icon">
            <img src="/iconsax/Svg/All/linear/briefcase.svg" class="text-primary" width="20" alt="">

          </div>
          <div>
            <p class="mb-0 px-2 text-muted">آگهی ها</p>
          </div>

        </div>
      </router-link>
      <router-link to="/dealings" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Dealings'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small  text-muted icon">
            <img src="/iconsax/Svg/All/linear/convert-3d-cube.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">معاملات</p>
          </div>

        </div>
      </router-link>
      <router-link to="/accounting" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Accounting'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small  text-muted icon">
            <img src="/iconsax/Svg/All/linear/wallet.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">حسابداری</p>
          </div>

        </div>
      </router-link>
      <router-link to="/profile" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Profile'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small  text-muted icon">
            <img src="/iconsax/Svg/All/linear/user-square.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">پروفایل</p>
          </div>

        </div>
      </router-link>
      <router-link to="/support" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Support'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small  text-muted icon">
            <img src="/iconsax/Svg/All/linear/messages-2.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">پشتیبانی</p>
          </div>

        </div>
      </router-link>
      <router-link to="/notifications" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Notifications'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small  text-muted icon">
            <img src="/iconsax/Svg/All/linear/notification-bing.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">اعلانات</p>
          </div>

        </div>
      </router-link>

      <hr class="text-muted">
      <div class=" mx-1 rounded " style="">
        <div class="d-flex w-100 h-100 py-3 px-3">
          <div class="small text-muted">
            <img src="/iconsax/Svg/All/linear/logout.svg" class="text-primary" width="20" alt="">
          </div>
          <div>
            <p @click="this.$parent.logOut" class="mb-0 px-2 text-muted cursor">خروج از حساب</p>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";

export default {
  components:
      {
        BtnPrimaryShadow
      },
  name: "ClientSideBar",
  data(){
    return{
      user: JSON.parse(localStorage.getItem('user')),

    }
  },
  mounted() {

    document.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop;
      if (document.querySelector('#client_side_bar > .card') && top > 100) {
        document.querySelector('#client_side_bar > .card')?.setAttribute('style', 'top:10px');
      } else {
        document.querySelector('#client_side_bar > .card')?.removeAttribute('style');
      }
    });

    },
  methods:{
    closeOffCanvas(){
      document.querySelector('#closeBtn').click();
    }
  }
}
</script>

<style scoped>
.sidebar-active{
  overflow: hidden;
  background-color: #eeeeee;
  color: #7007FA  !important;

}

.sidebar-active .inner{
  border-left: 8px solid #7007FA  !important;
  color: #7007FA  !important;
}
.sidebar-active .inner .icon, .sidebar-active .inner div p{
  color: #7007FA  !important;
  border-color: #7007FA !important;
}
</style>