<template>
	<section class="big">
		<header>
		  	<span class="iconfont back" @click="goback()">&#xe60a;</span>
		  	<span class="title">热文推送</span>
		</header>
		<section class="bigbox">
			<p class="newstitle">ROG枪神3，把BMW装进游戏本里？</p>
			<p class="newstime">发布时间：2019-06-11 16:54</p>
			<p class="intr">ROG枪神系列一直以来都是专业玩家的竞技首选，强有力的性能体验助力玩家勇攀高峰，此次全面升级的ROG 枪神3，跨界联手BMW Group Designworks ，吸纳并升华BMW豪华汽车的创作灵感。那么ROG枪神3都有哪些亮点呢</p>
			<p class="stitle">钥石：解锁私人基地</p>
			<div v-for="(item,index) in st">
				<p class="stxt">{{item.stxt}}</p>
				<img :src="item.src" />
			</div>
			
			<div v-for="(item,index) in tt">
				<span class="tt">{{item.tit}}</span>
				<p class="intr">{{item.intr}}</p>
				<img :src="item.src" />
			</div>
		</section>
		
		<footer>
			<img src="../../../data/img/othersimg/btn.png" />
			<input  />
			<img src="../../../data/img/othersimg/send.png" />
		</footer>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				st:[],
				tt:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/others.json')
				.then(function(res){
					_this.st = res.data.st;
					_this.tt = res.data.tt;
					
				})
				.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
		},
		methods:{
			goback(){
				this.$router.replace('/index')
			}
		}
	}
</script>

<style scoped="scoped">
	.big{
		margin-bottom: 40px;
	}
	ul,li{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	header{
		width: 100%;
		overflow: hidden;
		padding: 10px 0 10px 0;
		box-sizing: border-box;
		max-width: 750px;
		margin: 0 auto;
		font-size: 19px;
		border-bottom: 1px solid #ebebeb;
	}
	.back{
		display: inline-block;
		float: left;
		padding-left: 10px;
		font-size: 18px;
	}
	.bigbox{
		margin: 0 12px;
	}
	.newstitle{
		font-size: 23px;
		font-weight: bold;
		text-align: left;
		margin: 10px 0 ;
	}
	.newstime{
		padding: 20px 0 ;
		text-align: left;
		color: #999;
		font-size: 18px;
	}
	.intr{
		text-align: left;
		font-size: 17px;
		font-family: BlinkMacSystemFont;
		color: #333333;
		line-height: 25px;
	}
	.stitle{
		font-weight: bold;
		color: #666666;
		font-size: 17px;
		padding: 30px 0 10px 0;
	}
	.stxt{
		text-align: left;
	}
	.bigbox img{
		width: 100%;
		padding: 5px 0 20px 0;
	}
	.tt{
		display: inline-block;
		font-size: 14px;
		font-weight: bold;
		background-color: #FFE500;
		color: #666666;
		margin-bottom: 5px;
	}
	footer{
		position: fixed;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		border-top: 1px solid #ebebeb;
		max-width: 750px;
	}
	footer input{
		display: inline-block;
		height: 37px;
	    background-color: #eee;
	    border-radius: 25px;
	    box-sizing: border-box;
	    width: 70%;
	    border: none;
	    margin: 8px;
	}
	footer img{
		display: inline-block;
		width: 30px;
		margin-bottom: -10px;
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