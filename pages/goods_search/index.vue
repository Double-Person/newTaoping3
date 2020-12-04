<template>
	<view>
		<view class='searchGood'>
			<view class='search acea-row row-between-wrapper'>
				<view class='input acea-row row-between-wrapper'>
					<text class='iconfont icon-sousuo2'></text>
					<input type='text' :value='searchValue' :focus="focus" placeholder='点击查询订单' placeholder-class='placeholder' @input="setValue"></input>
				</view>
				<view class='bnt' @tap='searchBut'>搜索</view>
			</view>
			<!-- <view class='title'>热门搜索</view>
			<view class='list acea-row'>
				<block v-for="(item,index) in hotSearchList" :key="index">
					<view class='item' @tap='setHotSearchValue(item.title)'>{{item.title}}</view>
				</block>
			</view> -->
			<view class='line'></view>
			<goodList :bastList="bastList" v-if="bastList.length > 0"></goodList>
			<view class='loadingicon acea-row row-center-wrapper' v-if="bastList.length > 0">
				<text class='loading iconfont icon-jiazai' :hidden='loading==false'></text>{{loadTitle}}
			</view>
		</view>
		<view class='noCommodity'>
			<!-- <view class='pictrue'  v-if="bastList.length == 0">
				<image src='../../static/images/noSearch.png'></image>
			</view> -->
			<view class="cxxs2"  v-if="bastList.length == 0">
				<p class="cxxs3">
					<span>
						<image class="cximg" src="../../static/dingdan/d1.png" mode=""></image>
					</span>
					<span>
						<p style="font-size: 10px;">请先输入手机号查询</p>
						<p style="font-size: 10px;">查询后订单在此显示</p>
					</span>
				</p>
			</view>
			<view>
				<view class="ddan3">
					<span>联系客服</span>
					<span @click="goJxczd()">继续超值兑</span>
				</view>
				<recommend :hostProduct='hostProduct'></recommend>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {
		getSearchKeyword,
		getProductslist,
		getProductHot
	} from '@/api/store.js';
	import goodList from '@/components/goodList';
	import recommend from '@/components/recommend';
	export default {
		components: {
			goodList,
			recommend
		},
		data() {
			return {
				hostProduct: [],
				searchValue: '',
				focus: true,
				bastList: [],
				hotSearchList: [],
				first: 0,
				limit: 8,
				page: 1,
				loading: false,
				loadend: false,
				loadTitle: '加载更多',
				hotPage:1,
				isScroll:true
			};
		},
		onShow: function() {
			this.getRoutineHotSearch();
			this.getHostProduct();
		},
		onReachBottom: function() {
			if(this.bastList.length>0){
				this.getProductList();
			}else{
				this.getHostProduct();
			}
			
		},
		methods: {
			goJxczd(){
				uni.switchTab({
					url:'/pages/users/user_sgin/index'
				})
			},
			getRoutineHotSearch: function() {
				let that = this;
				// Promise，参考官网：https://uniapp.dcloud.io/api/README?id=promise-%e5%b0%81%e8%a3%85
				getSearchKeyword().then(res => {
					that.$set(that, 'hotSearchList', res.data);
				});
			},
			getProductList: function() {
				let that = this;
				if (that.loadend) return;
				if (that.loading) return;
				that.loading = true;
				that.loadTitle = '';
				getProductslist({
					keyword: that.searchValue,
					page: that.page,
					limit: that.limit
				}).then(res => {
					let list = res.data.list,
						loadend = list.length < that.limit;
					that.bastList = that.$util.SplitArray(list, that.bastList);//？疑问1
					that.$set(that,'bastList',that.bastList);
					that.loading = false;
					that.loadend = loadend;
					that.loadTitle = loadend ? "😕人家是有底线的~~" : "加载更多";
					that.page = that.page + 1;
				}).catch(err => {
					that.loading = false,
					that.loadTitle = '加载更多'
				});
			},
			getHostProduct: function() {
				let that = this;
				if(!this.isScroll) return
				getProductHot(that.hotPage,that.limit).then(res => {
					that.isScroll = res.data.list.length>=that.limit
					that.hostProduct = that.hostProduct.concat(res.data.list)
					that.hotPage += 1;
				});
			},
			setHotSearchValue: function(event) {
				this.$set(this, 'searchValue', event);
				this.page = 1;
				this.loadend = false;
				this.$set(this, 'bastList', []);
				this.getProductList();
			},
			setValue: function(event) {
				this.$set(this, 'searchValue', event.detail.value);
			},
			searchBut: function() {
				let that = this;
				that.focus = false;
				if (that.searchValue.length > 0) {
					that.page = 1;
					that.loadend = false;
					that.$set(that, 'bastList', []);
					uni.showLoading({
						title: '正在搜索中'
					});
					that.getProductList();
					uni.hideLoading();
				} else {
					return this.$util.Tips({
						title: '请输入要搜索的商品',
						icon: 'none',
						duration: 1000,
						mask: true,
					});
				}
			}
		}
	}
</script>

<style scoped>
	.cxxs2{
		background-color: #fff;
		padding: 0 10px;
		width: 90%;
		height: 110px;
		
		position: relative;
		color: #656565;
		font-size: 14px;
		display: inline-block;
		/* margin: 0 auto; */
		margin-top: 10px;
		margin-left: 2.5%;
	}
	.cxxs3{
		background-color: #fff;
		height: 50px;
		position: absolute;
		top: 25%;
		left: 50%;
		width: 60%;
		margin-left: -25%;
	}
	.cxxs3{
		display: flex;
	}
	.cxxs3 span:last-child{
		display: flex;
		flex-direction: column;
		height: 50px;
		margin-left: 5px;
		line-height: 25px;
	}
	.cximg{width: 50px;height: 50px;}
	
	.ddan3{
		width: 95%;
		height: 3rem;
		display: flex;
		justify-content: space-around;
		margin-top: 1rem;
		text-align: center;
		line-height: 3rem;
		display: inline-block;
		margin: 0 auto;
		padding: 0.5rem 10px 0;
	}
	.ddan3 span:first-child{
		width: 47%;height: 3rem; 
		background-color: #fff;
		display: inline-block;
		border: 1px solid #D3D3D3;
		border-radius: 8px;
		color: #656565;
		font-size: 0.8rem;
		margin-right: 0.5rem;
	}
	.ddan3 span:last-child{
		width: 47%;height: 3rem;
		background-color: #ffb901;
		display: inline-block;
		border-radius: 8px;
		color: #fff;
		font-size: 0.8rem;
	}
	
	
	
</style>

<style lang="scss">
	page {
		background-color: #fff !important;
	}

	.searchGood .search {
		padding-left: 35rpx;
		padding-right:35rpx;
	}

	.searchGood .search {
		margin-top: 20rpx;
	}

	.searchGood .search .input {
		width: 550rpx;
		background-color: #f7f7f7;
		border-radius: 33rpx;
		// padding: 0 35rpx;
		box-sizing: border-box;
		height: 66rpx;
		border: 1px solid #D3D3D3;
		padding-left: 35rpx;
	}

	.searchGood .search .input input {
		width: 472rpx;
		font-size: 28rpx;
	}

	.searchGood .search .input .placeholder {
		color: #bbb;
	}

	.searchGood .search .input .iconfont {
		color: #000;
		font-size: 35rpx;
	}

	.searchGood .search .bnt {
		width: 120rpx;
		text-align: center;
		height: 66rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color: #fff;
		background-color: #fe6282;
		border-radius: 33rpx;
		
	}

	.searchGood .title {
		font-size: 28rpx;
		color: #999;
		margin: 50rpx 30rpx 25rpx 30rpx;
	}

	.searchGood .list {
		padding-left: 10rpx;
	}

	.searchGood .list .item {
		font-size: 26rpx;
		color: #454545;
		padding: 0 21rpx;
		height: 60rpx;
		border-radius: 3rpx;
		line-height: 60rpx;
		border: 1rpx solid #aaa;
		margin: 0 0 20rpx 20rpx;
	}

	.searchGood .line {
		border-bottom: 1rpx solid #eee;
		margin: 20rpx 30rpx 0 30rpx;
	}
</style>
