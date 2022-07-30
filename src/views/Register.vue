<template>
  <div id="register">
    <div class="row">
      <div class="col-6 vh-100">
        <div class="row justify-content-center">
          <div id="loginForm" class="col-xl-5">
            <register-form/>
            <login-code/>
          </div>
        </div>
      </div>
      <div class="col-6 bg-primary vh-100"></div>

    </div>
  </div>
</template>

<script>
import LoginCode from "@/views/LoginCode";
import RegisterForm from "@/views/RegisterForm";

export default {
  name: "Register",
  components: {RegisterForm, LoginCode},
  data() {
    return {
      send: false,
      errors: [],
    }
  },
  mounted() {
    // document.querySelector('#loginMobile').classList.remove('d-none');
    document.querySelector('#registerForm').classList.remove('d-none');
    document.querySelector('#loginCode').classList.add('d-none');

    document.querySelector('#resend').classList.remove('text-primary');
    document.querySelector('#resend').setAttribute('disabled', 'disabled');
    document.querySelector('#resend').style.cursor = 'none';
  },
  methods: {
    sendCode() {
      this.errors = [];
      if (document.querySelector('#mobile').value.length !== 11) {
        this.errors.push('شماره موبایل باید 11 رقم باشد.')
      }
      if (!document.querySelector('#mobile').value.toString().startsWith('09')) {
        this.errors.push('شماره موبایل باید با 09 شروع شود.')

      }
     if (document.querySelector('#user_name').value.length === 0) {
        this.errors.push('نام کاربری را وارد کنید.')
      }
     if (document.querySelector('#user_name').value.length < 3 && document.querySelector('#user_name').value.length !== 0) {
        this.errors.push('نام کاربری باید بیش از 2 کاراکتر باشد')

      }
      if (this.errors.length === 0) {
        //SEND API....

        document.querySelector('#registerForm').classList.add('d-none');
        document.querySelector('#loginCode').classList.remove('d-none');
        this.count();
      }
    },
    count() {
      document.querySelector('#resend').classList.remove('text-primary');
      document.querySelector('#resend').setAttribute('disabled', 'disabled');
      document.querySelector('#resend').style.cursor = 'none';
      let time = 60;
      setInterval(function () {
        if (time > 0) {
          time--;
          if (time < 10) {
            document.querySelector('#time').innerText = '0' + time;
          } else {
            document.querySelector('#time').innerText = time;
          }


        } else if (time == 0) {
          document.querySelector('#resend').classList.add('text-primary');
          document.querySelector('#resend').removeAttribute('disabled');
          document.querySelector('#resend').style.cursor = 'pointer';
          time = null;
          // clearInterval();
        }

      }, 1000);


    },

    reSendCode() {
      //api......

      if (!document.querySelector('#resend').hasAttribute('disabled')) {
        this.count();
        document.querySelector('#resend').setAttribute('disabled', 'disabled');
        document.querySelector('#resend').classList.remove('text-primary');
        document.querySelector('#resend').style.cursor = 'none';

      }
    }
  }
}
</script>

<style scoped>

</style>