<template>
	<main>
		<header>
			<span class="iconfont back" @click="goback()">&#xe60a;</span>
			<ul class="nav">
				<li class="navli"  v-for="(item,index) in nav" v-bind:class="{active:cur == index}" @click="curchange(index)" >
				{{item}}
				</li>
			</ul>
		</header>
		
		<component :is='msg'></component>
		
		<ul class="foot">
			<li><span class="iconfont">&#xe645;</span><p>客服</p></li>
			<li><router-link to='/index'><span class="iconfont">&#xe61e;</span><p>首页</p></router-link></li>
			<li><span class="iconfont">&#xe501;</span><p>收藏</p></li>
			<li>加入购物车</li>
			<li>立即购买</li>
		</ul>
		<div class="gotop" @click="go" ref="btn">
			<span class="back">
				<span class="iconfont gb">&#xe502;</span>
			</span>
		</div>
		
		<div class="gobuy">
			<router-link to='/shopcar'><span class="iconfont buy">&#xe505;</span></router-link>
		</div>
		
	</main>
</template>

<script>
	import goods from './goods.vue';
	import info from './info.vue';
	import standards from './standards.vue';
	import evaluate from './evaluate.vue';
	export default{
		data(){
			return {
				cur:0,
				nav:[],
				msg:'goods'
			}
		},
		mounted(){
			document.documentElement.scrollTop=0
			this.needScroll()
			var _this = this;
			this.$http.get('./data/detail.json')
				.then(function(res){
					_this.nav = res.data.nav
				})
				.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
		},
		methods:{
			curchange(index){
				console.log(index)
				this.cur = index;
				if(index == 0){
					this.msg = 'goods'
				}
				if(index == 1){
					this.msg = 'info'
				}
				if(index == 2){
					this.msg = 'standards'
				}
				if(index == 3){
					this.msg = 'evaluate'
				}
			},
			goback(){
				this.$router.replace('/index')
			},
			needScroll(){
		    let clientHeight = document.documentElement.clientHeight
		    let obtn = this.$refs.btn
		    window.onscroll = function () {
		        let osTop = document.documentElement.scrollTop || document.body.scrollTop
		        if (osTop >= clientHeight) {
		          obtn.style.display = 'block'
		        } else {
		          obtn.style.display = 'none'
		        }
		        if (!this.isTop) {
		          clearInterval(this.timer)
		        }
		        this.isTop = false
		      }
		    },
		    go(){
		    let self = this
		    self.timer = setInterval(function(){
		        let osTop = document.documentElement.scrollTop || document.body.scrollTop
		        let ispeed = Math.floor(-osTop / 5)
		        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
		        self.isTop = true
		        if (osTop === 0) {
		          clearInterval(self.timer)
		        }
		      }, 30)
		    }
		},
		
		components:{
			'goods':goods,
			'info':info,
			'standards':standards,
			'evaluate':evaluate
		}
	}
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
	a{
		text-decoration: none;
		color:#333;
		font-size: 13px;
	}
	ul li{
		list-style: none;
	}
</style>
<style scoped="scoped">
	main{
		overflow: hidden;
	}
	header{
		width: 100%;
		box-sizing: border-box;
		padding: 0px 10px;
		overflow: hidden;
		background-color: #fff;
		border-bottom: 1px solid #ebebeb;
		margin: 0;
		position: fixed;
		top: 0;
		z-index: 1;
		max-width: 750px;
	}
	
	.back{
		display: inline-block;
		float: left;
		padding-top: 13px;
	}
	.nav{
		width: 90%;
		float: right ;
		margin: 0;
	}
	.nav li{
		list-style: none;
		float: left;
		width: 25%;
		font-size: 15px;
		padding: 10px 0;
		
	}
	.nav .active{
		border-bottom: 1px solid #00a8ff;
	}
	.foot{
		overflow: hidden;
		width: 100%;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #eee;
		background: #fff;
		max-width: 750px;
	}
	.foot li{
		float: left;
		padding: 5px 0;
	}
	.foot li:nth-of-type(1),
	.foot li:nth-of-type(2),
	.foot li:nth-of-type(3){
		width: 13.2%;
		padding-top:5px ;
		border-right: .5px solid #eee;
		font-size: 14px;
	}
	.foot li:nth-of-type(4),
	.foot li:nth-of-type(5){
		width: 30%;
		font-size: 16px;
		color: #fff;
		padding: 13px 0;
	}
	.foot li:nth-of-type(4){
		background-color: #fec240;
	}
	.foot li:nth-of-type(5){
		background-color: #fe4140;
	}
	/*回到顶部*/
	.gotop{
		width: 50px;
	    height: 50px;
	    text-align: center;
	    background-color: rgba(0,0,0,.3);
	    color: #fff;
	    position: fixed;
	    right: 16px;
	    bottom: 56px;
	    border-radius: 50%;
	    display: none;
	}
	.gb{
		display: block;
		font-size: 25px;
		margin-left: 12px;
	}
	.gobuy{
		width: 50px;
	    height: 50px;
	    text-align: center;
	    background-color: rgba(0,0,0,.3);
	    color: #fff;
	    position: fixed;
	    left: 16px;
	    bottom: 56px;
	    border-radius: 50%;
	}
	.buy{
		display: block;
		font-size: 30px;
		margin-top: 10px;
		color: #fff;
	}
</style>