<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mypage">MyPage</router-link>|
      <router-link to="/mypage2">MyPage2</router-link>|
      <router-link to="/parentpage">ParentPage</router-link>|
      <router-link to="/home">Back to Home</router-link>
      <button @click="routerHandle">编程式导航</button>
    </div>
    <div class="box">
    <transition name="move">
      <router-view/>
      <!-- <router-view/>为组件切换位置 -->
    </transition>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    routerHandle(){
      this.$router.push('about');
      //(-1)返回上一级
      // this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
  .box{
    position: relative;
  }
  .move-enter{
    transform: translateX(100%);
  }
  .move-enter-active{
    transition: all 0.7s ease;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .move-enter-to{
    transform: translateX(0);
  }
  .move-leave{
    transform: translateX(0);
  }
  .move-leave-active{
    transition: all 0.7s ease;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .move-leave-to{
    transform: translateX(-100%);
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
