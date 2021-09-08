<template>
  <div>
      <h2>自定义组件{{myname}}</h2>
      <button @click="changename">change myname</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    changename(){
      this.$emit('update:myname','earlysleep-king');
    }
  },
//   相当于子组件，在此进行赋值
    props:['myname'],
};
</script>
<style scoped>
</style>