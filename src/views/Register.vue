<template>
  <div id="register" class="container-fluid p-0 m-0">
    <div class="row">
      <div class="col-md-10 col-lg-6 vh-100 ">
        <div class="row justify-content-center">
            <div id="Form" class="col-lg-10 col-xxl-6 p-5">
            <register-form/>
            <login-code/>
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-6 bg-primary vh-100"></div>

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
    },
    register() {
      this.errors = [];
      if (document.querySelector('#mobile').value.length === 0) {
        this.errors.push('شماره موبایل را وارد کنید.')
      }else if (!document.querySelector('#mobile').value.toString().startsWith('09')) {
        this.errors.push('شماره موبایل باید با 09 شروع شود.')
      }
      if (document.querySelector('#mobile').value.length !== 11) {
        this.errors.push('شماره موبایل باید 11 رقم باشد.')
      }

      if (document.querySelector('#name').value.length === 0) {
        this.errors.push('نام را وارد کنید.')
      }
      if (document.querySelector('#name').value.length < 3 && document.querySelector('#name').value.length !== 0) {
        this.errors.push('نام باید بیش از 2 کاراکتر باشد')

      }
      if (document.querySelector('#user_name').value.length === 0) {
        this.errors.push('نام کاربری را وارد کنید.')
      }
      if (document.querySelector('#user_name').value.length < 3 && document.querySelector('#user_name').value.length !== 0) {
        this.errors.push('نام کاربری باید بیش از 2 کاراکتر باشد')

      }
      if (document.querySelector('#email').value.length === 0) {
        this.errors.push('ایمیل را وارد کنید.')
      }
      if (this.errors.length === 0) {
        axios.post('https://server.elfiro.com/api/v1/auth/register', {
          phone: document.querySelector('#mobile').value,
          name: document.querySelector('#name').value,
          user_name: document.querySelector('#user_name').value,
          email: document.querySelector('#email').value,
        })
            .then((response) => {
              console.log(response);
              console.log(response.data.data.register.user.token);
              localStorage.setItem('token', response.data.data.register.user.token)
              localStorage.setItem('user', JSON.stringify(response.data.data.register.user))
              this.$router.push({name: 'Dashboard'});
            })
            .catch((error) => {
              console.log(error)
              console.log(error.message)
                this.errors.push(error.message)

            });
      }

    }

  }
}
</script>

<style scoped>

</style>