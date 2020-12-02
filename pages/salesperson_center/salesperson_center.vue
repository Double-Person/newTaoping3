<template>
	<view class="new-users">
		<view class="head">
			<view class="user-card">
				<view class="bg"></view>
				<view class="user-info">
					<image class="avatar"  v-if="userInfo.avatar" :src='userInfo.avatar'  @click="goEdit()"></image>
					<image v-else class="avatar" src="/static/images/f.png" mode=""  @click="goEdit()"></image>
					<view class="info">
						<view class="name" v-if="userInfo.uid"   @click="goEdit()">
							<view class="vip-txt">{{userInfo.nickname}}</view>
							<view class="">手机号：{{userInfo.account}}</view>
						</view>
						<view class="idaphone">
							<view class="num"  @click="goEdit()">
								<view class="num-txt">ID：{{userInfo.uid}}</view>
								<view class="icon">
									<image src="/static/images/edit.png" mode=""></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<home></home> 
	</view>
</template>

<script>
	import {
		getMenuList,
		getUserInfo,
		spreadPeople
	} from '@/api/user.js';
	import home from '@/components/home';
	
	
	export default {
		components:{
			home,
		},
		data() {
			return {
				userInfo: {},
			}
		},
		onShow: function() {
				this.getUserInfo();
		},
		methods: {
			/**
			 * 获取个人用户信息
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.userInfo = res.data;
					console.log(res.data,5555555555)
					that.$store.commit("SETUID", res.data.uid);
				});
			},
			// 编辑页面
			goEdit() {
				uni.navigateTo({
					url: '/pages/users/user_info/index'
				})
			},
		}
	}
</script>



<style lang="scss" scoped>
	page {
		background-color: #eee !important;
	}
	.new-users {
		
		.head {
			
			.user-card {
				position: relative;
				width: 100%; //pst
				height: 340rpx;
				margin: 0 auto;
				padding: 60rpx 40rpx;
				 
				.bg {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background-image: url('~@/static/mycenter/m1.png');
					background-size: 100% 100%;
					z-index: 10; //pst
					
					
				}

				.user-info {
					z-index: 20;
					position: relative;
					display: flex;

					.avatar {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
					}

					.info {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 30rpx;
						padding: 40rpx 0;

						.name {
							display: flex;
							flex-direction: column;
							// align-items: center;
							color: #fff;
							font-size: 31rpx;
							margin-top: -1rem;
							margin-bottom: 0.2rem;
							.vip-txt{
								font-size: 1rem;
							}

							.vip {
								display: flex;
								align-items: center;
								height: 36rpx;
								padding: 0 20rpx;
								background: rgba(0, 0, 0, 0.2);
								border-radius: 18px;
								font-size: 20rpx;
								margin-left: 12rpx;
								margin-top: 2rpx;

								image {
									width: 27rpx;
									height: 27rpx;
								}
							}
						}

						.num {
							display: flex;
							align-items: center;
							font-size: 35rpx;
							color: rgba(255, 255, 255, 0.6);

							image {
								width: 22rpx;
								height: 23rpx;
								margin-left: 20rpx;
							}
						}
					}
				}

				.num-wrapper {
					z-index: 30;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 60rpx;
					// padding: 0 47rpx;
					color: #fff;

					.num-item {
						width: 33.33%;
						text-align: center;

						.num {
							font-size: 42rpx;
							font-weight: bold;
						}

						.txt {
							margin-top: 8rpx;
							font-size: 26rpx;
							color: rgba(255, 255, 255, 0.6);
						}
					}
				}

				.sign {
					z-index: 200;
					position: absolute;
					right: -12rpx;
					top: 80rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 120rpx;
					height: 60rpx;
					background: linear-gradient(90deg, rgba(255, 225, 87, 1) 0%, rgba(238, 193, 15, 1) 100%);
					border-radius: 29rpx 4rpx 4rpx 29rpx;
					color: #282828;
					font-size: 28rpx;
					font-weight: bold;
				}
				
			}
		}
	}
</style>
