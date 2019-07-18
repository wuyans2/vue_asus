<template>
	<section class="box">
		<img class="stimg" v-for="(item,index) in store" :src="item" />
		<div class="goindex" @click="ind"></div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				store:[]
			}
		},
		methods:{
			ind(){
				this.$router.replace('/index')
			}
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/others.json')
				.then(function(res){
					_this.store = res.data.store;
					
				})
				.catch((err)=>{
				})
				.then(function(){
				})
			}
	}
	
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.box{
		position: relative;
	}
	.stimg{
		display: block;
		width: 100%;
	}
	.goindex{
		position: absolute;
		background-color: yellow;
		width: 130px;
		height: 25px;
		bottom: 15px;
		opacity: 0;
		left: 122px;
	}
</style>
<style>
	body{
		margin: 0;
	}
</style>