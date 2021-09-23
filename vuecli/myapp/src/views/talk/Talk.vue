<template>
  <div>
    <div class="inputDiv">
      <input
        v-model="inputText"
        placeholder="请输入您的问题"
        v-on:keyup.enter="sendText"
      />
      <button @click="sendText">发送</button>
    </div>
    <div class="white">
    </div>
    <div class="Content">
      <ul>
        <li v-for="(item, index) in talkList" v-bind:key="index">
          <div class="rconversition">
            <!-- <div class="right"> -->
              <div class="rightSquare">
                {{ item.question }}
              </div>
              <img src="@/assets/me.jpg" class="rightJpg" />
            <!-- </div> -->
          </div>
          <div class="lconversition">
            <!-- <div class="left"> -->
              <img src="@/assets/you.jpg" class="leftJpg" />
              <div class="leftSquare">
                {{ item.answer }}
              </div>
            <!-- </div> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      inputText: "",
      talkList: [],
    };
  },
  methods: {
    scroll(){
      let htmlDom = document.documentElement;
      let hHeight = htmlDom.clientHeight; //视口高度
      // let scrollTop = htmlDom.scrollTop; //滚动了多少距离
      let scrollHeight = htmlDom.scrollHeight; //可滚动区域的高度
      if(scrollHeight>hHeight){
        console.log(123);
        htmlDom.scrollTop = scrollHeight - hHeight;
      }
    },
    sendText() {
      // console.log(this.inputText);
      let Url =
        "https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=" +
        this.inputText;
      axios
        .get(Url)
        .then((res) => {
          console.log(res.data.data.info.text);
          let question = this.inputText;
          let answer = res.data.data.info.text;
          let arr = { question, answer };
          this.talkList.push(arr);
          console.log(this.talkList);
          this.inputText = "";
          this.scroll();
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
};
</script>
<style scoped>
.inputDiv {
  height: 1.25rem;
  width: 100%;
  /* background-color: deepskyblue; */
  position: fixed;
  bottom: 1rem;
  display: flex;
  z-index: 10;
}
input {
  margin: 0.1rem;
  flex: 8;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
button {
  margin: 0.1rem;
  flex: 2;
}
.white{
  width: 100%;
  height: 1.2rem;
  background-color: white;
  position: fixed;
  bottom: 1rem;
}
.Content{
  margin-bottom: 2rem;
}
.rconversition,.lconversition {
  display: flex;
  margin: 0.15rem;
}
.rconversition{
  justify-content: flex-end;
}
.lconversition{
  justify-content: flex-start;
}
.right {
  float: right;
  overflow: hidden;
}
.rightJpg,
.leftJpg {
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 0.55rem;
}
.left {
  float: left;
  overflow: hidden;
}
.rightSquare,
.leftSquare,
img {
  display: inline-block;
}
.rightSquare,
.leftSquare {
  /* height: 1rem; */
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
  font-size: 0.35rem;
  margin: 0.3rem;
  /* line-height: 1rem; */
  border-radius: 0.25rem;
}
</style>