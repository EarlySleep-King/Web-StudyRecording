<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
    <div class="app-container">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="jrname" label="姓名"> </el-table-column>
          <el-table-column prop="levelname" label="等级"> </el-table-column>
          <el-table-column prop="addressname" label="地址"> </el-table-column>
          <el-table-column prop="jrtel" label="手机号"> </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >
                <i class="el-icon-delete"></i>删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
import { showMessage } from "@/api/message";
import { deleteMessage } from "@/api/message";
export default {
  data() {
    return {
      loading: true,
      tableData: [],
      deleteid: { id: "" },
    };
  },
  methods: {
    showList() {
      showMessage().then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.loading = false;
      });
    },
    deleteRow(index, data) {
      console.log(index, data);
      // this.deleteid.id = this.tableData[index].jrid.toString();
      // deleteMessage(this.deleteid).then((res) => {
      //   console.log(res);
      //   if(res.status == 200){

      //   }
      // })
      this.$confirm("此操作将永久删除该地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteid.id = data[index].jrid.toString();
          console.log(this.deleteid);
          deleteMessage(this.deleteid)
            .then((res) => {
              if ((res.data.code = 101)) {
                this.open2();
                this.showList();
              } else {
                this.open4();
              }
            })
            .catch(() => {
              // console.log(error);
              htis.open4();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    open2() {
      this.$message({
        message: "删除信息成功!",
        type: "success",
      });
    },
    open4() {
      this.$message.error("删除信息出错!");
    },
  },
  created() {
    this.showList();
  },
};
</script>
<style scoped>
</style>