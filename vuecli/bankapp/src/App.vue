<template>
  <div id="app">
    <div id="nav">
      <Navagation />
    </div>
    <router-view />
  </div>
</template>

<script>
// 引入公共组件
import Navagation from "../src/components/Navagation.vue";
export default {
  components: {
    Navagation,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
body {
  padding: 1.1rem 0;
  background-color: #f5f6f7;
}
</style>
