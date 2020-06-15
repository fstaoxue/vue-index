import Vue from 'vue'
import Router from 'vue-router'
import index from '@/business/index'
import filesystem from '@/business/location/filesystem'
import es from '@/business/location/es'
import map from '@/business/location/map'
import zxskbg from '@/business/location/zxskbg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/filesystem',
          name: 'filesystem',
          component: filesystem,
        },
        {
          path: '/es',
          name: 'es',
          component: es,
        },
        {
          path: '/map',
          name: 'map',
          component: map,
        },
        {
          path: '/zxskbg',
          name: 'zxskbg',
          component: zxskbg,
        }
      ]
    },
  ]
})
