<template>
	<main>
		<section>
			<img class="img1" src="../../../data/img/detailimg/summer.jpg" />
			<img class="gds" v-for="(item,index) in goods" :src="item" />
			<img class="img1" src="../../../data/img/detailimg/summer2.jpg" />
			<img class="img2" src="../../../data/img/detailimg/back.jpg" />
			<img class="img1" v-for="(item,index) in introduce" :src="item" />	
		</section>
		<component :is="msg"></component>
	</main>
</template>

<script>
	import module from '../others/module.vue';
	export default{
		data(){
			return{
				msg:'module',
				goods:[],
				introduce:[]
			}
		},
		
		mounted(){
			var _this = this;
			this.$http.get('./data/detail.json')
				.then(function(res){
					_this.introduce = res.data.introduce,
					_this.goods = res.data.goods
				})
				.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
		},
		components:{
			'module':module
		}
	}
</script>

<style scoped="scoped">
	main{
		margin-top: 42px;
		margin-bottom: 50px;
		background-color: #eee;
	}
	.img1,.img2{
		width: 100%;
	}
	.gds{
		width: 50%;
		float: left;
	}
	
	.img2{
		margin-top: 10px;
	}
</style>
	
	