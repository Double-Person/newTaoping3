<template>
	<view class="new-users">
		<view class="head">
			<view class="user-card">
				<view class="bg"></view>
				<view class="user-info">
					<image class="avatar"  v-if="userInfo.avatar" :src='userInfo.avatar' @click="goEdit()"></image>
					<image v-else class="avatar" src="/static/images/f.png" mode="" @click="goEdit()"></image>
					<view class="info">
						<!-- #ifdef MP -->
						<!-- <view class="name" v-if="!userInfo.uid" @tap="openAuto">
							请点击授权
						</view> -->
						<!-- #endif -->
						<view class="name" v-if="userInfo.uid">
							<view class="vip-txt">{{userInfo.nickname}}</view>
							<view class="vip" v-if="userInfo.vip">
								<image :src="userInfo.vipIcon" alt="">
								<view style="margin-left: 10rpx;" class="vip-txt">{{userInfo.vipName}}</view>
							</view>
						</view>
						<!-- <view class="num" v-if="userInfo.phone" @click="goEdit()"> -->
						
						<view class="idaphone">
							<view class="num"  @click="goEdit()">
								<view class="num-txt">ID：{{userInfo.uid}}</view>
								<view class="icon">
									<image src="/static/images/edit.png" mode=""></image>
								</view>
							</view>
							<!-- <view class="phone" v-if="!userInfo.phone && isLogin" @tap="bindPhone">绑定手机号</view> -->
							<!-- <view class="phone" v-if="!userInfo.phone" @tap="bindPhone"> -->
							<view class="phone"  @tap="bindPhone">	
								<view class="phone2">
									绑定手机号
								</view>
							</view>
						</view>
					</view>
				</view>
				<!--pst
				 <view class="num-wrapper">
					<view class="num-item" @click="goMenuPage('/pages/users/user_money/index')">
						<text class="num">{{Number(userInfo.nowMoney).toFixed(2) || 0}}</text>
						<view class="txt">余额</view>
					</view>
					<view class="num-item" @click="goMenuPage('/pages/users/user_integral/index')">
						<text class="num">{{userInfo.integral || 0}}</text>
						<view class="txt">积分</view>
					</view>
					<view class="num-item" @click="goMenuPage('/pages/users/user_coupon/index')">
						<text class="num">{{userInfo.couponCount || 0}}</text>
						<view class="txt">优惠券</view>
					</view>
				</view>
				<view class="sign" @click="goSignIn">签到</view> -->
			</view>
			
			<!-- pst -->
			<view class="bdsj">
				<view class="wdqqd"  @tap="goJfzx1">
					<image class="wdqqdimg" src="/static/mycenter/goqiandao.png" mode=""></image>
					<view class="wdjftext">
						我的积分：
						{{userInfo.integral || 6688}}
					</view>
				</view>
				<view class="bdsj3">
					<view class="bdsj31">
						<p  class="tpjzxs" @click="kefuClick">
							<image class="mckf" src="/static/mycenter/m3.png" mode=""></image>
						</p>
						<p>联系客服</p>
					</view>
					<view  v-for="(item,index) in kfArray" :key="index">
						<navigator :url='item.url' hover-class='none'>
							<p  class="tpjzxs">
								<image class="mckf" :src="item.imgtp" mode=""></image>
							</p>
							<p>{{item.wenzi}}</p>
						</navigator>
					</view>
				</view>
				
			</view>
			
			<!-- 首页推荐 //pst--选项卡开始-->
			<view class="index-product-wrapper" :class="iSshowH?'on2':''">
				<view class="nav-bd">
					<view class="item" v-for="(item,index) in explosiveMoney" :key="index" :index="item.id" :class="{active:index == ProductNavindex}"
					 @click="ProductNavTab(item,index)">
						<view class="txt">{{item.title}}</view>
						<view class="label">{{item.info}}</view>
					</view>
				</view>
				<!-- 首发新品 -->
				<view class="list-box animated" :class='tempArr.length > 0?"fadeIn on":""'>
					<view class="item2" v-for="(item,index) in tempArr" :key="index" @click="goDetail(item)">
						<view class="pictrue2">
							<span class="pictrue_log pictrue_log_class" v-if="item.activity && item.activity.type === '1'">秒杀</span>
							<span class="pictrue_log pictrue_log_class" v-if="item.activity && item.activity.type === '2'">砍价</span>
							<span class="pictrue_log pictrue_log_class" v-if="item.activity && item.activity.type === '3'">拼团</span>
							<image class="pictrue3" :src="item.image" mode=""></image>
						</view>
						<view class="text-info">
							<view class="title line1">{{item.storeName}}</view>
							<view class="old-price"><text>¥</text>{{item.otPrice}}</view>
							<view class="price">
								<text>￥</text>{{item.price}}
								<view class="txt" v-if="item.checkCoupon">券</view>
							</view>
						</view>
					</view>
				</view>
				<view class='loadingicon acea-row row-center-wrapper' v-if="goodScroll">
					<text class='loading iconfont icon-jiazai' :hidden='loading==false'></text>
				</view>
				<view class="mores-txt flex" v-if="!goodScroll">
					<text>我是有底线的</text>
				</view>
			</view> 
			<!-- //pst--选项卡结束 -->
			<view class="order-wrapper ">
				<view class="order-hd flex">
					<view class="left">订单中心</view>
					<navigator class="right flex" hover-class="none" url="/pages/users/order_list/index" open-type="navigate">
						查看全部
						<text class="iconfont icon-xiangyou"></text>
					</navigator>
				</view>
				<view class="order-bd">
					<block v-for="(item,index) in orderMenu" :key="index">
						<navigator class="order-item" hover-class="none" :url="item.url">
							<view class="pic">
								<image :src="item.img" mode=""></image>
								<text class="order-status-num" v-if="item.num > 0">{{ item.num }}</text>
							</view>
							<view class="txt">{{item.title}}</view>
						</navigator>
					</block>
				</view>
			</view>
			<view class="" >
				
			</view>
			
		</view>
		<!-- 轮播-->
		<!-- pst -->
		 <!-- <view class="slider-wrapper" v-if="imgUrls.length>0">
			<swiper indicator-dots="true" :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration"
			 indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#fff">
				<block v-for="(item,index) in imgUrls" :key="index">
					<swiper-item>
						<navigator :url='item.url' class='slide-navigator acea-row row-between-wrapper' hover-class='none'>
							<image :src="item.pic" class="slide-image"></image>
						</navigator>
					</swiper-item>
				</block>
			</swiper>
		</view> -->
		<!-- 会员菜单 -->
		<!-- <view class="user-menus" style="margin-top: 20rpx;"> -->
			<!--pst
			 <block v-for="(item,index) in MyMenus" :key="index">
				<navigator class="item" :url="item.url" hover-class="none" v-if="!(item.url =='/pages/service/index' || (item.url =='/pages/users/user_spread_user/index' && !userInfo.isPromoter))">
					<view class="left">
						<image :src="item.pic"></image>
						<text>{{item.name}}</text>
					</view>
					<view class="iconfont icon-xiangyou"></view>
				</navigator>
			</block> -->
			<!-- #ifdef H5 -->
		<!-- 	<navigator class="item" url="/pages/customer_list/index" hover-class="none">
				<view class="left">
					<image src="/static/images/user_menu08.png"></image>
					<text>联系客服</text>
				</view>
				<view class="iconfont icon-xiangyou"></view>
			</navigator> -->
			
			<!--pst
			 <view class="item" @click="kefuClick">
				<view class="left">
					<image src="/static/images/user_menu08.png"></image>
					<text>联系客服</text>
				</view>
				<view class="iconfont icon-xiangyou"></view>
			</view> -->
			<!-- #endif -->
			<!-- #ifdef MP -->
			<!--pst
			 <button class="item" open-type='contact' hover-class='none'>
				<view class="left">
					<image src="/static/images/user_menu08.png"></image>
					<text>联系客服</text>
				</view>
				<view class="iconfont icon-xiangyou"></view>
			</button> -->
			<!-- #endif -->
		<!-- </view> -->
		<!--pst <view style="height: 50rpx;"></view> -->
		<!-- #ifdef MP -->
		<!-- <authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse"></authorize> -->
		<!-- #endif -->
		
		
	</view>
</template>
<script>
	import {
		getMenuList,
		getUserInfo
		//,setVisit
	} from '@/api/user.js';
	import {
		orderData
	} from '@/api/order.js';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	
	//pst--选项卡开始
	import {getIndexData} from '@/api/api.js';
	import {
		getCategoryList,
		getProductslist,
		getProductHot,
		getGroomList
	} from '@/api/store.js';
	import {goShopDetail} from '@/libs/order.js';
	import recommend from '@/components/recommend';//pst--选项卡结束
	
	
	const app = getApp();
	export default {
		components: {
			// #ifdef MP
			authorize
			// #endif
		},
		computed: mapGetters(['isLogin']),
		data() {
			return {
				orderMenu: [{
						img: '/static/images/order1.png',
						title: '待付款',
						url: '/pages/users/order_list/index?status=0',
						num: 0
					},
					{
						img: '/static/images/order2.png',
						title: '待发货',
						url: '/pages/users/order_list/index?status=1',
						num: 0
					},
					{
						img: '/static/images/order3.png',
						title: '待收货',
						url: '/pages/users/order_list/index?status=2',
						num: 0
					},
					{
						img: '/static/images/order4.png',
						title: '待评价',
						url: '/pages/users/order_list/index?status=3',
						num: 0
					},
					{
						img: '/static/images/order5.png',
						title: '售后/退款',
						url: '/pages/users/user_return_list/index',
						num: 0
					},
				],
				imgUrls: [],
				userMenu: [],
				autoplay: true,
				circular: true,
				interval: 3000,
				duration: 500,
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				orderStatusNum: {},
				userInfo: {},
				MyMenus: [],
				wechatUrl: [],
				
				//pst--选项卡开始
				explosiveMoney: [],
				iSshowH: false,
				ProductNavindex: 0,
				where: {
					cid: 0,
					page: 1,
					limit: 10,
				},
				hotPage: 1,
				goodType: 0, //精品推荐Type
				goodScroll: true, //精品推荐开关
				params: { //精品推荐分页
					page: 1,
					limit: 10,
				},
				tempArr: [], //精品推荐临时数组
				pageInfo: '', // 精品推荐全数据
				loading: false,
				loadend: false,
				loadTitle: '加载更多',
				sortProduct: [],
				hotLimit: 10,//pst--选项卡结束
				
				kfArray:[
					// {
					// 	imgtp: '/static/mycenter/m3.png',
					// 	wenzi: '联系客服',
					// 	url: '/pages/users/user_return_list/index'
					// },
					{
						imgtp: '/static/mycenter/m4.png',
						wenzi: '销售员中心',
						// url: '/pages/salesperson_center/salesperson_center',
						url: '/pages/users/user_spread_user/index',
						
					},
					{
						imgtp: '/static/mycenter/m5.png',
						// wenzi: 'APP下载',
						// url: '/pages/app_download/app_download',
						wenzi: '收支明细',
						// url: '/pages/users/user_money/index',
						url: '/pages/users/user_bill/index',
					},
					{
						imgtp: '/static/mycenter/m6.png',
						wenzi: '平台投诉',
						url: '/pages/users/user-complain/user-complain',
					}
				]
			}
		},
		onLoad() {
			let that = this;
			that.$set(that, 'MyMenus', app.globalData.MyMenus);
			
			//pst--选项卡开始
			Promise.all([this.getAllCategory(), this.getIndexConfig()
				//, this.setVisit()//收藏
			]);//pst--选项卡结束
		},
		onShow: function() {
			//let that = this;
			// if (that.isLogin) {
				this.getUserInfo();
				this.getMyMenus();
				//this.setVisit();// pst
				this.getOrderData();
			// }else{
			// 	// #ifdef H5 || APP-PLUS
			// 	if (that.isLogin == false) {
			// 		toLogin();
			// 	}
			// 	// #endif
			// }
		},
		methods: {
			// 记录会员访问-pst
			// setVisit(){
			// 	setVisit({
			// 		url:'/pages/user/index'
			// 	}).then(res=>{})
			// },
			kefuClick(){
				location.href = this.wechatUrl[0].wap_url
				// return this.$util.Tips({
				// 	title: '客服功能正在开发中......'
				// });
			},
			getOrderData(){
				let that = this;
				orderData().then(res=>{
					that.orderMenu.forEach((item, index) => {
						switch (item.title) {
							case '待付款':
								item.num = res.data.unPaidCount
								break
							case '待发货':
								item.num = res.data.unShippedCount
								break
							case '待收货':
								item.num = res.data.receivedCount
								break
							case '待评价':
								item.num = res.data.evaluatedCount
								break
							case '售后/退款':
								item.num = res.data.refundCount
								break
						}
					})
					that.$set(that,'orderMenu',that.orderMenu);
				})
			},
			// 打开授权
			openAuto() {
				this.isAuto = true;
				this.isShowAuth = true
			},
			// 授权回调
			onLoadFun() {
				this.getUserInfo();
				this.getMyMenus();
				//this.setVisit();// pst
				this.getOrderData();
			},
			Setting: function() {
				uni.openSetting({
					success: function(res) {
						console.log(res.authSetting)
					}
				});
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			// 绑定手机
			bindPhone() {
				uni.navigateTo({
					url: '/pages/users/user_phone/index'
				})
			},
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
			/**
			 * 
			 * 获取个人中心图标
			 */
			getMyMenus: function() {
				let that = this;
				if (this.MyMenus.length) return;
				getMenuList().then(res => {
					that.$set(that, 'MyMenus', res.data.routine_my_menus);
					// location.pathname.indexOf('auth') !== -1
					// console.log( res.data.routine_my_menus.filter( item => {
					// 	if( item.url.indexOf('service') !== -1 ) return item.wap_url
					// }))
					this.wechatUrl = res.data.routine_my_menus.filter((item) => {
						return item.url.indexOf('service') !== -1
					})
					console.log(this.wechatUrl)
					this.imgUrls = res.data.routine_my_banner
				});
			},
			// 编辑页面
			goEdit() {
				uni.navigateTo({
					url: '/pages/users/user_info/index'
				})
			},
			goJfzx1(){
				console.log("dianji")
				uni.switchTab({
				    url:"/pages/users/user_sgin/index"	
				})
			},
			// goMenuPage
			goMenuPage(url){
				if(this.isLogin){
					uni.navigateBack({
						url
					})
				}else{
					// #ifdef MP
						this.openAuto()
					// #endif
				}
			},
			
			// 首页数据
			getIndexConfig: function() {
				let that = this;
				getIndexData().then(res => {
					uni.setNavigationBarTitle({
						title: '积分中心'
					})
					that.$set(that, "site_name", '首页');
					that.$set(that, "explosiveMoney", res.data.explosiveMoney);
					console.log(res.data.explosiveMoney,'111111111111pst');
					// 设置选项卡默认显示数组的第一个
					that.goodType = res.data.explosiveMoney[0].type;
					
					this.getGroomList();
				})
			},
			// 首发新品切换 //pst--选项卡开始
			ProductNavTab(item, index) {
				this.goodType = item.type
				this.ProductNavindex = index
				this.tempArr = []
				this.params.page = 1
				this.goodScroll = true
				let onloadH = true
				this.getGroomList(onloadH)
			},
			// 首发新品详情
			goDetail(item) {
				if (item.activity && item.activity.type === "2" && !this.isLogin) {
					// #ifdef H5
					uni.showModal({
						title: '提示',
						content: '您未登录，请登录！',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/users/login/index'
								})
							} else if (res.cancel) {}
						}
					})
					// #endif
					// #ifdef MP
					this.$set(this, 'isAuto', true);
					this.$set(this, 'isShowAuth', true);
					// #endif
					return
				} else {
					goShopDetail(item, this.uid).then(res => {
						uni.navigateTo({
							url: `/pages/goods_details/index?id=${item.id}`
						})
					})
				}
			},
			// 分类详情
			godDetail(item) {
				goShopDetail(item, this.uid).then(res => {
					uni.navigateTo({
						url: `/pages/goods_details/index?id=${item.id}`
					})
				})
			},
			// 精品推荐
			getGroomList(onloadH) {
				this.loading = true
				let type = this.goodType;
				if (!this.goodScroll) return
				if (onloadH) {
					this.iSshowH = true
				}
				getGroomList(type, this.params).then(({
					data
				}) => {
					this.iSshowH = false
					this.loading = false
					this.goodScroll = data.list.length >= this.params.limit
					this.params.page++
					this.tempArr = this.tempArr.concat(data.list)
				})
			},
			// 记录会员访问-pst
			// setVisit() {
			// 	setVisit({
			// 		url: '/pages/index/index'
			// 	}).then(res => {
			// 		console.log(res)
			// 	})
			// },
			// 获取导航-pst
			getAllCategory: function() {
				let that = this;
				getCategoryList().then(res => {
					res.data.unshift({
						'name': '首页'
					})
					that.navTop = res.data;
				})
			},
			// 导航分类切换
			changeTab(e) {
				let self = this
				if (e.type == 'big') {
					if (e.index == 0) {
						this.navIndex = e.index
					} else {
						// #ifdef MP
						setTimeout(res => {
							this.navH = app.globalData.navHeight;
							let info = uni.createSelectorQuery().select(".mp-header");
							info.boundingClientRect(function(data) {
								self.prodeuctTop = data.height
							}).exec()
						}, 300)
						// #endif
						// #ifdef H5
						self.prodeuctTop = 18
						// #endif
						this.navIndex = e.index
						let child = this.navTop[e.index].child && this.navTop[e.index].child != 'undefined' ? this.navTop[e.index].child :
							[];
						if (child.length > 0) {
							this.where.cid = child[0].id
						} else {
							this.where.cid = this.navTop[e.index].id
						}
						this.loadend = false
						this.loading = false
						this.where.page = 1
						this.sortProduct = []
						this.get_product_list()
					}
				} else {
					let child = this.navTop[e.parentIndex].child ? this.navTop[e.parentIndex].child : []
					this.navIndex = e.parentIndex
					this.where.cid = child[e.childIndex].id
					this.loadend = false
					this.loading = false
					this.where.page = 1
					this.sortProduct = []
					this.get_product_list()
				}
			},
			//分类产品
			get_product_list: function(isPage) {
				let that = this;
				if (that.loadend) return;
				if (that.loading) return;
				// if (isPage === true) that.$set(that, 'productList', []);
				that.loading = true;
				that.loadTitle = '';
				getProductslist(that.where).then(res => {
					if (that.where.page == 1 && res.data.list.length == 0) {
						that.hotScroll = false
						that.hotPage = 1
						that.hostProduct = []
						this.get_host_product()
					}
					let list = res.data.list;
					let productList = that.$util.SplitArray(list, that.sortProduct);
					let loadend = list.length < that.where.limit;
					that.loadend = loadend;
					that.loading = false;
					that.loadTitle = loadend ? '已全部加载' : '加载更多';
					that.$set(that, 'sortProduct', productList);
					that.$set(that.where, 'page', that.where.page + 1);
				}).catch(err => {
					that.loading = false;
					that.loadTitle = '加载更多';
				});
			},
			/**
			 * 获取我的推荐
			 */
			get_host_product: function() {
				let that = this;
				that.loading = true;
			
				if (that.hotScroll) return
				getProductHot(
					that.hotPage,
					that.hotLimit,
				).then(res => {
					that.hotPage++
					that.hotScroll = res.data.list.length < that.hotLimit
					that.hostProduct = that.hostProduct.concat(res.data.list)
					// that.$set(that, 'hostProduct', res.data)
				});
			},//pst--选项卡结束
			
			
		}
	}
</script>


<style lang="scss" scoped>
	page {
		background-color: #eee !important;
	}
	.new-users {
		
		.head {
			// padding-top: 30rpx; //pst
			// background: #fff; //pst
			
			.user-card {
				position: relative;
				// width: 710rpx; //pst
				width: 100%; //pst
				height: 340rpx;
				margin: 0 auto;
				padding: 60rpx 40rpx;
				// background: linear-gradient(90deg, $bg-star 0%, $bg-end 100%); //pst
				// box-shadow: 0px 10rpx 20rpx 0px rgba(255, 2, 0, 0.2); //pst
				//border-radius: 24rpx; //pst
				 
				.bg {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
				 	// background-image: url('~@/static/images/user_bg.png'); //pst
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

						// .name {
						// 	display: flex;
						// 	align-items: center;
						// 	color: #fff;
						// 	font-size: 31rpx;
						.name {
							display: flex;
							flex-direction: column;
							// align-items: center;
							color: #fff;
							font-size: 31rpx;
							margin-top: -0.8rem;
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
			//pst
			.bdsj{
				position: relative;
				width: 100%;
				background-color: #eee; //pst
				top: 10rem;
				
				.bdsj2{
					position: absolute;
					border-radius: 5%;
					width: 90%;
					border-radius: 5px;
					transform: translate(5%,-3.2rem);
					z-index: 99;
					height: 80px;
					background-color: #fff;
					view{
						width: 80%;
						display: flex;
						height: 55px;
						line-height: 20px;
						position: absolute; 
						left: 10%;top: 25%;
						span{
							margin: 0 0.5rem;
							.tpjzxs{
								// display: block;
								// margin: 0 auto;
								text-align: center;
								.mckf{width:2.8rem;height: 2.8rem;}
							}
						}
					}
				}
				.bdsj3{
					position: absolute;
					width: 94%;
					border-radius: 10px;
					transform: translate(3%,-4.5rem);
					z-index: 99;
					height: 100px;
					background-color: #fff;
					display: flex;
					justify-content: space-around;
					
					view{
						display: flex;
						flex-direction: column;
						padding: 1rem 0;
						font-size: 0.9rem;
						align-items: center;
						
						.tpjzxs{
							// display: block;
							// margin: 0 auto;
							text-align: center;
							.mckf{width:2.8rem;height: 2.8rem;}
						}
					}
				}
				.wdqqd{
					width: 94%;
					transform: translate(3%,-4.8rem);
					position: relative;
					.wdqqdimg{
						height: 3rem;
						position: relative;
						width: 100%;
					}
					.wdjftext{
							position: absolute;
							color: #6a4714;
							padding-left: 2.4rem;
							// line-height: 3rem;
							z-index: 99999;
							top: 0.8rem;
					}
				}
				// .wdqqd{
				// 	width: 94%;
				// 	transform: translate(3%,-4.8rem);
				// 	color: #fff;
				// 	height:3rem;
				// 	z-index: 10;
				// 	position: relative;
				// 	color: #6a4714;
				// 	padding-left: 5%;
				// 	line-height: 3rem;
				// 	.background-image {
				// 	    display: inline-block;
				// 	    background-position: 60%;
				// 	    background-size: cover;
				// 	    background-repeat: no-repeat;
				// 	}
				// }
				
				
			}

			.order-wrapper {
				position: absolute;
				width: 100%;
				background-color: #fff; 
				top: 7rem;
				z-index: 99;
				width: 94%;
				transform: translate(3%,-1%);
				border-radius: 10px;
				
				.order-hd {
					justify-content: space-between;
					padding: 0 20rpx 28rpx;
					margin-top: 33rpx;
					border-bottom: 1px solid #F5F5F5;
					font-size: 30rpx;
					color: #282828;

					.right {
						align-items: center;
						color: #666666;
						font-size: 26rpx;

						.icon-xiangyou {
							margin-left: 5rpx;
							margin-top: 6rpx;
							font-size: 26rpx;
						}
					}
				}

				.order-bd {
					display: flex;
					padding: 0 24rpx;
					.order-item {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 20%;
						height: 160rpx;

						.pic {
							position: relative;
							text-align: center;

							image {
								width: 48rpx;
								height: 48rpx;
							}
						}

						.txt {
							margin-top: 15rpx;
							font-size: 26rpx;
							color: #454545;
						}
					}
				}
			}
		}

		.slider-wrapper {
			margin: 20rpx 0;
			height: 130rpx;

			swiper,
			swiper-item {
				height: 100%;
			}

			image {
				width: 100%;
				height: 130rpx;
			}
		}

		.user-menus {
			background-color: #fff;

			.item {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 90rpx;
				padding: 0 30rpx;

				.left {
					display: flex;
					align-items: center;

					image {
						width: 46rpx;
						height: 46rpx;
						margin-right: 25rpx;
					}
				}

				&::before {
					content: ' ';
					position: absolute;
					right: 0;
					bottom: 0;
					width: 655rpx;
					height: 1px;
					background-color: #EEEEEE;
				}

				&:last-child::before {
					display: none;
				}
			}
			button{
				font-size: 28rpx;
			}
		}
		.idaphone{
			display: flex;
			justify-content: space-between;
		}

		.phone {
			color: #fff;
			
			.phone2 {
				color: #fff;
				background-color: #fc849d;
				padding: 5px;
				display: inline;
				border-radius: 30rpx;
			}
		}

		.order-status-num {
			
			min-width:12rpx;
			background-color: #fff;
			color: #ee5a52;
			border-radius: 15px;
			position: absolute;
			right:-14rpx;
			top: -15rpx;
			font-size: 20rpx;
			padding: 0 8rpx;
			border: 1px solid #ee5a52;
		}
	}
</style>

<!-- //pst--选项卡开始 -->
<style scoped>
	.index-product-wrapper{
		margin-top: 13rem;
	}
	.on2 {
		min-height: 1500rpx;
	}
	.nav-bd {
		display: flex;
		align-items: center;
	}
	.nav-bd .item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 25%;
	}
	
	.txt {
		font-size: 32rpx;
		color: #282828;
	}
	.label {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 124rpx;
		height: 32rpx;
		margin-top: 5rpx;
		font-size: 24rpx;
		color: #999;
	}
	.active view:first-child {
		color:  #C71715;
		font-size: 0.9rem;
	}
	.active view:last-child {
		background-color: #fc5554;
		color: #fff;
		border-radius: 2rem;
		font-size: 0.6rem;
		width: 80%;
		text-align: center;
		margin-left: -0.3rem;
		margin-top: 0.2rem;
		margin-bottom: 0.3rem;
	}
	
	.list-box{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 100%;
		height:100%;
		margin-top: 0.5rem;
	}
	.item2{
		width: 47%;
		/* border:1px solid #e4e4e4; */
		margin-bottom: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.25rem 0.0625rem #e4e4e4;
	}
	.item2 image{
		width: 100%;
		height: 10rem;
		margin-bottom: 0.2rem;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}
	.item2 image:nth-child(2){
		margin-right: 0.3rem;
	}
	.item2 image:nth-child(4){
		margin-right: 0.625rem;
	}
	
	.mores-txt {
		width: 100%;
		align-items: center;
		justify-content: center;
		height: 70rpx;
		color: #999;
		font-size: 24rpx;
	}
	.iconfont {
		margin-top: 2rpx;
		font-size: 20rpx;
	}
	
	/* .wdqqd{
		padding: 0.5rem;
		width: 100%;
		color: #fff;
		height:3.5rem;
		z-index: 10;
		position: relative;
	}
	.background-image {
	    display: inline-block;
	    background-position: 100%;
	    background-size: cover;
	    background-repeat: no-repeat;
	} */
</style>
<!-- //pst--选项卡结束 -->