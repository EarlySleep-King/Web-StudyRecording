<template>
  <div>
      <h2>自定义组件{{myname}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
//   相当于子组件，在此进行赋值
    props:['myname'],
};
</script>
<style scoped>
</style>