import Vue from 'vue'
import Router from 'vue-router'

//下载需要的模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

//引入组件页面
import HelloWorld from '@/components/HelloWorld';
import SignIn from '@/components/SignIn';
import Register from '@/components/Register';
import Index from '@/components/Index';
import Microscouring from '@/components/Microscouring';
import News from '@/components/News';
import ShoppingCart from '@/components/ShoppingCart';
import My from '@/components/My';
import Coupon from '@/components/Coupon';
import AllOrder from '@/components/AllOrder';
import IM from '@/components/IM';

import { NavBar } from 'vant';
import { AddressEdit } from 'vant';
import { Card } from 'vant';
import { Stepper } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { CouponCell, CouponList } from 'vant';

//全局使用
Vue.use(NavBar);
Vue.use(AddressEdit);
Vue.use(Card);
Vue.use(Stepper);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(CouponCell).use(CouponList);

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
    },
	{
      path: '/Coupon',
      component: Coupon
   	},
	{
      path: '/AllOrder',
      component: AllOrder
   	},
	{
      path: '/IM',
      component: IM
   	}
  ],
  mode:"history"
})
