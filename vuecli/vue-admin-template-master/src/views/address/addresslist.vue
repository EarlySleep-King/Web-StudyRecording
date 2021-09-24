<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
    <div class="app-container">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="addressname" label="地址"> </el-table-column>
          <el-table-column prop="longitude" label="经度"> </el-table-column>
          <el-table-column prop="latitude" label="纬度"> </el-table-column>
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
import { addressList } from "@/api/address";
import { deleteList } from "@/api/address";
export default {
  data() {
    return {
      tableData: [],
      loading: true,
      data:{addressid:''},
    };
  },
  methods: {
    getAddress() {
      addressList().then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.loading = false;
      });
    },
    deleteRow(index, rows) {
      console.log(index, rows);
      //   rows.splice(index, 1);
      this.$confirm("此操作将永久删除该地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.data.addressid = rows[index].addressid.toString();
          console.log(this.data);
          deleteList(this.data)
            .then((res) => {
              if ((res.data.code = 101)) {
                this.open2();
                this.getAddress();
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
        message: "删除地址成功!",
        type: "success",
      });
    },
    open4() {
      this.$message.error("删除地址出错!");
    },
  },
  created() {
    this.getAddress();
  },
};
</script>
<style scoped>
</style>