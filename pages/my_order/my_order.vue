<template>
	<view >
		<view class="my_order">
			<view class="bg">
				<span class="anquan">
					<image src="/static/order/anquan.png" mode=""></image>
				</span>
				您正在安全购物环境中，请放心购买
			</view>
				
				<view class="or_address"  v-if="addressList.length>1">
					<view class="or_address2" v-for="(item,index) in addressList" :key="index">
						<span class="or_name">{{item.realName}}</span>
						<span  class="or_phone">{{item.phone}}</span>
						<view class="or_addr">
							{{item.province}}{{item.city}}{{item.district}}{{item.detail}}
						</view>
					</view>
					<view class="biaoqian"></view>
				</view>
				<view class="or_address" v-else>
					<view  class="or_address2">
						<button @click="addAddress('add')"> + 新增地址</button>
					</view>
				</view>
				
				<!-- <view class="or_address" v-if="addressList.length=0">
					<view  class="or_address2">
						<button @click="addAddress('add')"> + 新增地址</button>
					</view>
				</view>
				
				<view class="or_address" v-else-if="addressList.length>0">
					<view class="or_address2">
						<span class="or_name">{{userAddress.realName}}</span>
						<span  class="or_phone">{{userAddress.phone}}</span>
						<view class="or_addr">
							{{userAddress.detail}}
						</view>
					</view>
					<view class="biaoqian"></view>
				</view>
				
				<view class="or_address" v-else>
					<view class="or_address2">
						<span class="or_name">{{userAddress.realName}}</span>
						<span  class="or_phone">{{userAddress.phone}}</span>
						<view class="or_addr">
							{{userAddress.detail}}
						</view>
					</view>
					<view class="biaoqian"></view>
				</view> -->
				
				
				<!-- <view class="or_address"  v-if="this.userAddress.length>0">
					<view class="or_address2">
						<span class="or_name">{{userAddress.realName}}</span>
						<span  class="or_phone">{{userAddress.phone}}</span>
						<view class="or_addr">
							{{userAddress.detail}}
						</view>
					</view>
					<view class="biaoqian"></view>
				</view>
				
				<view class="or_address" v-else>
					<form  class="or_address2" @submit="formSubmit" report-submit='true'>
						<view class='addAddress'>
							<view class='list'>
								<view class='item acea-row row-between-wrapper or_name'>
									<view class='name'>收货人</view>
									<input type='text' placeholder='收货人' placeholder-style="font-size:0.5rem;" name='realName' :value="userAddress.realName" placeholder-class='placeholder'></input>
								</view>
								<view class='item acea-row row-between-wrapper or_phone'>
									<view class='name'>手机号码</view>
									<input type='text' placeholder='手机号码'  placeholder-style="font-size:0.5rem;" name="phone" :value='userAddress.phone' placeholder-class='placeholder'></input>
								</view>
								<view class='item acea-row row-between-wrapper or_addr'>
									<view class='name'  style="width:40%">省市区县</view>
									<view class="address"  style="width: 60%;display: flex;justify-content: space-between;" >
										<picker mode="multiSelector" @change="bindRegionChange" @columnchange="bindMultiPickerColumnChange" :value="valueRegion"
										 :range="multiArray">
											<view class='acea-row '>
												<view class="picker" style="font-size:0.5rem;">{{region[0]}}，{{region[1]}}，{{region[2]}}</view>
												<view class='iconfont icon-dizhi font-color'></view>
											</view>
											<view class="">
												
											</view>
										</picker>
									</view>
								</view>
								<view class='item acea-row row-between-wrapper'>
									<view class='name'>详细地址</view>
									<input type='text' placeholder='请填写具体地址' placeholder-style="font-size:0.5rem;" name='detail' placeholder-class='placeholder' :value='userAddress.detail'></input>
								</view>
							</view>
							<view class='default acea-row row-middle'>
								<checkbox-group @change='ChangeIsDefault'>
									<checkbox :checked="userAddress.isDefault" />设置为默认地址
								</checkbox-group>
							</view>
							<button class='keepBnt bg-color' form-type="submit">立即保存</button>
						</view>
					</form>
				</view>
				 -->
			
			<view class="or_list">
				<view class="or_list2">
					<span  class="or_list3" >
						<image :src="info.image" style="width: 90px; height: 90px; overflow: hidden; border-radius: 5px;" mode=""></image>
					</span>
					<span  class="or_list4">
						<view class="">
							{{info.storeName}}
						</view>
						<view class="">
							150A-1黑色 
						</view>
						<view class="">
							828积分
						</view>
					</span>
				</view>
				<view class="fxg">
					<span class="fxg1">放心购</span>
					<span class="fxg2" v-for="(item,index) in fxgList" :key="index">
						{{item.fxgtext}}
					</span>
				</view>	
			</view>
			
			<view class="psfs">
				<view class="peisong">
					<span  class="psfs2">
						<image class="psfs4" src="/static/order/psfs.png" mode=""></image>
					</span>
					<view class="psfs3">
						<span class="psfs5">配送方式</span>
						<span class="psfs6">免费包邮</span>
					</view>
				</view>
				<view class="youhui">
					<view  class="youhui2">
						<image class="youhui3" src="/static/order/yhq.png" mode=""></image>
						<view class="youhui4">平台优惠</view>
					</view>
					
					<view class="youhui5">
						<span class="youhui51">商品总价</span>
						<span class="youhui52"> 
							{{info.price}}
						</span>
					</view>
					<view class="youhui6">
						<span class="youhui61">积分已抵扣</span>
						<span class="youhui62">-220.0元</span>
					</view>
				</view>
			</view>
			
			<view class="zffs">
				<view class="zffstext">
					支付方式
				</view>
				<view class="wxzf">
					<span class="wxzf2">
						<image class="wxzf3" src="/static/order/wx.png" mode=""></image>
					</span>
					<view class="wxzf4">
						<span class="wxzf41">微信支付
							<span class="wxzf42">(推荐)</span>
						</span>
						<span class="wxzf5">
							<span class="wxzf51">使用微信支付</span>
							<span class="wxzf52">安全·方便</span>
						</span>
						<span>
							<checkbox />
						</span>
					</view>
					
				</view>
				<view class="zfbzf">
					<span  class="zfbzf2">
						<image class="zfbzf3" src="/static/order/zfb.png" mode=""></image>
					</span>
					<view class="zfbzf4">
						<span class="zfbzf41">支付宝支付</span>
						<span class="zfbzf5">
							<span class="zfbzf51">使用支付宝支付</span>
							<span class="zfbzf52">支持花呗·分期</span>
						</span>
						<span>
							<checkbox />
						</span>
					</view>
				</view>
			</view>
			
		</view>
		<view class="dd_footer">
			<view class="fkdjs">
				<view class="fkdjs1">
					本品库存告急，请尽快支付
				</view>
				<countdown :startTime="startTime" :endTime="enTime"  class="fkdj2" />
			</view>
			<view class="tjdd">
				<span class="tjdd1">
					<view class="tjdd11">
						<view></view>
						<view class="tjdd13">
							合计
						</view>
					</view>
					<view class="tjdd12">
						<view></view>
						<view class="tjdd13">
							828积分+  179元 (免运费)
						</view>
					</view>
				</span>
				<span  class="tjdd2"  form-type="submit">提交订单</span>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getAddressList,
		setAddressDefault,
		// delAddress,
		// editAddress,
		postAddress
	} from '@/api/user.js';
	import countdown from '@/components/cz-countdown/cz-countdown';
	import {orderProduct} from '@/api/order.js';
	
	import {
		editAddress,
		getAddressDetail
	} from '@/api/user.js';
	import {
		getCity
	} from '@/api/api.js';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	import wPicker from "@/components/wPicker/w-picker.vue";
	import home from '@/components/home';
	
	export default {
		components: {
			countdown,
			home
		},
		data() {
			return {
				startTime:'2020-10-22 12:00:00',
				enTime:'2020-10-22 12:05:00',
				
				fxgList:[
					{
						fxgtext:'VIP服务' 
					},
					{
						fxgtext:'差必赔'
					},
					{
						fxgtext:'假一赔十'
					},
					{
						fxgtext:'24小时发货'
					}
				],
				
				// info:''
				
				regionDval: ['浙江省', '杭州市', '滨江区'],
				cartId: '', //购物车id
				pinkId: 0, //拼团id
				couponId: 0, //优惠券id
				id: 0, //地址id
				userAddress: {
					isDefault: false
				}, //地址详情
				region: ['省', '市', '区'],
				valueRegion: [0, 0, 0],
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				district: [],
				multiArray: [],
				multiIndex: [0, 0, 0],
				cityId: 0,
				defaultRegion: ['广东省', '广州市', '番禺区'],
				defaultRegionCode: '440113',
				
				addressList: [],
			}
		},
		computed: mapGetters(['isLogin']),
		methods: {
			addAddress(type, item){
				uni.navigateTo({
					// url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`,
					url: `/pages/users/user_address/index`,
				})
			},
			
			/**
			 * 获取地址列表
			 * 
			 */
			getAddressList: function(isPage) {
				let that = this;
				if (isPage) {
					that.loadend = false;
					that.page = 1;
					that.$set(that, 'addressList', []);
				};
				if (that.loading) return;
				if (that.loadend) return;
				that.loading = true;
				that.loadTitle = '';
				getAddressList({
					page: that.page,
					limit: that.limit
				}).then(res => {
					let list = res.data.list;
					let loadend = list.length < that.limit;
					that.addressList = that.$util.SplitArray(list, that.addressList);
					that.$set(that, 'addressList', that.addressList);
					that.loadend = loadend;
					that.loadTitle = loadend ? '我也是有底线的' : '加载更多';
					that.page = that.page + 1;
					that.loading = false;
				}).catch(err => {
					that.loading = false;
					that.loadTitle = '加载更多';
				});
			},
			onLoadFun: function() {
				this.getAddressList();
			},
			
		},
		onLoad(options) {
			console.log(options,2222222222);
			this.info = JSON.parse(options.shopId);
			console.log(this.info,3333);
			//pst
			this.cartId = options.cartId || '';
			this.pinkId = options.pinkId || 0;
			this.couponId = options.couponId || 0;
			this.getAddressList(true);
		},
		onShow: function() {
			let that = this;
			that.getAddressList(true);
		},
		onReachBottom: function() {
			this.getAddressList();
		}
	}
</script>

<style scoped  lang="scss">
	page {
		background-color: #eee !important;
	}
	.my_order{
		position: relative;
		width: 100%; //pst
		height: 240rpx;
		margin: 0 auto;
		padding: 60rpx 40rpx;
		
		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-image: url('~@/static/order/order_bg.png');
			background-size: 100% 100%;
			z-index: 10; //pst
			
			color: #fff;
			font-size: 0.8rem;
			text-align: center;
			line-height: 200rpx;
			.anquan image{width: 1.2rem;height: 0.8rem;}
		}
		.or_address{
			position: relative;
			// height: 5rem;
			background-color: #fff; 
			z-index: 99;
			width: 100%;
			transform: translate(0,30%);
			border-radius: 10px;
			display: inline-block;
			margin-bottom: 4.5rem;
			
			.addAddress{
				padding: 0.5rem 1rem 0.5rem 1rem;
				.list{
					margin-bottom: 0.5rem;
					.acea-row{
						padding: 0.3rem 0;
						}
				}
				.default{margin-bottom: 0.3rem;}
				.bg-color{color: #fff;width: 30%;height: 1.8rem;line-height: 1.8rem; display: block;margin: 0 auto;font-size: 0.8rem;padding:0.5rem 0 0.5rem -0.5rem;}
			}
			// .or_address2{
			// 	padding-top: 1rem;
			// 	padding-left:1rem ;
			// 	.or_name{
			// 		font-size: 0.9rem;
			// 		font-weight: 600;
			// 		padding-right: 0.5rem;
			// 	}
			// 	.or_phone{
			// 		font-size: 0.9rem;
			// 		font-weight: 600;
			// 	}
			// 	.or_addr{
			// 		font-size: 0.9rem;
			// 		padding-top: 0.2rem;
			// 	}
			// }
			.biaoqian{
				position: relative;
				z-index: 99;
				right: 0;
				height: 2px;
				top: 20%;
				width: 99%;
				background: repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);
				background-size: 100px;
			}
		}
		
		.or_list{
			display: inline-block;
			position: relative;
			// top: 3rem;
			height: 9rem;
			background-color: #fff; 
			border-radius: 10px;
			width: 100%;
			margin-bottom: 0.5rem;
			
			.or_list2{
				display: flex;
				width: 96%;
				
				.or_list3{
					margin-top: 1rem;
					padding-left:1rem ;
					line-height: 1.5rem;
					
				}
				.or_list4{
					margin-top: 1rem;
					padding-left:1rem ;
					line-height: 1.5rem;
					
				}
			}
			.fxg{
				border-top: 1px dashed #D3D3D3;
				padding-top: 5px;
				width: 100%;
				display: block;
				margin: 0 auto;
				margin-top: 1px;
				
				.fxg1{font-size: 0.8rem;padding-left: 2%;}
				.fxg2{
					margin: 3px 5px;
					background: linear-gradient(-90deg,#61bbfd,#438eff 99%);
					color: #fff;
					padding: 2px;
					border-radius: 25px;
					font-size: 0.4rem;
					
				 }
			}
		}
		.psfs{
			width: 100%;
			position: relative;
			// margin-top: 3.6rem;
			height: 10rem;
			background-color: #fff; 
			border-radius: 10px;
			
			.peisong{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px dashed #D3D3D3;
				width: 96%;
				margin-left: 2%;
				.psfs2 {
					width: 15%;
					padding: 10px 0 5px 5px;
					.psfs4{
						width: 30px;height: 30px;
					}
				}
				.psfs3{
					display: flex;
					justify-content: space-between;
					width: 90%;
					padding:10px 10px 5px 0;
					line-height: 30px;
					
					.psfs5{font-size: 0.8rem;}
					.psfs6{font-size: 0.9rem;font-weight: 600;}
				}
			}
			
		}
		.youhui{
			width: 96%;
			margin-left: 2%;
			.youhui2 {
				width: 40%;
				padding: 10px 0 0 5px;
				display: flex;
				
				.youhui3{
					width: 30px;height: 30px;
					margin-right: 10px;
				}
				.youhui4{
					line-height: 2rem;
				}
			}
			.youhui5{
				display: flex;
				justify-content: space-between;
				width: 82%;
				padding:-5px 10px 5px 0;
				line-height: 30px;
				margin-left: 15%;
				.youhui51{font-size: 0.9rem;}
				.youhui52{font-size: 0.9rem;color: #FF0000;}
			}
			.youhui6{
				display: flex;
				justify-content: space-between;
				width: 82%;
				padding:-5px 10px 5px 0;
				line-height: 30px;
				margin-left: 15%;
				.youhui61{font-size: 0.9rem;}
				.youhui62{font-size: 0.9rem;color: #FF0000;}
			}
		}
		.zffs{
			width: 100%;
			position: relative;
			margin-top: 0.5rem;
			background-color: #fff; 
			border-radius: 10px;
			display: inline-block;
			margin-bottom: 8rem;
			.zffstext{
				padding: 10px 0 5px 10px;
				font-size: 0.9rem;
			}
			.wxzf{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px dashed #D3D3D3;
				padding-bottom: 10px;
				.wxzf2{
					width: 18%;
					.wxzf3{
						width: 33px;height: 35px;
						padding: 10px 0 0 5px;
					}
				}
				.wxzf4{
					width: 98%;
					line-height: 1.6rem;
					padding-top: 10px;
					.wxzf41{
						font-size: 0.8rem;
						.wxzf42{color: #FF0000;padding-right: 5px;}
					}
					.wxzf5{
						font-size: 0.5rem;
						padding-left: 5px;
						.wxzf51{color: gray;}
						.wxzf52{color: #FF0000;padding-right: 5px;}
					}
					
				}
				
			}
			.zfbzf{
				display: flex;
				justify-content: space-between;
				padding-top: 6px;
				.zfbzf2{
					width: 18%;
					.zfbzf3{
						width: 40px;height: 40px;
						padding: 5px 0 0 5px;
					}
				}
				.zfbzf4{
					width: 98%;
					line-height: 1.6rem;
					padding-top: 10px;
					.zfbzf41{font-size: 0.8rem;}
					.zfbzf5{
						font-size: 0.5rem;
						padding-left: 10px;
						.zfbzf51{
							color: gray;
						}
						.zfbzf52{
							color: #FF0000;padding-right: 5px;
						}
					}
				}
			}
		}
	}
	.dd_footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		
		.fkdjs{
			background-color: #fff9e6;
			width: 100%;
			text-align: center;
			color: #f00;
			padding: 10px 0;
			.fkdj2{
				width: 100%;
				padding-left: 35%;
			}
			
		}
		.tjdd{
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			.tjdd1{
				width: 70%;
				height: 2.6rem;
				line-height: 1.2rem;
				padding-right: 10px;
				.tjdd11{
					display: flex;
					justify-content: space-between;
					
				}
				.tjdd12{
					color: #F00;
					font-weight: 600;
					display: flex;
					justify-content: space-between;
				}
			}
			.tjdd2{
				width: 30%;
				text-align: center;
				background-color: #FF0000; 
				color: #fff;
				line-height: 2.6rem;
				font-size: 0.8rem;
			}
		}
	}
</style>

<style scoped>
	/deep/ .countdown .time{margin-top: 0.3rem;background-color: transparent;color: #f00;}
	/deep/ .countdown{margin-left: 0.3rem;background-color: transparent;color: #f00;}
	/deep/ .image-container{margin: 0 auto;}
	/deep/ .countdown .text{color: #f00;}
</style>

