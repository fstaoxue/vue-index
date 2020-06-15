<template>
  <el-container>
    <!-- 顶栏 -->
    <el-header height="60px">
      <h2>Demo演示地址</h2>
    </el-header>
    <!-- 嵌套容器 -->
    <el-container>
      <!-- 侧边导航菜单 -->
      <Menu></Menu>
      <!-- 内容 -->
      <el-main style="height: calc(90vh);">
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 底栏 -->
    <el-footer height="30px">&copy; 2020</el-footer>
  </el-container>
</template>

<script>
  import Menu from './menu'
  export default {
    name: "index",
    components:{
      Menu
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #909399;
    color: white;
  }
  .el-footer {
    background-color: #909399;
    color: black;
    text-align: center;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-main {
    background-color: white;
  }
</style>
