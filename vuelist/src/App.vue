<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;/*/
}
a{
	color:#323233;
}
.My,.News,.IM{
		/*position:fixed;*/
		padding-bottom:0.8rem ;
		background-color: #f1f4f8;
		width: 100%;
		height: 100%;
		bottom: 0;
		top:0;
}
.FAFAFA{
	border-bottom:0.1rem solid #f1f4f8;
}
.borderTop{
	border-top:0.01rem solid #f1f4f8;
}
.borderbottom{
	border-bottom:0.01rem solid #f1f4f8;
}
.bordercenter{
	border-top:0.01rem solid #f1f4f8;
	border-bottom:0.01rem solid #f1f4f8;
}
.fl-ri{
	float: right;
	/*overflow: hidden;*/
}
.fl-le{
	float: left;
	/*overflow: hidden;*/
}
img{
	vertical-align:left;
	display:block;
}
</style>
