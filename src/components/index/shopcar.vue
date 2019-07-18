<template>
	<main>
		<header>
		  	<mt-button icon="back" @click="goback()"></mt-button>
		  	<span>购物车</span>
		  	<p class="search"><img src="../../assets/img/index/icon-topsearch.png"/></p>
		</header>
		<section class="car_goods" v-for="(item,index) in shop">
			<div class="coupon">
				<span>领券</span>
			</div>
			<div class="product">
				<span class="checkbox" @click="checkbox(index)"></span>
				<span class="iconfont check" @click="check(index)">&#xe613;</span>
				<img :src="item.src" />
				<div class="des">
					<p class="pro_text">{{item.text}}</p>
					<span class="price">￥</span><p class="price pri">{{item.price}}</p>
				</div>
				<p class="pro_num">
					<span>x</span><span class="num1">1</span>
				</p>
			</div>
			<div class="change">
				<span class="iconfont del" @click="del(index)">&#xe60b;</span>
				<p class="add"><span @click="sub(index)">-</span><span class="num">1</span><span @click="add(index)">+</span></p>
			</div>
			<div class="save">
				<p class="limitsave">{{item.limit}}</p>
				<p class="txt"><span>{{item.txt}}</span><span> {{item.txt1}}</span></p>
				<p class="txt"><span>{{item.txt}}</span><span> {{item.txt2}}</span></p>
			</div>
		</section>
		<section class="account">
			<span>共<span id="count">0</span>件商品</span>
			<span>总计：</span><span class="money">￥</span><span class="money" id="money">0</span>
			<span class="cot">去结算</span>
		</section>
		<component :is="msg"></component>
	</main>
</template>

<script>
	import module from '../others/module.vue'
	export default{
		data(){
			return{
				module:[],
				msg:"module",
				shop:[],
				num:1
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			},
			checkbox(i){
 				var Ocheck = document.getElementsByClassName('check');
 				var Ocheckbox = document.getElementsByClassName('checkbox')
					Ocheck[i].style.display = 'block';
				var Onum = document.getElementsByClassName('num');
				var Ocount = document.getElementById('count')
				var Omoney = document.getElementById('money');
				var Oprice = document.getElementsByClassName('pri')
				if(Ocheck[i].style.display == 'block'){
					Ocount.innerHTML = Number(Ocount.innerHTML)+Number(Onum[i].innerHTML);
					Omoney.innerHTML = Number(Omoney.innerHTML)+(Number(Onum[i].innerHTML)*Number(Oprice[i].innerHTML))
				}
			},
			check(a){
 				var Ocheck = document.getElementsByClassName('check');
					Ocheck[a].style.display = 'none'
 				var Ocheckbox = document.getElementsByClassName('checkbox')
				var Onum = document.getElementsByClassName('num');
				var Ocount = document.getElementById('count')
				var Omoney = document.getElementById('money');
				var Oprice = document.getElementsByClassName('pri')
				if(Ocheck[a].style.display == 'none'){
					Ocount.innerHTML = Number(Ocount.innerHTML)-Number(Onum[a].innerHTML) 
					Omoney.innerHTML = Number(Omoney.innerHTML)-(Number(Onum[a].innerHTML)*Number(Oprice[a].innerHTML))
				}
			},
			del(index){
//				
				var Ocheck = document.getElementsByClassName('check');
				var Onum = document.getElementsByClassName('num');
				var Ocount = document.getElementById('count')
				var Omoney = document.getElementById('money');
				var Oprice = document.getElementsByClassName('pri')
				if(Ocheck[index].style.display == 'block'){
					Ocount.innerHTML = Number(Ocount.innerHTML)-Number(Onum[index].innerHTML) 
					Omoney.innerHTML = Number(Omoney.innerHTML)-(Number(Onum[index].innerHTML)*Number(Oprice[index].innerHTML))
				}
				Ocheck[index].style.display = 'none'
				this.shop.splice(index,1);
			},
				
			sub(index){
				var Onum = document.getElementsByClassName('num');
				var Onum1 = document.getElementsByClassName('num1');
				var Ocount = document.getElementById('count')
				var Omoney = document.getElementById('money');
				var Ocheck = document.getElementsByClassName('check');
				var Oprice = document.getElementsByClassName('pri')
				if(Onum[index].innerHTML>1){
					Onum[index].innerHTML = Onum[index].innerHTML-1
					Onum1[index].innerHTML = Onum1[index].innerHTML-1
				}
				if(Ocheck[index].style.display == 'block'){
					Ocount.innerHTML = Number(Ocount.innerHTML)-1;
					Omoney.innerHTML = Number(Omoney.innerHTML)-Number(Oprice[index].innerHTML)
				}
			},
			add(index){
				var Onum = document.getElementsByClassName('num');
				var Onum1 = document.getElementsByClassName('num1');
				var Ocount = document.getElementById('count')
				var Omoney = document.getElementById('money');
				var Ocheck = document.getElementsByClassName('check');
				var Oprice = document.getElementsByClassName('pri')
				if(Onum[index].innerHTML<10){
					Onum[index].innerHTML = Number(Onum[index].innerHTML)+1
					Onum1[index].innerHTML = Number(Onum1[index].innerHTML)+1
				}
				if(Ocheck[index].style.display == 'block'){
					Ocount.innerHTML = Number(Ocount.innerHTML)+1;
					Omoney.innerHTML = Number(Omoney.innerHTML)+Number(Oprice[index].innerHTML)
				}
					
			}
		},
		components:{
			'module':module
		},
		mounted(){
			var _this = this;
			this.$http.get('./data/data.json')
				.then(function(res){
					_this.shop = res.data.shop;
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
		background-color: #eee;
		margin-bottom: 100px;
		overflow: hidden;
	}
	header{
		background-color: #e6e6e6;
		width: 100%;
		overflow: hidden;
		padding: 5px 0 5px 0;
	}
	.mint-button{
		float: left;
		background-color: #e6e6e6;
		box-shadow: none;
	}
	header span{
		display: inline-block;
		font-size: 20px;
		padding-top: 8px;
	}
	.search{
		display: inline-block;
		float: right;
		overflow: hidden;
	}
	.search img{
		display: inline-block;
		padding-right: 20px;
		padding-top: 12px;
	}
	.car_goods{
		background-color: #fff;
		margin-bottom: 6px;
	}
	.coupon{
		width: 100%;
		overflow: hidden;
		padding: 8px 20px 8px 20px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
	}
	.coupon span{
		display: block;
		color: #f27070;
		float: right;
		font-size: 14px;
	}
	
	.product{
		padding: 20px 12px 20px 25px ;
		overflow: hidden;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.checkbox{
		display: inline-block;
		float: left;
		margin-top: 25px;
		width: 23px;
		height: 23px;
		border-radius: 50%;
		border:1px solid #b5b5b5;
		box-sizing: border-box;
	}
	.check{
		position: absolute;
		top: 42px;
		left: 23px;
		font-size: 27px;
		display: none;
		color: #00a8ff;
	}
	.product img{
		display: inline-block;
		float: left;
		width: 20%;
		padding-left: 12px;
	}
	
	.des{
		width: 40%;
		padding-left: 24px;
		float: left;
	}
	.price{
		display: inline-block;
		/*width: 40%;*/
		font-size: 14px;
		float: left;
		padding-top: 12px;
		color: red;
	}
	.pro_text{
		font-size: 14px;
		display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical; 
	    overflow: hidden;
   	 	text-overflow: ellipsis;
	}
	
	
	.pro_num{
		width: 10%;
		float: right;
		font-size: 14px;
	}
	.change{
		overflow: hidden;
		border-bottom: 1px solid #eee;
	}
	.del{
		font-size: 18px;
		float: left;
		padding: 12px;
	}
	.add{
		width: 30%;
		float: right;
		overflow: hidden;
		padding-top: 10px;
		padding-right: 12px;
	}
	.add span{
		display: inline-block;
		width: 24px;
		height: 24px;
		border: 1px solid #b5b5b5;;
		line-height: 24px;
		font-size: 14px;
	}
	.add span:nth-of-type(2){
		width: 36px;
	}
	.save{
		overflow: hidden;
		width: 88%;
	}
	.save .limitsave{
		width: 100%;
		font-weight: bold;
		float: left;
		font-size: 15px;
		line-height: 36px;
	}
	.save p{
		float: left;
		text-align: left;
		line-height: 24px;
	}
	.save p span{
		font-size: 14px;
	}
	.save p span:nth-of-type(1){
		color: #C60808;
	}
	.account{
		width: 100%;
		background-color: #fff;
		position: fixed;
		bottom: 46px;
		left: 50%;
		overflow: hidden;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #bbb;
		max-width: 750px;
		transform: translateX(-50%);
	}
	.account>span{
		display: inline-block;
		font-size: 16px;
		padding-top: 12px;
	}
	.account>span:nth-of-type(1){
		float: left;
		padding-left: 16px;
	}
	.money{
		color: #f27070;
	}
	.cot{
		display: inline-block;
		background-color: #fe4140;
		color: #fff;
		text-align: center;
		font-size: 16px;
		padding: 14px 28px;
		float: right;
		font-weight: bold;
	}
</style>