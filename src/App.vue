<template>

  <router-view v-if="this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'Error404'"/>
  <div v-else class="container-fluid p-0 pt-3">

    <top-bar/>
    <div class="w-100 d-flex">
      <side-bar/>
      <div id="page_content" class="px-5 px-lg-0">
        <!--          //content-->
        <div class="container-fluid p-0 m-0">
       <router-view />
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

export default {
  name: 'Home',
  components: {SideBar, TopBar}
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
input[type=text], .form-select,.form-select> option
{
  border: none;
  background-color: #f5f5f5;
  height: 50px;
  border-radius: 8px;

}
textarea
{
  border: none !important;
  background-color: #f5f5f5 !important;
  border-radius: 8px !important;
}


label{
  font-size: 12px;
}

th,td{
  height: 60px;
  line-height: 50px;
  text-align: center;
}
#page_content {
  width: calc(100% - 300px - 5rem);
  min-height: 500px !important;
}
.side_bar {
  width: calc(300px + 5rem);
}

.side_bar .card {
  position: fixed;
  width: 300px !important;
}
.pointer{
  cursor: pointer;
}

@media(max-width: 991px){
  #page_content {
    width: 100%;
    min-height: 500px !important;

  }
  .side_bar {
    width: 100% !important;
  }
}
</style>
