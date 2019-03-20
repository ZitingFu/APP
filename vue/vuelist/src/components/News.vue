<template>
  <div class="News">
  	<div class="index_head">
	 		<h2>消息</h2>
		</div>
	 	<div class="index_center">
	 		
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
