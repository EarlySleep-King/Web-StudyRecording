<template>
  <div class="app-container">
    测试页面
    <template>
      <el-table :data="tableData" style="width: 100%">
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
</template>


  </div>
</template>
<script>
import { levelList } from "@/api/level";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  created() {
    levelList().then((res) => {
      console.log(res);
      this.tableData = res.data.data;
    });
  },
};
</script>
<style scoped>
</style>