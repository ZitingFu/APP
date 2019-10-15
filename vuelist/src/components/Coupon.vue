<template>
  <div class="Coupon">
  		<div class="index_head">
  			<router-link to="/My">
		 		<van-nav-bar 
		 			title="优惠卷"
	 			 	left-text="返回"
	 			  	left-arrow
				>
				  <!--<van-icon name="edit" slot="right" />-->
				</van-nav-bar>
			</router-link>
		</div>
	 	<div class="index_center">
	 		<!-- 优惠券单元格 -->
			<van-coupon-cell
			  :coupons="coupons"
			  :chosen-coupon="chosenCoupon"
			  @click="showList = true"
			/>
			
			<!-- 优惠券列表 -->
			<van-popup v-model="showList" position="bottom">
			  <van-coupon-list
			    :coupons="coupons"
			    :chosen-coupon="chosenCoupon"
			    :disabled-coupons="disabledCoupons"
			    @change="onChange"
			    @exchange="onExchange"
			  />
			</van-popup>
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
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
	name:'Coupon',
  	data() {
    return {
      showList:'',
	  chosenCoupon: -1,
	  coupons: [coupon],
	  disabledCoupons: [coupon]
    }
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onClickLeft() {
//   console.log('返回')
    },
    onClickRight() {
//    Toast('按钮');
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index_center{
		/*margin-top:5%;*/
	}
	.van-coupon-list__list{
		height: auto !important;
	}
</style>
