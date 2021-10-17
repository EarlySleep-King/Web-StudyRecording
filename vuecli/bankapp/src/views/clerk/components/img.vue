<template>
  <div>
    <div class="imgButton" @click="clickButton()">查看微信</div>
    <div class="backGround" v-if="flag"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    clickButton() {
      this.flag = true;
    },
  },
};
</script>
<style scoped>
.imgButton {
  height: 23px;
  width: 65px;
  border: 1px solid dodgerblue;
  border-radius: 5px;
  font-size: 12px;
  color: dodgerblue;
  text-align: center;
  line-height: 23px;
}
.backGround {
    position: fixed;
    top: 0px;
  width: 100%; 
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>