<template>
  <div id="app">
  	<!--<h2 class="header tc">我是头部</h2>-->
    <img src="./assets/logo.png">
    <router-view></router-view><!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	/*引入外部样式*/
	@import url("./assets/css/public.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*.header{
	line-height: 40px;
	background: #2C3E50;
	color: #42B983;
	font-weight: normal;
	margin-bottom: 20px;
	height: 100%;
}*/
</style>
