import { createRouter,createWebHistory } from "vue-router";

import aboutUs from '../components/aboutUs/aboutUs.vue'
import notfoundcomponent from '../components/Notfound/notfoundcomponent.vue';
import home from '../components/HomeComponent/home.vue';
import maincomponent from '../components/maincomponent/maincomponent.vue';
import sign from '../components/Register&Login/mainsign.vue'
import addToCart from '../components/cart/addToCart.vue'

const routes = [
    {
      path: '',
      component: maincomponent,
      children: [
        {
            path:'',
            component:home 
        },
        {
            path:'/aboutus',
            component:aboutUs 
        },
        {
          path:'/cart',
          component:addToCart 
      }
      ],
    },
    {
        path:'/:catchAll(.*)',
        component:notfoundcomponent
    },
    {
      path:'/sign',
      component:sign 
    }
   
  ]



const router = createRouter({
    routes: routes,
    history:createWebHistory()
});

export default router;