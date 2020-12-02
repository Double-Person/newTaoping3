<!-- 免费抽奖 -->
<template>
	<view>
		<view class="cjym">
			<p>
				<image src="/static/choujiang/j6.png" mode=""></image>
				<span>关注公众号，免费抽大奖</span>
			</p>
			<p>
				<!-- <image src="../../static/choujiang/j1.jpg" mode=""></image> -->
				<!-- //pst-抽奖组件部分开始 -->
				<view class="content">
					<LotteryDraw @get_winingIndex='get_winingIndex'  @luck_draw_finish='luck_draw_finish'></LotteryDraw>
				</view>
				<!-- //pst-抽奖组件部分结束 -->
			</p>
		</view>
		<view class="cjtp">
			<p>
				<span>1</span>
				<span>关注再送：8180积分</span>
			</p>
			<p>
				<span>2</span>
				<span>免费抽大奖：奖品千元起</span>
			</p>
			<p>
				<span>3</span>
				<span>9.9包邮：免费礼品直接送</span>
			</p>
			<p>
				<span>4</span>
				<span>更多惊喜活动，等你来！</span>
			</p>
		</view>
		<view class="gzgzh">
			<p>
				<image src="/static/choujiang/j5.png" mode=""></image>
				<span>如何关注公众号</span>
			</p>
			<view class="gzhjz">
				<view class="ffy">
					<p>方法一</p>
					<image src="/static/choujiang/j7.jpg" mode=""></image>
					<p>保存二维码，微信中扫一扫，关注公众号</p>
					<p>保存二维码</p>
				</view>
				<view class="ffe">
					<p>方法二</p>
					<p>
						复制公众号名称
						<b>「淘品福利社」</b>
					</p>
					<p>在微信中搜索并关注</p>
					<p>复制公众号名称</p>
				</view>
			</view>
		</view>
		<view class="kjmsqf">
			<span>
				<image src="/static/choujiang/j2.png" mode=""></image>
			</span>
			<span>
				<image src="/static/choujiang/j3.png" mode=""></image>
			</span>
			<span>
				<image src="/static/choujiang/j4.png" mode=""></image>
			</span>
		</view>
		
		<!-- 选项卡部分 -->
		<!-- <view class="">
			<view class="inv-h-w">
			    <view :class="['inv-h',Inv==0?'inv-h-se':'']" @click="Inv=0">
					<span>猜你喜欢</span>
					<p>品质甄选</p>
				</view>
				<view :class="['inv-h',Inv==1?'inv-h-se':'']" @click="Inv=1">
					<span>好物精选</span>
					<p>700~799积分</p>
				</view>
				<view :class="['inv-h',Inv==2?'inv-h-se':'']" @click="Inv=2">
					<span>淘品严选</span>
					<p>600~699积分</p>
				</view>
				<view :class="['inv-h',Inv==3?'inv-h-se':'']" @click="Inv=3">
					<span>超值优选</span>
					<p>0~599积分</p>
				</view>
			</view>
			<view class="xxktp" v-show="Inv == 0">
				<view class="rxbd1">
					<view class="rxbd11">
						<image src="https://img.jingdongyouxuan.com/837983916261376" mode=""></image>
						<p style="color:#555555;margin-left: 5px;">黄金贵妇奢华九件套</p>
						<view style="margin-top: 5px;margin-left: 5px;"> 399积分 +99元</view>
						<p style="margin-top: 5px;margin-left: 5px;">
							<span style="float: left;color:#555555;font-size: 10px;text-decoration:line-through">¥2680</span>
							<span style="float: right;color: #FF3600;font-size: 10px;margin-bottom: 5px;">兑换热度7000+</span>
						</p>
					</view>
					<view class="rxbd11">
						<image src="https://img.jingdongyouxuan.com/839397205868544" mode=""></image>
						<p style="color:#555555;margin-left: 5px;">羽丝绒大豆纤维被粉</p>
						<view style="margin-top: 5px;margin-left: 5px;"> 399积分 +99元</view>
						<p style="margin-top: 5px;margin-left: 5px;">
							<span style="float: left;color:#555555;font-size: 10px;text-decoration:line-through">¥2680</span>
							<span style="float: right;color: #FF3600;font-size: 10px;margin-bottom: 5px;">兑换热度7000+</span>
						</p>
					</view>
					<view class="rxbd11">
						<image src="https://img.jingdongyouxuan.com/839081409904640" mode=""></image>
						<p style="color:#555555;margin-left: 5px;">德国工艺厨房五件套</p>
						<view style="margin-top: 5px;margin-left: 5px;"> 399积分 +99元</view>
						<p style="margin-top: 5px;margin-left: 5px;">
							<span style="float: left;color:#555555;font-size: 10px;text-decoration:line-through">¥2680</span>
							<span style="float: right;color: #FF3600;font-size: 10px;margin-bottom: 5px;">兑换热度7000+</span>
						</p>
					</view>
					<view class="rxbd11">
						<image src="https://img.jingdongyouxuan.com/837772204572672" mode=""></image>
						<p style="color:#555555;margin-left: 5px;">康佳按摩理疗筋膜枪</p>
						<view style="margin-top: 5px;margin-left: 5px;"> 399积分 +99元</view>
						<p style="margin-top: 5px;margin-left: 5px;">
							<span style="float: left;color:#555555;font-size: 10px;text-decoration:line-through">¥2680</span>
							<span style="float: right;color: #FF3600;font-size: 10px;margin-bottom: 5px;">兑换热度7000+</span>
						</p>
					</view>
				</view>
			</view>
			<view class="" v-show="Inv == 1">新品惠萃</view>
			<view class="" v-show="Inv == 2">品牌云集购</view>
			<view class="" v-show="Inv == 3">省钱更省心</view>
		</view>
		 -->
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
		 
		<!-- 底部广告部分 -->
		<view class="guanggao">
			<p style="float: left;margin-top: 8px;margin-left: 10px;">
				<span style="float: left;margin-right: 5px;">
					<image src="/assets/index/gaunggao.png" mode=""></image>
				</span>
				<span style="float: right;color: #fff;">
					<p style="font-size: 14px;">查券省钱，分享赚钱</p>
					<p style="font-size: 10px;">新用户可享受0元购一次</p>
				</span>
			</p>
			<p class="gg2" style="">
				<span>打开APP</span>
			</p>
		</view>
		
		<view class="jxczd" @tap="goJixudui">
			<p>继续超值兑</p>
		</view>
	</view>
</template>


<script>
	import LotteryDraw from '@/components/SJ-LotteryDraw/SJ-LotteryDraw.vue';//pst-抽奖组件部分
	
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
	
	export default {
		components:{
			LotteryDraw//pst-抽奖组件部分
		},
		data() {
			return {
				Inv:0,
				//pst-抽奖组件部分开始
				lottery_draw_param:{
					startIndex: 0, //开始抽奖位置，从0开始
					totalCount: 4, //一共要转的圈数
					winingIndex: 4, //中奖的位置，从0开始
					speed: 50 //抽奖动画的速度 [数字越大越慢,默认100]
				},//pst-抽奖组件部分结束
				
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
				
				
			}
		},
		onLoad() {
			//pst--选项卡开始
			Promise.all([this.getAllCategory(), this.getIndexConfig()
				//, this.setVisit()//收藏
			]);//pst--选项卡结束
		},
		methods: {
			changeTab(Inv){
			    that.navIdx = Inv;                              
			},
			goJixudui(){
			    uni.switchTab({
			        url:"/pages/users/user_sgin/index"
			
			    })
			},
			
			//pst-抽奖组件部分开始
			// 修改获奖位置（可以在这里获取后台的数据
			get_winingIndex(callback){
				this.lottery_draw_param.winingIndex=7;
				//props修改在小程序和APP端不成功，所以在这里使用回调函数传参，
				callback(this.lottery_draw_param);
			},
			// 抽奖完成
			luck_draw_finish(param){
	
				console.log(param)
				// console.log(`抽到第${param+1}个方格的奖品`)
			},
			//pst-抽奖组件部分结束
			
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

<style scoped>
	.cjym{width: 100%;padding: 0.5rem;margin-top: 2rem;}
	.cjym p:first-child image{width: 1.3rem;height: 1.3rem;padding: 0 0.3rem 0 1rem;}
	.cjym p:first-child{margin-bottom: 0.5rem;display: inline-block;}
	.cjym p:first-child span{float: right;}
	
	.cjym p:last-child{width: 100%;height: 90%;}
	.cjym p:last-child image{width: 94%;min-height: 269px;}
	
	.cjtp{width: 60%;padding: 0.5rem;margin: 0 auto;font-size: 0.8rem;}
	.cjtp p span:first-child{
		display: inline-block; 
		width: 1.5rem;
		height: 1.5rem;
		background-color: #00997a;
		border-radius: 50%;
		color: #fff;
		text-align: center;
		margin-bottom: 0.5rem;
		margin-right: 0.2rem;
		line-height: 1.5rem;
	}
	.cjtp p:nth-child(2) span:first-child{
		background-color: #428ade;
	}
	.cjtp p:nth-child(3) span:first-child{
		background-color: #e15658;
	}
	.cjtp p:nth-child(4) span:first-child{
		background-color: #f38f2b;
	}
	
	.gzgzh{width: 100%;}
	.gzgzh p{display: inline-block;padding: 0.5rem 0 0 0.5rem;}
	.gzgzh p span{float: right;}
	.gzgzh p image{width: 1.5rem;height: 1.5rem;padding: 0 0.3rem 0 1rem;}
	
	/* .gzhjz{width: 100%;padding: 1rem;} */
	.ffy,.ffe{
		width: 80%;
		padding: 0.5rem;
		margin: 0 auto;
		text-align: center;
		border: 1px solid #D3D3D3;
		border-top: 1px dashed #D3D3D3;
		margin-bottom: 1rem;
		margin-top: 1rem;
		font-size: 0.8rem;
		position: relative;
	}
	.ffy image{width: 150px;height: 150px;margin-top: 1rem;}
	.ffy p:last-child,.ffe p:last-child{
		width: 60%;
		background-color: #ffd64f;
		border-radius: 25px;
		height: 2.3rem;
		line-height: 2rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		color: #5a4b00;
		font-size: 1rem;
		
		text-align: center;
	}
	.ffy p:first-child,.ffe p:first-child{
		position: absolute;
		margin-top: -1.3rem;
		/* margin-left: 2.4rem; */
		/* margin-left: 20%; */
		font-size: 1rem;
		/* border: 1px dashed #D3D3D3; */
		border-radius: 0.8rem;
		height: 1rem;
		width: 4rem;
		line-height: 0.3rem;
		background-color: #fff;
		text-align: center;
	}
	.ffy p:first-child{margin-left: 16%;}
	.ffe p:first-child{margin-left: 23%;}
	.ffe{margin-top: 1.5rem;}
	.ffe p:nth-child(3){display: block;}
	.ffe p:nth-child(2){margin-top: 1rem;}
	.ffy p:nth-child(3),.ffe p:nth-child(3){font-size: 0.7rem;}
	
	.kjmsqf{
		display: flex;
		justify-content: space-around;
		padding: 0.5rem;
		margin-bottom: 3rem;
	}
	.kjmsqf span{width: 32%;}
	.kjmsqf span image{width: 100%;height: 300%;}
	
	/* .inv-h-w{
		display: flex;
		justify-content: space-around;
	}
	.inv-h span{
		color: #000;
		font-size: 0.9rem;
	}
	.inv-h p{
		color: #909399;
		font-size: 0.6rem;
		display: inline-block;
	}
	.inv-h-se span{
		color:  #C71715;
		font-size: 0.9rem;
		
	}
	.inv-h-se p{
		background-color: #fc5554;
		color: #fff;
		border-radius: 2rem;
		font-size: 0.6rem;
		text-align: center;
		margin-top: 3px;
		margin-bottom: 5px;
		display: inline-block;
	}
	.rxbd1{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 100%;
		height:100%;
		margin-top: 0.8rem;
		margin-left: -10px;
	}
	.rxbd11{
		width: 48%;
		margin-bottom: 8px;
		border-radius: 8px;
		box-shadow: 0 0 4px 1px #e4e4e4;
	}
	.rxbd11 image{
		width: 100%;
		height: 10rem;
		margin-bottom: 3px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	.rxbd11 image:nth-child(2){
		margin-right: 5px;
	}
	.rxbd11 image:nth-child(4){
		margin-right: 0.6rem;
	}
	.rxbd11 view{
		color: #FF3600;
	}
	
	.xxk{width: 100%;padding: 0 0.6rem;margin-top: 3rem;} */
	.inv-h-w{
		display: flex;
		justify-content: space-around;
		margin-top: 3rem;
	}
	.inv-h span{
		color: #000;
		font-size: 0.9rem;
	}
	.inv-h p{
		color: #909399;
		font-size: 0.6rem;
		/* display: inline-block; */
	}
	.inv-h-se span{
		color:  #C71715;
		font-size: 0.9rem;
		
	}
	/* .inv-h-se p{
		background-color: #fc5554;
		color: #fff;
		border-radius: 35px;
		font-size: 10px;
		text-align: center;
		margin-top: 3px;
		margin-bottom: 5px;
		display: inline-block;
	} */
	.inv-h-se p{
		background-color: #fc5554;
		color: #fff;
		border-radius: 2rem;
		font-size: 0.6rem;
		width: 120%;
		text-align: center;
		margin-left: -0.3rem;
		margin-top: 0.2rem;
		margin-bottom: 0.3rem;
	}
	
	.rxbd1{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 100%;
		height:100%;
		margin-top: 0.5rem;
		/* margin-left: -10px; */
	}
	.rxbd11{
		width: 48%;
		margin-bottom: 0.5rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.25rem 0.0625rem #e4e4e4;
	}
	.rxbd11 image{
		width: 100%;
		height: 10rem;
		margin-bottom: 0.2rem;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}
	.rxbd11 image:nth-child(2){
		margin-right: 0.3rem;
	}
	.rxbd11 image:nth-child(4){
		margin-right: 0.625rem;
	}
	.rxbd11 view{
		color: #FF3600;
	}
	
	.inv-h-w view{
		text-align: center;
	}
	/* .inv-h{margin-left: -1rem;} */
	
	
	.guanggao{
		width: 100%;
		height: 3rem;
		background-color: #1a8ee9;
		margin-bottom: 3.5rem;
	}
	.guanggao p image{width: 2.2rem;height: 2.2rem;}
	.gg2{
		float: right;
		background-color: #fff;
		color: #007AFF;
		margin-top: 1rem;
		margin-right: 0.625rem;
		border-radius: 0.2rem;
		width: 5rem;
		height: 1.625rem;
		text-align: center;
		font-size: 0.8rem;
		line-height: 1.625rem;
	}
	
	.jxczd{
		position: fixed;
		width: 80%;
		background-color: #e85d76;
		height: 2.5rem;
		bottom: 0.5rem;
		border-radius: 1rem;
		line-height: 2.5rem;
		text-align: center;
		color: #fff;
		left: 10%;
	}
	
	/* pst抽奖组件部分开始 */
	.content {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	}
	/* pst抽奖组件部分结束 */
</style>


<!-- //pst--选项卡开始 -->
<style scoped>
	.index-product-wrapper{
		margin-top: 1rem;
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
<!-- //pst--选项卡结束 -->
