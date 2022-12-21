<template>
  <div class="row  justify-content-center ">
    <div class="card col-xl-8 col-xxl-6">
      <div class="card-body">
        <!--        // Level 1-->
        <form action="" style="margin-top: 100px; margin-bottom: 200px">
          <div class="row justify-content-center ">
            <div class="col-lg-10 col-xxl-8 mb-4">
              <div class="bg-light text-primary rounded p-2"> آگهی شما <i class="mx-2 bi bi-chevron-left"></i> <b
                  id="breadcrumb"></b></div>
            </div>
            <div v-if="level < 3" class="col-lg-10 col-xxl-8 mb-4">
              <label>انتخاب دسته بندی</label>
              <select @change="selectCategory" id="categories" class="form-select">
                <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.title }}</option>
              </select>
            </div>
            <!--            <div v-if="level == 2" class="col-lg-8 mb-4">-->
            <!--              <label for="subcategory">انتخاب محصول</label>-->
            <!--              <select @change="selectSubCategory" id="subcategory" class="form-select">-->
            <!--                <option v-for="item in subCategories" :key="item.id" :value="item.id">{{ item.title }}</option>-->
            <!--              </select>-->
            <!--            </div>-->
          </div>
          <div v-if="level == 2" class="row justify-content-center ">
            <!--            <div class="col-lg-8 mb-4 text-center">-->
            <!--              <label for="item">شرکت سازنده</label>-->
            <!--              <select @change="selectCategory" id="categori545s" class="form-select">-->
            <!--                <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.title }}</option>-->
            <!--              </select>-->
            <!--            </div>-->
            <div class="col-lg-10 col-xxl-8 mb-4 text-center">
              <label for="name">نام اکانت</label>
              <input type="text" id="name" class="form-control">
            </div>
            <div class="col-lg-10 col-xxl-8 mb-4 text-center">
              <dropzone :img="img"/>
              <dropzone-multi :imgs="imgs"/>
            </div>
            <div class="col-lg-10 col-xxl-8 mb-4 text-center">
              <label for="content">توضیحات</label>
              <textarea class="form-control" id="content" cols="30" rows="6"></textarea>
            </div>
            <div class="col-lg-10 col-xxl-8 mb-4 text-center">
              <label for="price">قیمت</label>
              <input type="text" id="price" class="form-control">
            </div>
            <div class="col-lg-10 col-xxl-8 mb-4 text-center d-flex">
              <input type="checkbox" id="terms" class="form-check ms-2" required>
              <label for="terms">قوانین را مطاعه کردم و با آنها موافقم</label>
            </div>
          </div>
          <div class=" text-center mt-5">

            <btn-primary-shadow v-if="level < 2" @click.prevent="goToLevel(this.level)">ادامه</btn-primary-shadow>
            <btn-primary-shadow v-if="level == 2" @click.prevent="submit">ثبت</btn-primary-shadow>
          </div>
        </form>


      </div>
    </div>
  </div>
</template>

<script>
import BtnPrimaryShadow from "@/components/BtnPrimaryShadow";
import Dropzone from "@/components/dropZone";
import DropzoneMulti from "@/components/dropZoneMulti";
import {toArray} from "core-js/internals/async-iterator-iteration";
import dropZone from "@/components/dropZone";
import dropZoneMulti from "@/components/dropZoneMulti";

export default {
  name: "CreateAd",
  components: {Dropzone,DropzoneMulti, BtnPrimaryShadow},
  data() {
    return {
      categories: [],
      subCategories: [],
      subCategory: {},
      level: 1,
      img: null,
      imgs: []
         }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      console.log('token', localStorage.getItem('token'));

      let token = localStorage.getItem('token').replace('Bearer ', '')
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/orders/details')
          .then((response) => {
            this.categories = response.data.data.details.categories.digital;
            console.log('aa', this.categories)
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

    },
       getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          console.log(reader.result);
        }
        reader.onerror = function (error) {
          console.log('Error: ', error);
        }
      },
    submit() {
      console.log(this.imgs)
      this.img = document.querySelector('#dzFile').files[0]
      this.imgs = JSON.parse(localStorage.getItem('images'))
      let gallery = [];
      let gallery_codes = [];
      document.querySelectorAll('input[name=gallery]').forEach((el)=>{
        gallery_codes.push(el.getAttribute('value'))
      });
      console.log('gal',gallery_codes)
      let i = 0;
      gallery_codes.forEach((code)=>{

        function dataURLtoFile(dataurl, filename) {

          var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while(n--){
            u8arr[n] = bstr.charCodeAt(n);
          }

          return new File([u8arr], filename, {type:mime});
        }
        gallery.push(dataURLtoFile(code,'gallery_image_'+i+'.jpg'))
        i++;
      })
      // console.log(document.querySelector('[name=gallery]').files[0])

      console.log('ggggggggggg',gallery)
      console.log()
      const formData = new FormData();
      formData.append("category_id", 1);
      formData.append("image", this.img);
      formData.append("name", document.querySelector('#name').value);
      formData.append("content", document.querySelector('#content').value);
      formData.append("price", document.querySelector('#price').value);
      formData.append("gallery", gallery);
      // formData.append("platforms", ['android']);
      // formData.append("parameters", []);


      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .post('https://server.elfiro.com/api/v1/client/orders',
          formData
              //     {
          //   // formData,
          //   category_id: document.querySelector('#categories').value,
          //   name: document.querySelector('#name').value,
          //   content: document.querySelector('#content').value,
          //   price: document.querySelector('#price').value,
          //   // // image: this.getBase64(document.querySelector('#dzFile')),
          //   image: formData,
          //   // // image: document.querySelector('#dzFile'),
          //   gallery: [],
          //   platforms: [],
          //   parameters: [], // id,value
          //   // // province: '',
          //   // // city: '',
          // }
          )

          .then((response) => {
            console.log(response)
          })
          .catch((error) => {  console.log(error) });
    }
  }



}

</script>

<style scoped>
label {
  width: 100%;
  text-align: start;
}

select {
  padding-right: 30px !important;
}
</style>