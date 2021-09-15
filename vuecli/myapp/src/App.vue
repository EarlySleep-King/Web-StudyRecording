<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Movie</router-link> -->
      <Navagation />
    </div>
    <router-view />
  </div>
</template>
<script>
//引入通用组件
import Navagation from "../src/components/Navagation.vue";
export default {
  //引入组件后需用components进行声明才能使用
  components: {
    Navagation
  },
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
body{
  padding: 1rem 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
