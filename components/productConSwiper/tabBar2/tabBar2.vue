<template>
    <view class="uni-tabbar">
        <view class="uni-tabbar__item" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
           <view  class="uni-tabbar__bd">
			     <view class="uni-tabbar__icon">
			        <image  :src="item.iconPath"></image>
				</view>
			</view>
            <view class="uni-tabbar__label" :class="{'active': item.pagePath == pagePath}">
                {{item.text}}
            </view>
        </view>
		
    </view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex:1,
				// page: 'contact',
				// showPage: false,
				// containerHeight: 500,
				tabbar: [{
					"pagePath": "/pages/index/index",
					"iconPath": require("../../static/tabr/h21.png"),
					"text": "首页"
				}, {
					"pagePath": "/pages/activity/goods_seckill/index",
					"iconPath": require("../../static/tabr/h224.png"),
					"text": "限时秒杀"          
				}, {
					"pagePath": "/pages/users/user_sgin/index",
					"iconPath": require("../../static/tabr/h23.png"),
					"text": "福利中心"
				}],
			
			}
		},
		props:{
			pagePath:{
					type:String,
					defalt:""
			}
		},
		methods: {
			changeTab(item) {
				this.page = item.pagePath;
　　　　　　　　　　// 这里使用reLaunch关闭所有的页面，打开新的栏目页面
				uni.reLaunch({
					url: this.page
				});
			},
		}
	}
</script>

<!-- <style scoped>
	.uni-tabbar__icon{
		display: flex;
		justify-content: space-around;
		font-size: 24upx;
		color: #999;
	}
	.active{color: #ff2741;}
	/* .uni-tabbar__icon span image:first-child{width: 40px;height: 40px;}
	.uni-tabbar__icon span image:nth-child(2){width: 15px;height: 15px;}
	.uni-tabbar__icon span image:last-child{width: 25px;height: 2px;} */
	image:first-child{width: 30px;height: 30px;}
	image:nth-child(2){width: 15px;height: 15px;}
	image:last-child{width: 25px;height: 2px;}
	
</style> -->
<style lang="scss" scoped>

    [nvue] uni-scroll-view, [nvue] uni-swiper-item, [nvue] uni-view {
        flex-direction: unset;
    }
    [nvue-dir-column] uni-swiper-item, [nvue-dir-column] uni-view {
        flex-direction: unset;
    }
    .uni-tabbar {
        position: fixed;
        bottom: 0;
        z-index: 999;
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 100upx;
        padding: 14upx 0;
        box-sizing: border-box;
        border-top: solid 0upx #ccc;
        background-color: #fff;
        box-shadow: 0px 0px 17upx 1upx rgba(206, 206, 206, 0.32);
        .uni-tabbar__item {
            display: block;
            line-height: 45upx;
            font-size: 20upx;
            text-align: center;
			width: 100%;
        }
        .uni-tabbar__icon {
            height: 40upx;
            line-height:35upx;
            text-align: center;
			width: 100%;
			display: flex;
			justify-content: space-around;
        }
		.uni-tabbar__icon image{width: 25px;height: 25px;margin-top: 0rem;}
        .icon {
            display: inline-block;
        }
        .uni-tabbar__label {
            line-height: 55upx;
            font-size: 24upx;
            color: #999;
            &.active {
                color: #ff2741;
            }
        }
    }
</style>
