import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import axios from "axios";

import VideoPlayer from 'vue-video-player/src'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'


createApp(App).use(router).use(ElementPlus).use(VideoPlayer).mount('#app')
