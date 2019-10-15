<template>
  <div class="AllOrder">
  		<div class="index_head">
 			<router-link to="/My">
		 		<van-nav-bar 
		 			title="全部订单"
	 			 	left-text="返回"
	 			  	left-arrow
				>
				  <!--<van-icon name="edit" slot="right" />-->
				</van-nav-bar>
			</router-link>
		</div>
	 	<div class="index_center">
	 		 <!--商品列表-->
			<div class="commoditylist">
		 		<van-card 	v-for="(item, index) in itemlist" :key="index"
				  v-bind:num="item.num"
				  v-bind:tag="item.tag"
				  v-bind:price="item.price"
				  v-bind:desc="item.desc"  
				  v-bind:title="item.title"
				  v-bind:thumb="item.imageURL"
				  v-bind:origin-price="item.originprice"
				>
			  	<div slot="footer">
			  	 	<van-button size="mini">删除</van-button>
			    	<van-button size="mini">追加评论</van-button>
			 	 </div>
				</van-card>
			</div>
		</div>
		<!--底部-->
	 	<div class="index_footer">
				<!--<bottomfooter></bottomfooter>-->
		</div> 
  	<!--<router-link to="/ShoppingCart">ShoppingCart</router-link>-->
  </div>
</template>
<script>
//import Below from './Below'	
export default {
	name: 'AllOrder',
  data() {
    return {
    	itemlist:[
	        {
		        id:'0',
		        tag:'标签',
		        desc:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
		        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
		        imageURL:'https://img.alicdn.com/imgextra/i2/29529879/O1CN01RDJrB32MqdEYQlmvE_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		        price:'100.00',
		        originprice:'150.00',
		        num:1,
		        checked:false
	        },
	        {
		        id:'1',
		        tag:'标签',
		        desc:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
		        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
		        imageURL:'https://img.alicdn.com/imgextra/i4/12033258/O1CN012gBUcI1ZwCsglk2ws_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		        price:'80.00',
		        originprice:'150.00',
		        num:2,
		        checked:false
	        },
	        {
		        id:'2',
		        tag:'',
		        desc:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
		        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
		        imageURL:'https://img.alicdn.com/imgextra/i1/51078990/O1CN01aJ20q12GHT8BQqOq1_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		        price:'200.00',
		        originprice:'350.00',
		        num:1,
		        checked:false
	        }
        ]
    }
  },
  methods: {
		
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
