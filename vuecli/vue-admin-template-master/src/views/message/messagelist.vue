<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
    <div class="app-container">
      <el-form>
        <el-form-item label="搜索地址" prop="addressid">
          <el-select v-model="addressid.searchid" placeholder="请选择地址">
            <el-option
              v-for="item in addressData"
              :key="item.addressid"
              :label="item.addressname"
              :value="item.addressid"
            ></el-option>
          </el-select>
          <el-button type="primary" @click="searchAddress()" class="but1">搜索</el-button>
          <el-button plain @click="reset()">重制</el-button>
        </el-form-item>
      </el-form>
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
                @click.native.prevent="reWrite(scope.$index, tableData)"
                type="text"
                size="small"
              >
                <i class="el-icon-edit"></i>修改
              </el-button>
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
import { showMessage } from "@/api/message";
import { deleteMessage } from "@/api/message";
import { searchMessage } from "@/api/message";
export default {
  data() {
    return {
      addressid: { searchid: "" },
      addressData: [],
      loading: true,
      tableData: [],
      deleteid: { id: "" },
    };
  },
  methods: {
    //获取下拉列表中地址数据
    showData() {
      addressList().then((res) => {
        console.log(res);
        this.addressData = res.data.data;
      });
    },
    //搜索功能
    searchAddress() {
      console.log(this.addressid);
      searchMessage(this.addressid).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    //重制搜索
    reset() {
      this.showList();
      this.addressid.searchid = "";
    },
    showList() {
      showMessage().then((res) => {
        console.log(res);
        this.tableData = res.data.data;
        this.loading = false;
      });
    },
    //修改信息
    reWrite(index,data){
      let a = index;
      this.$router.push({path:"/message/addmessage",query:{id:data[a].jrid.toString()}})
    },
    //删除信息
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
    this.showData();
  },
};
</script>
<style scoped>
.but1{
  margin-left: 10px;
}
</style>