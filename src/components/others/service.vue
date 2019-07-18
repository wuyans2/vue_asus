<template>
	<section>
		<header>
		  	<span class="iconfont back" @click="goback()">&#xe60a;</span>
		  	<span class="title">联系客服</span>
		</header>
		<ul class="seek">
			<li>
				<span class="iconfont ico">&#xe645;</span>
				<span class="consult">售前咨询</span>
				<p class="time">咨询时间：9:00 - 24:00</p>
			</li>
			<li>
				<span class="iconfont ico xinxi">&#xe628;</span>
				<span class="consult">售后咨询</span>
				<p class="time">咨询时间：9:00 - 18:00</p>
			</li>
			<li>
				<span class="iconfont ico ">&#xefab;</span>
				<span class="consult">技术咨询</span>
				<p class="time">咨询时间：9:00 - 18:00</p>
			</li>
		</ul>
	</section>
</template>

<script>
	export default{
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	ul,li{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	header{
		z-index: 1;
		background-color: #e6e6e6;
		width: 100%;
		overflow: hidden;
		padding: 10px 0 10px 0;
		box-sizing: border-box;
		max-width: 750px;
		margin: 0 auto;
	}
	.back{
		display: inline-block;
		float: left;
		padding-left: 10px;
		font-size: 18px;
	}
	.title{
		font-size: 18px;
	}
	.seek{
		overflow: hidden;
		margin: 80px 45px;
		max-width: 750px;
	}
	.seek li{
		display: block;
		margin: 0 auto;
		border: 1px solid #cccccc;
		border-radius:5px ;
		margin-bottom: 20px;
		overflow: hidden;
	}
	.ico{
		font-size: 55px;
		color: #00a8ff;
		display: inline-block;
		float: left;
		padding: 8px 15px;
	}
	.consult{
		display: inline-block;
		float: left;
		text-align: left;
		margin: 20px 0 0 20px;
		font-size: 15px;
	}
	.time{
		display: inline-block;
		/*width: 100%;*/
		float: left;
		margin-left: 20px;
		color: #808080;
		font-size: 13px;
	}
	.xinxi{
		font-size: 43px;
		padding: 15px 18px;
	}
</style>
<style>
	body{
		margin: 0;
		padding: 0;
	}
	*{
		margin: 0 auto;
	}
</style>