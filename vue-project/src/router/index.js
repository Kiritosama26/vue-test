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
      component: () => import('../modules/Contador/components/Contador.vue')
    },
    {
      path: '/ListadeTareas',
      name: 'listadetareas',
      component: () => import('../modules/ListadeTareas/ListadeTareas.vue')
    },

    {
      path: '/Registro',
      name: 'registro',
      component: () => import('../modules/Registros/views/RegistroView.vue')
    }
  ]
})

export default router
