<template>

  <router-view
      v-if="(this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'Error404')"/>
  <div v-else v-show="load" class="container-fluid  ps-lg-3 p-0 pt-3">
    <top-bar/>
    <div class="w-100 d-flex">

      <div v-if="this.$route.name === 'Home' ">
        <side-bar/>
      </div>
      <div v-else>
        <client-side-bar/>
      </div>
      <div id="page_content" class="px-3 px-lg-2 px-lg-0 mt-5">
        <!--          //content-->
        <div class="container-fluid p-0 m-0">
          <router-view/>
        </div>
        <!--          //content-->
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import ClientSideBar from "@/components/ClientSideBar";

export default {
  name: 'Home',
  components: {ClientSideBar, SideBar, TopBar},
  data() {
    return {
      load: false,
      base: {},
    }
  },
  updated() {
    console.log(this.$router.currentRoute.value.name);
    if (this.$router.currentRoute.value.name !== 'Login' && this.$router.currentRoute.value.name !== 'Register') {
      if (!localStorage.getItem('token')) {
        this.$router.push({name: 'Login'});
      }

      this.load = true
    }
  },
  mounted() {
    // this.load = true
    // if (!localStorage.getItem('token')) {
    //   this.$router.push({name: 'Login'});
    //   localStorage.clear();
    // }


    this.getBaseData();


    // this.getClient();
  }
  ,
  methods: {
    getBaseData() {
      axios.get('https://server.elfiro.com/api/v1/basic/base')
          .then((response) => {
            console.log(response.data.data)
            this.base = response.data.data.base;
          })
          .then(() => {
            document.querySelector('title').innerText = this.base.title;
            document.querySelector('meta[name="description"]').setAttribute('content', this.base.seoDescription);
            document.querySelector('meta[name="keywords"]').setAttribute('content', this.base.seoKeywords);
            document.querySelector('meta[property="og:description"]').setAttribute('content', this.base.seoDescription);
            document.querySelector('meta[property="og:site_name"]').setAttribute('content', this.base.site_name);
            document.querySelector('meta[property="og:title"]').setAttribute('content', this.base.title);
          })
          .catch((error) => {
            console.log(error)
          });
    }
    ,
    getClient() {

      console.log('T', localStorage.getItem('token'));
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
          .get('https://server.elfiro.com/api/v1/client/profile')
          .then((response) => {
            console.log(response)
            this.load = true;

            if (response.status === 200) {
              localStorage.setItem('user', JSON.stringify(response.data.data.user));

            }
            console.log(localStorage);
          })
          .catch((error) => {
            console.log(error);
            localStorage.clear();
            this.$router.push({name: 'Login'});
          })
      ;
      console.log(localStorage.getItem('token'))
    }
    ,

    logOut() {
      console.log(localStorage);
      axios.create({
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      }).get('https://server.elfiro.com/api/v1/client/logout')
          .then(() => {
            localStorage.removeItem('token');
          }).then(() => {
        this.$router.push({name: 'Login'});
      }).catch((error) => {
        console.log(error)
      });
    }
    ,
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

input[type=text], .form-select, .form-select > option {
  border: none;
  background-color: #f5f5f5;
  height: 50px;
  border-radius: 8px;

}

textarea {
  border: none !important;
  background-color: #f5f5f5 !important;
  border-radius: 8px !important;
}


label {
  font-size: 12px;
}

th, td {
  height: 60px;
  line-height: 50px;
  text-align: center;
}

#page_content {
  width: calc(100% - 300px - 5rem);
  min-height: 500px !important;
}

#client_side_bar {
  width: calc(300px + 5rem);
}

#client_side_bar .card {
  position: fixed;
  width: 300px !important;
}

.pointer {
  cursor: pointer;
}

@media (max-width: 991px) {
  #page_content {
    width: 100%;
    min-height: 500px !important;

  }

  #client_side_bar {
    width: 100% !important;
  }
}
</style>
