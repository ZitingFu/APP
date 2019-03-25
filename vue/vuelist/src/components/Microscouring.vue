<template>
  <div class="Microscouring">
  	<div class="index_head">
	 		<h2>微淘</h2>
	 		<a href="">大转盘</a>
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
	name:'Microscouring',
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
