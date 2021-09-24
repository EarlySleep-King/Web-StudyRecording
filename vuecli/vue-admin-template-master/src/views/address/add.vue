<template>
  <div class="app-container">
    <el-form
      :model="addressForm"
      :rules="rules"
      ref="addressForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="地址" prop="address">
        <el-input v-model="addressForm.address"></el-input>
      </el-form-item>
      <el-form-item label="经度" prop="longitude">
        <el-input v-model="addressForm.longitude"></el-input>
      </el-form-item>
      <el-form-item label="纬度" prop="latitude">
        <el-input v-model="addressForm.latitude"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('addressForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('addressForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addList } from "@/api/address";
export default {
  data() {
    return {
      addressForm: {
        address: "",
        longitude: "",
        latitude: "",
      },
      rules: {
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        longitude: [
          { required: true, message: "请输入经度信息", trigger: "blur" },
        ],
        latitude: [
          { required: true, message: "请输入纬度信息", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addList(this.addressForm).then((res) => {
            console.log(res);
            if ((res.status = 200)) {
              this.open2();
              this.$router.push("/address/list");
            } else {
              this.open4();
            }
          });
        } else {
          console.log("error submit!!");
          this.open5();
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open2() {
      this.$message({
        message: "添加地址成功!",
        type: "success",
      });
    },
    open4() {
      this.$message.error("添加地址出错!");
    },
    open5(){
      this.$message.error("信息不能为空!");
    }
  },
};
</script>
<style scoped>
.app-container{
    width: 600px;
    height: 250px;
    margin: 150px auto;
    text-align: center;
}
</style>