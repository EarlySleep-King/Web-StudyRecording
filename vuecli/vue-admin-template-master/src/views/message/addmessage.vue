<template>
  <div class="app-container">
    <el-form
      :model="messageForm"
      :rules="rules"
      ref="messageForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名字" prop="uname">
        <el-input v-model="messageForm.uname"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="addressid">
        <el-select v-model="messageForm.addressid" placeholder="请选择地址">
          <el-option
            v-for="item in addressData"
            :key="item.addressid"
            :label="item.addressname"
            :value="item.addressid"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="等级" prop="levelid">
        <el-select v-model="messageForm.levelid" placeholder="请选择等级">
          <el-option
            v-for="item in levelData"
            :key="item.jrid"
            :label="item.levelname"
            :value="item.jrid"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="电话" prop="tel">
        <el-input v-model="messageForm.tel"></el-input>
      </el-form-item>
      <el-form-item>
          <!-- 图片上传 -->
        <!-- <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList1"
        >
          头像上传<el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload> -->

        <el-button type="primary" @click="submitForm('messageForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('messageForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addressList } from "@/api/address";
import { levelList } from "@/api/level";
import { addMessage } from "@/api/message";
export default {
  data() {
    return {
      addressData: [],
      levelData: [],
      messageForm: {
        uname: "",
        addressid: "",
        levelid: "",
        tel: "",
        tcoin:"",
        weixin:"",
      },
      fileList1: [{}],
      rules: {
        uname: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        addressid: [
          { required: true, message: "请选择地址信息", trigger: "blur" },
        ],
        levelid: [{ required: true, message: "请选择等级", trigger: "blur" }],
        tel: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
      },
    };
  },
  methods: {
    getAddress() {
      addressList().then((res) => {
        console.log(res);
        this.addressData = res.data.data;
      });
    },
    getLevel() {
      levelList().then((res) => {
        console.log(res);
        this.levelData = res.data.data;
      });
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },

    submitForm(formName) {
    //   console.log(formName);
    console.log(this.messageForm);
      console.log(this.fileList1);
      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.messageForm.addressid = this.messageForm.addressid.toString();
            this.messageForm.levelid = this.messageForm.levelid.toString();
          addMessage(this.messageForm).then((res) => {
            console.log(res);
            if ((res.status = 200)) {
              this.open2();
              this.$router.push("/message/messagelist");
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
        message: "添加信息成功!",
        type: "success",
      });
    },
    open4() {
      this.$message.error("添加信息出错!");
    },
    open5() {
      this.$message.error("信息不能为空!");
    },
  },
  created() {
    this.getAddress();
    this.getLevel();
  },
};
</script>
<style scoped>
</style>