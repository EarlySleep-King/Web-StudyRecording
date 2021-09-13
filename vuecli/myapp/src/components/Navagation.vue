<template>
  <div class="container">
    <header>
      <span>返回首页</span>
      <p>电影</p>
    </header>
    <nav>
      <ul>
        <li>电影</li>
        <li>音乐</li>
        <li>书籍</li>
        <li>聊天</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
header,nav{
  height: 1rem;
  width: 100%;
  background-color: dodgerblue;
  color: dimgray;
  position: fixed;
}
header{
  top: 0;
  line-height: 1rem;
}
nav{
  bottom: 0;
}
nav ul{
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav li{
  font-size: 0.5rem;
}
header span{
  font-size: 0.3rem;
  position: absolute;
  left: 10px;
}
header p{
  font-size: 0.6rem;
  text-align: center;
}
</style>