<template>
  <div>
        <h3 class="active">Im childpage1</h3>
        <h3 class="active">UserName:{{ $route.params.username }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  created(){
      // console.log(this.$route.params.username);
  }
};
</script>
<style scoped>
    .active{
        color: olivedrab;
    }
</style>