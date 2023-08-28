import { createRouter, createWebHistory }  from 'vue-router';
import LoginUser from '@/component/LoginUser.vue';
import CadastroUser from '@/component/CadastroUser.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: LoginUser
      },
      {
        path: '/cadastro',
        name: 'Cadastro',
        component: CadastroUser
      }
    ]
  })

export default router;