<template>
  <router-link to="auth2" class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">پروفایل</h3>
    <button class="btn btn-outline-success mx-2 py-3 mb-3">
      <i class="bi bi-shield-check"></i>
      احراز هویت شده
    </button>
  </router-link>
  <hr class="text-muted mb-5 mt-2">

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
              <label class="mb-2" for="bio">بایوگرافی</label>

              <textarea class="form-control" rows="8" id="bio" placeholder="لطفا در مورد خود بنویسید">{{ user.descriptions }}</textarea>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="name">نام</label>
              <input type="text" class="form-control" id="name" :value=" user.name "/>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="lastName">نام خانوادگی</label>
              <input type="text" class="form-control" id="lastName" :value=" user.name " />
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="name">نام کاربری</label>
              <input type="text" class="form-control" id="name" :value="user.user_name"/>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="lastName">ایمیل</label>
              <input type="text" class="form-control" id="lastName" :value="user.email"/>
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="lastName">نام بانک</label>
              <input type="text" class="form-control" id="lastName"  />
            </div>
            <div class="col-lg-6 mb-3">
              <label class="mb-2" for="lastName">شماره کارت</label>
              <input type="text" class="form-control" id="lastName"  />
            </div>
            <div class="col-lg-12 mb-3">
              <label class="mb-2" for="lastName">شماره شبا</label>
              <input type="text" class="form-control" id="lastName"  />
            </div>

            <div class="col-lg-12 mb-3">
              <input type="submit" class="btn btn-outline-primary" />
            </div>


          </div>
        </form>
        <div class="modal fade me-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
export default {
  name: "Profile",
  data(){

    return{
      user: {},

    }
  },
  mounted() {
    this.getUser();
  },
  methods:{
    getUser(){
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
            console.log(response);

          })
          .catch((error)=>{
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>

</style>