<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
    <div class="app-container">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="等级"> </el-table-column>
          <el-table-column prop="levelname" label="等级"> </el-table-column>
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
import { levelList } from "@/api/level";
import { deleteList } from "@/api/level";
export default {
  data() {
    return {
      tableData: [],
      loading: true,
      data: { levelid: "" },
    };
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index, rows);
      //   rows.splice(index, 1);
      this.$confirm("此操作将永久删除该职位, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.data.levelid = rows[index].jrid.toString();
          console.log(this.data);
          deleteList(this.data)
            .then((res) => {
              if ((res.data.code = 101)) {
                this.open2();
                this.showList();
              } else {
                this.open4();
              }
            })
            .catch(() => {
              console.log(error);
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
        message: "删除职位成功!",
        type: "success",
      });
    },
    open4() {
      this.$message.error("删除职位出错!");
    },
    showList() {
      this.loading = true;
      levelList().then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.loading = false;
      });
    },
  },
  created() {
    this.showList();
  },
};
</script>
<style scoped>
</style>