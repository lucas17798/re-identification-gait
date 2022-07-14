<template>
  <el-row id="up" :gutter="2">
    <el-col :span="1" :offset="3">
      <div style="margin-top: 6px">ID</div>
    </el-col>
    <el-col :span="3">
      <el-input v-model="id"></el-input>
    </el-col>
    <el-col :span="2">
      <div style="margin-top: 6px">姓名</div>
    </el-col>
    <el-col :span="3">
      <el-input v-model="name"></el-input>
    </el-col>
    <el-col :span="2">
      <el-button @click="getFile">选择视频</el-button>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" @click="addInformation">添加信息</el-button>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="2">
      <el-button class="button" type="primary">上传视频进行步态分析</el-button>
    </el-col>
    <input type="file" ref="addFile" style="display: none;" v-on:change="addInformationUpload($event)">
  </el-row>
  <div class="home" >
    <input type="file" ref="file" style="display: none;" v-on:change="handleFileUpload($event)">
    <video-player class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions">
    </video-player>
  </div>
</template>

<script>

import {postUpload} from "@/utils/axios-new";

export default {
  name: 'Gait',
  // components: {
  //   videoPlayer
  // },
  data() {
    return {
      id: '',
      name: '',
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4", // 类型
          // src: 'C:\\Users\\lizihan\\Desktop\\storm1\\20195794-李子涵-大作业\\20195794-李子涵\\大作业.mp4' // url地址
          // src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
          src: 'http://127.0.0.1:5000/video'
        }],
        // poster: 'C:\\Users\\lizihan\\Desktop\\e31b4c5c56520eecd1e21697a98fa94f.jpg', // 封面地址
        poster: '',
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      }
    }
  },
  methods:{
    getAddFile () {
      this.$refs.addFile.click()
    },
    getFile () {
      this.$refs.file.click()
    },
    addInformation(){
      if (this.id == ''){
        this.$message.error('ID不可为空')
        return
      }
      if (this.name == ''){
        this.$message.error('姓名不可为空')
        return
      }
      if (this.$refs.file.files[0] == null){
        this.$message.error('请选择上传文件')
        return
      }
      let formData = new FormData()
      let file = this.$refs.file.files[0]
      formData.append('file',file)
      formData.append('id',this.id)
      formData.append('name',this.name)
      this.onUpload('upload2',formData)
    },
    addInformationUpload(event){
      event.preventDefault();
    },
// 获取文件
    handleFileUpload(event){
      // 阻止发生默认行为
      event.preventDefault();
      let formData = new FormData()
      let file = this.$refs.file.files[0]
      formData.append('file',file)
      this.onUpload('upload',formData)
    },
// 上传文件
    onUpload (url,formData) {
      postUpload(url,formData).then((res) => {
        this.$message.success(res.data)
      }).catch((e) => {
        this.$message.error(e.message)
      })
    },
  }
}
</script>

<style>
.home {
  width: 60%;
  height: 60%;
  margin-left: 20%;
  margin-top: 2%;
}

#up {
  height: 60px;
}

.button {
  margin-bottom: 20px;
  margin-right: 10px;
}
</style>
