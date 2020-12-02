<template>
	<swiper class="image-container" previous-margin="250rpx" next-margin="250rpx" circular autoplay @change="swiperChange">
		<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'" v-for="(item, index) in imgList"
		 :key="item[urlKey]">
			<view class="warp">
				<view class="tips">
					<view class="icon">
						<view class="icon-top">TOP</view>
						<view class="triangle"></view>
						<view class="num">{{index + 1}}</view>
					</view>
				</view>
				<image @click="clickImg(item)" :class="currentIndex == index ? 'item-img' : 'item-img-side'" class="img" :src="item[urlKey]"
				 lazy-load :style="dontFirstAnimation ? 'animation: none;' : ''" mode="aspectFill"></image>
			</view>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		props: {
			imgList: {
				type: Array,
				default () {
					return []
				}
			},
			urlKey: {
				type: String,
				default () {
					return ''
				}
			},
		},
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true,
			}
		},
		methods: {
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				this.$emit('selected', item, this.currentIndex)
			}
		}
	}
</script>
<style scoped lang="scss">
	.warp {
		position: relative;

		.tips {
			position: absolute;
			left: 15rpx;
			z-index: 2;

			.icon {
				
				text-align: center;
				font-size:24rpx;
				color: #fff;
				
				.icon-top{
					width: 60rpx;
					height: 40rpx;
					background: #e0ac53;
					border-radius: 0 0 5rpx 5rpx;
				} 
				.triangle {
					width: 0;
					height: 0;
					border-right: 30rpx solid transparent;
					border-left: 30rpx solid transparent;
					border-top: 30rpx solid #e0ac53;
				}
				.num {
					position: absolute;
					top: 26rpx;
					left: 50%;
					transform: translateX(-50%);
				}

			}

			
		}
	}

	.image-container {
		width: 750rpx;
		height: 350rpx;
	}

	.item-img {
		width: 230rpx;
		height: 280rpx;
		border-radius: 14rpx;
		animation: to-big .3s;
	}

	.swiper-item {
		width: 230rpx;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-img-side {
		width: 230rpx;
		height: 260rpx;
		border-radius: 14rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		width: 230rpx;
		height: 260rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes to-mini {
		from {
			height: 300rpx;
		}

		to {
			height: 260rpx;
		}
	}

	@keyframes to-big {
		from {
			height: 260rpx;
		}

		to {
			height: 300rpx;
		}
	}
</style>
