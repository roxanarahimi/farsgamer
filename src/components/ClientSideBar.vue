<template>
  <div id="client_side_bar"  class="h-100 side_bar d-none d-lg-block mt-5">
    <div class="card me-5 px-3 px-xl-5 px-3 pt-4 pb-5 me-2">

      <div class="text-center">
        <img src="/img/avatar.png" style="width: 92px; height:92px;" alt="">

        <h4 class="fw-bolder text-primary text-center mt-2">roxana</h4>
        <btn-primary-shadow>
          <i class="bi bi-plus d-inline-block" style="font-size: 20px"></i>ثبت آگهی
        </btn-primary-shadow>


      </div>
      <hr class="text-muted">


      <router-link to="/dashboard" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Dashboard'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
            <i class="bi bi-bar-chart-fill px-1 "></i>
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">داشبورد</p>
          </div>

        </div>
      </router-link>
      <router-link to="/ads" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Advertisements'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
            <i class="bi bi-bar-chart-fill px-1 "></i>
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">آگهی ها</p>
          </div>

        </div>
      </router-link>
      <router-link to="/dealings" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Dealings'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
            <i class="bi bi-bar-chart-fill px-1 "></i>
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">معاملات</p>
          </div>

        </div>
      </router-link>
      <router-link to="/accounting" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Accounting'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
            <i class="bi bi-bar-chart-fill px-1 "></i>
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">حسابداری</p>
          </div>

        </div>
      </router-link>
      <router-link to="/profile" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Profile'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
            <i class="bi bi-bar-chart-fill px-1 "></i>
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">پروفایل</p>
          </div>

        </div>
      </router-link>
      <router-link to="/support" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Support'}">
        <div class="d-flex w-100 h-100 py-3 px-3 inner">
          <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
            <i class="bi bi-bar-chart-fill px-1 "></i>
          </div>
          <div>
            <p class="mb-0 px-2 text-muted">پشتیبانی</p>
          </div>

        </div>
      </router-link>

      <hr class="text-muted">
      <div class=" mx-1 rounded " style="">
        <div class="d-flex w-100 h-100 py-3 px-3">
          <div class="small text-muted">
            <i class="bi bi-box-arrow-right px-1" style="font-weight: 600; font-size: 22px"></i>
          </div>
          <div>
            <p @click="this.$parent.logOut" class="mb-0 px-2 text-muted">خروج از حساب</p>
          </div>

        </div>
      </div>

    </div>
  </div>

  <div  class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <button id="closeBtn" type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="mobile_side_bar"  class="h-100 side_bar d-flex justify-content-center">
        <div class="card w-100 border-0  ">

          <div class="text-center">
            <img src="/img/avatar.png" style="width: 92px; height:92px;" alt="">

            <h4 class="fw-bolder text-primary text-center mt-2">roxana</h4>
            <btn-primary-shadow><i class="bi bi-plus d-inline-block" style="font-size: 20px"></i>ثبت آگهی
            </btn-primary-shadow>


          </div>
          <hr class="text-muted ">


          <router-link @click="closeOffCanvas" to="/dashboard" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Dashboard'}">
            <div class="d-flex w-100 h-100 py-3 px-3 inner">
              <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
                <i class="bi bi-bar-chart-fill px-1 "></i>
              </div>
              <div>
                <p class="mb-0 px-2 text-muted">داشبورد</p>
              </div>

            </div>
          </router-link>
          <router-link @click="closeOffCanvas" to="/ads" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Advertisements'}">
            <div class="d-flex w-100 h-100 py-3 px-3 inner">
              <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
                <i class="bi bi-bar-chart-fill px-1 "></i>
              </div>
              <div>
                <p class="mb-0 px-2 text-muted">آگهی ها</p>
              </div>

            </div>
          </router-link>
          <router-link @click="closeOffCanvas" to="/dealings" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Dealings'}">
            <div class="d-flex w-100 h-100 py-3 px-3 inner">
              <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
                <i class="bi bi-bar-chart-fill px-1 "></i>
              </div>
              <div>
                <p class="mb-0 px-2 text-muted">معاملات</p>
              </div>

            </div>
          </router-link>
          <router-link @click="closeOffCanvas" to="/accounting" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Accounting'}">
            <div class="d-flex w-100 h-100 py-3 px-3 inner">
              <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
                <i class="bi bi-bar-chart-fill px-1 "></i>
              </div>
              <div>
                <p class="mb-0 px-2 text-muted">حسابداری</p>
              </div>

            </div>
          </router-link>
          <router-link @click="closeOffCanvas" to="/profile" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Profile'}">
            <div class="d-flex w-100 h-100 py-3 px-3 inner">
              <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
                <i class="bi bi-bar-chart-fill px-1 "></i>
              </div>
              <div>
                <p class="mb-0 px-2 text-muted">پروفایل</p>
              </div>

            </div>
          </router-link>
          <router-link @click="closeOffCanvas" to="/support" class=" mx-1 rounded " :class="{'sidebar-active':this.$route.name == 'Support'}">
            <div class="d-flex w-100 h-100 py-3 px-3 inner">
              <div class="small border border-2 border-secondary rounded rounded-3 text-muted icon">
                <i class="bi bi-bar-chart-fill px-1 "></i>
              </div>
              <div>
                <p class="mb-0 px-2 text-muted">پشتیبانی</p>
              </div>

            </div>
          </router-link>

          <hr class="text-muted">
          <div class=" mx-1 rounded " style="">
            <div class="d-flex w-100 h-100 py-3 px-3">
              <div class="small text-muted">
                <i class="bi bi-box-arrow-right px-1" style="font-weight: 600; font-size: 22px"></i>
              </div>
              <div>
                <p @click="this.$parent.logOut" class="mb-0 px-2 text-muted">خروج از حساب</p>
              </div>

            </div>
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