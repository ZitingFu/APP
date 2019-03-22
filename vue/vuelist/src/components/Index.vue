<template>
  <div class="Index">
  	<div class="searchInput">
  			<van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
  	</div>
  	<div class="index_head">
  		<!--轮播-->
  		<div class="index_head_swipe">
		 		<van-swipe :autoplay="3000">
				  <van-swipe-item v-for="(item, index) in imagesbanner" :key="index">
				   	<img style="width: 100%;" v-bind:src="item.img" alt="" />
				  </van-swipe-item>
				</van-swipe>
			</div>
			<!--分类-->
			<div class="index_head_swipe2">
				<van-swipe>
				  <van-swipe-item >
				   	<van-row gutter="0">
						  <van-col span="5" v-for="(item, index) in imageslist" :key="index">
						  	<div class="ico_img">
						  		<img v-bind:src="item.img"/>
						  	</div>
						  	<span>{{item.title}}</span>
						  </van-col>
						</van-row>
				  </van-swipe-item>
				  <van-swipe-item>
				   	<van-row gutter="0">
						   <van-col span="5" v-for="(item, index) in imageslist2" :key="index">
						  	<div>
						  		<img v-bind:src="item.img"/>
						  	</div>
						  	<span>{{item.title}}</span>
						  </van-col>
						</van-row>
				  </van-swipe-item>
				</van-swipe>
			</div>
		
		</div>
	 	<div class="index_center">
	 		
		</div>
		<!--底部-->
	 	<div class="index_footer">
				<bottomfooter></bottomfooter>
		</div> 
  	<!--<router-link to="/ShoppingCart">ShoppingCart</router-link>-->
  </div>
</template>
<script>
import Below from './Below'	
export default {
	name: 'Index',
  data() {
    return {
    	value:'',
    	imagesbanner:[
    				{
							id:0,
							img:'https://gw.alicdn.com/imgextra/i2/134/O1CN01kwFa071CrPa2ZQ0ov_!!134-0-lubanu.jpg',
							title:'天猫'
						},
						{
							id:1,
							img:'https://gw.alicdn.com/imgextra/i3/118/O1CN010i7fjX1Ck5FAMcLjR_!!118-0-lubanu.jpg',
							title:'聚划算'
						},
						{
							id:2,
							img:'https://gw.alicdn.com/imgextra/i1/109/O1CN01vs9vdV1CfxgCjK46W_!!109-0-lubanu.jpg',
							title:'天猫国际'
						}
    	],
    	imageslist: [
						{
							id:0,
							img:'https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp',
							title:'天猫'
						},
						{
							id:1,
							img:'https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp',
							title:'聚划算'
						},
						{
							id:2,
							img:'https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp',
							title:'天猫国际'
						},
						{
							id:3,
							img:'https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp',
							title:'外卖'
						},
						{
							id:4,
							img:'https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp',
							title:'天猫超市'
						},
						{
							id:5,
							img:'https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp',
							title:'充值中心'
						},
						{
							id:6,
							img:'https://gw.alicdn.com/tfs/TB1ydXzhCzqK1RjSZPcXXbTepXa-183-144.png?getAvatar=1_.webp',
							title:'飞猪旅行'
						},
						{
							id:7,
							img:'https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp',
							title:'领金币'
						},
						{
							id:8,
							img:'https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp',
							title:'拍卖'
						},
						{
							id:9,
							img:'https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp',
							title:'分类'
						}
      ],
    	imageslist2: [
						{
							id:0,
							img:'https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp',
							title:'天猫'
						},
						{
							id:1,
							img:'https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp',
							title:'聚划算'
						},
						{
							id:2,
							img:'https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp',
							title:'天猫国际'
						},
						{
							id:3,
							img:'https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp',
							title:'外卖'
						},
						{
							id:4,
							img:'https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp',
							title:'天猫超市'
						},
						{
							id:5,
							img:'https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp',
							title:'充值中心'
						},
						{
							id:6,
							img:'https://gw.alicdn.com/tfs/TB1ydXzhCzqK1RjSZPcXXbTepXa-183-144.png?getAvatar=1_.webp',
							title:'飞猪旅行'
						},
						{
							id:7,
							img:'https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp',
							title:'领金币'
						},
						{
							id:8,
							img:'https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp',
							title:'拍卖'
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
	.index_head_swipe .van-swipe{
		/*height:150px;*/
	}
	.index_head_swipe2 .van-swipe{
		/*height:191px;*/
	}
	.index_head_swipe2 img{
		width:0.61rem;
		height: 0.48rem;
		border-radius: 50%;
		margin:auto;
	}
	.index_head_swipe2 span{
		font-size:0.12rem ;
		color:rgb(102, 102, 102);
	}
	.index_head_swipe2 {
		background-color: #f1f4f8;
		text-align: center;
	}
	.index_head_swipe2 .van-swipe__indicator{
		background-color: #17335e;
	}
	.index_head_swipe2 .van-col--5{
		margin-top:0.04rem;
	}
	.index_head_swipe2 .van-col--5{
		width: 20%;
	}
	.index_head_swipe2  .van-swipe-item{
		padding-bottom: 3%;
	}
	.index_head_swipe2  .ico_img{
		margin-bottom:0.02rem;
	}
	.index_head_swipe3 .van-swipe{
		height:0.98rem;
		width: 100%;
	
	}
	.index_head_swipe3 .van-swipe-item,.index_head_swipe3 .van-swipe__track{
		width: 100% !important;
		height: 100% !important;
	}
	/*.index_head_swipe2  .van-swipe{
		display: flex;
    overflow: hidden;
    height: 160px;
    width: 375px;
    place-self: flex-start;
    position: relative;
	}*/
	.searchInput{
		/*position:fixed;
		top:0;
		left: 0;
		width:100%;
		z-index: 2;*/
	}
	.van-search{
		background: rgb(235, 20, 90) !important;
	}
	
</style>
