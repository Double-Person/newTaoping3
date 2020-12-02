<template>
	<form @submit="formSubmit" report-submit='true'>
		<view class="tslx">
			<view class="tslxbt">
				投诉类型(必填)
			</view>
			<!-- <userComplain :img-list="imgList" url-key="url" @selected="selectedBanner"/> -->
			
			<!-- 2.子页面通过$emit向父页面传递参数：@send="getSonValue" -->
			<myCheckbox @send="getSonValue"></myCheckbox>
		</view>
		<view class="wtms">
			<view class="tslx2">
				问题描述(必填)
			</view>
			<view class="txwtms">
				<textarea class="txwtms2" placeholder="在此填写问题描述" name="comment" placeholder-style="font-size:0.8rem" />
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
				<input class="dhbh3" type="text" name="phone" placeholder="必填,请留下手机号以便处理问题" placeholder-style="font-size:0.8rem"/>
			</view>
			<view class="dhbh2">
				<span>订单编号：</span>
				<input class="dhbh3" type="text" name="ddnumber" placeholder="必填,可在订单详情页复制订单编号" placeholder-style="font-size:0.8rem"/>
			</view>
		</view>
		<home></home>
		<button class="tjts" form-type="submit">提交投诉</button>
	</form>
</template>

<script>
	// import userComplain from '@/components/wl-group/wl-checkbox';
	import myCheckbox from '@/components/my-checkbox/my-checkbox';
	import home from '@/components/home';
	
	import {
		orderComment
	} from '@/api/order.js';
	
	export default {
		components: {
			// userComplain,
			myCheckbox,
			home,
		},
		data() {
			return {
				len:0,//3.子页面通过$emit向父页面传递参数：接收页定义一个初始值len
				imgList:[],
				picsPath: [],
				
				orderId: '',//订单编号
				phone: '',//联系电话
				pics: [],//上传图片
				mycomment:'',//问题描述
				mytstype:'',//投诉类型
			}
		},
		methods: {
			//删除图片
			DelPic: function(index) {
				let that = this,
					pic = this.picsPath[index];
				that.picsPath.splice(index, 1);
				that.$set(that, 'picsPath', that.picsPath);
			},
			//上传文件
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
			//4.子页面通过$emit向父页面传递参数：将接收到的长度赋值给data中定义的初始值
			getSonValue(res){
				console.log("=======",res)
				this.len=res;
			},

			
			formSubmit: function(e) {
				let that = this,
					value = e.detail.value;
				//5.子页面通过$emit向父页面传递参数：通过接收到的数值的长度是否大于来判断是否选中
				if (this.len==0) return that.$util.Tips({
					title: '请选择投诉类型'
				});
				if (!value.comment) return that.$util.Tips({
					title: '请填写问题描述！'
				});
				if (!value.phone) return that.$util.Tips({
					title: '请填写联系电话'
				});
				if (!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(value.phone)) return that.$util.Tips({
					title: '请输入正确的手机号码'
				});
				if (!value.ddnumber) return that.$util.Tips({
					title: '请填写订单编号'
				});
				
				
				value.oid = that.orderId;
				value.phonenumber = that.phone;
				value.comment = that.mycomment;
				value.pics = JSON.stringify(that.pics);
				value.tstype = that.mytstype;
				
				//评价接口。需要替换为投诉留言接口
				orderComment(value).then(res => {
					return that.$util.Tips({
						title: '感谢您的反馈!',
						icon: 'success'
					}, '/pages/user/index');
				}).catch(err => {
					return that.$util.Tips({
						title: err
					});
				});
			}
		}
	}
</script>

<style scoped>
	.tslxbt{margin: 2rem 0 0.1rem 1rem;font-weight: 600;font-size: 0.9rem;}
	.tslx2{margin: 0.1rem 0 0rem 1rem;font-weight: 600;font-size: 0.9rem;}
	.wtms{width: 100%;margin-top: 0.5rem;margin-bottom: 1rem;}
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
