<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
  <div class="app-container center">
    <el-input v-model="input" placeholder="请输入等级名称"></el-input>
    <el-button type="primary" plain class="butt" @click="add"
      >添加等级</el-button
    >
  </div>
  </div>
</template>
<script>
import { addList } from "@/api/level";
export default {
  data() {
    return {
      data: { levelname: "" },
      input: "",
      loading: true,
    };
  },
  methods: {
    add() {
      console.log(this.input);
      this.data.levelname = this.input;
      console.log(this.data);
      addList(this.data).then((res) => {
        console.log(res);
        if ((res.status = 200)) {
          this.open2();
          this.$router.push('levellist');
        } else {
            this.open4();
        }
      });
    },
    open2() {
      this.$message({
        message: "添加等级成功!",
        type: "success",
      });
    },
    open4() {
      this.$message.error("添加等级出错!");
    },
  },
//   beforeCreate(){
//       this.loading = true;
//   },
  created(){
      this.loading = false;
  }
};
</script>
<style scoped>
.center {
  text-align: center;
}
.butt {
  margin-top: 20px;
}
</style>