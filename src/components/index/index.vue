<template>
	<main>
		<header>
			<div class="title">
				<span class="bar"><span class='iconfont'>&#xe624;</span></span>
				<img src="../../assets/img/index/title.png" />
				<div class="search"><img src="../../assets/img/index/icon-topsearch.png"/></div>
			</div>
		</header>
		<!--轮播-->
		<section class="swipe-box">
			<mt-swipe :auto="4000">
			  	<mt-swipe-item v-for="(item,index) in swipe">
			  		<img class="swipe" :src="item">
			  	</mt-swipe-item>
			</mt-swipe>
		</section>
		<section class="nav-box">
			<ul class="nav-ul">
				<li v-for="(item,index) in nav">
					<router-link :to="item.adress">
					<img :src="item.src1" />
					<h4>{{item.con}}</h4>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="app">
			<img src="../../assets/img/index/app.png" />
		</section>
		<section>
			<div class="index">
				<p class="index_command command_head">
					<span class="line"></span>
					<span class="text">新品专区</span>
				</p>
				<div class="index_con">
					<div class="com_left">
						<img src="../../assets/img/index/new1.jpg"/>
					</div>
					<div class="com_right">
						<div class="rig_top"><img src="../../assets/img/index/new2.jpg"/></div>
						<div class="rig_bot"><img src="../../assets/img/index/new3.jpg"/></div>
					</div>
				</div>
			</div>
		</section>
		<section v-for="(item,index) in game">
			<div class="command" >
				<div class=" command_head">
					<span class="line"></span>
					<span class="text">{{item.title}}</span>
				</div>
				<div class="command_con">
					<ul>
						<li class="com_l">
							<img :src="item.src"/>
						</li>
						<li class="com_goods" v-for="(item,index) in item.gamelist">
							<router-link to="/detail">
								<div>
									<div class="bimg">
										<img :src="item.bimgsrc" />
									</div>
									<div class="simg">
										<img :src="item.simgsrc" />
									</div>
								</div>
								<div>
									<p>{{item.title}}</p>
									<p>{{item.des}}</p>
								</div>
								<div class="price">
									<p>{{item.newprice}}</p>
									<p>{{item.oldprice}}</p>
								</div>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section>
			<div class="command">
				<div class=" command_head">
					<span class="line"></span>
					<span class="text">为你推荐</span>
				</div>
				<div class="module">
					<ul>
						<li class="com_goods" v-for="(item,index) in module">
							<router-link to="/detail">
								<div class="bimg">
									<img :src="item.bimgsrc" />
								</div>
								<div>
									<p>{{item.title}}</p>
									<p>{{item.des}}</p>
								</div>
								<div class="price">
									<p>{{item.newprice}}</p>
								</div>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section>
			<div class="command">
				<div class=" command_head">
					<span class="line"></span>
					<span class="text">A ! 有内容</span>
				</div>
				<ul class="contact">
					<li v-for="(item,index) in contact">
						<router-link to='/news'>
							<img :src="item.csrc" />
							<p>{{item.ptext}}</p>
						</router-link>
					</li>
					
				</ul>
			</div>
		</section>
		<footer>
			<p>&nbsp;</p>
			<p>有任何购物问题请联系商城客服 | 电话：400-091-9520</p>
			<p>营业执照：12000002201803260012</p>
			<p>沪ICP备11025349号-3</p>
			<p>ASUSTeK Computer Inc. All Rights Reserved.</p>
			<div>
				<img src="../../assets/img/index/police.png" />
				<p>沪公网安备 31011202002313号</p>
			</div>
			<p>&nbsp;</p>
			
		</footer>
		<div ref="btn" class="gotop" @click="go"   >
			<span class="back">
				<span class="iconfont gb">&#xe502;</span>
			</span>
		</div>
	</main>
</template>

<script>
	export default {
		data(){
			return {
				isTop:true,
				timer:null,
				msg:'首页',
				nav:[],
				module:[],
				game:[],
				gamegoods:[],
				adolgoods:[],
				diy:[],
				contact:[],
				swipe:[]
			}
		},
		methods:{
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
		mounted(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0
			this.needScroll();
			var _this = this;
			this.$http.get('./data/data.json')
				.then(function(res){
					_this.module = res.data.module;
					_this.contact = res.data.contact;
					_this.swipe = res.data.swipe;
					_this.game = res.data.game
					_this.nav = res.data.nav
					
				})
				.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
			}
		}
</script>

<style scoped>
	header{
		background:#fafafa;
		height: auto;
		width: 100%;
		padding-top: 13px;
		padding-bottom:6px ;
		border-bottom: 1px solid #D6D6D6;
	}
	.title{
		width: 90%;
		margin: 0 auto;
	}
	.bar{
		float: left;
	    cursor: pointer;
	    width: 13px;
	    height: 13px;
	}
	.bar span{
		font-size: 16px;
	}
	.fa-icon{
		width: 100%;
		height: 100%;
	}
	.title>img {
   		width: 30%;
	}
	.search{
		float: right;
		width: 15px;
		height: 15px;
		padding-top:4px ;
	}
	.search img{
		width: 90%;
		display: block;
		margin: 0 auto;
	}
	.swipe-box{
		width: 100%;
	}
	
	.mint-swipe{
		overflow: hidden;
	}
	.swipe{
		width: 100%;
		height: 100%;
	}
	  /*使用scoped穿透方法。修改轮播图中的样式*/
	.mint-swipe >>> .is-active {
	    background-color: #00A8FF !important;
	    opacity: 1;
	}
	.mint-swipe >>> .mint-swipe-indicator{
		margin-right: 10px ;
		opacity: 0.8;
		background-color: #ccc;
	}
	
	.nav-box{
		overflow: hidden;
	}
	.nav-ul li{
		width: 25%;
		text-align: center;
		padding: 15px 0 15px 0;
		float: left;
	}
	.nav-ul li img{
		width: 45%;
	    margin: 0 auto;
	}
	.nav-ul li h4{
	    font-weight: normal;
	    color: #404040;
	    padding-top: 6px;
	}
	.app{
		background-color: #e6e6e6;
	}
	.app img{
		width: 100%;
		padding-bottom: 6px;
	}
	/*新品专区*/
	.index{
	    background-color: white ;
	}
	.line{
		display: inline-block;
	    width: 3px;
	    height: 12px;
	 
	    background-color: #00a8ff;
	    margin-left: 12px ;
	}
	.text{
		display: inline-block;
		margin-left: 10px ;
		line-height: 26px;
		font-size: 14px;
	}
	.index_con{
		overflow: hidden;
	}
	.com_left img{
		display: block;
    	width: 100%;
	}
	.com_right img{
		width: 102%;
	}
	.com_left{
		width: 50%;
		float: left;
	}
	.com_right{
		width: 49%;
		float: right;
	}
	.rig_top{
		width: 100%;
	}
	.rig_bot{
		width: 100%;
	}
	
	/*公共部分，专区*/
	.command_head{
		font-size: 6px;
	    line-height: 15px;
	    color: #262626;
	    padding: 10px 0 10px 0 ;
	    text-align: left;
	}
	.command_con{
		overflow: hidden;
	}
	.command{
		background-color: #e6e6e6;
	}
	.command_con ul{
		display: inline-block;
		float: left;
	}
	.com_goods{
		width: 49.5%;
		float: left;
		background-color: #FFFFFF;
		position: relative;
		margin-top: 5px ;
		margin-right: 1% ;
	}
	.com_goods:nth-of-type(2n){
		margin-right: 0 ;
	}
	.command_con .com_goods:nth-of-type(2){
		margin-top: 0;
	}
	.bimg{
		width: 78%;
		margin-left: auto ;
		margin-right: auto ;
		margin-top: 18px ;
	}
	.simg{
		width: 25%;
		position: absolute;
		top:26px;
		right: 20px;
	}
	.com_l img{
		display: block;
    	width: 100%;
	}
	.com_l{
		width: 49.5%;
		float: left;
		margin-right:1%;
	}
	.com_goods img{
		width: 100%;
	}
	.com_goods p{
		display: block;
		width: 80%;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    margin-left: auto;
	    margin-right: auto;
	    font-size:12px ;
	}
	.price{
		margin-top: 6px;
	}
	.price p{
		font-size: 12px;
	}
	.price p:nth-child(1){
		color: red;
	}
	.price p:nth-child(2){
		text-decoration: line-through;
		padding-bottom:6px ;
	}
	
	/*为你推荐*/
	.module {
		overflow: hidden;
		background-color: #e6e6e6;
	}
	.module .price p{
		padding-bottom: 16px;
	}
	
	/*有内容*/
	.command{
		background-color: #E6E6E6;
	}
	.contact{
		overflow: hidden;
		position: relative;
	}
	.contact li{
		width: 49.5%;
		float: left;
		position: relative;
		margin-bottom:4px ;
		margin-right: 1%;
	}
	.contact li:nth-of-type(2n){
		margin-right: 0 ;
	}
	.contact img{
		width: 100%;
	}
	.contact li p{
		width: 100%;
	    position: absolute;
	    background-color: rgba(0,0,0,.4);
	    bottom: 0;
	    left: 0;
	    color: #fff;
	    font-size: 12px;
	    font-weight: bold;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
		padding: 12px;
		box-sizing:border-box;
	}
	section:last-child{
		margin-bottom: 100px;
	}
	footer{
		overflow: hidden;
		padding-bottom: 32px;
		background-color: #E6E6E6;
	}
	footer p{
		font-size: 15px;
		padding: 2px;
	}
	footer div p{
		display: inline-block;
		font-size: 16px;
		padding-top: 10px;
		vertical-align: middle;
	}
	footer div img{
		display: inline-block;
		vertical-align: middle;
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
		margin-top: 10px;
	}
	
</style>
<style>
	/*轮播图不给高度，使用padding-boottom*/
	.swipe-box .mint-swipe-items-wrap{
		width: 100%;
		padding-bottom: 55%;
	}
</style>

