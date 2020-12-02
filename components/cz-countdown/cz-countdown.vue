<template>
	<view class="countdown">
		<view class="day" v-if="d!=0"><text class="text">{{d}}</text>天</view> 
		<view class="time" style="margin-left: 9rpx;">{{h<10?'0'+h:h}}</view>
		<text class="text">:</text>
		<view class="time">{{m<10?'0'+m:m}}</view>
		<text class="text">:</text>
		<view class="time">{{s<10?'0'+s:s}}</view>
	</view>
</template>

<script>
	export default{
		props:{
			startTime: {
				type: String,
			},
			endTime:{
				type: String,
			},
		},
		data(){
			return{
				timer:null,
				d:0,
				h:0,
				m:0,
				s:0
			}
		},
		mounted() {
			this.time()
		},
		beforeDestroy(){
			clearInterval(this.timer);
			this.timer = null;
		},
		computed:{
			sTime(){return this.startTime},
			eTime(){return this.endTime}
		},
		watch:{
			endTime(){
				clearInterval(this.timer);
				this.time()
			}
		},
		methods:{ 
			time(){
				let sTime = Date.parse(this.sTime); //开始时间（时间戳）
				let eTime = Date.parse(this.eTime)  //结束时间
				let leftTime = (eTime - sTime) / 1000 // 开始时间与结束时间的间隔 换算成秒
				this.getCountdownTime(leftTime)
			},
			//计算活动结束时间
			getCountdownTime(leftTime){
				let time = leftTime
				if (time>0) {
					this.timer = setInterval(() => {
						if(time == 0){
							clearInterval(this.timer)
							this.h = 0
							this.m = 0
							this.s = 0
						}else{
							this.d = parseInt(leftTime/3600/24);
							this.h = parseInt((time/3600)%24);
							this.m = parseInt((time/60)%60);
							this.s = parseInt(time%60);
							time --
						}
					},1000)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.countdown{display: flex;align-items: center;font-size: 20rpx;color: #fff;
	.day{font-size: 22rpx;color: #606060;display: flex;align-items: center;
		.text{color: #FD3C22;font-size: 32rpx;font-weight: bold;}
	}
	.time{padding: 8rpx;background-color: #606060;border-radius: 4rpx;box-sizing: border-box;}
	.text{font-size: 36rpx;font-weight: bolder;margin: 0 6rpx;color: #606060;}
	}
</style>
