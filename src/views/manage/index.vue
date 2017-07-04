<template>
	<div class="manage tc">
		<header1></header1>
		<div class="mainContent">
			<button @click="showAddFn()" class="add">增加</button>
			<div class="input-area" v-show="showAdd">
				<input type="text" placeholder="请输入人员姓名" v-model="peopleName"/>
				<button @click="addItem()">确定</button>
			</div>
			<div class="tableCssStyle">
				<table> 
					<tr>
						<td>序号</td>
						<td>姓名</td>
						<td>操作</td>
					</tr>
					<tr v-for="(item,index) in peoples">
						<td>{{index+1}}</td>
						<td>{{item.name}}</td>
						<td><span @click="editItem(index)">编辑</span><span @click="deleteItem(index)">删除</span></td>
					</tr>
					<tr v-if="peoples.length==0">
						<td colspan="3" height="100" style="color: #42B983; font-size: 20px;">人员为空，请增加新人员</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="pubMask" v-show="showEdit">
			<div class="editPubCont">
				<input type="text" placeholder="输入新姓名" v-model="newName" />
				<button @click="cancel()">取消</button>
				<button @click="confirm()">确定</button>
			</div>
		</div>
		
		<footer-nav :class="{'manage':isActive}"></footer-nav>
	</div>
</template>

<script>
	//单文件组件引用(import 命名 from 相对路径)，再局部注册，写到export default
	import FooterNav from '../../components/footer.vue'
	import header1 from '../../components/head.vue'
	export default{
		components:{
			FooterNav,
			header1
		},
		data(){
			return {
				isActive:true,//底部选中样式
				showAdd:false,//默认不显示增加姓名的输入框
				peopleName:'',//输入姓名
				showEdit:false,//默认不显示编辑遮罩,
				newName:'',
				editNum:0,
				peoples:[
					{
						'name':'zhaoxingpei',
						'age':24
					},
					{
						'name':'wangjiang',
						'age':28
					},
					{
						'name':'wangming',
						'age':26
					}
				]
			}
		},
		methods:{
			showAddFn:function(){
				this.showAdd = true;
			},
			//增加一项
			addItem:function(){
				if(this.peopleName.trim()){
					this.peoples.push({
						'name':this.peopleName
					})
				}else{
					alert('人员姓名为空，请重新输入')
				}
				
			},
			//删除某一项
			deleteItem:function(data){
				this.peoples.splice(data,1)
			},
			//编辑某一项姓名
			editItem:function(data){
				this.showEdit = true;
				//存放当前编辑的index
				this.editNum = data;
				//把上一次输入的姓名清空，保证每次编辑时输入框都是空的内容
				this.newName = '';
			},
			//点击取消
			cancel:function(){
				this.showEdit = false;
			},
			//点击确定
			confirm:function(){
				if(this.newName.trim()){
					this.showEdit = false;
					this.peoples[this.editNum].name = this.newName;
				}
				
			}
		}
	}
</script>

<style scoped="scoped">
	button{
		width: 250px;
		/*height: 30px;*/
		line-height: 40px;
		border: none;
		background: #42B983;
		color: #fff;
		border-radius: 5px;
	}
	.add{
		margin-bottom: 10px;
	}
	.mainContent{
		padding-bottom: 70px;
	}
	.input-area input,.editPubCont input{
		width: 180px;
		height: 28px;
		border: 1px solid #ccc;
		display: inline-block;
		padding: 5px 10px;
		border-radius: 5px;
	}
	.input-area button{
		width: 50px;
		display: inline-block;
		padding: 0;
	}
	.tableCssStyle{
		padding:0 14px;
		margin-top: 10px;
	}
	table{
		width: 100%;
		border-collapse: collapse;
		border: 1px solid #363636;
	}
	table tr{
		height: 40px;
		line-height: 40px;
	}
	table td{
		border: 1px solid #363636;
		font-size: 14px;
	}
	td span{
		width: 50%;
		height: 100%;
		display: inline-block;
		color: #42B983;
		/*color: #fff;*/
		cursor: pointer;
	}
	td span:last-child{
		color: #2C3E50;
	}
	.pubMask{
		background: rgba(0,0,0,0.8);
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
	}
	.editPubCont{
		position: absolute;
		left: 0;
		top: 40%;
		width: 100%;
	}
	.editPubCont input{
		width: 40%;
		display: block;
		margin: 0 auto;
	}
	.editPubCont button{
		width:20%;
		margin: 20px 10px;
	}
</style>