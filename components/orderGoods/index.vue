<template>
	<view class="orderGoods">
		<!-- <view class='total'>共{{totalNmu}}件商品</view> -->
		<view class='goodWrapper'>
			<view class='item acea-row row-between-wrapper ddshop' v-for="(item,index) in cartInfo" :key="index" @click="jumpCon(item.productId)">
				<view class='pictrue'>
					<image :src='item.productInfo.attrInfo.image' v-if="item.productInfo.attrInfo"></image>
					<image :src='item.productInfo.image' v-else></image>
				</view>
				<view class='text'>
					<view class='acea-row row-between-wrapper ddshop2'>
						<view class='name line1 ddshop21'>{{item.productInfo.storeName}}</view>
						<view class='num ddshop22'>x {{item.cartNum}}</view>
					</view>
					<view class='attr line1' v-if="item.productInfo.attrInfo">{{item.productInfo.attrInfo.suk}}</view>
					<view class='money font-color' v-if="item.productInfo.attrInfo">￥{{item.productInfo.attrInfo.price}}</view>
					<view class='money font-color' v-else>￥{{item.productInfo.price}}</view>
					<view class='evaluate' v-if='item.isReply==0 && evaluate==3' @click.stop="evaluateTap(item.productAttrUnique,orderId,ids)">评价</view>
					<view class='evaluate' v-else-if="item.isReply==1 && evaluate==3">已评价</view>
				</view>
			</view>
		</view>
		<view class="fxg">
			<span class="fxg1">放心购</span>
			<span class="fxg2" v-for="(item,index) in fxgList" :key="index">
				{{item.fxgtext}}
			</span>
		</view>	
	</view>
</template>

<script>
	export default {
		props: {
			evaluate: {
				type: Number,
				default: 0,
			},
			cartInfo: {
				type: Array,
				default: function() {
					return [];
				}
			},
			orderId: {
				type: String,
				default: '',
			},
			ids: {
				type: Number,
				default: 0,
			},
			jump: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				totalNmu:'',
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
			};
		},
		watch:{
			cartInfo:function(nVal,oVal){
				let num = 0
				nVal.forEach((item,index)=>{
					num += item.cartNum
				})
				this.totalNmu = num
			}
		},
		methods: {
			evaluateTap:function(unique,orderId,ids){
				uni.navigateTo({
					url:"/pages/users/goods_comment_con/index?unique="+unique+"&uni="+orderId + "&id=" + ids
				})
			},
			jumpCon:function(id){
				if(this.jump){
					uni.navigateTo({
						url: `/pages/goods_details/index?id=${id}`
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.orderGoods {
		background-color: #fff;
		margin-top: 5rpx;
		border-radius: 10px;
		
	}

	.orderGoods .total {
		width: 100%;
		height: 86rpx;
		padding: 0 30rpx;
		border-bottom: 2rpx solid #f0f0f0;
		font-size: 30rpx;
		color: #282828;
		line-height: 86rpx;
		box-sizing: border-box;
	}
	.pictrue image{
		background: #f4f4f4;
	}
	.orderGoods{
		.goodWrapper{
			width: 100%;
			.ddshop{
				display: flex;
				.pictrue{
					width: 20%;
					margin-right: 5%;
				}
				.text{
					width: 75%;
					.ddshop2{
						width: 100%;
						display: flex;
						justify-content: space-between;
						.ddshop21{width: 90%;}
						.ddshop22{width: 10%;}
					}
				}
			}
		}
	}
	.orderGoods{
		.fxg{
			border-top: 1px dashed #D3D3D3;
			padding-top: 5px;
			width: 100%;
			display: block;
			margin: 0 auto;
			padding-bottom: 0.5rem;
			padding-top: 0.5rem;
			
			.fxg1{
				font-size: 0.8rem;
			}
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
</style>
