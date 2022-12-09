<template>
  <div class="d-flex justify-content-between">
    <h3 class=" fw-bold mb-0" style="line-height: 50px">احراز هویت</h3>

  </div>
  <hr class="text-muted mb-5 mt-2">

  <div class="row px-3 ">
    <div class="col-lg-6 px-0">
      <div class="card h-100 border-0 mx-0 px-0 px-lg-3">
        <div class="card-body p-0 pt-0">
          <div class="row p-0 m-0">

            <div class="col-lg-12 px-0 m-0  mb-3">
              <div class=" mx-auto rounded p-3 border" style="overflow: hidden; background-color: whitesmoke; ">

                <p class="fw-bold text-center">لطفا به موارد زیر دقت کنید</p>

              </div>
            </div>
            <div class="col-lg-12 px-0 m-0  mb-3">
              <div class=" mx-auto rounded p-3 border" style="overflow: hidden; background-color: whitesmoke; ">

                <ul class="">
                  <li>فرم احراز هویت را از اینجا دانلود کنید پرینت بگیرید و پس از مطالعه امضا کنید</li>
                  <li>اصل کارت ملی خود را در قسمت مربوطه بچسبانید و از خودتان در حالی که فرم رادر دست گرفقته اید عکس بگیرید </li>
                  <li>از کارت ملی خود بصورت جداگانه عکس بگیرید</li>
                  <li>عکسهای گرفته شده را بارگذاری و ارسال کنید</li>


                </ul>


              </div>
            </div>
            <div class="col-lg-12 px-0 m-0  mb-3">
              <div class=" mx-auto rounded p-3 " style="overflow: hidden; background-color: whitesmoke; ">

                <div class="d-flex justify-content-between px-4 mb-3">
                  <div class="rounded bg-white " style="width: 70px; height: 70px">
                  </div>

                  <div>
                    <button class="btn btn-outline-primary ">بارگذاری عکس</button>

                  </div>
                </div>
                <ul class="">


                  <li>حجم مجاز اپلود عکس 3 مگا پیکسل</li>
                  <li>فرمت عکس باید باشد</li>



                </ul>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6 p-0 " >

      <div class="col-lg-12 px-0 m-0  mb-3">
        <div class=" mx-auto rounded p-3" style="overflow: hidden; background-color: whitesmoke; ">

          <p class="text-center">نمونه عکس احراز هویت</p>


          <div style="width: 100%; height: 100% ; background-color: white">

<!--            <img src="" alt="">-->
          </div>
        </div>
      </div>

    </div>
    <div>
      <button class="btn btn-lg btn-primary " @click.prevent="sendData">ثبت اطلاعات </button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Auth2",
  data(){
    return{
      user: JSON.parse(localStorage.getItem('user')),
      token: localStorage.getItem('token'),
      info: {}
    }
  },
  mounted() {

    this.getdata()
  }
  ,
  methods:{
    getdata(){
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/auth')
          .then((response) => {
            this.info = response.data.data;
            console.log(response);

          })
          .catch((error)=>{
            console.log(error);
          })
    },
    sendData(){



      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .post('https://server.elfiro.com/api/v1/client/auth',{
            province: document.getElementById('province').value,
            city:  document.getElementById('city').value,
            auth_image:  document.getElementById('auth_image').value,
            code_id:  document.getElementById('code_id').value,
            card_number:  document.getElementById('card_number').value,
            card_sheba:  document.getElementById('card_sheba').value
          })
          .then((response) => {
            this.info = response.data.data;
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