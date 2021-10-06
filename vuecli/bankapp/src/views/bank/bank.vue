<template>
  <div>
    <ul>
      <li v-for="item in bankData" :key="item.addressid">
        <div class="left">
          <img src="@/assets/bank.jpeg" />
        </div>
        <div class="right">
          <h3>{{ item.addressname }}</h3>
          <div class="moredata">
            <User :id="item.addressid" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import User from "./components/user.vue";
import { bankList } from "@/api/bank";
export default {
  components: {
    User,
  },
  data() {
    return {
      bankData: [],
    };
  },
  methods: {
    getList() {
      bankList().then((res) => {
        console.log(res);
        this.bankData = res.data.data;
      });
    },
  },
  created() {
    this.getList();
  },
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
  /* align-items: center; */
  justify-content: space-around;
}
.left {
  flex: 1;
  margin-top: 20px;
}
.right {
  margin-top: 20px;
  flex: 1;
  margin-left: 10px;
}
img {
  width: 100%;
}
h3 {
  /* flex-grow: 1; */

  font-size: 20px;
}
</style>