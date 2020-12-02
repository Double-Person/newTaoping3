<template>
	<!-- pst积分规则-弹窗部分开始 -->
	<view class="tank" v-show="isshow">
			<scroll-view class="tank2" scroll-y="true" @scroll = "monScroll">
				<text class="jfgztext">积分规则</text>
				<text class="jfgztext2">
					一、积分获取方式
					1.新用户
					新用户可免费获赠一定的随机体验积分。新用户是指没有在本商城提交过订单的用户，同一账号、同一手机号、同一终端设备号或其它合理显示为同一用户的情形，均视为同一用户。
					2.签到
					用户首日签到可领取50积分，连续签到每日可领取100积分，若签到中断则重新计算。
					3.购买返积分商品
					购买返积分商品的用户，选择在线支付成功购买后可立返积分。
					4.关注公众号
					关注公众号可以获得一定的奖励积分。
					5.分享送好礼活动
					分享送好礼活动,将一次性赠送500积分，再次分享不再增加积分
					
					四、积分退回规则
					在积分商城使用积分兑换的商品，订单产生退款时，不会退回积分。
					
					五、价格说明
					1. 划线价格： 商品展示的划线价格是商品的专柜价、吊牌价、零售价、指导价、曾经展示过的销售价等，并非原价，由于地区、时间的差异性和市场的行情波动，该价格仅供您参考。
					2. 未划线价格： 未划线的价格是商品的实时标价，并不一定为您最终实际支付的价格，具体的成交价格可能会因为您使用积分、活动、优惠券等发生变化，请以订单结算价格为准。
					3. 如您对商品的标题、价格、详情等信息内容有疑问，请在购买前咨询商城在线客服，客服工作时间为周一至周日早9:00至晚21:00。
					
					六、其他说明
					1. 商品的兑换热度是指该商品一定期间内访问人数、下单人数、实际支付人数、平台推荐力度等的综合指标，并非商品的销量，由于地区、时间或网络波动的差异，兑换热度仅供您参考。
					2. 如用户存在违规盗刷积分行为，我们有权取消该违规用户非法获取的积分资格，已领取的积分将被扣回，并要求其对已发放的活动所得进行返还，承担相应法律责任。
					3. 如遇不可抗力因素，本商城有权取消、修改或暂停积分兑换等活动。
					4. 为了提升用户体验，我们将不定时更新积分服务内容，积分规则也可能会随之变更，更新后的内容于公布之日起生效。如您选择继续使用积分服务，产生购物行为即表示您默认更新后的积分规则。若不同意变更后的积分规则，您有权停止使用积分服务。双方协商一致的，也可另行变更相关服务和对应内容条款。如更新后涉及您的主要权利或责任，我们会以公告、客户端通知或短信等方式为您提示，您也可以随时在本页面查阅积分规则的最新版本。
					5. 下单时请仔细核对收件信息，商品一经发出便交由快递公司配送，无法再为您进行修改，因填写失误所产生的配送相关问题将由您自行承担责任。
					6. 下单后一般在48小时内根据订单顺序为您发货，如遇节假日或周末可能由于订单较多导致发货时间延长至72小时。如您一次购买多个商品，可能由于商品存放的仓库位置不同，分多个包裹为您发货，还请您耐心等待。
					7. 不支持指定快递，发货后物流需要3-5日为您送达，偏远地区7-10日，商品由仓库合作的快递公司进行配送，无法保证送达时效，不便之处敬请谅解。
					8. 护肤品请先在耳后肌肤测试，确认无过敏反应再用于面部，由于特殊商品（如护肤品、食品等）开封后将影响二次销售，故不支持七天无理由退换货。
					9. 根据我国法律规定，快递收寄须实名制，请您在填写收件人时使用真实姓名，避免使用“X先生、X女士”及昵称等收件信息，导致出现快递无法签收。
					10. 签收快递时请当面与快递员确认商品是否完好无损，产品配件是否齐全。若查看时发现有损坏、漏发、划痕等情况，请您直接拒收。一旦签收，即代表您已经确认商品的完整性，不再作为商品售后依据。
					11. 七天无理由退货须保证商品不影响二次销售，配件、说明书及赠品等齐全，若有破损、缺失等可能会导致退货失败。建议您自产品签收之日起，将原包装保留至少15天。凡商品产生人为损坏的均不支持退换货，七天无理由退货运费由您自行承担，商品质量问题导致的退换货及维修，运费由您先行垫付，寄回后请联系在线客服报销运费，拒收任何到付件。
					12. 根据我国《新广告法》出台实施的极限化“违禁词”规定，本商城已尽量规避，即日起商城所有商品标题、图片、详情等内含极限化“违禁词”介绍的文字说明一律失效，不作为商品描述依据。凡是您进行支付即视为认同，如无法认可商品描述信息，请勿购买。
					13. 在法律允许范围内，本商城拥有最终解释权。如有任何疑问，请在第一时间联系商城在线客服或拨打400-098-3678咨询热线，在线客服工作时间为：周一至周日早9:00至晚21:00，感谢您对本商城的支持与信赖，祝您购物愉快！
				</text>
			</scroll-view>
			<view class="queren" @click="ShowHidden">
				我知道了
			</view>
	</view>
	<!-- pst积分规则-弹窗部分结束 -->
</template>

<script>
	export default {
		data() {
			return {
				// pst-弹窗部分
				isshow:false,//默认不显示弹窗
			}
		},
		methods: {
			// 弹窗部分开始-pst
			monScroll(e){
				var tempScroll =  e.detail.scrollTop
				if(tempScroll >= 40){
					this.isTop = true
				} else {
					this.isTop = false
				}
				console.log(tempScroll)
			},
			showBase(){
				this.isshow = true;   
			},
			ShowHidden(){
				this.isshow = false;
			},
			// 弹窗部分结束-pst 
		}
	}
</script>

<style scoped>
	/* 弹窗部分开始 */
	.tank{
		position: fixed;
		background-color: rgba(0,0,0,.4);
		height: 100%;
		z-index: 9999;
		text-align: left;
		top: 0;
		left: 0;
	}
	.tank2{
		background-color: #fff;
		width: 80%;
		display: block;
		margin: 0 auto;
		height: 25rem;
		margin-top: 3rem;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.queren{
		width: 80%;
		height: 2.4rem;
		background-color: #fff;
		text-align: center;
		display: block;
		margin: 0 auto;
		line-height: 2rem;
		color: #ee0a24;
		font-size: 1rem;
		border-top:1px solid #CDCDCD;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.jfgztext{
		position: fixed;
		background-color: #fff;
		width: 80%; 
		display:block;
		text-align: center;
		font-size: 1rem;
		color: #000;
		padding: 10px 0; 
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.jfgztext2{
		font-size: 28rpx;
		color: #646566;
		width: 94%;
		display: block;
		margin: 0 auto;
		margin-bottom: 5px;
		padding-top: 40px;
	}
</style>
