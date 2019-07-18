<template>
	<main>
		<p class="title">注册华硕商城账号</p>
		<input id="tel" type="tel" placeholder="手机号"/>
		<input id="yzm" type="text" placeholder="验证码"/>
		<div id="checkCode" class="code"  @click="createCode(4)">获取验证码</div>
		<input id="phone" type="text" placeholder="请输入手机验证码"/>
		<div class="code">手机验证码</div>
		
		<p class="check"><input id="box" type="checkbox"/><span>我已阅读并同意</span><span class="blue">ASUS使用条款</span><span>和</span><span class="blue">隐私政策</span></p>
		<input id="submit1" type="submit" value="注册" @click="sub1"/>
		
	</main>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
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
				var Ophone = document.getElementById('phone').value
				var Obox = document.getElementById('box')
//				console.log(Obox.checked)
				//获取显示区生成的验证码
				var checkCode = document.getElementById("checkCode").innerHTML;
				
				if(Otel == '' && Oyzm == '' && Ophone == ''){
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
				}else if(Ophone == ''){
					Toast({
					  message: '请输入手机验证码',
					  duration: 800
					});
				}else if(Obox.checked == false){
					Toast({
					  message: '请阅读条款',
					  duration: 800
					});
				}
				else{
					 this.$router.push('/login')
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
	.title{
		font-size: 22px;
		margin-top: 45px;
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
     .check{
     	width: 100%;
     	text-align: left;
     	margin-top: 20px;
     	padding-left: 5px;
     	font-size: 14px;
     	margin-bottom: 50px;
     }
     input[type='checkbox']{
     	width: 25px;
     	vertical-align: middle;
     }
     
</style>
