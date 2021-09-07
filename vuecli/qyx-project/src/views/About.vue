<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <h1>Vuex num is: {{ $store.state.num }}</h1> -->
    <!-- <h1>getters newCount: {{ $store.getters.newCount }} </h1> -->
    <!-- 常规方式,需要在下方methods中添加 -->
    <!-- <button @click="addnum">add num</button> -->
    <!-- 适用于指令较少时,使用此方式就不用在下方的methods中添加方法 -->
    <!-- <button @click="$store.commit('add')">add num</button>
    <button @click="$store.commit('reduce')">recude num</button> -->
    <!-- 通过扩展运算符引入方法 -->
    <h1>username: {{ $store.state.users.username }}</h1>
    <h1>Vuex num is: {{ num }}</h1>
    <h1>getters newCount: {{ newCount }} </h1>
    <button @click="add">add num</button>
    <button @click="reduce">recude num</button>
    <button @click="addAction">add action</button>
  </div>
</template>
<script>
// 从vuex引入，必须使用驼峰命名，下方为解构赋值
import {mapMutations,mapActions,mapState,mapGetters} from 'vuex'
export default {
  methods:{
    addnum(){
      console.log(this.$store.state.num);
      this.$store.commit('add');
    },
    //扩展运算符
    ...mapActions(['addAction']),
    ...mapMutations(['add','reduce'])
  },
  computed:{
    ...mapState(['num']),
    ...mapGetters(['newCount'])
  }
}
</script>
