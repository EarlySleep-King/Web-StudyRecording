<template>
  <div id="app">
    <div id="nav">
      <Navagation />
    </div>
    <router-view />
  </div>
</template>

<script>
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
  padding: 1rem 0;
}
</style>
