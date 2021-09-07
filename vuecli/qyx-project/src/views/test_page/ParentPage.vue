<template>
  <div>
      <h1>Im ParentPage</h1>
      <div>
          <router-link to="/parentpage/childpage1/EarlySleep-King">childpage1</router-link>
          <!-- <router-link to="/parentpage/childpage2">childpage2</router-link> -->
          <router-link v-bind:to="{name:'childpage2',params:{time:100}}">childpage2</router-link>
      </div>
      <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  beforeRouteUpdate(to,from,next){
    //不要忘记采用驼峰命名
    // 可用在父页面中，当子页面变化时执行
    console.log(to,from);
    next();
  }
};
</script>
<style scoped>
</style>