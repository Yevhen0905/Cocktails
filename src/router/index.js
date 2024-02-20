import {createRouter, createWebHistory} from 'vue-router';
import { ROUTER_PATH } from '@/constants';
import Home from '../pages/Home.vue';
import Cocktail from '../pages/Cocktail.vue';
import CocktailRandom from '../pages/CocktailRandom.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATH.HOME,
      name: ROUTER_PATH.HOME,
      component: Home
    },
    {
      path: ROUTER_PATH.COCKTAIL,
      name: ROUTER_PATH.COCKTAIL,
      component: Cocktail
    },
    {
      path: ROUTER_PATH.COCKTAIL_RANDOM,
      name: ROUTER_PATH.COCKTAIL_RANDOM,
      component: CocktailRandom
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

export default router;
