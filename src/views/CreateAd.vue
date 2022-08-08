<template>
  <div class="row  justify-content-center ">
    <div class="card col-6">
      <div class="card-body">
        <!--        // Level 1-->
        <form action="" style="margin-top: 100px; margin-bottom: 200px">
          <div class="row justify-content-center ">
            <div class="col-8 mb-4">
              <div class="bg-light text-primary rounded p-2"> آگهی شما <i class="mx-2 bi bi-chevron-left"></i> <b
                  id="breadcrumb"></b></div>
            </div>
            <div v-if="level < 3" class="col-8 mb-4">
              <label for="item">انتخاب دسته بندی</label>
              <select @change="selectCategory" id="categories" class="form-select">
                <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.title }}</option>
              </select>
            </div>
            <div v-if="level == 2" class="col-8 mb-4">
              <label for="subcategory">انتخاب محصول</label>
              <select @change="selectSubCategory" id="subcategory" class="form-select">
                <option v-for="item in subCategories" :key="item.id" :value="item.id">{{ item.title }}</option>
              </select>
            </div>
          </div>

          <div v-if="level == 3" class="row justify-content-center ">
            <div class="col-8 mb-4 text-center">
              <label for="item">شرکت سازنده</label>
              <select @change="selectCategory" id="categori545s" class="form-select">
                <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.title }}</option>
              </select>
            </div>
            <div class="col-8 mb-4 text-center">
              <label for="item">آدرس ایمیل</label>
              <input type="text" class="form-control">
            </div>
<!--         .........................   ax-->

            <div class="col-8 mb-4 text-center">
              <label for="item">توضیحات</label>
              <textarea  class="form-control" name="" id="" cols="30" rows="6"></textarea>
            </div>
            <div class="col-8 mb-4 text-center">
              <label for="item">قیمت</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-8 mb-4 text-center d-flex">
              <input type="checkbox" class="form-check ms-2" required>
              <label for="item">قوانین را مطاعه کردم و با آنها موافقم</label>
            </div>
          </div>
          <div class=" text-center mt-5">

          <btn-primary-shadow v-if="level < 3" @click.prevent="goToLevel(this.level)">ادامه</btn-primary-shadow>
          <btn-primary-shadow v-if="level == 3" @click.prevent="submit">ثبت</btn-primary-shadow>
        </div>
        </form>


      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";

export default {
  name: "CreateAd",
  components: {BtnPrimaryShadow},
  data() {
    return {
      categories: [],
      subCategories: [],
      subCategory: {},
      level: 1,
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      axios.get('https://server.elfiro.com/api/v1/basic/sidebar')
          .then((response) => {
            this.categories = response.data.data.sidebar.categories
            console.log(this.categories)
            this.subCategories = this.categories[0].sub_categories
          }).catch((error) => {
        console.log(error)
      });

    },
    selectCategory() {
      let id = document.querySelector('#categories').value;
      this.categories.forEach((element) => {
        if (element.id == id) {
          this.subCategories = element.sub_categories;
        }
      });
      console.log('subs', this.subCategories)
    },
    selectSubCategory() {
      let id = document.querySelector('#subcategory').value;
      this.subCategories.forEach((element) => {
        if (element.id == id) {
          this.subCategory = element;
        }
      });
      console.log('subs', this.subCategories)
    },
    goToLevel(level) {
      if (level == 1) {
        let id = document.querySelector('#categories').value;
        this.categories.forEach((element) => {
          if (element.id == id) {
            let txt = document.querySelector('#breadcrumb').innerText;
            document.querySelector('#breadcrumb').innerText = txt + element.title
          }
        });
      }
      if (level == 2) {
        let id = document.querySelector('#categories').value;
        let id2 = document.querySelector('#subcategory').value;
        let txt = '';
        this.categories.forEach((element) => {
          if (element.id == id) {
            txt += element.title;
            element.sub_categories?.forEach((element2) => {
              if (element2.id == id2) {
                txt += ' - ' + element2.title;
              }
            });
          }
        });
        document.querySelector('#breadcrumb').innerText = txt;
      }
      this.level = parseInt(level) + 1;

    }


  }
}

</script>

<style scoped>
label{
  width: 100%;
  text-align: start;
}
</style>