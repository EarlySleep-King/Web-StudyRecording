<template>
  <div>
    <ul>
      <li class="clearfix" v-for="item in dataList" v-bind:key="item.id">
        <div class="left">
          <img
            v-bind:src="item.img"
            class="img"
          />
        </div>
        <div class="right">
          <p>{{ item.nm }}</p>
          <div class="text">
            <div>
              观众评分:
              <span>{{ item.sc }}</span>
            </div>
            <div>{{ item.star }}</div>
            <div>{{ item.showInfo }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dataList: [],
      datasrc: "",
    };
  },
  methods: {
    getData() {
      // let getUrl = "https://m.maoyan.com/ajax/movieOnInfoList?";
      let birdUrl =
        "https://bird.ioliu.cn/v2?url=https://m.maoyan.com/ajax/movieOnInfoList?";
      axios
        .get(birdUrl)
        .then((res) => {
          // console.log(res.data.movieList.length);
          for (let i = 0; i < res.data.movieList.length; i++) {
            res.data.movieList[i].img =
              res.data.movieList[i].img.substring(0, 22) +
              res.data.movieList[i].img.substring(26);
              console.log(res.data.movieList[i].img);
          }
          this.dataList = res.data.movieList;
          console.log(this.dataList);
        })
        .catch(function () {
          console.log("error");
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
li {
  margin: 10px;
  padding: 2px 15px;
  border-bottom: 1px solid rgba(111, 111, 111, 0.4);
  /* position: relative; */
}
.left {
  float: left;
  width: 35%;
}
.left img {
  width: 80%;
}
.right {
  float: right;
  width: 65%;
  /* position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%); */
}
.right p {
  font-size: 21px;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.right .text {
  margin-top: 15px;
}
.right .text div {
  margin-top: 3px;
  font-size: 15px;
  color: grey;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.text span {
  color: #faaf00;
}
</style>