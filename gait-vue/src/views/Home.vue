<template>
  <!--
      v-loading、element-loading-text、element-loading-background、element-loading-spinner 用于定义加载的样式
   -->
  <el-container class="container" v-loading="false" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.8)"
                element-loading-spinner="el-icon-loading">
    <!-- 侧边栏 -->
    <Aside :foldAside="foldAside" />

    <el-container direction="vertical">
      <!-- 内容 -->
      <Content />
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import Content from "./Content";

export default {
  name: 'Home',
  components: {
    Aside,
    Content
  },
  data() {
    return {
      foldAside: true,
      character: 0
    }
  },
  methods: {
    foldOrOpen(data) {
      this.foldAside = data
    }
  },
  created() {
    // this.axios({
    //   url: "user/getCharacter",
    //   method: "GET",
    // }).then(response => {
    //   this.character = response.data;
    // })
  }
}
</script>
<style>
.container {
  height: 100%;
}
</style>
