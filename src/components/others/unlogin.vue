<template>
	<section>
		<header>
		  	<span class="iconfont button" @click="goback()">&#xe60a;</span>
		  	<p><span>账户管理</span> <span class="iconfont">&#xe509;</span></p>
		</header>
		<section class="userinfo">
			<img class="user" src="../../../data/img/detailimg/default.jpg" />
			<p class="tologin">快速前往
				<router-link to='/login'><span class="login">登录</span></router-link>
				，发现更多惊喜</p>
		</section>
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
	header{
		overflow: hidden;
		background-color: #808080;
	}
	header p{
		font-size:15px;
		float: right;
		padding-top: 10px;
		padding-right: 14px;
		color: #fff;
	}
	.button{
		float: left;
		color: #fff;
		font-size: 18px;
		padding-top: 8px;
		padding-left: 15px;
	}
	header i{
		display: inline-block;
		float: right;
	}
	.userinfo{
		background-color: #808080;
		color: #fff;
		margin-top: -5px;
		margin-bottom: 7.5px;
	}
	.user{
		margin-bottom: 10px;
		width: 18%;
		border-radius: 50%;
	}
	.tologin{
		padding: 10px 0;
	}
	.login{
		color: #00a8ff;
		padding: 2px;
		font-size: 16px;
	}
</style>