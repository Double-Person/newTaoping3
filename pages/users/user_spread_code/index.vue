<template>
	<view>
		<view class='distribution-posters'>
				<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration"
			 @change="bindchange" previous-margin="40px" next-margin="40px">
				<block v-for="(item,index) in spreadList" :key="index">
					<swiper-item>
						<image :src="item.pic" class="slide-image" :class="swiperIndex == index ? 'active' : 'quiet'" mode='aspectFill' />
					</swiper-item>
				</block>
			</swiper>
			<!-- #ifdef MP -->
			<view class='keep bg-color' @click='savePosterPath'>保存海报</view>
			<!-- #endif -->
			<!-- #ifndef MP -->
			<div class="preserve acea-row row-center-wrapper">
				<div class="line"></div>
				<div class="tip">长按保存图片</div>
				<div class="line"></div>
			</div>
			<!-- #endif -->
		</view>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize>
		<!-- #endif -->
		<view class="canvas">
			<canvas style="width:750px;height:1190px;" canvas-id="canvasOne"></canvas>
			<canvas style="" canvas-id="qrcode" :style="{width: `${qrcodeSize}px`, height: `${qrcodeSize}px`}" />
		</view>
	</view>
</template>

<script>
	// #ifdef H5
	import uQRCode from '@/js_sdk/Sansnn-uQRCode/uqrcode.js'
	// #endif
	import {
		getUserInfo,
		spreadBanner
	} from '@/api/user.js';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	// #ifdef MP
	import authorize from '@/components/Authorize';
	import {
		getQrcode
	} from '@/api/api.js';
	// #endif
	import home from '@/components/home';
	import {
		imageBase64
	} from "@/api/public";
	export default {
		components: {
			// #ifdef MP
			authorize,
			// #endif
			home
		},
		data() {
			return {
				imgUrls: [],
				indicatorDots: false,
				circular: false,
				autoplay: false,
				interval: 3000,
				duration: 500,
				swiperIndex: 0,
				spreadList: [],
				userInfo: {},
				poster: '',
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				imagePath: '',
				qrcodeSize: 1000,
				PromotionCode: '',
				base64List: []
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad() {
			this.userSpreadBannerList();
			if (this.isLogin) {
				// #ifdef H5
				this.userSpreadBannerList();
				// #endif
			} else {
				// #ifdef H5 || APP-PLUS
				toLogin();
				// #endif 
				// #ifdef MP
				this.isAuto = true;
				this.$set(this, 'isShowAuth', true)
				// #endif
			}
		},
		/**
		 * 用户点击右上角分享
		 */
		// #ifdef MP
		onShareAppMessage: function() {
			return {
				title: this.userInfo.nickname + '-分销海报',
				imageUrl: this.spreadList[0].pic,
				path: '/pages/index/index?spid=' + this.userInfo.uid,
			};
		},
		// #endif
		onReady() {
		},
		methods: {
			getImageBase64:function(images){
				uni.showLoading({
					title: '海报生成中',
					mask: true
				});
				let that = this;
				let spreadList = [];
				images.forEach((item,index)=>{
					imageBase64({url:item.pic}).then(res=>{
						spreadList[index] = res.data.code;
						that.$set(that,'base64List',spreadList);
						that.$set(that, 'poster', spreadList[0]);
						that.userInfos();
					})
				})
			},
			// 小程序二维码
			getQrcode(){
				let that = this;
				let data = {
					pid: that.userInfo.uid,
					path: '/pages/index/index'
				}
				getQrcode(data).then(res=>{
					that.PromotionCode = res.data.code;
					// let image = '../../../static/images/aa.jpg';
					// that.PosterCanvas(image, res.data.code, that.userInfo.nickname,0);
					that.PosterCanvas(this.base64List[0], res.data.code, that.userInfo.nickname,0);
				})
			},
			// 生成二维码；
			make() {
				let that = this;
				let href = location.href.split('/pages')[0];
				uQRCode.make({
					canvasId: 'qrcode',
					text: href+'/pages/index/index?spread=' + that.userInfo.uid,
					size: this.qrcodeSize,
					margin: 10,
					success: res => {
						that.PromotionCode = res;
						// let image = '../../../static/images/aa.jpg';
						// that.PosterCanvas(image, that.PromotionCode, that.userInfo.nickname,0);
						that.PosterCanvas(this.base64List[0], that.PromotionCode, that.userInfo.nickname,0);
					},
					complete: () => {},
					fail: res => {
						that.$util.Tips({
							title: '海报二维码生成失败！'
						});
					}
				})
			},
			PosterCanvas: function(arrImages, code, nickname,index) {
				let context = uni.createCanvasContext('canvasOne')
				context.clearRect(0, 0, 0, 0);
				let that = this;
				uni.getImageInfo({
					src: arrImages,
					success: function(image) {
						context.drawImage(arrImages, 0, 0, 750, 1190);
						context.save();
						context.drawImage(code, 110, 925, 140, 140);
						context.restore();
						context.setFontSize(28);
						context.fillText(nickname, 270, 980);
						context.fillText('邀请您加入', 270, 1020);
						context.draw(true,function(){
							uni.canvasToTempFilePath({
							  destWidth: 750,
							  destHeight: 1190,
							  canvasId: 'canvasOne',
							  fileType: 'jpg',
							  success: function(res) {
							    // 在H5平台下，tempFilePath 为 base64
								uni.hideLoading();
								that.imagePath = res.tempFilePath;
								that.spreadList[index].pic = res.tempFilePath;
							  } 
							})
						})
					},
					fail: function(err) {
						uni.hideLoading();
						that.$util.Tips({
							title: '无法获取图片信息'
						});
					}
				});
			},


			onLoadFun: function(e) {
				this.$set(this, 'userInfo', e);
				this.userSpreadBannerList();
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			bindchange(e) {
				let base64List = this.base64List;
				let index = e.detail.current;
				this.swiperIndex = index;
				this.$set(this, 'poster', base64List[index]);
				this.PosterCanvas(base64List[index], this.PromotionCode, this.userInfo.nickname,index);
				// let aa = ['../../../static/images/aa.jpg','../../../static/images/aa.jpg','../../../static/images/aa.jpg'];
				// this.PosterCanvas(aa[index], this.PromotionCode, this.userInfo.nickname,index);
			},
			// 点击保存海报
			savePosterPath: function() {
				let that = this;
				uni.downloadFile({
					url: that.poster,
					success(resFile) {
						if (resFile.statusCode === 200) {
							uni.getSetting({
								success(res) {
									if (!res.authSetting['scope.writePhotosAlbum']) {
										uni.authorize({
											scope: 'scope.writePhotosAlbum',
											success() {
												uni.saveImageToPhotosAlbum({
													filePath: resFile.tempFilePath,
													success: function(res) {
														return that.$util.Tips({
															title: '保存成功'
														});
													},
													fail: function(res) {
														return that.$util.Tips({
															title: res.errMsg
														});
													},
													complete: function(res) {},
												})
											},
											fail() {
												uni.showModal({
													title: '您已拒绝获取相册权限',
													content: '是否进入权限管理，调整授权？',
													success(res) {
														if (res.confirm) {
															uni.openSetting({
																success: function(res) {
																	console.log(res.authSetting)
																}
															});
														} else if (res.cancel) {
															return that.$util.Tips({
																title: '已取消！'
															});
														}
													}
												})
											}
										})
									} else {
										uni.saveImageToPhotosAlbum({
											filePath: resFile.tempFilePath,
											success: function(res) {
												return that.$util.Tips({
													title: '保存成功'
												});
											},
											fail: function(res) {
												return that.$util.Tips({
													title: res.errMsg
												});
											},
											complete: function(res) {},
										})
									}
								},
								fail(res) {

								}
							})
						} else {
							return that.$util.Tips({
								title: resFile.errMsg
							});
						}
					},
					fail(res) {
						return that.$util.Tips({
							title: res.errMsg
						});
					}
				})
			},
			userInfos() {
				let that = this;
				getUserInfo().then(res => {
					that.userInfo = res.data;
					// #ifdef H5
					that.make();
					that.setShareInfoStatus();
					// #endif
					// #ifdef MP
					that.getQrcode();
					// #endif
				})
			},
			setShareInfoStatus: function() {
				if (this.$wechat.isWeixin()) {
					let configAppMessage = {
						desc: '分销海报',
						title: this.userInfo.nickname + '-分销海报',
						link: '/pages/index/index?spread=' + this.userInfo.uid,
						imgUrl: this.spreadList[0].pic
					};
					this.$wechat.wechatEvevt(["updateAppMessageShareData", "updateTimelineShareData"], configAppMessage)
				}
			},
			userSpreadBannerList: function() {
				let that = this;
				uni.showLoading({
					title: '获取中',
					mask: true,
				})
				spreadBanner({
					page: 1,
					limit: 5
				}).then(res => {
					uni.hideLoading();
					that.$set(that, 'spreadList', res.data);
					that.getImageBase64(res.data);
				}).catch(err => {
					uni.hideLoading();
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #a3a3a3 !important;
	}
	.canvas canvas{
		position: fixed;
		z-index: -5rpx;
		opacity: 0;
	}
	.distribution-posters swiper {
		width: 100%;
		height: 1000rpx;
		position: relative;
		margin-top: 40rpx;
	}

	.distribution-posters .slide-image {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		border-radius: 15rpx;
	}

	.distribution-posters .slide-image.active {
		transform: none;
		transition: all 0.2s ease-in 0s;
	}

	.distribution-posters .slide-image.quiet {
		transform: scale(0.8333333);
		transition: all 0.2s ease-in 0s;
	}

	.distribution-posters .keep {
		font-size: 30rpx;
		color: #fff;
		width: 600rpx;
		height: 80rpx;
		border-radius: 50rpx;
		text-align: center;
		line-height: 80rpx;
		margin: 38rpx auto;
	}

	.distribution-posters .preserve {
		color: #fff;
		text-align: center;
		margin-top: 38rpx;
	}

	.distribution-posters .preserve .line {
		width: 100rpx;
		height: 1px;
		background-color: #fff;
	}

	.distribution-posters .preserve .tip {
		margin: 0 30rpx;
	}
</style>
