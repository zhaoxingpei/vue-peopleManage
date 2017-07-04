<template>
	<div>
		<header-nav></header-nav>
		<h2>欢迎来到人员管理系统</h2>
		<footer-nav :class="{'active':isActive}"></footer-nav>
	</div>
	
</template>

<script>
	/**
	 * 使用组件：
	 * （1）引入组件
	 * （2）局部注册 要写到export default
	 * （3）使用组件
	 */
	//引入footer.vue组件
	//注意：命名时最好不要与html标签名一样
	import FooterNav from '../../components/footer.vue'
	import headerNav from '../../components/head.vue'
	export default{
		components:{
			FooterNav,
			headerNav
		},
		data:function(){
			return {
				isActive:true
			}
		}
	}
</script>

<style>
</style>