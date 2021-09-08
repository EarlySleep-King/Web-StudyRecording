<template>
  <div>
    <TestPage v-bind:myname.sync="str"></TestPage>
  </div>
</template>
<script>
// 相当于父组件，对组件用import方式进行引入
import TestPage from '../components/Test.vue'
export default {
  data() {
    return {
      str:'QYX',
    };
  },
  components:{
    // 由于已经进行引入，无需进行过多声明
    TestPage
  }
};
</script>
<style scoped>

</style>