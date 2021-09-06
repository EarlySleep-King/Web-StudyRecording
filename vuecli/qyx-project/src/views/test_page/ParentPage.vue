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
};
</script>
<style scoped>
</style>