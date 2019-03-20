<template>
  <div class="Below">
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
		   <van-tabbar-item icon="home-o"><router-link to="/Microscouring">微淘</router-link></van-tabbar-item>
		  <van-tabbar-item icon="friends-o" info="5"><router-link to="/news">消息</router-link></van-tabbar-item>
		  <van-tabbar-item icon="setting-o" info="20"><router-link to="/ShoppingCart">购物车</router-link></van-tabbar-item>
		  <van-tabbar-item icon="setting-o" info="20"><router-link to="/my">我的淘宝</router-link></van-tabbar-item>
		</van-tabbar>
  </div>
</template>
<script>
	
export default {
 name: 'Below',
  data() {
    return {
    	active: 0
    }
  },
  methods: {
	
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.footer{
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
</style>
