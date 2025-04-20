import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path:'/',
      name: 'home',
      component: Homeview

    }, */
     {
      path: '/Contador',
      name: 'contador',
      component: () => import('../components/Contador.vue')
    },
    {
      path: '/ListadeTareas',
      name: 'listadetareas',
      component: () => import('../components/ListadeTareas.vue')
    }
  ]
})

export default router
