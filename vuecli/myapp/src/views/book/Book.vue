<template>
  <div v-loading.fullscreen="loading" element-loading-text='加载中……'>
    <div class="lbt">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in lbtList" :key="item.id">
          <img class="bookImg" :src='"https://images.weserv.nl/?url=" + item.cover.url'>
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      lbtList:[],
      loading: true,
    };
  },
  methods: {
    getData() {
      let Url =
        "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=18";
      axios.get(Url).then((res) => {
        console.log(res);
        this.lbtList = res.data.subject_collection_items.slice(0,5);
        this.loading = false;
        console.log(this.lbtList);
      }).catch(() => {
        console.log('error');
      })
    },
  },
  created(){
    this.getData();
  }
};
</script>
<style scoped>
.bookImg{
  width: 100%;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
} */

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>