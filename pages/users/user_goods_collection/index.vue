<template>
	<view class="djqf">
		<!-- <view class="djbg background-image" style="background-image: url(../../static/dengjiaquanfan/d1.jpg);" > -->
		<view class="djbg background-image"  >
			<image src="/static/dengjiaquanfan/d1.jpg" mode=""></image>
			<image @click="showBase" src="/static/dengjiaquanfan/d2.png" mode=""></image>
		</view>
		<view class="jujieshu">
			<span class="qefgmxx">王** 在11分钟前积分兑换该商品</span>
			<p>
				<span>距结束</span>
				<span>
					<countdown :startTime="startTime" :endTime="enTime" />
				</span>
			</p>
		</view>
		<view class="hwtj">
			<image src="/static/dengjiaquanfan/d3.jpg" mode=""></image>
		</view>
		<view class="hwsp">
			<view>
				<span>
					<image src="https://img.jingdongyouxuan.com/833651763314688" mode=""></image>
					<p class="djqefhtb">等价全额返还</p>
				</span>
				<span class="hwtext">
					<p>【抖音爆款第三代麦饭石加厚不粘锅】麦饭石不粘锅炒锅炒菜锅少油烟平底锅铁锅燃气电磁炉适用32CM</p>
					<p>
						<image class="huoimg" src="/static/dengjiaquanfan/d4.png" mode=""></image>
						<span>当前热度7000+</span>
					</p>
					<p>等价全返¥99.0</p>
				</span>
			</view>
			
			<view>
				<span>
					<image src="https://img.jingdongyouxuan.com/833651763314688" mode=""></image>
					<p class="djqefhtb">等价全额返还</p>
				</span>
				<span class="hwtext">
					<p>【抖音爆款第三代麦饭石加厚不粘锅】麦饭石不粘锅炒锅炒菜锅少油烟平底锅铁锅燃气电磁炉适用32CM</p>
					<p>
						<image class="huoimg" src="/static/dengjiaquanfan/d4.png" mode=""></image>
						<span>当前热度7000+</span>
					</p>
					<p>等价全返¥99.0</p>
				</span>
			</view>
			
			<view>
				<span>
					<image src="https://img.jingdongyouxuan.com/833651763314688" mode=""></image>
					<p class="djqefhtb">等价全额返还</p>
				</span>
				<span class="hwtext">
					<p>【抖音爆款第三代麦饭石加厚不粘锅】麦饭石不粘锅炒锅炒菜锅少油烟平底锅铁锅燃气电磁炉适用32CM</p>
					<p>
						<image class="huoimg" src="/static/dengjiaquanfan/d4.png" mode=""></image>
						<span>当前热度7000+</span>
					</p>
					<p>等价全返¥99.0</p>
				</span>
			</view>
			
			<view>
				<span>
					<image src="https://img.jingdongyouxuan.com/833651763314688" mode=""></image>
					<p class="djqefhtb">等价全额返还</p>
				</span>
				<span class="hwtext">
					<p>【抖音爆款第三代麦饭石加厚不粘锅】麦饭石不粘锅炒锅炒菜锅少油烟平底锅铁锅燃气电磁炉适用32CM</p>
					<p>
						<image class="huoimg" src="/static/dengjiaquanfan/d4.png" mode=""></image>
						<span>当前热度7000+</span>
					</p>
					<p>等价全返¥99.0</p>
				</span>
			</view>
		</view>
		
		<view>
			<tabBar3 :pagePath="pages"></tabBar3>
		</view>
		
		<!-- pst积分规则-弹窗部分开始 -->
		<view class="tank" v-show="isshow">
				<!-- <scroll-view class="tank2" :class="{isTop:isTop}" scroll-y="true" @scroll = "monScroll"> -->
				<scroll-view class="tank2" scroll-y="true" @scroll = "monScroll">
					<text class="jfgztext">活动规则</text>
					<text class="jfgztext2">
						1. 本次活动仅限于本专题内的商品，商城其他商品不参与此次活动；
						2. 参与商品：限首单全额返活动页面内带有全额返标签的商品；
						3. 用户本次活动中所享有的商品款项返还将在交易完成后以积分形式返还到您的账户，返还的积分可以在积分中心兑换商品；
						4. 若发生退/换货、退款等情形，不再返还积分；
						6. 在法律允许范围内，本平台对此活动拥有最终解释权。未尽事宜请咨询客服。
					</text>
				</scroll-view>
				<view class="queren" @click="ShowHidden">
					我知道了
				</view>
		</view><!-- pst积分规则-弹窗部分结束 -->
	</view>
</template>

<script>
	import countdown from '@/components/cz-countdown/cz-countdown';
	export default {
		components: {
		    countdown
		},
		data() {
			return {
				pages:"/pages/dengjiaquanfan/dengjiaquanfan",
				startTime:'2020-10-22 05:02:22',
				enTime:'2020-10-22 12:00:00',
				
				// pst-弹窗部分
				isshow:false,//默认不显示弹窗
			}
		},
		methods: {
			// 弹窗部分开始-pst
			monScroll(e){
				var tempScroll =  e.detail.scrollTop
				if(tempScroll >= 40){
					this.isTop = true
				} else {
					this.isTop = false
				}
				console.log(tempScroll)
			},
			showBase:function(){
				this.isshow = true;  
				 console.log("点击显示")
			},
			ShowHidden:function(){
				this.isshow = false;
				 console.log("点击隐藏")
			},
			// 弹窗部分结束-pst 
		}
	}
</script>

<style scoped>
	.djqf{background: #c51516;display: inline-block;width: 100%;}
	/* .djbg{width: 100%;height: 240px;z-index: 10;position: relative;background-image: linear-gradient(140deg,#16a9ce,#1bdeba);}
	.background-image {
	    display: inline-block;
	    background-position: 50%;
	    background-size: cover;
	    background-repeat: no-repeat;
	}
	.djbg image:first-child{height:64px;width: 1rem;position: absolute;top: 20%;right: 0;} */
	.djbg{width: 100%;position: relative;}
	.djbg image:first-child{height: 13rem;width: 100%;}
	.djbg image:nth-child(2){height:64px;width: 1rem;position: absolute;top: 25%;right: 0;}
	.jujieshu{height: 2rem;}
	.jujieshu p{float: right;margin-right: 0.5rem;}
	.jujieshu p span{display: inline-block;}
	.jujieshu p span:first-child{color: #fff;font-size: 0.8rem;line-height: 2rem;}
	.qefgmxx{float: left;color: #fff;font-size: 0.6rem;background-color: #000000B3;padding: 0.4rem;border-radius: 1rem;margin-left: 0.5rem;}

	.hwtj image{width: 100%;height: 3.4rem;}
	
	.hwsp{
		background-color: #fff;
		display: block;
		width: 96%;
		position: relative;
		margin: 0 auto;
		margin-bottom: 4rem;
	}
	.hwsp view{display: flex;justify-content: space-between;border-bottom: 1px dashed #D3D3D3;margin-bottom: 1rem;position: relative;width: 100%;}
	.hwsp view span:first-child{width: 34%;padding: 0.5rem;}
	.hwsp view span:last-child{width: 70%;padding: 0.5rem;}
	.hwsp view span:first-child image{width: 120px;height: 120px;position: relative;}
	.hwtext p:first-child{
		width: 100%; 
		color: #000;
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 1px;
		display: -webkit-box;
		box-orient: vertical;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		
	}
/* 	.hwsp view span{position: relative;} */
	.djqefhtb{
		background-color:#c51516;
		color: #fff;
		text-align: center;
		width: 26%;
		/* display: block;
		margin: 0 auto; */
		font-size: 0.6rem;
		padding: 0.2rem;
		position: absolute;
		top: 6.5rem;
		/* z-index: 9; */
	}
	
	.hwtext p:nth-child(2) span:last-child{
		background-color: #dc1a21;
		color: #fff;
		width: 56% !important;
		display: inline-block;
		border-radius: 1rem;
		text-align: right;
		margin-top: 1rem;
		font-size: 0.8rem;
		padding: 0.1rem 0.3rem 0.1rem 0.1rem !important;
		position: relative;
		margin-left: 1rem;
	}
	.huoimg{margin-left: 1rem;width: 1.5rem !important;height: 2rem !important;position: absolute;float: left;z-index: 99;top: 3.5rem;}
	.hwtext p:nth-child(3){
		background-color: #dc1a21;
		color: #fff;
		/* width: 60%; */
		display: inline-block;
		border-radius: 1rem;
		text-align: center;
		font-size: 0.8rem;
		padding: 0.4rem;
		float: right;
		margin-top: 1rem;
	}

	
	/* 弹窗部分开始 */
	.tank{
		position: fixed;
		background-color: rgba(0,0,0,.4);
	/* 	width: 100%; */
		height: 100%;
		z-index: 9999;
		text-align: left;
		top: 0;
		left: 0;
	/* 	margin-top: -26rem; */
	}
	.tank2{
		background-color: #fff;
		width: 80%;
		display: block;
		margin: 0 auto;
		height: 15rem;
		margin-top: 8rem;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		padding: 1px 10px;
	}
	.queren{
		width: 80%;
		height: 2.4rem;
		background-color: #fff;
		text-align: center;
		display: block;
		margin: 0 auto;
		line-height: 2rem;
		color: #ee0a24;
		font-size: 1rem;
		border-top:1px solid #CDCDCD;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.jfgztext{
		position: fixed;
		background-color: #fff;
		width: 70%; 
		display:block;
		text-align: center;
		font-size: 1rem;
		color: #C22B2D;
		padding: 10px; 
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		
	}
	.jfgztext2{
		font-size: 28rpx;
		color: #646566;
		width: 94%;
		display: block;
		margin: 0 auto;
		margin-bottom: 5px;
		padding-top: 40px;
		
	}

</style>

<style scoped>
	/deep/ .countdown .time{background-color: #900209;margin-top: 0.3rem;}
	/deep/ .countdown{margin-left: 0.3rem;}
	/deep/ .image-container{margin: 0 auto;}
	/deep/ .countdown .text{font-size: 0.1rem;}
</style>