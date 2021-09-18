<template>
  <div>
    <ul>
      <li v-for="(item,index) in talkList" v-bind:key="index">
        <div>
          <div class="right">
            <div>{{ item.question }}</div>
            <img src="@/assets/me.jpg" class="rightJpg">
          </div>
        </div>
        <div>
          <div class="left">
            <img src="@/assets/you.jpg" class="leftJpg">
            <div>{{ item.answer }}</div>
          </div>
        </div>
      </li>
    </ul>

    <div class="inputDiv">
      <input v-model="inputText" placeholder="请输入您的问题" v-on:keyup.enter="sendText">
      <button @click="sendText">发送</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      inputText: "",
      talkList:[],

    };
  },
  methods:{
    sendText(){
      // console.log(this.inputText);
      let Url = 'https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=' + this.inputText;
      axios.get(Url).then((res) => {
        console.log(res.data.data.info.text);
        let question = this.inputText;
        let answer = res.data.data.info.text;
        let arr = {question,answer};
        this.talkList.push(arr);
        console.log(this.talkList);
        this.inputText = "";
      }).catch(() => {
        console.log('error');
      })
    },
  }
};
</script>
<style scoped>
  .inputDiv{
    height: 1.25rem;
    width: 100%;
    /* background-color: deepskyblue; */
    position: fixed;
    bottom: 1rem;
    display: flex;
  }
  input{
    margin: 0.1rem;
    flex: 8;
    border: none;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  button{
    margin: 0.1rem;
    flex: 2;
  }
  .right{
    float: right;
    overflow: hidden;
  }
  .rightJpg,.leftJpg{
    height: 1.1rem;
    width: 1.1rem;
    border-radius: 0.55rem;
  }
  .left{
    float: left;
    overflow: hidden;
  }
</style>