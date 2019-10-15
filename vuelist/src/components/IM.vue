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
		
		</div>
	 	<div class="index_center">
	 		<div class="">
	 				<!--<span class="fl-ri">
				 		<van-card class="" v-for="(item, index) in itemlist" :key="index"
						  v-bind:title="item.title"
						  v-bind:desc="item.desc"  
						  v-bind:thumb="item.imageURL"
						/>
	 				</span>-->
	 		</div>
			<div class="index_left">
	 				<span class="fl-le">
	 					<van-card class="" v-for="(item, index) in itemlist" :key="index"
						  v-bind:desc="item.desc"  
						  v-bind:thumb="item.imageURL"
						/>
	 				</span>
	 		</div>
		</div>
		<div class="index_footer">
			<van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch">发送</div>
			</van-search>
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
    	value:'',
    	itemlist:[
	        {
		        id:'0',
		        desc:'好的。我们将尽快发货。',
//		        title:'颈以待',
		        imageURL:'https://img.alicdn.com/imgextra/i2/29529879/O1CN01RDJrB32MqdEYQlmvE_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        }
        ]
    }
  },
  methods: {
		onSearch(){
			console.log(this.value)
		}
  }
}
</script>
<style scoped>
	.index_footer{
			position: fixed;
			width: 100%;
			bottom: 0;
			left: 0;
	}
  .van-card:not(:first-child){
		margin-top:0px;
	}
	.van-card__thumb{
		width: 34px;
		height: 34px;
	}
	.van-card__thumb img{
		border-radius:100%;
	}
	.van-card__content{
		height:30px;
	}
	.index_left{
		margin:8px 0 ;
	}
	/*.van-card__desc{
		line-height:34px;
	}*/
</style>
