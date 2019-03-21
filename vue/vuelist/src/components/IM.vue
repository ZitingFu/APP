<template>
  <div class="IM">
  	<div class="index_head">
	 		<router-link to="/News">
		 		<van-nav-bar 
		 			title="聊天消息"
	 			 	left-text="返回"
	 			  left-arrow
				>
				  <van-icon name="shop-o" slot="right" />
				</van-nav-bar>
			</router-link>
			<!--<van-search placeholder="请根据名字搜索" v-model="value" />-->
		</div>
	 	<div class="index_center">
			 <!--<Main></Main>-->
		</div>
  </div>
</template>
<script>
//import Main from '../views/main'	
export default {
	name:'IM',
	 components: {
//  Main
  },
  data() {
    return {
    	
    }
  },
  methods: {
		
  }
}
</script>
<style scoped>


</style>
