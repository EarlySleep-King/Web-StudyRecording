<template>
  <div class="main">
    <header>
      {{ flag.title }}
    </header>
    <nav>
      <ul v-if="picflag">
        <li v-for="item in navList" :key="item.id" @click="clickPush(item)">
          <i :class="item.pic1">{{ item.name }}</i>
        </li>
      </ul>
      <ul v-else>
        <li v-for="item in navList" :key="item.id" @click="clickPush(item)">
          <i :class="item.pic2">{{ item.name }}</i>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picflag: true,
      flag: {
        id: 1001,
        title: "银行列表",
        name: "首页",
        path: "/",
        pic1: "el-icon-star-on",
        pic2: "el-icon-star-off",
      },
      navList: [
        {
          id: 1001,
          title: "银行列表",
          name: "首页",
          path: "/",
          pic1: "el-icon-star-on",
          pic2: "el-icon-star-off",
        },
        {
          id: 1002,
          title: "职员列表",
          name: "职员",
          path: "/clerk",
          pic1: "el-icon-user",
          pic2: "el-icon-user-solid",
        },
      ],
    };
  },
  methods: {
    clickPush(item) {
      if (item.id == 1001) {
        this.picflag = true;
        sessionStorage.setItem("picflag", JSON.stringify(this.picflag));
      } else {
        this.picflag = false;
        sessionStorage.setItem("picflag", JSON.stringify(this.picflag));
      }

      if (item.path != this.flag.path) {
        sessionStorage.setItem("flag", JSON.stringify(item));
        this.flag = item;
        this.$router.push(item.path);
      }
    },
  },
  created() {
    this.flag = JSON.parse(sessionStorage.getItem("flag"))
      ? JSON.parse(sessionStorage.getItem("flag"))
      : this.flag;
      this.picflag = JSON.parse(sessionStorage.getItem("picflag"))
  },
};
</script>
<style scoped>
main {
  position: relative;
}
header {
  position: fixed;
  top: 0px;
  height: 1rem;
  width: 100%;
  font-size: 30px;
  text-align: center;
  line-height: 1rem;
}
nav {
  height: 1rem;
  position: fixed;
  bottom: 0px;
  width: 100%;
}
nav ul {
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul li {
  line-height: 1.5rem;
  height: 1.5rem;
  font-size: 25px;
}
</style>