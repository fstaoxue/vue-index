<template>
  <el-row>
    <el-col :offset="4" :span="16">
      <el-card :body-style="{ padding: '0px' }">
        <el-carousel :interval="5000" arrow="always" class="d_jump" :height="imgHeight">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <el-row>
              <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>
        <div style="padding: 14px;">
          <div class="bottom clearfix">
            <a href="https://github.com/fstaoxue/systembg" target="_blank">https://github.com/fstaoxue/systembg</a>
            <br>
            <a href="http://114.55.64.105:8088/zxstbg/login" target="_blank">
              http://114.55.64.105:8088/zxstbg/login</a>
            <br>
            <span>
              admin  admin123
             </span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "zxskbg",
    data() {
      return {
        imgList: [
          {id: 0, idView: require('@/assets/images/zxstbg/job.png')},
          {id: 1, idView: require('@/assets/images/zxstbg/role.png')},
          {id: 2, idView: require('@/assets/images/zxstbg/menu.png')},
          {id: 3, idView: require('@/assets/images/zxstbg/user.png')},
          {id: 4, idView: require('@/assets/images/zxstbg/log.png')},
          {id: 4, idView: require('@/assets/images/zxstbg/login.png')},
          {id: 4, idView: require('@/assets/images/zxstbg/home.png')},
        ],
        imgHeight: '600px'
      }
    }
  }
</script>

<style scoped>

</style>
