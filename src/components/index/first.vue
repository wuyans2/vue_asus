<template>
	<main>
		<router-view></router-view>
		<ul class="first">
			<li>
				<router-link to="/index">
					<span class="iconfont ind">&#xe61e;</span>
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/classify">
					<span class="iconfont cl">&#xe503;</span>
					<p>分类</p>
				</router-link>
			</li>
			<li>
				<router-link to="/shopcar">
					<span class="iconfont shop">&#xe505;</span>
					<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to="/my">
					<span class="iconfont me">&#xe605;</span>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
		margin:  0 auto;
	}
	body,html{
		width: 100%;
		max-width: 750px;
		margin: 0px auto;
	}
	.first{
		list-style: none;
		position: fixed;
		bottom: 0px;
		left: 50%;
		width: 100%;
		max-width: 750px;
		transform: translateX(-50%);
		background-color: white;
		padding-top: 10px;
		
	}
	.first li{
		float: left;
		list-style: none;
		width: 25%;
		text-align: center;
		margin: 0;
	}
	a{
		text-decoration: none;
		color:#333;
		font-size: 13px;
	}
	.router-link-exact-active{
		color: #00a8ff;
	}
	p{
		font-size: 14px;
	}
	
	body {
    color: #333;
    font-size: 13px;
    font-family: arial;
}
</style>