<template>
	<main>
		<section class="swipe-box1">
			<mt-swipe :auto="0">
			  	<mt-swipe-item v-for="(item,index) in swipe">
			  		<img class="swipe" :src="item">
			  	</mt-swipe-item>
			</mt-swipe>
		</section>
		<section class="info">
			<p class="des">【保三年】 B9440FA-灵珑纤薄商用笔记本（Win10  64/i7-8565U/16GB/512GB SSD）</p>
			<p><span class="newprice">￥9599</span> <span class="oldprice">￥9699</span></p>
			<p class="summer">【暑假狂欢  一起放价】活动火热进行中！凭准考证或录取通知书享高考大礼; 爆款直降千元；新会员注册赠888元优惠券礼包；花呗3期免息；叠加使用积分红包；好评赠20元红包。更多福利请点击前往~</p>
		</section>
		<section class="preference">
			<p><span class="iconfont pre">&#xe87e;</span> <span>领取优惠券</span><span class="get">领取</span></p>
			<p>
				<span>优惠</span><span class="iconfont go">&#xe509;</span><br />
				<span class="iconfont bao">&#xe657;</span> <span class="six">订单总金额满69元包邮</span>
			</p>
			<p>
				<span class="iconfont sub">&#xe609;</span> <span>花呗分期</span>
				<span class="iconfont sub">&#xe609;</span> <span>满69包邮</span>
				<span class="iconfont sub">&#xe609;</span> <span>7天无理由退换货</span>
				<span class="iconfont go">&#xe509;</span>
			</p>
			<p><span class="iconfont new">&#xe64f;</span> <span>以旧换新</span> <span class="iconfont go">&#xe509;</span></p>
			<p>部分商品将由华硕授权店为消费者提供商品，且提供就近配送服务并开具发票</p>
		</section>
		<section class="order">
			<p>
				<span>购买数量：</span> 
				<span class="count"><span class="csub" @click="sub()">-</span> <span class="num">1</span> <span class="add" @click="add()">+</span></span>
			</p>
			<div class="textBox">
			    <transition name="slide" >
			        <p class="text" :key="text.id">
			        	<img class="img" src="../../../data/img/detailimg/default.jpg"/>
			        	<span class="txt">{{text.val}}</span>
			        </p>
			    </transition>
		    </div>
			<p>
				<span>用户评论（122）</span> 
				<span class="r"><span>好评率</span> <span class="red">100%</span> <span class="iconfont">&#xe509;</span></span>
			</p>
		</section>
		<section>
			<img class="img1" src="../../../data/img/detailimg/summer.jpg" />
			<img class="gds" v-for="(item,index) in goods" :src="item" />
			<img class="img1" src="../../../data/img/detailimg/summer2.jpg" />
			<img class="img2" src="../../../data/img/detailimg/back.jpg" />
			<img class="img1" v-for="(item,index) in introduce" :src="item" />	
		</section>
		<component :is='msg'></component>
	</main>
</template>

<script>
	import module from '../others/module.vue';
	export default{
		data(){
			return{
				swipe:[],
				introduce:[],
				goods:[],
				textArr: [
			        '笔记本外观很漂亮，看上去高端大气上档次，7度斜角的设计，打字时要舒服一些，高端商务本，目前还没出现卡顿现象，能满足需要，唯一的缺点是风扇声音有点大。',
			        '开机5到7秒，比较满意，最重要的是充电很快，然后可以用几个小时，另外音响很出色，CPU温度一直维持在40到60摄氏度，总之很满意。用了两天目前没发现有问题。',
			        '笔记本使用一个月，整体性能还可以。但是说好的大礼包没有收到，笔记本自带的拓展坞连接时有问题，又自己买了一个华为拓展坞配件。',
			        '[开机快][使用流畅][轻薄]使用感觉很好，只是扩展坞不含网口，在公司上网不太方便。'
			      ],
			      number: 0,
			      msg:'module'
			}
		},
		 computed: {
		    text () {
		      return {
		        id: this.number,
		        val: this.textArr[this.number]
		      }
		    }
		  },
		
		mounted(){
			this.startMove();
			var _this = this;
			this.$http.get('./data/detail.json')
				.then(function(res){
					_this.swipe = res.data.swipe;
					_this.introduce = res.data.introduce,
					_this.goods = res.data.goods
				})
				.catch((err)=>{
					console.log(err)
				})
				.then(function(){
				})
		},
		methods:{
			startMove () {
		      let timer = setTimeout(() => {
		        if (this.number === 2) {
		          this.number = 0;
		        } else {
		          this.number += 1;
		        }
		        this.startMove();
		      }, 3000); // 滚动不需要停顿则将4000改成动画持续时间
		    },
			sub(){
				var Onum = document.getElementsByClassName('num');
				if(Onum[0].innerHTML>1){
					Onum[0].innerHTML = Onum[0].innerHTML-1
				}
			},
			add(){
				var Onum = document.getElementsByClassName('num');
				if(Onum[0].innerText<10){
					Onum[0].innerText = Number(Onum[0].innerText)+1
				}	
			}
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
	.swipe-box1{
		width: 100%;
	}
	.mint-swipe{
		overflow: hidden;
	}
	.swipe{
		width: 100%;
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
	.info{
		text-align: left;
		margin-bottom: 8px;
		background: #fff;
		padding: 20px;
	}
	
	.newprice{
		color: red;
		font-size: 18px;
		font-weight: 700;
	}
	.oldprice{
		font-size: 14px;
	    margin-left: 10px;
	    color: #888;
	    font-weight: 700;
	    text-decoration: line-through;
	}
	.summer{
		color: red;
		font-size: 12px;
	}
	.preference{
		background-color: #fff;
		text-align: left;
		padding: 10px;
		font-size: 14px;
		color: #808080;
		margin-bottom: 8px;
	}
	.preference p{
		border-bottom: 1px solid #eee;
		overflow: hidden;
		padding: 10px;
	}
	.preference p:last-of-type{
		border: none;
		padding: 10px 0;
	}
	.pre,.new,.bao,.sub{
		color: #00a8ff;
	}
	.get{
		float: right;
		border: 1px solid #262626;
    	border-radius: 5px;
   		color: #262626;
   		padding: 2px 5px;
   		font-size: 12px;
	}
	.six{
		color: #333;
	}
	.go{
		float: right;
	}
	.bao{
		display: inline-block;
		font-size:20px;
		margin-top: 10px;
		margin-right: 10px;
	}
	.order{
		background-color: #fff;
		text-align: left;
		margin-bottom: 8px;
	}
	.order p{
		padding: 10px 20px;
		font-size: 14px;
	}
	.count{
		float: right;
	}
	.num{
		border: 1px solid #808080;
		padding: 3px 15px;
		font-size: 12px;
		margin: 0 5px;
	}
	.r{
		float: right;
	}
	.red{
		color: red;
	}
	.img{
		display: inline-block;
		float: left;
		border-radius: 50%;
		width: 50px;
		margin-top: 15px;
	}
	.txt{
		display: inline-block;
		float: right;
		width: 80%;
	}
	.textBox {
	    width: 100%;
	    height: 90px;
	    margin: 0 auto;
	    overflow: hidden;
	    position: relative;
	    text-align: left;
	    background-color: #eee;
	}
	.text {
	    width: 90%;
	    position: absolute;
	    bottom: 0;
	    overflow: hidden;
	}
	.slide-enter-active, .slide-leave-active {
	    transition: all 1.5s linear;
	}
	.slide-enter{
	    transform: translateY(75px);
	}
	.slide-leave-to {
	    transform: translateY(-75px);
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

<style>
	/*轮播图不给高度，使用padding-boottom*/
	.swipe-box1 .mint-swipe-items-wrap{
		width: 100%;
		padding-bottom: 100%;
	}
</style>