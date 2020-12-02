<template>
	<div>
	<!-- <view class='flash-sale'>
			<view class="saleBox"></view>
			<view class='header' v-if="timeList.length>0">
				<image :src='timeList[active].slide'></image>
			</view>
			<view class="seckillList acea-row row-between-wrapper">
				<view class="priceTag">
					<image src="/static/images/priceTag.png"></image>
				</view>
				<view class='timeLsit'>
					<scroll-view class="scroll-view_x" scroll-x scroll-with-animation :scroll-left="scrollLeft" style="width:auto;overflow:hidden;height:106rpx;">
						<block v-for="(item,index) in timeList" :key='index'>
							<view @tap='settimeList(item,index)' class='item' :class="active == index?'on':''">
								<view class='time'>{{item.time}}</view>
								<view class="state">{{item.state}}</view>
							</view>
						</block>
					</scroll-view>
				</view>
			</view>
			<view class='list'>
				<block v-for="(item,index) in seckillList" :key='index'>
					<view class='item acea-row row-between-wrapper' @tap='goDetails(item)'>
						<view class='pictrue'>
							<image :src='item.image'></image>
						</view>
						<view class='text acea-row row-column-around'>
							<view class='name line1'>测试商品{{item.title}}</view>
							<view class='money'>￥
								<text class='num font-color'>{{item.price}}</text>
								<text class="y_money">￥{{item.ot_price}}</text>
							</view>
							<view class="limit">限量 <text class="limitPrice">{{item.quota}}件</text></view>
							<view class="progress">
								<view class='bg-reds' :style="'width:'+item.percent+'%;'"></view>
								<view class='piece'>已抢{{item.percent}}%</view>
							</view>
						</view>
						<view class='grab bg-color' v-if="status == 1">马上抢</view>
						<view class='grab bg-color' v-else-if="status == 2">未开始</view>
						<view class='grab bg-color-hui' v-else>已结束</view>
					</view>
				</block>
			</view>
		</view>
		<view class='noCommodity' v-if="seckillList.length == 0 && (page != 1 || active== 0)">
			<view class='pictrue'>
				<image src='/static/images/noShopper.png'></image>
			</view>
		</view>
		<home></home> -->
		<!-- pst开始 -->
		<view class="xsqg">
				<view class="ban">
					<image src="~@/static/xianshiqianggou/x2.jpg" mode=""></image>
					<image src="~@/static/xianshiqianggou/x1.jpg" mode=""></image>
				</view>
				<view class="qgsd">
					<span class="" :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">
						<p>9:00</p>
						<p>已抢购</p>
						<view></view>
					</span>
					<span class="" :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">
						<p>10:00</p>
						<p>已抢购</p>
						<view></view>
					</span>
					<span class="" :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">
						<p>12:00</p>
							<p>抢购进行中</p>
						<view></view>
					</span>
					
					<span class="" :class="['inv-h',Inv==3?'inv-h-se':'']" @click="Inv=3">
						<p>14:00</p>
						<p>已抢购</p>
						<view></view>
					</span>
					<span class="" :class="['inv-h',Inv==4?'inv-h-se':'']" @click="Inv=4">
						<p>16:00</p>
						<p>已抢购</p>
						<view></view>
					</span>
				</view>
				
				<view class="" v-show="Inv == 0">新品惠萃</view>
				<view class="" v-show="Inv == 1">品牌云集购</view>
				<view class="qgsp"  v-show="Inv == 2">
					<p class="qgsp1"  v-for="(item,index) in seckillList" :key='index'  @tap='goDetails(item)'>
						<image class="qgimg" :src='item.image' mode=""></image>
						<view class="spxxms">
							<span>{{item.title}}</span>
							<p class="tejia">
								<span>￥{{item.price}}</span>
								<span>￥{{item.ot_price}}</span>
							</p>
							<image class="tjtp1" src="~@/static/xianshiqianggou/x4.png" mode=""></image>
							<p class="richangjia">
								<span>日常价</span>
								<span>日常价</span>
							</p>
							<view class="tjtp22">
								<image class="tjtp2  animate__animated animate__infinite" src="~@/static/xianshiqianggou/x5.png" mode=""></image>
							</view>
							<p class="daoshoujia">
								<span>
									到手价
									<span style="color: #FF0000;font-size: 0.9rem;">¥99.0元</span>
								</span>
								<span class="ljqg">立即抢购</span>
							</p>
						</view>
					</p>
					<!-- <p class="qgsp1">
						<image class="qgimg" src="https://img.jingdongyouxuan.com/833515026382848" mode=""></image>
						<view class="spxxms">
							<span>【儿童智能机器人】智能机器人对话儿童宝宝早教机高科技wifi多功能语音陪伴讲故事ai人工教育智能机器人早教机</span>
							<p class="tejia">
								<span>299.0元</span>
								<span>299.0元</span>
							</p>
							<image class="tjtp1" src="~@/static/xianshiqianggou/x4.png" mode=""></image>
							<p class="richangjia">
								<span>日常价</span>
								<span>日常价</span>
							</p>
							<view class="tjtp22">
								<image class="tjtp2  animate__animated animate__infinite" src="~@/static/xianshiqianggou/x5.png" mode=""></image>
							</view>
							<p class="daoshoujia">
								<span>
									到手价
									<span style="color: #FF0000;font-size: 0.9rem;">¥99.0元</span>
								</span>
								<span class="ljqg">立即抢购</span>
							</p>
						</view>
					</p>
					 -->
					<!-- <p class="qgsp1">
						<image class="qgimg" src="https://img.jingdongyouxuan.com/838443866783744" mode=""></image>
						<view class="spxxms">
							<span>【儿童智能机器人】智能机器人对话儿童宝宝早教机高科技wifi多功能语音陪伴讲故事ai人工教育智能机器人早教机</span>
							<p class="tejia">
								<span>299.0元</span>
								<span>299.0元</span>
							</p>
							<image class="tjtp1" src="~@/static/xianshiqianggou/x4.png" mode=""></image>
							<p class="richangjia">
								<span>日常价</span>
								<span>日常价</span>
							</p>
							<view class="tjtp22">
								<image class="tjtp2" src="~@/static/xianshiqianggou/x5.png" mode=""></image>
							</view>
							<p class="daoshoujia">
								<span>
									到手价
									<span style="color: #FF0000;font-size: 1rem;">¥99.0元</span>
								</span>
								<span class="ljqg">立即抢购</span>
							</p>
						</view>
					</p>
					<p class="qgsp1">
						<image class="qgimg" src="https://img.jingdongyouxuan.com/833550792785920" mode=""></image>
						<view class="spxxms">
							<span>【儿童智能机器人】智能机器人对话儿童宝宝早教机高科技wifi多功能语音陪伴讲故事ai人工教育智能机器人早教机</span>
							<p class="tejia">
								<span>299.0元</span>
								<span>299.0元</span>
							</p>
							<image class="tjtp1" src="~@/static/xianshiqianggou/x4.png" mode=""></image>
							<p class="richangjia">
								<span>日常价</span>
								<span>日常价</span>
							</p>
							<view class="tjtp22">
								<image class="tjtp2" src="~@/static/xianshiqianggou/x5.png" mode=""></image>
							</view>
							<p class="daoshoujia">
								<span>
									到手价
									<span style="color: #FF0000;font-size: 1rem;">¥99.0元</span>
								</span>
								<span class="ljqg">立即抢购</span>
							</p>
						</view>
					</p>
					<p class="qgsp1">
						<image class="qgimg" src="https://img.jingdongyouxuan.com/833904590716928" mode=""></image>
						<view class="spxxms">
							<span>【儿童智能机器人】智能机器人对话儿童宝宝早教机高科技wifi多功能语音陪伴讲故事ai人工教育智能机器人早教机</span>
							<p class="tejia">
								<span>299.0元</span>
								<span>299.0元</span>
							</p>
							<image class="tjtp1" src="~@/static/xianshiqianggou/x4.png" mode=""></image>
							<p class="richangjia">
								<span>日常价</span>
								<span>日常价</span>
							</p>
							<view class="tjtp22">
								<image class="tjtp2" src="~@/static/xianshiqianggou/x5.png" mode=""></image>
							</view>
							<p class="daoshoujia">
								<span>
									到手价
									<span style="color: #FF0000;font-size: 1rem;">¥99.0元</span>
								</span>
								<span class="ljqg">立即抢购</span>
							</p>
						</view>
					</p>
				 -->
				</view>
				<view class="" v-show="Inv == 3">省钱更省心</view>
				<view class="" v-show="Inv == 4">省钱更省心</view>
				
				<view>
					<tabBar2 :pagePath="pages"></tabBar2>
				</view>
		</view>
		<!-- pst结束 -->
	</div>
</template>

<script>
	import {
		getSeckillIndexTime,
		getSeckillList
	} from '../../../api/activity.js';
	import home from '@/components/home/index.vue';
	
	export default {
		components: {
			home
		},
		data() {
			return {
				topImage: '',
				seckillList: [],
				timeList: [],
				active: 5,
				scrollLeft: 0,
				interval: 0,
				status: 1,
				countDownHour: "00",
				countDownMinute: "00",
				countDownSecond: "00",
				page: 1,
				limit: 4,
				loading: false,
				loadend: false,
				pageloading: false,
				
				Inv:2,//pst
				pages:"/pages/activity/goods_seckill/index",//pst
			}
		},
		onLoad() {
			this.getSeckillConfig();
		},
		methods: {
			getSeckillConfig: function() {
				let that = this;
				getSeckillIndexTime().then(res => {
					that.topImage = res.data.lovely;
					that.timeList = res.data.seckillTime;
					that.active = res.data.seckillTimeIndex;
					if (that.timeList.length) {
						// wxh.time(that.data.timeList[that.data.active].stop, that);
						that.scrollLeft = (that.active - 1.37) * 100
						setTimeout(function() {
							that.loading = true
						}, 2000);
						that.seckillList = [],
							that.page = 1
						that.status = that.timeList[that.active].status
						that.getSeckillList();
					}
				});
			},
			getSeckillList: function() {
				var that = this;
				var data = {
					page: that.page,
					limit: that.limit
				};
				if (that.loadend) return;
				if (that.pageloading) return;
				this.pageloading = true
				getSeckillList(that.timeList[that.active].id, data).then(res => {
					var seckillList = res.data;
					var loadend = seckillList.length < that.limit;
					that.page++;
					that.seckillList = that.seckillList.concat(seckillList),
						that.page = that.page;
					that.pageloading = false;
					that.loadend = loadend;
				}).catch(err => {
					that.pageloading = false
				});
			},
			settimeList: function(item, index) {
				var that = this;
				this.active = index
				if (that.interval) {
					clearInterval(that.interval);
					that.interval = null
				}
				that.interval = 0,
					that.countDownHour = "00";
				that.countDownMinute = "00";
				that.countDownSecond = "00";
				that.status = that.timeList[that.active].status;
				that.loadend = false;
				that.page = 1;
				that.seckillList = [];
				// wxh.time(e.currentTarget.dataset.stop, that);
				that.getSeckillList();
			},
			goDetails(item){
				uni.navigateTo({
					url: '/pages/activity/goods_seckill_details/index?id=' + item.id + '&time=' + this.timeList[this.active].stop + '&status=' + this.status
				})
			},
			
			//pst
			changeTab(Inv){
			    that.navIdx = Inv;                              
			},
		},
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {
			this.getSeckillList();
		}
	}
</script>

<!-- <style>
	page {
		background-color: #F5F5F5 !important;
	}

	.flash-sale .header {
		width: 710rpx;
		height: 300rpx;
		margin: -215rpx auto 0 auto;
		border-radius: 20rpx;
	}

	.flash-sale .header image {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}

	.flash-sale .seckillList {
		padding: 0 20rpx;
	}

	.flash-sale .seckillList .priceTag {
		width: 75rpx;
		height: 70rpx;
	}

	.flash-sale .seckillList .priceTag image {
		width: 100%;
		height: 100%;
	}

	.flash-sale .timeLsit {
		width: 610rpx;
		white-space: nowrap;
		margin: 10rpx 0;
	}

	.flash-sale .timeLsit .item {
		display: inline-block;
		font-size: 20rpx;
		color: #666;
		text-align: center;
		padding: 11rpx 0;
		box-sizing: border-box;
		height: 96rpx;
		margin-right: 35rpx;
	}

	.flash-sale .timeLsit .item .time {
		font-size: 36rpx;
		font-weight: 600;
		color: #333;
	}

	.flash-sale .timeLsit .item.on .time {
		color: #E93323;
	}

	.flash-sale .timeLsit .item.on .state {
		width: 90rpx;
		height: 30rpx;
		border-radius: 15rpx;
		background: linear-gradient(90deg, rgba(252, 25, 75, 1) 0%, rgba(252, 60, 32, 1) 100%);
		color: #fff;
	}

	.flash-sale .countDown {
		height: 92rpx;
		border-bottom: 1rpx solid #f0f0f0;
		margin-top: -14rpx;
		font-size: 28rpx;
		color: #282828;
	}

	.flash-sale .countDown .num {
		font-size: 28rpx;
		font-weight: bold;
		background-color: #ffcfcb;
		padding: 4rpx 7rpx;
		border-radius: 3rpx;
	}

	.flash-sale .countDown .text {
		font-size: 28rpx;
		color: #282828;
		margin-right: 13rpx;
	}

	.flash-sale .list .item {
		height: 230rpx;
		position: relative;
		width: 710rpx;
		margin: 0 auto 20rpx auto;
		background-color: #fff;
		border-radius: 20rpx;
		padding: 0 25rpx;
	}

	.flash-sale .list .item .pictrue {
		width: 180rpx;
		height: 180rpx;
		border-radius: 10rpx;
	}

	.flash-sale .list .item .pictrue image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.flash-sale .list .item .text {
		width: 460rpx;
		font-size: 30rpx;
		color: #333;
		height: 166rpx;
	}

	.flash-sale .list .item .text .name {
		width: 100%;
	}

	.flash-sale .list .item .text .money {
		font-size: 30rpx;
		color: #E93323;
	}

	.flash-sale .list .item .text .money .num {
		font-size: 40rpx;
		font-weight: 500;
		font-family: 'Guildford Pro';
	}

	.flash-sale .list .item .text .money .y_money {
		font-size: 24rpx;
		color: #999;
		text-decoration-line: line-through;
		margin-left: 15rpx;
	}

	.flash-sale .list .item .text .limit {
		font-size: 22rpx;
		color: #999;
		margin-bottom: 5rpx;
	}

	.flash-sale .list .item .text .limit .limitPrice {
		margin-left: 10rpx;
	}

	.flash-sale .list .item .text .progress {
		overflow: hidden;
		background-color: #FFEFEF;
		width: 260rpx;
		border-radius: 18rpx;
		height: 18rpx;
		position: relative;
	}

	.flash-sale .list .item .text .progress .bg-reds {
		width: 0;
		height: 100%;
		transition: width 0.6s ease;
		background: linear-gradient(90deg, rgba(233, 51, 35, 1) 0%, rgba(255, 137, 51, 1) 100%);
	}

	.flash-sale .list .item .text .progress .piece {
		position: absolute;
		left: 8%;
		transform: translate(0%, -50%);
		top: 49%;
		font-size: 16rpx;
		color: #FFB9B9;
	}

	.flash-sale .list .item .grab {
		font-size: 28rpx;
		color: #fff;
		width: 150rpx;
		height: 54rpx;
		border-radius: 27rpx;
		text-align: center;
		line-height: 54rpx;
		position: absolute;
		right: 30rpx;
		bottom: 30rpx;
		background: #bbbbbb;
	}

	.flash-sale .saleBox {
		width: 100%;
		height: 230rpx;
		background: rgba(233, 51, 35, 1);
		border-radius: 0 0 50rpx 50rpx;
	}
</style>
 -->
<style scoped>
	.xsqg{background: #c51516;display: inline-block;width: 100%;}
	.ban image:first-child{height: 10rem;width: 100%;}
	.ban image:nth-child(2){width: 98%; height: 1.8rem;display: block;margin: 0 auto;}
	
	.qgsd{display: flex;justify-content: space-around;color: #fff;margin-top: 1rem;margin-bottom: 1rem;font-size: 0.6rem;text-align: center;}
	
	.qgsp{background-color: #fff;width: 96%;display: block;margin: 0 auto;padding: 0.5rem;margin-bottom: 4rem;}
	.qgsp1{display: flex;justify-content: space-around;width: 100%;border-bottom: 1px dashed #D3D3D3;margin-bottom: 1rem;}
	.qgimg{width: 120px;height: 120px;}
	.qgsp p view{width: 60%;font-size: 0.8rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
	.tjtp1{width: 98%;height: 3.4rem;display: block;margin: 0 auto;padding: 0 2%;}
	.spxxms{position: relative;}
	
	.tejia,.richangjia,.daoshoujia{
		width: 98%;
		display: flex;
		justify-content: space-between;
		padding: 0 2%;
	}
	.richangjia{position: relative;margin-top: -2.8rem;}
	.daoshoujia{margin-top: 6rem;color: #656565;font-weight: 600;font-size: 0.5rem;}
	.tejia{margin-top: 0.5rem;}
	.tjtp22{display: block;margin: 0 auto;margin-top: -4.2rem;}
	.tjtp2{width:43%;height: 3rem;padding-left: 17.8%; position: absolute;display: block;margin: 0 auto;}
	
	/* 	图片上下浮动效果 */
	.tjtp2{
		animation:Updown 1s infinite alternate;
		-webkit-animation:Updown 1s alternate infinite;/*infinite无限播放，alternate轮流反向播放*/
	}
	@keyframes Updown{
	from{margin-top:40px;}
	to{margin-top:20px;}
	}
	@-webkit-keyframes Updown{
	from{margin-top:30px;}
	to{margin-top:10px;}
	}
	
	.ljqg{
		background-color:#FF0000;
		color: #fff;
		border-radius: 35px;
		display: inline-block;
		text-align: center;
		padding:0.5rem 0.6rem;
		line-height: 0.7rem;
		margin-bottom: 0.5rem;
		margin-left: 0.2rem;
	}
	
	/* 元素放大缩小效果 */
	 @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
		0%{
			transform: scale(1);  /*开始为原始大小*/
		}
		25%{
			transform: scale(1.1); /*放大1.1倍*/
		}
		50%{
			transform: scale(1);
		}
		75%{
			transform: scale(1.1);
		}
	}
	.ljqg{
		animation-name: scaleDraw;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-duration: 5s;
		-webkit-animation-name: scaleDraw; /*关键帧名称*/
		-webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
		-webkit-animation-iteration-count: infinite;  /*动画播放的次数*/
		-webkit-animation-duration: 5s; /*动画所花费的时间*/
	}
	
	
	.inv-h-se{
		background-color: #fff;
		color: #e02f25;
		border-radius: 5px;
		padding: 0.1rem 0.8rem;
		text-align: center;
		font-weight: 600;
		position: relative;
		font-size: 0.8rem;
	}
	
	.inv-h-se view:last-child{
		position: absolute;
		z-index: 10;
		width: 0;
		height: 0;
		bottom: -1rem;
		border: 8px solid transparent;
		border-top: 8px solid #fff;
		left: 38%;
	}
</style>
