<template>
	<view class="page-index" :class="{'bgf':navIndex >0}">
		<view class="page_content">
			<view  v-if="imgUrls.length">
				<swiper class="swiper" indicator-dots="true" :autoplay="true" :circular="circular" :interval="interval" :duration="duration"
				 indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#fff">
					<block v-for="(item,index) in imgUrls" :key="index">
						<swiper-item  class="swiper-item">
							<navigator :url='item.url' class='' hover-class='none'>
								<image :src="item.pic" class="slide-image" lazy-load></image>
							</navigator>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<!-- 购物积分卡部分 -->
			<view class="Ibp1 items-center">
				<span class="">购物积分卡</span>
				<span class="Ip2">{{Jifen}}</span>
				<span class="Ip8" @tap="goJfzx">去使用</span>
			</view>
			<!-- menu 积分换购部分-->
			<view class="menu">
				<view class='nav acea-row' v-if="menus.length">
					<block v-for="(item,index) in menus" :key="index">
						<navigator class='item' v-if="item.show == '1'" :url='item.url' open-type='switchTab' hover-class='none'>
							<view class='pictrue1'>
								<image :src='item.pic'></image>
							</view>
							<view class="menu-txt">{{item.name}}</view>
						</navigator>
						<navigator class='item' v-else :url='item.url' hover-class='none'>
							<view class='pictrue1'>
								<image :src='item.pic'></image>
							</view>
							<view class="menu-txt">{{item.name}}</view>
						</navigator>
					</block>
				</view>
			</view>
			<!-- 限时秒杀部分 -->
			<view class="xianshimiaosha">
				<!-- <span class="miaosha1" @tap="goXsms"> -->
					<span class="miaosha1">
					<image src="@/static/index/s1.png" mode=""></image>
					<span class="mstext">限时秒杀</span>
					<countdown :startTime="startTime" :endTime="enTime" />
					<p class="tjms">9.9特价秒杀</p>
				</span>
				<!-- <span class="miaosha2" @tap="goDjqf"> -->
						<span class="miaosha2">
					<image src="@/static/index/s2.png" mode=""></image>
					<span class="qftext">等价全返</span>
					<p class="xrxyh">新人享优惠</p>
					<p class="tjms">免单全额返</p>
				</span>
			</view>
			<!-- 品牌专场部分 -->
			<view>
				<span class="ppzc">
					<image src="/static/index/p1.png" mode=""></image>
				</span>
				<span class="ppzc3">
					<span class="ppzc2">
						<image src="https://img.jingdongyouxuan.com/834327219830795" mode=""></image>
						<image src="https://img.jingdongyouxuan.com/834327219306499" mode=""></image>
						<image src="https://img.jingdongyouxuan.com/834327221927945" mode=""></image>
						<image src="https://img.jingdongyouxuan.com/834327226122250" mode=""></image>
					</span>
					<span class="liulan">12万人正在浏览</span>
				</span>
			</view>
			<carousel :img-list="imgList" url-key="url" @selected="selectedBanner"/>
			<!-- 首页推荐 -->
			<view class="index-product-wrapper" :class="iSshowH?'on':''">
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
		</view>
		<!-- 分类页 -->
		<view class="productList" v-if="navIndex>0" :style="'margin-top:'+prodeuctTop+'px'">
			<block v-if="sortProduct.length>0">
				<view class='list acea-row row-between-wrapper' :class='is_switch==true?"":"on"'>
					<view class='item' :class='is_switch==true?"":"on"' hover-class='none' v-for="(item,index) in sortProduct" :key="index"
					 @click="godDetail(item)">
						<view class='pictrue' :class='is_switch==true?"":"on"'>
							<image :src='item.image' :class='is_switch==true?"":"on"'></image>
							<span class="pictrue_log_class" :class="is_switch === true ? 'pictrue_log_big' : 'pictrue_log'" v-if="item.activity && item.activity.type === '1'">秒杀</span>
							<span class="pictrue_log_class" :class="is_switch === true ? 'pictrue_log_big' : 'pictrue_log'" v-if="item.activity && item.activity.type === '2'">砍价</span>
							<span class="pictrue_log_class" :class="is_switch === true ? 'pictrue_log_big' : 'pictrue_log'" v-if="item.activity && item.activity.type === '3'">拼团</span>
						</view>
						<view class='text' :class='is_switch==true?"":"on"'>
							<view class='name line1'>{{item.store_name}}</view>
							<view class='money font-color' :class='is_switch==true?"":"on"'>￥<text class='num'>{{item.price}}</text></view>
							<view class='vip acea-row row-between-wrapper' :class='is_switch==true?"":"on"'>
								<view class='vip-money' v-if="item.vip_price && item.vip_price > 0">￥{{item.vip_price}}
									<image src='@/static/images/vip.png'></image>
								</view>
								<view>已售{{item.sales}}件</view>
							</view>
						</view>
					</view>
					<view class='loadingicon acea-row row-center-wrapper' v-if='sortProduct.length > 0'>
						<text class='loading iconfont icon-jiazai' :hidden='loading==false'></text>{{loadTitle}}
					</view>
				</view>
			</block>
			<block v-if="sortProduct.length == 0">
				<view class="noCommodity">
					<view class='pictrue'>
						<image src='/static/images/noShopper.png'></image>
					</view>
					<recommend :hostProduct="hostProduct"></recommend>
				</view>

			</block>
		</view>
		<coupon-window :window='window' :couponList="couponList" @onColse="onColse"></coupon-window>
		<!-- #ifdef MP -->
		<authorize @onLoadFun="onLoadFun" :isAuto="isAuto" :isShowAuth="isShowAuth" @authColse="authColse" :isGoIndex="false"></authorize>
		<!-- #endif -->
	</view>
</template>

<script>
	import {loginVisitorse} from "@/api/user";
	
	import carousel from '@/components/vear-carousel/vear-carousel';
	import countdown from '@/components/cz-countdown/cz-countdown';
	import Auth from '@/libs/wechat';
	import Cache from '@/utils/cache';
	var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
	let app = getApp();
	import {
		getIndexData,
		getCoupons
	} from '@/api/api.js';
	import {getTemlIds} from '@/api/api.js';
	import {follow} from '@/api/public.js';
	import {getShare} from '@/api/public.js';
	import goodList from '@/components/goodList';
	import promotionGood from '@/components/promotionGood';
	import couponWindow from '@/components/couponWindow';
	import ClipboardJS from "@/plugin/clipboard/clipboard.js";
	import {goShopDetail} from '@/libs/order.js'
	import {mapGetters} from "vuex";
	import tabNav from '@/components/tabNav.vue'
	import countDown from '@/components/countDown';
	import {
		getCategoryList,
		getProductslist, 
		getProductHot,
		getGroomList
	} from '@/api/store.js';
	import {setVisit} from '@/api/user.js'
	import recommend from '@/components/recommend';
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	import {silenceBindingSpread} from '@/utils';
	
	import {getWechatConfig} from "@/api/public";
	const arrTemp = ["paySubscribe","orderSubscribe","extrctSubscribe", "orderRefundSubscribe", "rechargeSubscribe"];
	export default {
		computed: mapGetters(['isLogin', 'uid']),
		components: {
			tabNav,
			goodList,
			promotionGood,
			couponWindow,
			countDown,
			recommend,
			// #ifdef MP
			authorize
			// #endif
			carousel,
			countdown
		},
		data() {
			return {
				visitor:'',//pst
				startTime:'2020-10-22 05:02:22',
				enTime:'2020-10-22 12:00:00',
				
				loading: false,
				isAuto: false, //没有授权的不会自动授权
				isShowAuth: false, //是否隐藏授权
				statusBarHeight: statusBarHeight,
				navIndex: 0,
				navTop: [],
				subscribe: false,
				followUrl: "",
				followHid: true,
				followCode: false,
				logoUrl: "",
				imgUrls: [],
				jfimgUrls:[{
					url:'../customer_list/customer_list',
					pic: '../../static/index/t1.png',
					jfname:'积分换购'
				}, 
				{
					url:'/pages/goods_cate/goods_cate',
					pic: '../../static/index/t2.png',
					jfname:'限时秒杀'
				},
				{
					url:'/pages/goods_cate/goods_cate',
					pic: '../../static/index/t3.png',
					jfname:'等价全返'
				},
				{
					url:'pages/goods_cate/goods_cate',
					pic: '../../static/index/t4.png',
					jfname:'免费抽奖'
				}
				],
				//品牌专场轮播图
				imgList: [{
				    url: 'https://vipyanxuan.com/static/img/gekanuo.021220c6.jpg',
				    id: 1
				},{
				    url: 'https://vipyanxuan.com/static/img/kangjia.aa199a58.jpg',
				    id: 2
				},{
				    url: 'https://vipyanxuan.com/static/img/chuangwei.2436287c.jpg',
				    id: 3
				},{
				    url: 'https://vipyanxuan.com/static/img/xiliniu.969b06bf.jpg',
				    id: 4
				},{
				    url: 'https://vipyanxuan.com/static/img/meiling.3b6c781b.jpg',
				    id: 5
				},{
				    url: 'https://vipyanxuan.com/static/img/yimi.7e1b6f48.jpg',
				    id: 6
				}],
				
				itemNew: [],
				menus: [],
				
				bastBanner: [],
				bastInfo: '',
				bastList: [],
				fastInfo: '',
				fastList: [],
				firstInfo: '',
				firstList: [],
				salesInfo: '',
				likeInfo: [],
				benefit: [],
				indicatorDots: false,
				circular: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				window: false,
				iShidden: false,
				navH: "",
				newGoodsBananr: '',
				couponList: [],
				lovely: [],
				liveList: [],
				hotList: [{
					pic: '/static/images/hot_001.png'
				}, {
					pic: '/static/images/hot_002.png'
				}, {
					pic: '/static/images/hot_003.png'
				}],
				ProductNavindex: 0,
				marTop: 0,
				datatime: 0,
				childID: 0,
				loadend: false,
				// loading: false,
				loadTitle: '加载更多',
				sortProduct: [],
				where: {
					cid: 0,
					page: 1,
					limit: 10,
				},
				is_switch: true,
				hostProduct: [],
				hotPage: 1,
				hotLimit: 10,
				hotScroll: false,
				explosiveMoney: [],
				prodeuctTop: 0,
				searchH: 0,
				isFixed: false,
				goodType: 0, //精品推荐Type
				goodScroll: true, //精品推荐开关
				params: { //精品推荐分页
					page: 1,
					limit: 10,
				},
				tempArr: [], //精品推荐临时数组
				pageInfo: '', // 精品推荐全数据
				site_name: '', //首页title
				iSshowH: false,
				configApi: {} ,//分享类容配置
				
				Jifen:'',//pst-首页的积分
				
			}
		},
		onLoad() {
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					try {
						uni.setStorageSync('user_latitude', res.latitude);
						uni.setStorageSync('user_longitude', res.longitude);
					} catch {}
				}
			});
			let self = this
			// #ifdef MP
			// 获取小程序头部高度
			this.navH = app.globalData.navHeight;
			let info = uni.createSelectorQuery().select(".mp-header");
			info.boundingClientRect(function(data) {
				self.marTop = data.height
			}).exec()
			// #endif
			// #ifndef MP
			this.navH = 0;
			// #endif
			this.isLogin && silenceBindingSpread();
			
			Promise.all([this.getAllCategory(), this.getIndexConfig()
				, this.setVisit()//收藏
			]);//？疑问3
			
			// #ifdef MP
			this.getTemlIds()
			//this.getLiveList()
			// #endif
			
			this.loginVisitorse()
						
		},
		created(){
			// uni.showToast({
			// 	title:"hsaus"
			// })
			
			this.getIndexConfig()
			
			
		},
		onShow() {
			
			
			let self = this
			uni.setNavigationBarTitle({
				title: self.site_name
			});
			
			//pst 首页购物积分，如果是一登录进来就要获取积分(一登录进来就跳转到首页)的话，就需要把积分接口放在首页
			this.Jifen=uni.getStorageSync('myJifen');//将存入缓存中的额积分数据拿出来
		},
		methods: {
			loginVisitorse() {
				let that = this;
				loginVisitorse().then(res => {
					console.log("查看是否请求到该接口",res.data.data.token)
					that.visitor=res.data.data.token;
				}).catch(err => {
					console.log("查看游客接口失败")
				});
				// uni.request({
				//     url: 'http://192.168.0.119:8905/api/front/login/visitors',		
				//    header: {
				//         // 'Content-Type': 'application/x-www-form-urlencoded',
				// 		// 'TOKENNAME':store.state.app.token
				// 		'Authori-zation':store.state.app.token
				//     },
				//     success: (res) => {
				// 		console.log("查看是否请求到该接口",res)
				// 		// this.$store.commit("LOGIN", {
				// 		// 	'token': res.data.data.token
				// 		// });
				// 		// uni.setStorageSync('logonToken', res.data.data.token)
				// 		// console.log("查看是否请求到该接口2",res.data.data.token)
				// 		// console.log(store.state.app.token,676767)
						
				// 		this.visitor=res.data;
				//         this.text = 'request success';
				//     }
				// });
			},
			
			// #ifdef MP
			getTemlIds() {
				for (var i in arrTemp) {
				   this.getTem(arrTemp[i]);
				}
			},
			getTem(data){
				getTemlIds({status:true,type:data}).then(res => {
					if (res.data) {
						let arr = res.data.map((item) => {
							return item.tempId
						})
						//console.log(arr)
						wx.setStorageSync('tempID'+ data, arr);
					}
				})
			},
			// #endif
			// 关闭优惠券弹窗
			onColse() {
				this.$set(this, "window", false);
			},
			// 记录会员访问，收藏
			setVisit() {
				setVisit({
					url: '/pages/index/index'
				}).then(res => {
					console.log(res)
				})
			},
			// 获取导航
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
			},

			// 首页数据
			getIndexConfig: function() {
				let that = this;
				// uni.showToast({
				// 	title:"hsaus"
				// })
				getIndexData().then(res => {
					console.log(res,22222222)
					
					uni.setNavigationBarTitle({
						title: '首页'
					})
					that.$set(that, "logoUrl", res.data.logoUrl);
					that.$set(that, "site_name", '首页');
					that.$set(that, "imgUrls", res.data.banner);
					//that.imgUrls=res.data.banner;
					that.$set(that, "menus", res.data.menus);
					//that.lovely = res.data.lovely;
					//写法1：
					that.$set(that, "pageInfo", res.data);
					//写法2：
					//that.pageInfo = res.data;
					console.log(that.pageInfo,"首页所有数据");
					that.$set(that, "firstList", res.data.info.firstList);
					that.$set(that, "bastList", res.data.info.bastList);
					that.$set(that, "likeInfo", res.data.likeInfo);
					that.$set(that, "benefit", res.data.benefit);
					that.$set(that, "bastBanner", res.data.info.bastBanner);
					that.$set(that, "couponList", res.data.couponList);
					that.$set(that, "explosiveMoney", res.data.explosiveMoney);
					that.goodType = res.data.explosiveMoney[0].type;
					console.log(that.goodType,"3333");
					// #ifdef H5
					that.subscribe = res.data.subscribe;
					// #endif
					
					this.getGroomList();
					
					this.shareApi();
					
					this.getcouponList();
				});
				
			},
			getcouponList() {
				let that = this;
				getCoupons({
					page: 1,
					limit: 6
				}).then(res => {
					that.$set(that, "couponList", res.data);
					// 小程序判断用户是否授权；
					// #ifdef MP
					uni.getSetting({
						success(res) {
							if (!res.authSetting['scope.userInfo']) {
								that.window = that.couponList.length ? true : false;
							} else {
								that.window = false;
								that.iShidden = true;
							}
						}
					});
					// #endif
					// #ifndef MP
					if (that.isLogin) {
						that.window = false;
					} else {
						that.window = res.data.length ? true : false;
					}
					// #endif
				}).catch(err => {
					return this.$util.Tips({
						title: err
					});
				});
			},
			shareApi: function() {
				getShare().then(res => {
					this.$set(this, 'configApi', res.data);
					// #ifdef H5
					this.setOpenShare(res.data);
					// #endif
				})
			},
			// 微信分享；
			setOpenShare: function(data) {
				let that = this;
				if (that.$wechat.isWeixin()) {
					let configAppMessage = {
						desc: data.synopsis,
						title: data.title,
						link: location.href,
						imgUrl: data.img
					};
					that.$wechat.wechatEvevt(["updateAppMessageShareData", "updateTimelineShareData"], configAppMessage);
				}
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			// 授权回调
			onLoadFun() {

			},
			// 首发新品切换
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
			selectedBanner(item, index) {
			    console.log('🥒', item, index)
			},
			
			goJfzx(){
				uni.switchTab({
				    url:"/pages/users/user_sgin/index"
							
				})
			}
		},
		mounted() {
			// let self = this
			// // #ifdef H5
			// this.getChatUrL();
			// // 获取H5 搜索框高度
			// let appSearchH = uni.createSelectorQuery().select(".serch-wrapper");
			// appSearchH.boundingClientRect(function(data) {
			// 	self.searchH = data.height
			// }).exec()
			// // #endif
		},
		/**
		 * 用户点击右上角分享
		 */
		// #ifdef MP
		onShareAppMessage: function() {
			return {
				title: this.configApi.title,
				imageUrl: this.configApi.img,
				desc: this.configApi.synopsis,
				path: '/pages/index/index'
			};
		},
		// #endif
		// 滚动到底部
		onReachBottom() {

			if (this.navIndex == 0) {
				// 首页加载更多
				if (this.params.page != 1) {
					this.getGroomList();
				}
			} else {
				// 分类栏目加载更多
				if (this.sortProduct.length > 0) {
					this.get_product_list();
				} else {
					this.get_host_product();
				}
			}
		},
		// 滚动监听
		onPageScroll(e) {
			let self = this
			if (e.scrollTop >= self.searchH) {
				self.isFixed = true
			} else {
				self.isFixed = false
			}
		},
		
		
	}
</script>

<style scoped>
	.page_content{
	}
	.swiper {
		width:100%;
		height:10rem;
		position: relative;
	}
	.slide-image{
		width:100%;
		height:10rem;
	}
	.Ibp1{
		position: relative;
		top: -2rem;
		left: 0;
		right: 0;
		margin: auto;
		width: 80%;
		height: 3rem;
		bottom: 4.5rem;
		padding: 0 1rem 0 1.4rem;
		border-radius:3rem;
		background-color: #fff;
		line-height: 3rem;
	}
	.Ip2{color: #007AFF;margin-left: 0.8rem;font-size: 1rem;}
	.Ip8{
		float: right;
		border-radius: 2rem;
		right: 5%;
		background-color: #007AFF;
		color: #fff;
		width: 5rem;
		height: 1.5rem;
		text-align: center;
		font-size: 0.6rem;
		line-height: 1.5rem;
		margin-top: 0.7rem;
	}
	
	.nav {
		padding: 0 0rpx 30rpx;
		flex-wrap: wrap;
	}
	.item {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 20%;
		margin-top: -1rem;
		margin-bottom: 1.5rem;
	}
	.item image{
		width: 2.5rem;
		height: 2.5rem;
	}
	.menu-txt{
		font-size: 0.6rem;
		color: #656565;
	} 
	
	.xianshimiaosha{
		display: flex;
		justify-content: space-around;
		margin-top: -1rem;
	}
	.miaosha1{
		width: 48%;
		display: inline-block;
		background-color: #edeefe;
		border-radius: 0.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		
	}
	.miaosha2{
		width: 48%;
		display: inline-block;
		background-color: #ffebeb;
		border-radius: 0.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		
	}
	.miaosha1 image{
		width: 4rem;
		height: 4rem;
		float: right;
		padding-right: 0.6rem;
	}
	.miaosha2 image{
		width: 4rem;
		height: 4rem;
		float: right;
		padding-right: 0.6rem;
		
	}
	.mstext,.qftext{
		margin-left: 0.6rem;
		font-weight: 600;
	}
	.tjms{font-size: 0.5rem;margin-left: 0.6rem;margin-top: 0.3rem;}
	.xrxyh{
		background-color: #B76B6B;
		border-radius: 0.3rem;
		display: inline-block;
		margin-left: 10px;
		color: #fff;
		font-size: 12px;
		margin-top: 0.3rem;
		width: 4rem;
		height: 1.3rem;
		text-align: center;
		line-height: 1.3rem;
	}
	
	.ppzc image{width: 3.75rem;height: 1.25rem;margin-top: 0.6rem;margin-left: 0.6rem;}
	.ppzc3{
		float: right;
		margin-right: 0.6rem;
		margin-top: 0.6rem;
		height: 1.25rem;
	}
	.ppzc2 image{
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 50%;
		float: left;
	}
	.liulan{font-size: 0.75rem;line-height: 1.25rem;color: #6b6b6b;}
	
	.index-product-wrapper{
		margin-top: 40rpx;
	}
	.on {
		min-height: 1500rpx;
	}
	.nav-bd {
		display: flex;
		align-items: center;
	}
	.item {
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
		margin-top: -0.5rem;
	}
	.item2{
		width: 47%;
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
	
	
</style>


<style scoped>
	/deep/ .countdown .time{background-color: #383c72;margin-top: 0.3rem;}
	/deep/ .countdown{margin-left: 0.3rem;}
	/deep/ .image-container{margin: 0 auto;}
</style>

