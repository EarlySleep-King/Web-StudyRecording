<template>
  <div v-bind:class="['container', flag.name]">
    <header>
      <span>返回首页</span>
      <p>{{ flag.title }}</p>
      <!-- <p>电影</p> -->
    </header>
    <nav>
      <ul>
        <!-- 使用循环需设定v-bind:key值，否则会报错 -->
        <li
          v-for="item in navList"
          v-bind:key="item.id"
          @click="clickPush(item)"
        >
          {{ item.title }}
        </li>
        <!-- <li @click="routerHandle1">电影</li>
        <li @click="routerHandle2">音乐</li>
        <li @click="routerHandle3">书籍</li>
        <li @click="routerHandle4">聊天</li> -->
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // flag: "/",
      // name: "movie"
      flag: {
        id: 1001,
        path: "/",
        name: "movie",
        title: "电影",
      },
      navList: [
        {
          id: 1001,
          path: "/",
          name: "movie",
          title: "电影",
        },
        {
          id: 1002,
          path: "/music",
          name: "music",
          title: "音乐",
        },
        {
          id: 1003,
          path: "/book",
          name: "book",
          title: "书籍",
        },
        {
          id: 1004,
          path: "/talk",
          name: "talk",
          title: "聊天",
        },
      ],
    };
  },
  methods: {
    clickPush(item) {
      console.log(item);
      if (this.flag.path != item.path) {
        sessionStorage.setItem("flag",JSON.stringify(item));
        // sessionStorage.setItem("flagName", item.name);
        // sessionStorage.setItem("flagId", item.id);
        // sessionStorage.setItem("flagPath", item.path);
        // sessionStorage.setItem("flagTitle", item.title);
        this.flag.path = item.path;
        this.$router.push(item.path);
        this.flag.name = item.name;
        this.flag.title = item.title;
      }
    },

    //旧方法，将所有方法写出

    // routerHandle1() {
    //   if (this.flag != "/") {
    //     this.flag = "/";
    //     this.$router.push("/");
    //     this.name = 'movie';
    //   }
    // },
    // routerHandle2() {
    //   if (this.flag != "/music") {
    //     this.flag = "/music";
    //     this.$router.push("/music");
    //     this.name = 'music';
    //   }
    // },
    // routerHandle3() {
    //   if (this.flag != "/book") {
    //     this.flag = "/book";
    //     this.$router.push("/book");
    //     this.name = 'book';
    //   }
    // },
    // routerHandle4() {
    //   if (this.flag != "/talk") {
    //     this.flag = "/talk";
    //     this.$router.push("/talk");
    //     this.name = 'talk';
    //   }
    // }
  },
  created() {
    this.flag = JSON.parse(sessionStorage.getItem('flag'))?JSON.parse(sessionStorage.getItem('flag')):this.flag;
    // this.flag = JSON.parse(sessionStorage.getItem('flag'));
    // this.flag.name = sessionStorage.getItem("flagName");
    // this.flag.id = sessionStorage.getItem("flagId");
    // this.flag.path = sessionStorage.getItem("flagPath");
    // this.flag.title = sessionStorage.getItem("flagTitle");
  },
};
</script>
<style scoped>
header,
nav {
  height: 1rem;
  width: 100%;
  background-color: dodgerblue;
  color: white;
  position: fixed;
}
header {
  top: 0;
  line-height: 1rem;
}
nav {
  bottom: 0;
}
nav ul {
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav li {
  font-size: 0.5rem;
}
header span {
  font-size: 0.3rem;
  position: absolute;
  left: 10px;
}
header p {
  font-size: 0.6rem;
  text-align: center;
}
.movie header,
.movie nav {
  background-color: dodgerblue;
}
.music header,
.music nav {
  background-color: rgb(95, 158, 160);
}
.book header,
.book nav {
  background-color: rgb(121, 85, 72);
}
.talk header,
.talk nav {
  background-color: lightblue;
}
</style>