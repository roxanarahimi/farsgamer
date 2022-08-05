<template>
  <div id="login " class="container-fluid p-0 m-0">
    <div class="row  justify-content-center">
      <div class="col-md-10 col-lg-6 vh-100 ">
        <div class="row justify-content-center">
          <div id="loginForm" class="col-lg-10 col-xxl-6 p-5">
            <login-mobile/>
            <login-code/>
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-6 bg-primary vh-100"></div>

    </div>
  </div>
</template>

<script>
import LoginMobile from "@/views/LoginMobile";
import LoginCode from "@/views/LoginCode";

export default {
  name: "Login",
  components: {LoginMobile, LoginCode},
  data() {
    return {
      send: false,
      errors: [],
    }
  },
  mounted() {
    // localStorage.clear();

    if (localStorage.getItem('token')) {
      this.$router.push({name: 'Dashboard'})
    } else {
      localStorage.clear();
    }
    document.querySelector('#loginMobile').classList.remove('d-none');
    document.querySelector('#loginCode').classList.add('d-none');

    document.querySelector('#resend').classList.remove('text-primary');
    document.querySelector('#resend').setAttribute('disabled', 'disabled');
    document.querySelector('#resend').style.cursor = 'none';
  },
  methods: {
    sendCode() {
      this.errors = [];
      if (document.querySelector('#mobile').value.length === 0) {
        this.errors.push('شماره موبایل را وارد کنید.')
      }else if (!document.querySelector('#mobile').value.toString().startsWith('09')) {
        this.errors.push('شماره موبایل باید با 09 شروع شود.')

      }
      if (document.querySelector('#mobile').value.length !== 11) {
        this.errors.push('شماره موبایل باید 11 رقم باشد.')
      }

      if (this.errors.length === 0) {
        axios.post('https://server.elfiro.com/api/v1/auth/send-verification-code', {
          phone: document.querySelector('#mobile').value,
        })
            .then((response) => {
              if (response.status === 200) {
                document.querySelector('#sent').value = document.querySelector('#mobile').value;
                document.querySelector('#loginMobile').classList.add('d-none');
                document.querySelector('#loginCode').classList.remove('d-none');
                this.count()
              }
            })
            .catch((error) => {
              console.log(error)
              console.log(error.message)
              if (error.message === 'Request failed with status code 422') {
                this.errors.push('شما عضو نیستید لطفا ابتدا ثبت نام کنید')
              }
            });
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
          if (time < 10 && document.querySelector('#time')) {
            document.querySelector('#time').innerText = '0' + time;
          } else if (time => 10 && document.querySelector('#time')) {
            document.querySelector('#time').innerText = time;
          } else if (!document.querySelector('#time')) {
            stop();
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
      if (!document.querySelector('#resend').hasAttribute('disabled')) {
        this.sendCode();
        document.querySelector('#resend').setAttribute('disabled', 'disabled');
        document.querySelector('#resend').classList.remove('text-primary');
        document.querySelector('#resend').style.cursor = 'none';

      }
    },
    login() {
      if (this.errors.length === 0) {
        axios.post('https://server.elfiro.com/api/v1/auth/login', {
          phone: document.querySelector('#mobile').value,
          password: document.querySelector('#code').value,
        })
            .then((response) => {
              console.log(response);
              console.log(response.data.data.login.user.token);
              localStorage.setItem('token', response.data.data.login.user.token)
              localStorage.setItem('user', JSON.stringify(response.data.data.login.user))
              this.$router.push({name: 'Dashboard'});
            })
            .catch((error) => {
              console.log(error)
              console.log(error.message)
              if (error.message === 'Request failed with status code 429') {
                this.errors.push('کد وارد شده اشتباه است')
              }
            });
      }

    }
  }
}
</script>

<style scoped>

</style>