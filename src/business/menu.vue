<template>
  <el-aside>
    <el-row class="tac">
      <el-col :span="24">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="filesystem"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="changeMenu"
          menu-trigger="click"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>demo演示地址</span>
            </template>
            <el-menu-item index="filesystem">filesystem</el-menu-item>
            <el-menu-item index="map">map</el-menu-item>
            <el-menu-item index="es">es</el-menu-item>
            <!--<el-menu-item index="zxskbg">zxskbg</el-menu-item>-->
          </el-submenu>
          <!--<el-submenu index="2">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-menu"></i>-->
              <!--<span>其他</span>-->
            <!--</template>-->
            <!--<el-menu-item index="1-1">spring</el-menu-item>-->
            <!--<el-menu-item index="1-2">address</el-menu-item>-->
            <!--<el-menu-item index="1-3">demo</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="3">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-menu"></i>-->
              <!--<span>vue element 使用</span>-->
            <!--</template>-->
            <!--<el-menu-item index="1-1">axios</el-menu-item>-->
            <!--<el-menu-item index="1-2">store</el-menu-item>-->
            <!--<el-menu-item index="1-3">table</el-menu-item>-->
          <!--</el-submenu>-->

        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
  export default {
    name: "menu",
    mounted(){
      this.$router.push({name:'filesystem'})
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeMenu(index){
        this.$router.push({name:index})
      }
    }
  }
</script>

<style scoped>

</style>
