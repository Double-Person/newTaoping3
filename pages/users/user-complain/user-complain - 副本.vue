<template>
	<view>
		<view class="tslx">
			<view class="tslxbt">
				投诉类型(必填)
			</view>
			<!-- <userComplain :img-list="imgList" url-key="url" @selected="selectedBanner"/> -->
			<myCheckbox></myCheckbox>
		</view>
		<view class="wtms">
			<view class="tslx2">
				问题描述(必填)
			</view>
			<view class="txwtms">
				<textarea class="txwtms2" value="" placeholder="在此填写问题描述" placeholder-style="font-size:0.8rem" />
				<!-- <input class="txwtms2" value="" placeholder="在此填写问题描述" placeholder-style="font-size:0.8rem" /> -->
				
				<!-- pst图片上传开始 -->
				<view class="tpsc">
					<view class='pictrue' v-for="(item,index) in picsPath" :key="index">
						<image class="ksimage" :src='item'></image>
						<text class='iconfont icon-guanbi1 font-color cdelete' @click='DelPic(index)'></text>
					</view>
					<view class='pictrue2' @click='uploadpic' v-if="picsPath.length < 8">
						<view class="sctpwz2">
							<text class='iconfont icon-icon25201'></text>
						</view>
						<view class="sctpwz">上传图片</view>
					</view>
				</view>
				<!-- pst图片上传结束 -->
			</view>
		</view>
		<view class="dhbh">
			<view class="dhbh2">
				<span>联系电话：</span>
				<input class="dhbh3" type="text" value="" placeholder="必填,请留下手机号以便处理问题" placeholder-style="font-size:0.8rem"/>
			</view>
			<view class="dhbh2">
				<span>订单编号：</span>
				<input class="dhbh3" type="text" value="" placeholder="选填,可在订单详情页复制订单编号" placeholder-style="font-size:0.8rem"/>
			</view>
		</view>
		<view class="tjts" @click="tjts">
			提交投诉
		</view>
		
	</view>
</template>

<script>
	// import userComplain from '@/components/wl-group/wl-checkbox';
	import myCheckbox from '@/components/my-checkbox/my-checkbox';
	
	export default {
		components: {
			// userComplain,
			myCheckbox
		},
		data() {
			return {
				imgList:[],
				
				picsPath: [],
				//pics: [],
			}
		},
		methods: {
			/**
			 * 删除图片
			 * 
			 */
			DelPic: function(index) {
				let that = this,
					pic = this.picsPath[index];
				that.picsPath.splice(index, 1);
				that.$set(that, 'picsPath', that.picsPath);
			},
			/**
			 * 上传文件
			 * 
			 */
			uploadpic: function() {
				let that = this;
				that.$util.uploadImageOne({
					url: 'user/upload/image',
					name: 'multipart',
					model: "product",
					pid: 1
				}, function(res) {
					//that.pics.push(res.data.url);
					that.picsPath.push(res.data.localPath);
					//that.$set(that, 'pics', that.pics);
					that.$set(that, 'picsPath', that.picsPath);
				});
			},
		}
	}
</script>

<style scoped>
	.tslxbt{margin: 2rem 0 0.1rem 1rem;font-weight: 600;font-size: 0.9rem;}
	.tslx2{margin: 0.1rem 0 0rem 1rem;font-weight: 600;font-size: 0.9rem;}
	.wtms{width: 100%;margin-top: 0.5rem;}
	.txwtms{margin-left: 1rem;display: inline;}
	.txwtms2{width: 95%;padding: 0 1rem;}
	.tpsc{width: 95%;padding: 0 1rem;display: flex;flex-wrap: wrap;}
	.picture{display: inline;width: 5rem;height: 5rem;position: relative;margin: 0 0.2rem;}
	.pictrue2{display: inline;width: 5rem;height: 5rem;background-color: #D3D3D3;margin: 0 0.2rem;}
	.ksimage{width: 5rem;height: 5rem;margin: 0 0.2rem;}
	.cdelete{position: absolute;z-index: 2;margin-left: -1.2rem;}
	.sctpwz2{width: 5rem;text-align: center;padding-top: 1.2rem;padding-bottom: 0.2rem;}
	.sctpwz{width: 5rem;text-align: center;}
	
	
	.dhbh{color: #646566;margin: 0 0 5rem 1rem;font-size: 0.8rem;width: 100%;}
	.dhbh2{display: flex;justify-content: space-between;}
	.dhbh2 span{width: 25%;font-size: 0.9rem;}
	.dhbh3{display: inline;width: 80%;}
	
	.tjts{
		position: fixed;
		bottom: 0.5rem;
		width: 80%;
		left: 10%;
		background-color: #e54635;
		height: 3rem;
		border-radius: 35px;
		color: #fff;
		text-align: center;
		line-height: 3rem;
		font-size: 1rem;
	}
</style>
