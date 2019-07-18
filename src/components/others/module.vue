<template>
	<section>
		<p class="text">为您推荐</p>
		<ul class="foryou">
			<li class="com_goods" v-for="(item,index) in module">
				<img class="bimg" :src="item.bimgsrc" />
				<p class="my_title">{{item.title}}</p>
				<p class="my_des">{{item.des}}</p>
				<p class="my_price">{{item.newprice}}</p>
			</li>
		</ul>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				module:[]
			}
			
		},
		mounted(){
		var _this = this;
		this.$http.get('./data/data.json')
			.then(function(res){
				_this.module = res.data.module;
			})
			.catch((err)=>{
			})
			.then(function(){
			})
		}
	}
</script>

<style scoped="scoped">
	.text{
		font-size: 14px;
		padding: 10px 0 20px 0;
	}
	.com_goods{
		float: left;
		width: 49.6%;
		margin-right: 0.8%;
		background: #fff;
		padding: 20px 0;
		margin-bottom: 3px;
	}
	.com_goods:nth-of-type(2n){
		margin-right:0
	}
	.bimg{
		width: 80%;
	}
	.com_goods p{
		width: 80%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: 12px;
	}
	.my_price{
		color: red;
		padding: 2px 0;
	}
</style>