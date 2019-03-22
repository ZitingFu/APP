<template>
  <div class="My">
  	<img class="" src="http://s2.pailifan.com/image/images/a9a44bb5b6ad6c3288a7f8e4485a925f.png" width="100%" />
  	<div class="index_head FAFAFA">
	 		<van-tabbar
			  v-model="active"
			  active-color="#07c160"
			>
			  <van-tabbar-item icon="pending-payment">待付款</van-tabbar-item>
			  <van-tabbar-item icon="description">待发货</van-tabbar-item>
			  <van-tabbar-item icon="logistics">待收货</van-tabbar-item>
			  <van-tabbar-item icon="contact">评论</van-tabbar-item>
			   <van-tabbar-item icon="after-sale">退款/售后</van-tabbar-item>
			</van-tabbar>
		</div>
	 	<div class="index_center">
	 		
	 		<router-link to="/ShoppingCart">
	 			<van-cell  value="20" icon="completed" is-link>
				  <template slot="title">
				    <span class="custom-text">购物车</span>
				  </template>
				</van-cell>
			</router-link>
	 		<router-link to="/AllOrder">
	 			<van-cell class="FAFAFA borderTop" value="3" icon="completed" is-link>
				  <template slot="title">
				    <span class="custom-text">全部订单</span>
				  </template>
				</van-cell>
			</router-link>
			
			<router-link to="/News">
	 			<van-cell value="0" icon="coupon-o"  is-link>
				  <template slot="title">
				    <span class="custom-text">消息</span>
				  </template>
				</van-cell>
			</router-link>
			<router-link to="/Coupon">
	 			<van-cell class="bordercenter" value="5" icon="coupon-o" is-link>
				  <template slot="title">
				    <span class="custom-text">关注</span>
				  </template>
				</van-cell>
			</router-link>
			<router-link to="/Coupon">
	 			<van-cell value="6" class="FAFAFA" icon="coupon-o" is-link>
				  <template slot="title">
				    <span class="custom-text">收藏</span>
				  </template>
				</van-cell>
			</router-link>
			
			<router-link to="/Coupon">
	 			<van-cell value="1" icon="coupon-o" is-link>
				  <template slot="title">
				    <span class="custom-text">我的优惠卷</span>
				  </template>
				</van-cell>
			</router-link>
			<router-link to="/Coupon">
				<van-cell value="200" class="borderTop" icon="shop-o" is-link>
				  <template slot="title">
				    <span class="custom-text">足迹</span>
				  </template>
				</van-cell>
			</router-link>	
			
		</div>
		<!--底部-->
		<div class="index_footer">
				<bottomfooter></bottomfooter>
		</div> 
  </div>
</template>
<script>
import Below from './Below'	
export default {
	name:'My',
  data() {
    return {
    	active:6,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  },
  components:{
 		"bottomfooter":Below
 },
  methods: {
		
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.My{
		/*padding-bottom:0.8rem ;*/
    /*background-color: #f1f4f8;
    width: 100%;
    height: 100%;
    bottom: 0;
    top: 0;*/
		/*height: 100%;*/
	}
	.index_head  .van-tabbar--fixed{
		position: static;
	}


</style>
