<template>
  <div>
    <!-- 系统 Logo -->
    <el-aside class="header-logo" :width="asideWidth">
    <!--@click="$router.push({ name: 'User' })"-->
      <div >
        <a v-if="foldAside">系统</a>
        <a v-else>后台</a>
      </div>
    </el-aside>
    <el-aside class="aside" :width="asideWidth" :class='"icon-size-" + iconSize'>
      <el-scrollbar style="height: 100%; width: 100%;">
        <!--
                default-active 表示当前选中的菜单，默认为 home。
                collapse 表示是否折叠菜单，仅 mode 为 vertical（默认）可用。
                collapseTransition 表示是否开启折叠动画，默认为 true。
                background-color 表示背景颜色。
                text-color 表示字体颜色。
            -->
        <el-menu :default-active="menuActiveName || 'User'" :collapse="!foldAside" :collapseTransition="false"
                 background-color="#263238" text-color="#8a979e">
          <el-menu-item index="gait" @click="$router.push({ name: 'Gait' })">
            <i class="el-icon-user"></i>
            <span>步态识别</span>
          </el-menu-item>
          <el-menu-item index="gait" @click="$router.push({ name: 'Gait' })">
            <i class="el-icon-user"></i>
            <span>行人重识别</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: ['foldAside'],
  data() {
    return {
      // 保存当前选中的菜单
      menuActiveName: 'User',
      // 保存当前侧边栏的宽度
      asideWidth: '200px',
      // 用于拼接当前图标的 class 样式
      iconSize: 'true'
    }
  },
  watch: {
    // 监视是否折叠侧边栏，折叠则宽度为 64px。
    foldAside(val) {
      this.asideWidth = val ? '200px' : '64px'
      this.iconSize = val
    }
  },
  beforeMount() {
    this.menuActiveName = this.$route.name
    // this.$router.push({ name: 'User' })
  }
}
</script>

<style>
.aside {
  margin-bottom: 0;
  height: 100%;
  max-height: calc(100% - 50px);
  width: 100%;
  max-width: 200px;
  background-color: #263238;
  text-align: left;
  right: 0;
}

.header-logo {
  background-color: #404c4b;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 200px;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0;
  cursor: pointer;
}
.el-submenu .el-menu-item {
  max-width: 200px !important;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.icon-size-false i {
  font-size: 30px !important;
}
.icon-size-true i {
  font-size: 18px !important;
}
</style>
