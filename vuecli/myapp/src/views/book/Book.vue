<template>
  <!-- 加载效果,放在最外面 -->
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
    <!-- 书籍轮播图 -->
    <div class="lbt">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in lbtList" :key="item.id">
          <img
            class="bookImg"
            :src="'https://images.weserv.nl/?url=' + item.cover.url"
          />
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs" v-bind:stretch='true'>
      <!-- 点击哪个按钮，activeName会切换成对应的name -->
      <el-tab-pane label="虚构类" name="fiction"></el-tab-pane>
      <el-tab-pane label="非虚构类" name="nonfiction"></el-tab-pane>
    </el-tabs>
    <div class="list">
      <el-row :gutter="24" v-for="item in lbtList" :key="item.id">
        <el-col :span="8">
          <img
            :src="'https://images.weserv.nl/?url=' + item.cover.url"
            class="bookImg"
          />
        </el-col>
        <el-col :span="16">
          <div class="bookTitle">{{ item.title }}</div>
          <div class="bookInfo">{{ item.info }}</div>
          <div class="bookStar">
            <!-- {{ item.rating.value }} -->
            <!-- 在:value中也可以使用methods，如下 -->
            <el-rate
              :value="setNum(item.rating.value)"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      lbtList: [],
      loading: true,
      activeName: "fiction",
    };
  },
  methods: {
    setNum(num) {
      //此方法为去掉一位小数
      // num = 9.5
      num = num / 2;
      //num = 4.75
      num *= 10;
      //num = 47.5
      num = Math.trunc(num);
      //num = 47
      num = num / 10;
      return num;

      //也可以直接通过使用 num.toFixed(1)保留一位小数
    },
    handleClick() {
      this.getData(this.activeName);
      this.loading = true;
      // console.log(tab, event);
    },
    getData(str) {
      let Url =
        `https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/book_${str}/items?start=0&count=18`;
      axios
        .get(Url)
        .then((res) => {
          console.log(res);
          this.lbtList = res.data.subject_collection_items.slice(0, 5);
          this.loading = false;
          console.log(this.lbtList);
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
  created() {
    this.getData('fiction');
  },
};
</script>
<style scoped>
.lbt {
  margin-top: 0.1rem;
}
.bookImg {
  width: 100%;
  height: 100%;
}
.tabs {
  margin: 0.2rem;
}
.list {
  margin: 0.15rem;
}
.bookTitle {
  font-size: 0.5rem;
}
.bookInfo {
  font-size: 0.3rem;
  color: #888;
}
.bookStar {
  height: 100%;
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