<template>
	<main class="list1">
	<header>
		<router-link to='/index'><span class="iconfont idx">&#xe61e;</span></router-link>
		<input class="inp" type="text" placeholder="  搜索商品名称"/>
		<span class="iconfont search">&#xe620;</span>
	</header>
	<ul class="nav">
		<li>默认</li>
		<li>价格<span class="iconfont">&#xe50d;</span></li>
		<li>销量<span class="iconfont">&#xe50d;</span></li>
		<li><span class="iconfont">&#xe50e;</span>筛选</li>
	</ul>
	<ul class="list">
		<li v-for="(item,index) in list">
			<img class="listimg" :src="item.src" />
			<div class="text">
				<p>{{item.text}}</p>
				<span>{{item.price}}</span>
			</div>
			<span class="iconfont next">&#xe509;</span>
		</li>
	</ul>
	</main>
</template>

<script>
	export default {
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/list.json')
			.then(function(res){
				_this.list = res.data.list
			})
			.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
		}

	}
</script>

<style>	
.list1+ul>li:nth-of-type(2) a{
		    color: #00a8ff;
	}
</style>
<style scoped="scoped">
	
	header{
		width: 92%;
		padding:10px 0 ;
	}
	.idx{
		display: inline-block;
		font-size: 22px;
		color: gray;
		float: left;
	}
	.inp{
		width: 78%;
		height: 23px;
		border: 1px solid #c9c9c9;
		border-radius: 2px;
		outline: none
	}
	.search{
		display: inline-block;
		float: right;
		padding-top:5px ;
	}
	.nav{
		width: 100%;
		background-color: #e6e6e6;
		overflow: hidden;
		padding: 14px 0;
	}
	.nav li{
		width: 25%;
		float: left;
	}
	.nav li:nth-of-type(1){
		color: #00a8ff;
	}
	.list{
		margin-top:10px ;
		overflow: hidden;
		margin-bottom: 50px;
	}
	.list li{
		padding: 10px 20px;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid #eee;
	}
	.listimg{
		display:inline-block;
		float: left;
		width: 23%;
		margin-right: 15px;
	}
	
	.next{
		display: inline-block;
		position: absolute;
		float: right;
		top: 50%;
		right: 5%;
		transform: translateY(-50%);
	}
	.text{
		width: 50%;
		float: left;
	}
	.text p{
		text-overflow: ellipsis;
		word-break: break-all; 
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical; 
		overflow: hidden;
		text-align: left;
		line-height: 20px;
	}
	.text span{
		color: #f27070;
		float: left;
		padding: 5px 0;
	}
	
</style>