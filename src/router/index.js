import { createWebHistory, createRouter } from 'vue-router';
// import pages
import Landing from '../pages/Landing.vue';
import Info from '../pages/Info.vue';
import AddDebt from '../pages/AddDebt.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import PassReminder from '../pages/PassReminder.vue';
import DebtView from '../pages/DebtView.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path:'/add-debt',
    name: 'AddDebt',
    component: AddDebt
  },
  {
    path: '/add-debt-auth',
    name: 'AddAuthDebt',
    component: AddDebt
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/pass-reminder',
    name: 'PassReminder',
    component: PassReminder
  },
  {
    path: '/debt-view',
    name: 'DebtView',
    component: DebtView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
