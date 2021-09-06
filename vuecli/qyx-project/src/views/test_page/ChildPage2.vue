<template>
  <div>
        <h3 class="active">Im childpage2</h3>
        <h3 class="active">login time:{{ $route.params.time }} Days</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  created(){
      console.log(this.$route.params.time);
  }
};
</script>
<style scoped>
    .active{
        color: olivedrab;
    }
</style>