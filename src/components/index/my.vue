<template>
	<main>
		<component :is='logs'></component>
		<section class="myorder">
			<p>
				<span class="order">我的订单</span>
				<span class="allorder">查看全部订单
					<span class="iconfont">&#xe509;</span>
				</span>
			</p>
			<ul>
				<li><span class="iconfont">&#xf018d;</span><p>待支付</p></li>
				<li><span class="iconfont">&#xe62f;</span><p>待发货</p></li>
				<li><span class="iconfont">&#xe628;</span><p>评价管理</p></li>
				<li><span class="iconfont">&#xefab;</span><p>退换/售后</p></li>
			</ul>
		</section>
		<ul class="aboutme">
			<li><span class="iconfont">&#xe501;</span><p>我的收藏</p></li>
			<li><span class="iconfont">&#xe606;</span><p>我的活动</p></li>
			<li><span class="iconfont">&#xe76a;</span><p>我的积分</p></li>
			<li><span class="iconfont">&#xe87e;</span><p>我的优惠券</p></li>
		</ul>
		<component :is='msg'></component>
	</main>
	
</template>

<script>
	import module from '../others/module.vue';
	import unlogin from '../others/unlogin.vue'
	import alreadylogin from '../others/alreadylogin.vue'
	export default{
		data(){
			return{
				module:[],
				msg:'module',
				logs:this.$store.state.log
			}
			
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		components:{
			'module':module,
			'unlogin':unlogin,
			'alreadylogin':alreadylogin
		}
	}
</script>

<style scoped="scoped">
	main{
		background-color: #e6e6e6;
		margin-bottom: 50px;
		overflow: hidden;
	}
	.myorder{
		overflow: hidden;
		background-color: #fff;
		margin-bottom: 7.5px;
	}
	.order{
		float: left;
		padding: 12px;
	}
	.allorder{
		float: right;
		padding: 12px;
	}
	.myorder>p{
		overflow: hidden;
	}
	.myorder ul{
		width: 100%;
		border-top: 1px solid #eeeeee ;
	}
	.myorder ul li{
		float: left;
		width: 25%;
	}
	.myorder ul li .iconfont,
	.aboutme li .iconfont{
		font-size: 32px;
		display: block;
		padding-top: 10px;
	}
	.myorder ul li p,
	.aboutme li p{
		padding: 6px 0;
	}
	.aboutme{
		margin-top:7.5px ;
		width: 100%;
		overflow: hidden;
		background-color: #fff;
		padding: 10px 0;
	}
	.aboutme li{
		float: left;
		width: 25%;
	}
	.aboutme li .iconfont{
		font-size:28px
	}
	.aboutme li:nth-child(1) .iconfont{
		color: #dc4d55;
	}
	.aboutme li:nth-child(2) .iconfont{
		color: #ff7f24;
	}
	.aboutme li:nth-child(3) .iconfont{
		color: #ebb333;
	}
	.aboutme li:nth-child(4) .iconfont{
		color:#dd5c58;
	}
	.foryou{
		overflow: hidden;
		
	}
	
	
</style>