<template>
  <div id="side_bar" class=" side_bar d-none d-lg-block" style="min-height: 100vh; position: page !important">
    <div class="card border-0 border-start rounded-0 me-5 px-3 px-xl-5 px-3 pt-4 pb-5 me-2">

      <div v-if="this.$route.name === 'Home' || this.$route.name === 'Advertisement' || this.$route.name === 'Faq' || this.$route.name === 'Contact' || this.$route.name === 'Laws'" class="row">
        <div class="text-center">
          <img :src="user.profile_image" style="border-radius:50% ;width: 92px; height:92px;" alt="">
          <router-link to="/dashboard" v-if="user" class=" h4 fw-bolder text-primary text-center mt-2 d-block">
            {{ user.name }}
          </router-link>
          <router-link v-else to="/login" class="text-black-50 text-center mb-1 mt-3 d-block">
            <i class="bi bi-person"></i> ورود/ ثبت نام
          </router-link>
          <router-link to="/ad+">
            <btn-primary-shadow>
              <i class="bi bi-plus d-inline-block" style="font-size: 20px"></i>ثبت آگهی
            </btn-primary-shadow>
          </router-link>


        </div>
        <div class=" py-2 mt-4 mb-3 d-flex  justify-content-center bg-light  text-center"
             style="border-radius: 10px; color: #7007fa">
          <i class="bi bi-grid d-inline-block mt-2 mb-1 me-2" style="font-size: 20px;"></i> <b
            class="mt-2 mb-1 d-inline-block"> دسته بندی محصولات</b>
        </div>
        <div v-for="item in categories">
          <div v-if="!showSubCategories"  class="d-flex" @click="showCategoryDetails(item.id,item.title)">
            <img style="width: 40px; height: 40px" :src="item.logo" alt="">
            <p class="mb-0 mt-2 cursor">{{ item.title }}</p>
          </div>
          <div class="sub_category d-none" :id="'sub_cat_' + item.id">

            <div class="d-flex text-black-50  cursor" @click="showAllCategories">
              <i class="bi bi-arrow-right-short d-inline-block ms-3 "
                 style=" width: 21px; overflow-x: hidden;font-size: 40px"></i> <b class="" style="line-height: 50px">
              همه دسته بندی ها</b>
            </div>

            <div class="d-flex">
              <img style="width: 40px; height: 40px" class="me-3" :src="item.logo">
              <b class="">{{ item.title }}</b>
            </div>
            <div class="mt-3 ">
              <div class="ms-5 border-bottom"
                   style="min-height: 40px; max-height: 212px; overflow-y: auto ;direction: ltr!important ; text-align: end !important">
                <div class="ps-3 ">
                  <p v-for="sub in item.sub_categories" class="">{{ sub.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.$route.name === 'Deal'" class="row">
        <div class="card mt-5 mb-2" id="dealSidebar">
          <div class="card-body">
            <div class="row">
              <div class="d-flex justify-content-between">
                <div>
                  <img id="customerAvatar" class="rounded-circle" src="" style="width: 75px; z-index: 1 !important" alt="">
                  <div class="bg-success text-light rounded-pill text-center"
                       style="margin-top: -5px; z-index: 1000000000 !important">خریدار
                  </div>
                  <p class="text-center fw-bold" id="customerName"></p>
                  <small class="text-center " style="font-size: 12px">مشاهده پروفایل</small>
                </div>
                <div>
                  <img id="sellerAvatar" class="rounded-circle" src="" style="width: 75px; z-index: 1 !important" alt="">
                  <div class="bg-primary text-light rounded-pill text-center"
                       style="margin-top: -5px; z-index: 1000000000 !important">فروشنده
                  </div>
                  <p class="text-center fw-bold" id="sellerName"></p>
                  <small class="text-center " style="font-size: 12px">مشاهده پروفایل</small>

                </div>
              </div>
              <hr>
              <div class="d-flex justify-content-start">
                <img class="mb-2" id="orderImage" style="width: 70px" src="" alt="">
                <div><p class="" id="orderName"></p></div>
              </div>
              <hr>
              <div class="col-lg-12 mb-3">
                <!--                          <p>قابل برداشت</p>-->
                <div class=" mx-auto rounded " style="overflow: hidden; background-color: #eeeeee; ">
                  <div class="d-flex w-100 h-100 py-3 px-3 " style="border-left:8px solid #7007FA;  ">
                    <p class="mb-0 w-100 text-center fw-lighter"><span class="fw-bold h5" id="orderPrice"></span> تومان</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div class="card ">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12 mb-3">
                <!--          <p>قابل برداشت</p>-->
                <p class="mb-0 w-100 text-center fw-bold text-primary h6 mt-3 ">معامله با واسطه امن</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr class="text-muted">
      <div class="flex-wrap">
        <a class="text-black-50 ms-3" href="">پشتیبانی </a>
        <router-link to="/laws" class="text-black-50 ms-3" href="">قوانین </router-link>
        <router-link to="/contact" class="text-black-50 ms-3" href="">ارتباط باما </router-link>
        <router-link to="/faq" class="text-black-50 ms-3" href="">سوالات متداول </router-link>
        <a class="text-black-50 ms-3" href="">درباره ما </a>
      </div>
      <hr class="text-muted">
      <div class="d-flex justify-content-between mb-3">
        <div v-for="item in platforms">
          <img style="width: 50px; height:50px" :src="item.logo" alt="">
        </div>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <div v-for="item in contact_links">
          <a target="_blank" :href="item.link"><img style="width: 50px; height:50px" :src="item.img" alt=""></a>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import SideBarSubCategory from "@/components/SideBarSubCategory";
import Deal from "@/views/Deal";

export default {
  components:
      {
        SideBarSubCategory,
        BtnPrimaryShadow
      },
  name: "SideBar",

  data() {
    return {

      categories: [],
      showSubCategories: false,
      platforms: [],
      contact_links: [],
      user: JSON.parse(localStorage.getItem('user')),
    }
  },
  mounted() {
    // document.addEventListener('scroll', () => {
    //   let top = document.documentElement.scrollTop;
    //   if (document.querySelector('#side_bar > .card') && top > 100) {
    //     document.querySelector('#side_bar > .card')?.setAttribute('style', 'top:10px');
    //   } else {
    //     document.querySelector('#side_bar > .card')?.removeAttribute('style');
    //   }
    // });

    this.getSideBar();

  },
  methods: {
    getSideBar() {
      // axios.get('https://server.elfiro.com/api/v1/home/categories')
      axios.get('https://server.elfiro.com/api/v1/basic/sidebar')
          .then((response) => {
            this.categories = response.data.data.sidebar.categories
            this.platforms = response.data.data.sidebar.platforms
            this.contact_links = response.data.data.sidebar.contact_links
          })
          .catch((error) => {
            console.log(error)
          });
    },

    showCategoryDetails(id,title) {

      if(document.getElementById('cat') !== null){
        document.getElementById('cat').value = title;
      }
      this.showSubCategories = true;
      document.querySelectorAll('.sub_category').forEach((sub) => {
        sub.classList.add('d-none');
      })
      document.querySelector('#sub_cat_' + id).classList.remove('d-none');
      document.querySelector('#sub_cat__' + id).classList.remove('d-none');

    },
    showAllCategories() {
      this.showSubCategories = false;
      document.querySelectorAll('.sub_category').forEach((sub) => {
        sub.classList.add('d-none');
      })
    },
    closeOffCanvas() {
      document.querySelector('#closeBtn').click();
    }
  }
}
</script>

<style scoped>
p {
  text-align: right;
  padding-right: 10px;
}

::-webkit-scrollbar {
  width: 5px;
  cursor: pointer !important;
  /*background-color: transparent;*/
  background-color: #eeeeee;
}

/* Track */
::-webkit-scrollbar-track {
  /*box-shadow: inset 0 0 5px grery;*/
  /*border-radius: 10px;*/
  cursor: pointer !important;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #7007fa;
  border-radius: 10px;
  cursor: pointer !important;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darkgray;
  cursor: pointer !important;

}

.sidebar-active {
  overflow: hidden;
  background-color: #eeeeee;
  color: #7007FA !important;

}

.sidebar-active .inner {
  border-left: 8px solid #7007FA !important;
  color: #7007FA !important;
}

.sidebar-active .inner .icon, .sidebar-active .inner div p {
  color: #7007FA !important;
  border-color: #7007FA !important;
}

.side_bar {
  width: calc(300px + 5rem);
}

.side_bar .card {
  position: page;
  width: 300px !important;
}

.pointer {
  cursor: pointer;
}

@media (max-width: 991px) {
  #page_content {
    width: 100%;
    min-height: 500px !important;

  }

  .side_bar {
    width: 100% !important;
  }
}
</style>