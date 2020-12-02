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
				tabbar: [{
					"pagePath": "/pages/index/index",
					"iconPath": require("../../static/tabr/h21.png"),
					"text": "首页"
				}, {
					"pagePath": "/pages/dengjiaquanfan/dengjiaquanfan",
					"iconPath": require("../../static/tabr/money.png"),
					"text": "全额返"          
				}, {
					"pagePath": "/pages/jifen/jifen",
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
        height: 120upx;
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
            height: 55upx;
            line-height:40upx;
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
