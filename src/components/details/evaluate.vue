<template>
	<main>
		<section>
			<p class="pre"><span>商品评价</span><span class="precent">100</span><span>%人气好评</span></p>
			<p class="assess"><span>全部122条评论</span><span class="iconfont">&#xe509;</span></p>
		</section>
		<section class="peopleassess" v-for="(eva,index) in evaluate">
			<div class="talk">
				<img class="people" src="../../../data/img/detailimg/default.jpg" />
				<span class="name">{{eva.name}}</span>
				<span class="data">{{eva.date}}</span>
				<p class="love"><span class="iconfont">&#xe754;</span><span class="iconfont">&#xe754;</span><span class="iconfont">&#xe754;</span><span class="iconfont">&#xe754;</span></p>
			</div>
			<p class="longtxt">{{eva.longtxt}}</p>
			<p class="repeat"><span>回复</span> <span>评论有用</span><span>{{eva.num}}</span></p>
		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				evaluate:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/detail.json')
				.then(function(res){
					_this.evaluate = res.data.evaluate
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
		margin-top: 42px;
		margin-bottom: 50px;
	}
	.pre{
		background-color: #00a8ff;
		color: #fff;
	}
	.pre .precent{
		font-size: 36px;
		font-weight: bold;
		display: inline-block;
		margin-left: 20px;
		padding-top: 5px;
	}
	.assess{
		text-align:left ;
		padding: 18px;
		font-size: 14px;
	}
	.people{
		width: 40px;
		border-radius: 50%;
		float: left;
		padding-left: 20px;
	}
	.talk{
		width: 100%;
		overflow: hidden;
	}
	.name,.data{
		display: block;
		float: left;
		padding-left:10px ;
		font-size: 12px;
		padding-bottom: 3px;
	}
	.name{
		width: 75%;
		text-align: left;
		padding-top: 5px;
	}
	.data{
		color: #808080
	}
	.love{
		float: right;
		padding-right: 20px;
		color: #00a8ff;
	}
	.love span{
		font-size: 17px;
		padding-right: 3px;
	}
	.longtxt{
		width: 90%;
		font-size: 12px;
		text-align: left;
		padding-top: 10px;
	}
	.repeat{
		font-size:14px;
		text-align: left;
		padding: 10px 0 10px 20px;
		color: #00a8ff;
	}
</style>