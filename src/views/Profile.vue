<template>
  <router-link to="auth2" class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">پروفایل</h3>
    <button class="btn btn-outline-success mx-2 py-3 mb-3">
      <i class="bi bi-shield-check"></i>
      احراز هویت شده
    </button>
  </router-link>
  <hr class="text-muted mb-5 mt-2">
<!--  <i class="isax isax-square"></i>-->
  <div class="row px-3">
    <div class="col-12 p-0 m-0" v-if="true">


      <div class="mx-auto row py-5 pt-2 text-center  border rounded bg-light position-relative"
           style="width: 200px; height: 200px ">
        <img :src="user.profile_image" class="rounded mx-auto rounded-top" style="width: 200px;" alt="">
        <div class="avatar-frame rounded-bottom" style="width: 200px; height: 40px; background-color: rgba(255,255,255,0.8);
        position: absolute; bottom: 0; right: 0 ">
          <p class="m-0 text-center fw-bold pointer" style="line-height: 40px" data-bs-toggle="modal"
             data-bs-target="#exampleModal">
            <i class="bi bi-pencil-square"></i>
            ویرایش عکس
          </p>
        </div>


      </div>
      <div>
        <form action="" class="mx-auto" style="max-width: 500px">
          <div class="row">
                        <div class="col-12 mb-3">
                          <label class="mb-2" for="description">بایوگرافی</label>

                          <textarea class="form-control"  rows="8" id="description" placeholder="لطفا در مورد خود بنویسید">{{ user.description }}</textarea>
                        </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="name">نام</label>
              <input type="text" class="form-control" id="name" :value=" user.name "/>
            </div>
            <!--            <div class="col-lg-6 mb-3">-->
            <!--              <label class="mb-2" for="lastName">نام خانوادگی</label>-->
            <!--              <input type="text" class="form-control" id="lastName" :value=" user.name "/>-->
            <!--            </div>-->
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="user_name">نام کاربری</label>
              <input type="text" class="form-control" id="user_name" :value="user.user_name"/>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="email">ایمیل</label>
              <input type="text" class="form-control" id="email" :value="user.email"/>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="password">رمز عبور</label>
              <input type="password"  style="border: none;    border-radius: 8px; background-color: #f5f5f5; height: 50px;" class="form-control" id="password" :value=" user.password "/>
            </div>

            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="province">استان</label>
              <select @change="getCities" class="form-select" name="" id="province">
                <option> انتخاب کنید</option>
                <option :selected="user.province == provinces[item] ? 'selected' : false" v-for="item in provincesKeys" :value="item" :key="item">{{ provinces[item] }}</option>
              </select>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="city">شهر</label>
              <select  class="form-select" name="" id="city">
                <option :selected="user.city === cities[item] ? 'selected' : false" v-for="item in citiesKeys" :value="item" :key="item">{{ cities[item] }}</option>
              </select>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="card_number">شماره کارت</label>
              <input @keyup="findBankName" type="text" class="form-control" id="card_number" :value="cards[0]?.card_number"/>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="bank">نام بانک</label>
              <input disabled type="text" class="form-control" id="bank" />
            </div>
            <div class="col-lg-12 mb-3">
              <label class="mb-2" for="card_sheba">شماره شبا</label>
              <input type="text" class="form-control" id="card_sheba" :value="cards[0]?.card_sheba"/>
            </div>


            <div class="col-lg-12 mb-3">
              <input type="submit" @click="updateUser" class="btn btn-outline-primary" value="ویرایش"/>
            </div>


          </div>
        </form>
        <div class="modal fade me-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
<!--                <h5 class="modal-title">Modal title</h5>-->
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>استفاده از آواتار پیشفرض</p>
              </div>
              <div class="row px-3 ">
                <div class="col-3"><img class="rounded rounded-3 img-fluid" src="img/7.jpg" alt=""></div>
                <div class="col-3"><img class="rounded rounded-3 img-fluid" src="img/7.jpg" alt=""></div>
                <div class="col-3"><img class="rounded rounded-3 img-fluid" src="img/7.jpg" alt=""></div>
                <div class="col-3"><img class="rounded rounded-3 img-fluid" src="img/7.jpg" alt=""></div>
              </div>
              <div class="p-3">
                <drop-zone-2 />
              </div>
              <div class="modal-footer border-0 text-center justify-content-center">
                <button type="button" class="btn btn-light btn-lg px-5 py-3" data-bs-dismiss="modal">ثبت</button>
                <!--                <button type="button" class="btn btn-primary">Save changes</button>-->
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import DropZone2 from "@/components/dropZone2";
export default {
  name: "Profile",
  components: {DropZone2},
  data() {

    return {
      user: {},
      cards: {},
      codes: {},
      provinces: {},
      provincesKeys: {},
      allCities: {},
      cities: {},
      citiesKeys: {},


    }
  },
  mounted() {
    this.getUser();
    this.bankCodes()
  },
  methods: {
    getUser() {
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/profile')
          .then((response) => {
            this.user = response.data.data.user;
            console.log(response.data.data.user);
            localStorage.setItem('user', JSON.stringify(response.data.data.user))

            console.log(this.user)
            console.log(response.data.data.details.provinces);
            this.provinces = response.data.data.details.provinces;
            this.provincesKeys = Object.keys(this.provinces);
            this.allCities = response.data.data.details.cities;
            if (this.user.province !== ''){
              setTimeout(()=>{
                this.getCities();
              },1000)
              // let province = document.getElementById('province').value;
              // alert(province)

              console.log(this.cities, this.citiesKeys)
            }
          })
          .then(()=>{

          })
          .catch((error) => {
            console.log(error);
          });

      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/cards')
          .then((response) => {
            this.cards = response.data.data.cards.records;
          })
          .then(()=>{
        this.findBankName();

      }).catch((error) => {
        console.log(error)
      });
    },
    updateUser() {

      const formData = new FormData();
      formData.append("profile_image", document.querySelector('#dzFile').files[0]);
      formData.append("name", document.getElementById('name').value);
      formData.append("user_name", document.getElementById('user_name').value);
      formData.append("email", document.getElementById('email').value);
      formData.append("password", document.getElementById('password').value);
      formData.append("description", document.getElementById('description').value);
      formData.append("province", document.getElementById('province').value);
      formData.append("city", document.getElementById('city').value);

      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .post('https://server.elfiro.com/api/v1/client/profile', formData)
          .then((response) => {
            console.log(response)
            // this.user = response.data.data.user;
            // console.log(response);

          }).then(()=>{
            this.getUser();
      })
          .catch((error) => {
            console.log(error);
          });

      if (this.cards.length === 0) {
        axios.create({
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token'),
          }
        })
            .post('https://server.elfiro.com/api/v1/client/cards', {
              card_number: document.getElementById('card_number').value,
              card_sheba: document.getElementById('card_sheba').value
            })
            .then((response) => {
              console.log(response)
              // this.cards = response.data.data.cards;
              // console.log('cards',this.cards)
            })
            .catch((error) => {
              console.log(error)
            });
      } else {
        axios.create({
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token'),
          }
        })
            .post('https://server.elfiro.com/api/v1/client/cards/' + this.cards[0].id, {
              // card_id: this.cards[0].id,
              card_number: document.getElementById('card_number').value,
              card_sheba: document.getElementById('card_sheba').value
            })
            .then((response) => {
              console.log(response)
              // this.cards = response.data.data.cards;
              // console.log('cards',this.cards)
            })
            .catch((error) => {
              console.log(error)
            });
      }
    },
    bankCodes() {
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      }).get('https://server.elfiro.com/api/v1/client/cards/details')
          .then((response) => {
            this.codes = response.data.data.details.banks;
            // console.log(response);
            console.log('codes', this.codes)

          })
          .catch((error) => {
            console.log(error);
          });
    },
    findBankName() {
      if (document.getElementById('card_number').value.length >= 6) {

        let vl = document.getElementById('card_number').value.slice(0,6)

        document.getElementById('bank').value =
            this.codes[vl];
      }
      if (document.getElementById('card_number').value.length < 6) {
        document.getElementById('bank').value = '';
      }
    },

    getCities(){
      let province = document.getElementById('province').value;
      this.cities= this.allCities[province];
      this.citiesKeys = Object.keys(this.cities)
    }
  }
}
</script>

<style scoped>

</style>