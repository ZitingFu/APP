<template>
  <div class="index">
  	<div class="index_head">
	 		<h2>首页</h2>
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
	
</style>
