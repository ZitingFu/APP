import Vue from 'vue'
import Router from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

import HelloWorld from '@/components/HelloWorld';
import SignIn from '@/components/SignIn';
import Register from '@/components/Register';
import Index from '@/components/Index';
import Microscouring from '@/components/Microscouring';
import News from '@/components/News';
import ShoppingCart from '@/components/ShoppingCart';
import My from '@/components/My';


import { NavBar } from 'vant';
import { AddressEdit } from 'vant';
import { Card } from 'vant';
import { Stepper } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';



Vue.use(NavBar);
Vue.use(AddressEdit);
Vue.use(Card);
Vue.use(Stepper);
Vue.use(Checkbox).use(CheckboxGroup);

Vue.use(Router)
Vue.use(ElementUI);
Vue.use(Vant);


export default new Router({
  	routes: [
  	{
      path: '/',
      component: Index
   	},
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/SignIn',
      component:SignIn 
    },
    {
      path: '/Register',
      component:Register 
    },
    {
      path: '/My',
      component:My 
    },
    {
      path: '/ShoppingCart',
      component:ShoppingCart 
    },
    {
      path: '/News',
      component:News 
    },
    {
      path: '/Microscouring',
      component:Microscouring 
    }
  ],
  mode:"history"
})
