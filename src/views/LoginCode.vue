<template>
  <form id="loginCode" class="d-none"  style="margin-top: 30vh">
    <p class="fw-bold mb-5" style="font-size: 22px">کد ارسال شده به شماره
      <input disabled id="sent" v-model="mobilee" class="text-primary mx-2">
      را وارد کنید </p>

    <div class="col-xl-12 mb-2">
      <label for="code" class="small text-muted mb-4" style="font-size: 12px">کد ارسالی</label>
      <input id="code" class="form-control en" type="text">
    </div>
    <div class="d-flex justify-content-between mb-5"  style="font-size: 12px">
      <router-link to="/login" @click="this.$parent.getMobile" class="small text-muted">تصحیح شماره همراه</router-link>

      <p class="small text-black-50 d-flex justify-content-between">
        <span @click.prevent="this.$parent.reSendCode" id="resend" style="display:inline-block;">
          ارسال مجدد کد
        </span>
      <span style="display:inline-block;width: 40px">
        (00:<span id="time">00</span>)
      </span>
      </p>
    </div>
    <div class="col-xl-12 mb-4">
      <button class="btn btn-primary py-2 px-5"  @click.prevent="this.$parent.login" type="submit">
        <p class="my-1" >تایید</p>
      </button>
    </div>
    <p class="small"  style="font-size: 16px">حساب کاربری ندارید؟ <a class="text-primary">ثبت نام</a></p>

  </form>
</template>

<script>
export default {
  data(){
    return{
      name: "LoginCode",
      mobilee: '',
    }
  },
  mounted() {
    this.mobilee = document.getElementById('mobile').value;

  }
}
</script>

<style scoped>
button{
  height: 52px;
  width: 140px;
  border-radius: 8px;
  background-image: conic-gradient(from 30deg, #7007FA 10%, #9d56ff 120%, #7007FA 100%);

}
input{
  height: 50px;
  border-radius: 8px;

}
#sent{
  width: 130px !important;
  background-color: transparent !important;
  outline: transparent !important;
  display: inline !important;
  border: none;

}
</style>