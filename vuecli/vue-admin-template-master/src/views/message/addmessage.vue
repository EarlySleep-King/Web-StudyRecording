<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
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
          <el-upload
            class="upload-demo"
            action="http://47.92.82.13:4000/getMessageA"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="upsuccess1"
            :file-list="fileList1"
            name="sfile"
          >
            头像上传<el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>

          <el-upload
            class="upload-demo"
            action="http://47.92.82.13:4000/getMessageB"
            :limit="1"
            :on-exceed="handleExceed"
            :on-success="upsuccess2"
            :file-list="fileList2"
            name="sweixin"
          >
            微信二维码上传<el-button size="small" type="primary"
              >点击上传</el-button
            >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
          <el-button v-if="isUpdata" type="primary" @click="upData()"
            >立即修改</el-button
          >
          <el-button v-else type="primary" @click="submitForm('messageForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('messageForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { addressList } from "@/api/address";
import { levelList } from "@/api/level";
import { addMessage } from "@/api/message";
import { showupdataMessage } from "@/api/message";
import { updataMessage } from "@/api/message";
export default {
  data() {
    return {
      loading: true,
      isUpdata: false,
      addressData: [],
      levelData: [],
      messageForm: {
        uname: "",
        addressid: "",
        levelid: "",
        tel: "",
        tcoin: "",
        weixin: "",
      },
      updataForm: {
        id: "",
        uname: "",
        addressid: "",
        levelid: "",
        tel: "",
      },
      fileList1: [],
      fileList2: [],
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
    //获取下拉列表中数据
    getData() {
      let promiseAddress = new Promise((resolve, reject) => {
        addressList().then((res) => {
          console.log(res);
          this.addressData = res.data.data;
          resolve(res.data.data);
        });
      });
      let promiseLevel = new Promise((resolve, reject) => {
        levelList().then((res) => {
          console.log(res);
          this.levelData = res.data.data;
          resolve(res.data.data);
        });
      });

      Promise.all([promiseAddress, promiseLevel]).then((res) => {
        console.log(res);
        this.loading = false;
      });
    },
    //获取需要修改数据
    getupData() {
      showupdataMessage(this.$route.query).then((res) => {
        let data = res.data.data[0];
        // console.log(data, 456);
        this.messageForm.uname = data.jrname;
        // console.log(data.jrname);
        this.messageForm.addressid = data.jraddressesid;
        this.messageForm.levelid = data.jrlevel;
        this.messageForm.tel = data.jrtel;
      });
    },
    //修改数据
    upData() {
      let data = this.messageForm;
      this.updataForm.id = this.$route.query.id;
      this.updataForm.uname = data.uname;
      this.updataForm.addressid = data.addressid;
      this.updataForm.levelid = data.levelid;
      this.updataForm.tel = data.tel;
      console.log(this.updataForm);
      updataMessage(this.updataForm).then((res) => {
        console.log(res);
        if ((res.status = 200)) {
          this.open3();
          this.$router.push("/message/messagelist");
        } else {
          this.open4();
        }
      });
    },
    //图片上传数量限制
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    // 图片1上传成功时执行
    upsuccess1(response1, file, fileList1) {
      console.log(response1, file, fileList1);
      this.messageForm.weixin = response1.headerurl;
    },
    //图片2上传成功后执行
    upsuccess2(response2, file, fileList2) {
      console.log(response2, file, fileList2);
      this.messageForm.tcoin = response2.headerurl;
    },
    //提交数据
    submitForm(formName) {
      //   console.log(formName);
      console.log(this.messageForm);
      console.log(this.fileList);
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
    // 重制数据
    resetForm(formName) {
      console.log(formName);
      this.$refs[formName].resetFields();
    },
    open2() {
      this.$message({
        message: "添加信息成功!",
        type: "success",
      });
    },
    open3() {
      this.$message({
        message: "修改信息成功!",
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
    this.getData();
    console.log(this.$route.query);
    if (this.$route.query.id) {
      console.log(123);
      this.isUpdata = true;
      this.getupData();
    }
  },
};
</script>
<style scoped>
.app-container {
  width: 600px;
  margin: 100px auto;
}
</style>