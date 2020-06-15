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
          <span>filesystem</span>
          <div class="bottom clearfix">
            <a href="https://github.com/fstaoxue/vue-index" target="_blank">https://github.com/fstaoxue/vue-index</a>
            <br>
            <a href="http://114.55.64.105:8085/es/index" target="_blank">
              http://114.55.64.105:8085/es/index</a>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "es",
    data() {
      return {
        imgList: [
          {id: 0, idView: require('@/assets/images/es-img/import.png')},
          {id: 1, idView: require('@/assets/images/es-img/mysql.png')},
          {id: 2, idView: require('@/assets/images/es-img/esquery.png')},
          {id: 3, idView: require('@/assets/images/es-img/eshead.png')},
        ],
        imgHeight:'600px'
      }
    }
  }
</script>

<style scoped>

</style>
