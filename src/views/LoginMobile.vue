<template>
  <form id="loginMobile" class="" action="" style="margin-top: 30vh">
    <p class="fw-bold mb-5" style="font-size: 22px">ورود به <span class="text-primary"> فارس گیمر</span></p>

    <div class="col-xl-12 mb-4">
      <label for="mobile" class="small text-muted mb-4" style="font-size: 12px">شماره همراه</label>
      <input id="mobile" maxlength="11" class="form-control mb-5 en" type="text">
        <li class="text-muted small" v-for="error in this.$parent.errors">{{ error }}</li>
    </div>
    <div class="col-xl-12 mb-4">
      <button @click.prevent="this.$parent.sendCode" class="btn btn-primary py-2 px-5" type="submit">
        <p class="my-1">تایید</p>
      </button>
    </div>
    <p class="small"  style="font-size: 16px">حساب کاربری ندارید؟ <a class="text-primary">ثبت نام</a></p>

  </form>
</template>

<script>
import loginCode from "@/views/LoginCode";
export default {
  name: "LoginMobile",
  components:{
    loginCode
  },

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
</style>