<template>
  <div v-loading.fullscreen="loading" element-loading-text="加载中……">
    <aplayer
      :music="music"
    />
    <div class="list">
      <ul>
        <li class="title">
          <div class="num">序号</div>
          <div class="name">歌曲名称</div>
          <div class="singer">艺人</div>
        </li>
        <li @click="clickMusic(item.id)" v-for="(item, index) in listData" :key="item.id" class="sing_li">
          <div class="num">{{ index + 1 }}</div>
          <div class="name">{{ item.name }}</div>
          <div class="singer">{{ item.ar[0].name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import aplayer from "vue-aplayer";
export default {
  components: {
    aplayer,
  },
  data() {
    return {
      listData: [],
      loading: true,
      music: {
        title: '总有一天你会出现在我身边',
        artist: '棱镜',
        src: "http://m10.music.126.net/20210917090739/040aca18aba7cc0d30cfa0121bfa890b/ymusic/702e/91f7/9ece/095b054b9c0c0236a1b62a2b3051754d.mp3",
        pic: 'http://p2.music.126.net/RfUHXkanpxImcaGqFNWBeA==/109951163598901405.jpg',
      }
    };
  },
  methods: {
    clickMusic(id){
      let birdUrl = 'https://bird.ioliu.cn/netease/song?id=' + id;
      axios.get(birdUrl).then((res) => {
        console.log(res);
        let newMusic = {
          title: res.data.data.name,
          artist: res.data.data.ar[0].name,
          src: res.data.data.mp3.url,
          pic: res.data.data.al.picUrl,
        };
        console.log(newMusic);
        this.music = newMusic;
      })
    },
    getList() {
      let birdUrl = "https://bird.ioliu.cn/netease/playlist?id=6614342492";
      axios.get(birdUrl).then((res) => {
        console.log(res);
        this.listData = res.data.playlist.tracks;
        this.loading = false;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<style scoped>
.title{
  border-bottom: 1px solid rgba(111, 111, 111, 0.4);
}
li {
  display: flex;
  justify-content: space-around;
  font-size: 0.4rem;
  margin: 0.15rem;
}
.sing_li:nth-child(odd){
  background-color: rgba(95, 158, 160,0.3);
}
.num {
  flex: 0.8;
}
.name {
  flex: 3;
}
.singer {
  flex: 2;
}
.num,
.name,
.singer {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>