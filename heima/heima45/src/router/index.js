import Vue from 'vue'
import index from '../views/index/index.vue'
import login from '../views/login/login.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path:'/login',
      component:login
    },
    {
      path:'/index',
      component:index
    }
  ]
  
})

export default  router
