<template>
  <form id="registerForm" class="" action="" style="margin-top: 30vh">
    <p class="fw-bold mb-5" style="font-size: 22px">ثبت نام در <span class="text-primary"> فارس گیمر</span></p>

    <div class="col-xl-12 mb-4">
      <label for="mobile" class="small text-muted mb-4" style="font-size: 12px">شماره همراه</label>
      <input id="mobile" maxlength="11" class="form-control mb-3 en" type="text">
<!--      <li class="text-muted small" v-for="error in this.$parent.errors.mobile">{{ error }}</li>-->
    </div>

    <div class="col-xl-12 mb-4">
      <label for="user_name" class="small text-muted mb-4" style="font-size: 12px">نام کاربری</label>
      <input id="user_name" minlength="3" class="form-control mb-5 " type="text">
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
export default {
  name: "RegisterForm"
}
</script>

<style scoped>

</style>