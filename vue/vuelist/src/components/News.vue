<template>
  <div class="News">
  	<div class="index_head">
	 		<router-link to="/My">
		 		<van-nav-bar 
		 			title="我的消息"
	 			 	left-text="返回"
	 			  left-arrow
				>
				  <van-icon name="plus" slot="right" />
				</van-nav-bar>
			</router-link>
			<van-search placeholder="请根据名字搜索" v-model="value" />
		</div>
	 	<div class="index_center">
	 		<router-link to="/IM">
		 		<van-card class="borderTop" v-for="(item, index) in itemlist" :key="index"
				  v-bind:title="item.title"
				  v-bind:desc="item.desc"  
				  v-bind:thumb="item.imageURL"
				/>
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
	name:'News',
  data() {
    return {
    	value:'',
    	itemlist:[
	        {
		        id:'0',
		        desc:'好的。我们将尽快发货。',
		        title:'颈以待',
		        imageURL:'https://img.alicdn.com/imgextra/i2/29529879/O1CN01RDJrB32MqdEYQlmvE_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        },
	        {
		        id:'1',
		        desc:'有什么可以帮助你',
		        title:'米克屋',
		        imageURL:'https://img.alicdn.com/imgextra/i4/12033258/O1CN012gBUcI1ZwCsglk2ws_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		       
	        },
	        {
		        id:'2',
		        desc:'实在很抱歉',
		        title:'鞋子',
		        imageURL:'https://img.alicdn.com/imgextra/i4/116364591/O1CN012bCtQS1jmiqGwKBpO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        },
	        {
		        id:'3',
		        desc:'请放心',
		        title:'孕妇裙',
		        imageURL:'https://img.alicdn.com/imgextra/i2/52630271/O1CN011Ds9nXe68MP8UDR_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		       
	        },
	        {
		        id:'4',
		        desc:'好的',
		        title:'神帝',
		        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        },
	        {
		        id:'1',
		        desc:'有什么可以帮助你',
		        title:'米克屋',
		        imageURL:'https://img.alicdn.com/imgextra/i4/12033258/O1CN012gBUcI1ZwCsglk2ws_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		       
	        },
	        {
		        id:'2',
		        desc:'实在很抱歉',
		        title:'鞋子',
		        imageURL:'https://img.alicdn.com/imgextra/i4/116364591/O1CN012bCtQS1jmiqGwKBpO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        },
	        {
		        id:'3',
		        desc:'请放心',
		        title:'孕妇裙',
		        imageURL:'https://img.alicdn.com/imgextra/i2/52630271/O1CN011Ds9nXe68MP8UDR_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		       
	        },
	        {
		        id:'4',
		        desc:'好的',
		        title:'神帝',
		        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        },
	        {
		        id:'1',
		        desc:'有什么可以帮助你',
		        title:'米克屋',
		        imageURL:'https://img.alicdn.com/imgextra/i4/12033258/O1CN012gBUcI1ZwCsglk2ws_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		       
	        },
	        {
		        id:'2',
		        desc:'实在很抱歉',
		        title:'鞋子',
		        imageURL:'https://img.alicdn.com/imgextra/i4/116364591/O1CN012bCtQS1jmiqGwKBpO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        },
	        {
		        id:'3',
		        desc:'请放心',
		        title:'孕妇裙',
		        imageURL:'https://img.alicdn.com/imgextra/i2/52630271/O1CN011Ds9nXe68MP8UDR_!!0-saturn_solar.jpg_220x220.jpg_.webp',
		       
	        },
	        {
		        id:'4',
		        desc:'好的',
		        title:'神帝',
		        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
	        }
        ]
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
	.van-card__thumb{
		width: 0.45rem;
		height: 0.45rem;
	}
	.van-card__content{
		height:auto;
	}
	.van-card__title{
		line-height: 0.24rem;
	}
	.van-card {
		background-color:#fff;
	}
	.index_center{
		margin-top:2%;
		/*width:95%;*/
		/*margin:auto;*/
		
	}
	.van-card__thumb img{
		border-radius:100%;
	}
	.van-card:not(:first-child){
		margin-top:0px;
	}
</style>
