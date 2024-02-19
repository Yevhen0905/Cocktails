import {createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import Cocktail from '../pages/Cocktail.vue';
import CocktailRandom from '../pages/CocktailRandom.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cocktails/:id',
      name: 'cocktail',
      component: Cocktail
    },
    {
      path: '/random',
      name: 'cocktailRandom',
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
