<template>
	<main>
		<header>
		  	<span class="iconfont back" @click="goback()">&#xe60a;</span>
		  	<span class="title">商品分类</span>
		  	<span class="iconfont search">&#xe620;</span>
		</header>
		<ul class="side">
			<li  v-for="(item,index) in side" v-bind:class="{active:cur == index}" @click="curchange(index)" >
				{{item}}
			</li>
		</ul>
		
		<section class="details">
			<transition enter-active-class='animated flash' v-for="(item,index) in details">
				<div v-show="cur == index">
					<div class="computer" v-for="(item,index) in item.mm">
						<p><span class="title_line"></span><span class="goodstitle">{{item.til}}</span><span class="title_line"></span></p>
						<ul>
							<li v-for="(item,index) in item.li">
								<router-link to="/list">
									<img :src="item.src"/>
									<p>{{item.p}}</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</transition>
		</section>
	</main>
	
</template>


<script>
	export default{
		data(){
			return{
				cur:0, //页面一进来，就显示第一个
				side:[],
				details:[]
			}
		},
		methods:{
			curchange(index){
				this.cur = index
			},
			goback(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/classify.json')
				.then(function(res){
					_this.side = res.data.side;
					_this.details = res.data.details;
				})
				.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
			}
	}
</script>

<style scoped="scoped">
	main{
		overflow: hidden;
	}
	header{
		z-index: 1;
		background-color: #e6e6e6;
		width: 100%;
		overflow: hidden;
		padding: 10px 0 10px 0;
		box-sizing: border-box;
		position: fixed;
		max-width: 750px;
		margin: 0 auto;
	}
	.back{
		display: inline-block;
		float: left;
		padding-left: 10px;
	}
	.title{
		font-size: 18px;
	}
	.search{
		display: inline-block;
		float: right;
		padding-right: 10px;
	}

	.side{
		width: 25%;
		float: left;
		padding: 10px 2px;
		border-right: 2px solid #f2f2f2;
		position: fixed;
		margin-top: 44px;
		margin-left: 0;
		height: 700px;
	}
	.side li{
		padding: 20px 0 10px 0;
		height: 30px;
		font-size: 12px;
	}
	.active{
		color: #00a8ff;
		font-size: 14px !important;
	}
	.details{
		margin-top: 44px;
		float: right;
		width: 75%;
		padding: 20px;
		box-sizing: border-box;
	}
	.computer>p{
		margin-top: 20px;
		margin-bottom: 12px;
	}
	.title_line{
		display: inline-block;
		width: 40px;
		height: 2px;
		background-color: #f2f2f2;
		vertical-align: middle;
		margin: 0 15px;
	}
	.goodstitle{
		font-size:16px;
	}
	.computer{
		margin-bottom: 45px;
	}
	.computer>ul{
		overflow: hidden;
	}
	.computer>ul>li{
		float: left;
		width: 33.3%;
	}
	.computer>ul>li img{
		width: 60%;
	}
	.computer>ul>li p{
		width: 80%;
		overflow: hidden;
	   	height: 37px;
	   	color: #a0a0a0;
	}
	
</style>