import { createRouter, createWebHistory } from 'vue-router'
import Taiwan from '@/views/Taiwan.vue'
import detailList from '@/views/detailList.vue'
import dashboard from '@/views/dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: '詳細',
      component:dashboard ,
      beforeRouteEnter:(to,from)=>{
        console.log(to,from);
      }
    },
    
  ]
})

export default router
