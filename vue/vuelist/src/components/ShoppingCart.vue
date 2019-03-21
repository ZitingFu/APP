<template>
  <div class="ShoppingCart">
  	<router-link to="/My">
        <div class="index_head">
            <van-nav-bar
            title="购物车"
            left-text="返回"
            right-text="管理"
            left-arrow
            />
        </div>
   </router-link> 
	 	<div class="index_center">
	 		<div class="index_center_item" 	v-for="(item, index) in itemlist" :key="index">
	 			 <!--复选框-->
	 		 	<div class="checkbox">
			 		<van-checkbox v-model="item.checked" v-on:change="checkedclick(item)"></van-checkbox>
				</div>
    			 <!--商品列表-->
    			 <div class="commoditylist">
    			 		<van-card 
    					  v-bind:num="item.num"
    					  v-bind:tag="item.tag"
    					  v-bind:price="item.price"
    					  v-bind:desc="item.desc"  
    					  v-bind:title="item.title"
    					  v-bind:thumb="item.imageURL"
    					  v-bind:origin-price="item.originprice"
    					>
    				  <div slot="footer">
    				    <van-stepper v-model="item.num" />
    				  </div>
    					</van-card>
    			 </div>
	 		</div>
        </div>
		<div class="index_Submit">
			<van-submit-bar
			  v-bind:price="allprice*100"
			  button-text="提交订单"
			  @submit="onSubmit"
				>
			  <van-checkbox v-model="checkedlist"  v-on:change="checkedlistclick">全选</van-checkbox>
			  <span slot="tip">
			    你的收货地址不支持同城送, <span>修改地址</span>
			  </span>
			</van-submit-bar>
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
	name: 'ShoppingCart',
  data() {
    return {
        allprice:0,
        value:1,
        checkedlist:false,
        itemlist:[
        {
        id:'0',
        tag:'标签',
        desc:'',
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
        desc:'',
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
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/51078990/O1CN01aJ20q12GHT8BQqOq1_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'200.00',
        originprice:'350.00',
        num:1,
        checked:false
        },
        {
        id:'3',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i4/116364591/O1CN012bCtQS1jmiqGwKBpO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'120.00',
        originprice:'150.00',
        num:1,
        checked:false
        },
        {
        id:'4',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'90.00',
        originprice:'140.00',
        num:1,
        checked:false
        },
        {
        id:'5',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'98.00',
        originprice:'150.00',
        num:1,
        checked:false
        },
        {
        id:'6',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/329240020/O1CN01zkPXuB1C1CQ8QHPAO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'89.00',
        originprice:'130.00',
        num:3,
        checked:false
        },
        {
        id:'7',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i2/52630271/O1CN011Ds9nXe68MP8UDR_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'356.00',
        originprice:'450.00',
        num:1,
        checked:false
        },
        {
        id:'8',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i3/15495779/TB22rYxl5QnBKNjSZFmXXcApVXa_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'440.00',
        originprice:'500.00',
        num:1,
        checked:false
        },
        {
        id:'9',
        tag:'标签',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i2/29529879/O1CN01RDJrB32MqdEYQlmvE_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'100.00',
        originprice:'150.00',
        num:1,
        checked:false
        },
        {
        id:'10',
        tag:'标签',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i4/12033258/O1CN012gBUcI1ZwCsglk2ws_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'80.00',
        originprice:'150.00',
        num:2,
        checked:false
        },
        {
        id:'11',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/51078990/O1CN01aJ20q12GHT8BQqOq1_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'200.00',
        originprice:'350.00',
        num:1,
        checked:false
        },
        {
        id:'12',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'//img.alicdn.com/imgextra/i4/116364591/O1CN012bCtQS1jmiqGwKBpO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'120.00',
        originprice:'150.00',
        num:1,
        checked:false
        },
        {
        id:'13',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'90.00',
        originprice:'140.00',
        num:1,
        checked:false
        },
        {
        id:'14',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'98.00',
        originprice:'150.00',
        num:1,
        checked:false
        },
        {
        id:'15',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/329240020/O1CN01zkPXuB1C1CQ8QHPAO_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'89.00',
        originprice:'130.00',
        num:3,
        checked:false
        },
        {
        id:'16',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i2/52630271/O1CN011Ds9nXe68MP8UDR_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'356.00',
        originprice:'450.00',
        num:1,
        checked:0
        },
        {
        id:'17',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i3/15495779/TB22rYxl5QnBKNjSZFmXXcApVXa_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'440.00',
        originprice:'500.00',
        num:1,
        checked:false
        },
        {
        id:'18',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'440.00',
        originprice:'500.00',
        num:1,
        checked:false
        },
        {
        id:'19',
        tag:'',
        desc:'',
        title:'2018秋冬新款男士休闲时尚军绿飞行夹克秋冬新款男',
        imageURL:'https://img.alicdn.com/imgextra/i1/111964120/O1CN01MJ2fAb1gJ0I8K3PSv_!!0-saturn_solar.jpg_220x220.jpg_.webp',
        price:'440.00',
        originprice:'500.00',
        num:1,
        checked:false
        }
        ],
    }
  },
   components:{
   	"bottomfooter":Below
   },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
		onSubmit(){
			console.log(12)
		},
		//单选
		checkedclick(item){
			var str = 0;
			for(var a = 0 ; a<this.itemlist.length;a++){
					if(this.itemlist[a].checked == true){
							str = Number(this.itemlist[a].price)+str
					}
					this.allprice = str
			}
		},
		//全选
		checkedlistclick(){
			if(this.checkedlist == true){
				var str = 0;
				for(var a=0;a<this.itemlist.length;a++){
					this.itemlist[a].checked = true
					str = Number(this.itemlist[a].price)+str
				}
				this.allprice = str
			}
			else{
				for(var a=0;a<this.itemlist.length;a++){
					this.itemlist[a].checked = false
				}
				this.allprice = 0.00
			}
			
		}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index_head{
		position: fixed;
		width: 100%;
		top:0;
		left:0;
		z-index: 5;
	}
	.index_center{
		margin:60px 2% 140px 2%;
		background-color:#fafafa;
		/*margin-bottom:0px;*/
	}
	.index_center_item{
		position: relative;
		overflow: hidden;
	}

	.checkbox{
		position:absolute;
		text-align: center;
		width:10%;
		float: left;
		top:29%;
		left:2%;
	}
	.commoditylist{
		width: 90%;
		float: right;
	}
	.index_footer .van-checkbox{
		position: relative;
		left:5%;
	}
	.van-submit-bar{
		bottom:50px;
	}
	.index_Submit .van-checkbox{
		position: relative;
		left:7%;
	}
</style>
