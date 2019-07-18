<template>
	<section>
		<img src="../../../data/img/othersimg/wap_temp.jpg" />
	</section>
</template>

<script>
	export default {
		data() {
			return {
				count: "", //倒计时
			}
		},
		created() {
			//根据需求确定在哪里调用
			this.goGrdoupRecor()
		},
		methods: {
			//  3秒后回到首页
			goGrdoupRecor() {
				const TIME_COUNT = 2;
				if(!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
							//跳转的页面写在此处
							this.$router.push({
								path: '/index'
							});
						}
					}, 1000)
				}
			},
		}
	}
</script>

<style scoped="scoped">
	img {
		width: 100%;
	}
</style>