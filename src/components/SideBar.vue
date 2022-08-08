<template>
  <div id="side_bar" class=" side_bar d-none d-lg-block" style="min-height: 100vh; position: page !important">
    <div class="card border-0 border-start rounded-0 me-5 px-3 px-xl-5 px-3 pt-4 pb-5 me-2">
      <div class="text-center">
        <img src="/img/avatar.png" style="width: 92px; height:92px;" alt="">
        <router-link to="/dashboard" v-if="user" class=" h4 fw-bolder text-primary text-center mt-2 d-block">{{ user.name }}</router-link>
        <router-link v-else to="/login" class="text-black-50 text-center mb-1 mt-3 d-block"><i class="bi bi-person"></i> ورود/ ثبت نام</router-link>
        <btn-primary-shadow>
          <i class="bi bi-plus d-inline-block" style="font-size: 20px"></i>ثبت آگهی
        </btn-primary-shadow>


      </div>
      <div class="row">
        <div class="">
          <div class=" py-2 mt-4 mb-3 d-flex  justify-content-center bg-light  text-center"
               style="border-radius: 10px; color: #7007fa">
            <i class="bi bi-grid d-inline-block mt-2 mb-1 me-2" style="font-size: 20px;"></i> <b
              class="mt-2 mb-1 d-inline-block"> دسته بندی محصولات</b>
          </div>

          <div v-for="item in categories">
            <div v-if="!showSubCategories" class="d-flex" @click="showCategoryDetails(item.id)">
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
          <div>

          </div>
        </div>

      </div>

      <hr class="text-muted">
      <div class="flex-wrap">
        <a class="text-black-50 ms-3" href="">پشتیبانی </a>
        <a class="text-black-50 ms-3" href="">قوانین </a>
        <a class="text-black-50 ms-3" href="">ارتباط باما </a>
        <a class="text-black-50 ms-3" href="">سوالات متداول </a>
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

  <div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasRight"
       aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <button id="closeBtn" type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" dir="ltr">
      <div  id="side_bar1" dir="rtl" class=" side_bar  d-lg-none" style="min-height: 100vh; position: page !important">
        <div class="card border-0  me-5 px-3 px-xl-5 px-3 pt-4 pb-5 me-2">
          <div class="text-center">
            <img src="/img/avatar.png" style="width: 92px; height:92px;" alt="">
            <router-link to="/dashboard" v-if="user" class=" h4 fw-bolder text-primary text-center mt-2 d-block">{{ user.name }}</router-link>
            <router-link v-else to="/login" class="text-black-50 text-center mb-1 mt-3 d-block"><i class="bi bi-person"></i> ورود/ ثبت نام</router-link>
            <btn-primary-shadow>
              <i class="bi bi-plus d-inline-block" style="font-size: 20px"></i>ثبت آگهی
            </btn-primary-shadow>


          </div>
          <div class="row">
            <div class="">
              <div class=" py-2 mt-4 mb-3 d-flex  justify-content-center bg-light  text-center"
                   style="border-radius: 10px; color: #7007fa">
                <i class="bi bi-grid d-inline-block mt-2 mb-1 me-2" style="font-size: 20px;"></i> <b
                  class="mt-2 mb-1 d-inline-block"> دسته بندی محصولات</b>
              </div>

              <div v-for="item in categories">
                <div v-if="!showSubCategories" class="d-flex" @click="showCategoryDetails(item.id)">
                  <img style="width: 40px; height: 40px" :src="item.logo" alt="">
                  <p class="mb-0 mt-2 cursor">{{ item.title }}</p>
                </div>
                <div class="sub_category d-none" :id="'sub_cat__' + item.id">

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
              <div>

              </div>
            </div>

          </div>

          <hr class="text-muted">
          <div class="flex-wrap">
            <a class="text-black-50 ms-3" href="">پشتیبانی </a>
            <a class="text-black-50 ms-3" href="">قوانین </a>
            <a class="text-black-50 ms-3" href="">ارتباط باما </a>
            <a class="text-black-50 ms-3" href="">سوالات متداول </a>
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

    </div>
  </div>
</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import SideBarSubCategory from "@/components/SideBarSubCategory";

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
          }).catch((error) => {
        console.log(error)
      });
    },

    showCategoryDetails(id) {

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