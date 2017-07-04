 <template>
 	<div class="footer fixed">
 		<ul>
 			<li><router-link to="/">首页</router-link></li>
 			<li><router-link to="/manage">人员管理</router-link></li>
 		</ul>
 	</div>
</template>

<script>
</script>

<style scoped>
	
	.footer{
		width: 100%;
		height: 50px;
		line-height: 50px;
		left: 0;
		bottom: 0;
		margin-top: 20px;
	}
	ul{
		display: flex;
	}
	ul li{
		flex:1;
		background: #f1f1f1;
	}
	li a{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.active li:first-child,.manage li:last-child{
		background: #e1e1e1;
	}
	.active li:first-child a,.manage li:last-child a{
		color: #42B983;
	}
</style>