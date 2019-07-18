<template>
	<main>
		<img class="logo" src="../../assets/img/login/sigin_logo.png" />
		<p class="tabbtn">
			<span v-bind:class="{active:cur == 0}" @click="cur=0">验证码登录</span>
			<span v-bind:class="{active:cur == 1}" @click="cur=1">账号登录</span>
		</p>
		<section v-show="cur==0">
			<input id="tel" type="tel" placeholder="手机号"/>
			<input id="yzm" type="text" placeholder="验证码"/>
			<div id="checkCode" class="code"  @click="createCode(4)">获取验证码</div>
			<input id="submit1" type="submit" value="登录" @click="sub1"/>
			
			<router-link to='/register'><p class="res">企业用户注册</p></router-link>
			<p class="forget">
				<router-link to='/register'><span>注册ASUS商城账号</span></router-link>
				<span>|</span>
				<span>忘记密码</span>
			</p>
			<span class="protect">隐私保护政策</span>
		</section>
		<section v-show="cur==1">
			<input id="name" type="tel" placeholder="用户名/邮箱地址/手机号"/>
			<input id="mm" type="password" placeholder="填写密码"/>
			<input id="submit2" type="submit" value="登录" @click="sub2"/>
			
			<p class="res">企业用户注册</p>
			<p class="forget">
				<span>注册ASUS商城账号</span>
				<span>|</span>
				<span>忘记密码</span>
			</p>
			<span class="protect">隐私保护政策</span>
		</section>
	</main>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				cur:0
			}
		},
		methods:{

		    //生成验证码的方法
		  	createCode(length){
		        var code = "";
		        var codeLength = parseInt(length); //验证码的长度
		        var checkCode = document.getElementById("checkCode");
		        //所有候选组成验证码的字符，当然也可以用中文的
		        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
		        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
		        //循环组成验证码的字符串
		        for (var i = 0; i < codeLength; i++){
		            //获取随机验证码下标
		            var charNum = Math.floor(Math.random() * 62);
		            //组合成指定字符验证码
		            code += codeChars[charNum];
		        }
		        if (checkCode)
		        {
		            //为验证码区域添加样式名
		            checkCode.className = "code";
		            //将生成验证码赋值到显示区
		            checkCode.innerHTML = code;
		        }
		    },
			sub1(){
				var Otel = document.getElementById('tel').value
				var Oyzm = document.getElementById('yzm').value
				//获取显示区生成的验证码
				var checkCode = document.getElementById("checkCode").innerHTML;
				
				if(Otel == '' && Oyzm == ''){
					Toast({
					  message: '请输入',
					  duration: 800
					});
				}else if(Otel == ''){
					Toast({
					  message: '请输入手机号',
					  duration: 800
					});
				}else if(!(/^1([3456789])\d{9}$/).test(Otel)){
					Toast({
					  message: '手机号不正确',
					  duration: 800
					});
				}else if(Oyzm == ''){
					Toast({
					  message: '请输入验证码',
					  duration: 800
					});
				}else if(Oyzm.toUpperCase() != checkCode.toUpperCase()){
					Toast({
					  message: '验证码不正确',
					  duration: 800
					});
					createCode(4);
				}else{
					this.$store.state.log = 'alreadylogin';
					 this.$router.push('/my')
				}
			},
			sub2(){
				var Oname = document.getElementById('name').value
				var Omm = document.getElementById('mm').value
				
				if(Oname == '' && Omm == ''){
					Toast({
					  message: '请输入',
					  duration: 800
					});
				}else if(Oname == ''){
					Toast({
					  message: '请输入用户名/邮箱地址/手机号',
					  duration: 800
					});
				}else if(!(/(^1([3456789])\d{9}$)|(^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+)|(^[\u2E80-\u9FFF]+$)/).test(Oname)){
					Toast({
					  message: '用户名/邮箱地址/手机号不正确',
					  duration: 800
					});
				}else if(Omm == ''){
					Toast({
					  message: '请输入密码',
					  duration: 800
					});
				}else if(!(/^\d{6,10}$/).test(Omm)){
					Toast({
					  message: '密码不正确，6-10位',
					  duration: 800
					});
				}else{
					console.log('正确')
				}
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	main{
		margin: 0 auto;
		overflow: hidden;
	}
	.active{
		color: #00a8ff;
	}
	.logo{
		width: 50%;
		margin: 0 auto;
		margin-top: 50px;
	}
	.tabbtn{
		overflow: hidden;
	}
	.tabbtn span{
		margin-top:20px ;
		font-size: 23px;
	}
	.tabbtn span:nth-of-type(1){
		display: inline-block;
		border-right:1px soild #333;
	}
	input{
		width: 94%;
		border:.5px solid #c9c9c9;
		outline: none;
		font-size: 16px;
		padding-left: 10px;
		box-sizing: border-box;
	}
	input[type=tel]{
		height: 45px;
		margin-top: 50px;
	}
	input[type=password]{
		height: 45px;
		margin-top: 12px;
	}
	input[type=text]{
		width: 61.5%;
		/*float: left;*/
		height: 45px;
		margin-top: 12px;
	}
	input[type=tel]:focus,
	input[type=password]:focus,
	input[type=text]:focus{
		 border: .5px solid #00a8ff;
	}
	input[type=submit]{
		height: 40px;
		margin-top: 20px;
		background-color: #00a8ff;
		border: none;
		color: #fff;
		border-radius: 5px;
	}
	.res{
		width: 30%;
		float: left;
		font-size: 13px;
		padding-top: 10px;
	}
	.forget{
		font-size: 13px;
		padding-top: 10px;
		float: right;
		padding-right: 15px;
	}
	
	.protect{
		display: block;
		width: 100%;
		float: left;
		padding: 10px 0 0 15px;
		text-align: left;
		font-size: 13px;
		color: #00a8ff;
	}
	
	a{
		color: #333;
		text-decoration: none;
	}
	.code{
         color:white;
         font-size:18px;
         border:0;
         letter-spacing:1px;            
         float:right;           
         cursor:pointer;
         width:30%;
         margin-right: 3.5%;
         height:45px;
         line-height:45px;
         text-align:center;
         vertical-align:middle;
         background-color:#00a8ff;
         margin-top: 12px;
         border-radius: 5px;
     }
</style>
