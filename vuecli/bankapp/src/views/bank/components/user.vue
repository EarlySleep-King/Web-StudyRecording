<template>
  <div>
    <div class="content">
      <span> 明星经理:{{ dataList.length }}人 </span>
      <div class="moreButton" @click="clickShow()">{{ !show?'查看更多':'关闭' }}</div>
    </div>
    <div class="list">
      <ul  v-if='show' >
        <li v-for="(item, index) in dataList" :key="item.jrid">
          <div>{{ index + 1 }}</div>
          <div>{{ item.jrname }}</div>
          <div>{{ item.jrtel }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { searchMessage } from "@/api/user.js";
export default {
  props: ["id"],
  data() {
    return {
      show: false,
      flag: false,
      dataList: [],
    };
  },
  methods: {
    clickShow() {
      if (this.flag) {
        this.show = !this.show;
      }else{
          this.open3();
      }
    },
    showMessage(id) {
      searchMessage({ searchid: id }).then((res) => {
        console.log(res);
        if (res.data.code == 101) {
          this.flag = true;
          this.dataList = res.data.data;
        }
      });
    },
    open3() {
        this.$message({
          message: '此地点无经理信息！',
          type: 'warning'
        });
      },
  },
  created() {
    this.showMessage(this.id);
    console.log(this.show);
    //   console.log(this.id);
  },
};
</script>
<style scoped>
.content {
  margin: 20px 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
span {
  font-size: 12px;
  color: #666;
}
.moreButton {
  height: 30px;
  width: 60px;
  border: 1px solid dodgerblue;
  border-radius: 5px;
  font-size: 12px;
  color: dodgerblue;
  text-align: center;
  line-height: 30px;
}
li {
  display: flex;
  justify-content: space-between;
}
li div {
  font-size: 12px;
  color: #666;
}
</style>