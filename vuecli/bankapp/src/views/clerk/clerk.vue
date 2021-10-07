<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.jrid">
        <div class="left">
          <img src="@/assets/bank.jpeg" />
        </div>
        <div class="right">
          <div class="rightTitle">
            <h3>{{ item.jrname }}</h3>
            <span>{{ item.levelname }}</span>
          </div>
          <div class="loc">{{ item.addressname }}</div>
          <div class="tel"><span>电话：{{ item.jrtel }}</span> <Img /></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Img from "./components/img.vue";
import { showMessage } from "@/api/user";
export default {
  components: {
    Img,
  },
  data() {
    return {
        messageList:[],
    };
  },
  methods:{
      showList(){
          showMessage().then((res)=>{
              console.log(res);
              this.messageList = res.data.data;
          })
      }
  },
  created(){
      this.showList()
  }
};
</script>
<style scoped>
li {
  margin: 10px 13px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
h3 {
  font-size: 20px;
}
.rightTitle {
  display: flex;
}
.rightTitle span {
  font-size: 15px;
  margin-left: 10px;
}
.loc,
.tel {
  font-size: 12px;
  color: #666;
}
.loc {
  margin: 10px 0px;
}
.tel {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
}
.left {
  flex: 3;
}
img {
  width: 100%;
}
.right {
  flex: 7;
  margin-left: 10px;
}
Img {
    display: inline-block;
}
</style>