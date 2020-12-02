<template>
		<div class="my-outbox" ref='outbox'>
		        <div class="msqgd" ref='movebox'>
		            <div class="msqgd2" v-for="(item,index) in shop_list" :key='index'>
		                <div class="my-title">
							<image  class="touxiang" :src="item.img_avator" mode=""></image>
							<view class="plwz">
								{{item.shopText}}
							</view>
							<view class="msq">
								{{item.shopText2}}
							</view>
		                </div>
		            </div>
		            <div class="msqgd2" v-for="(item,index) in shop_list" :key='(index+1)*100' v-if='isShow'>
		               <div class="my-title">
							<image  class="touxiang" :src="item.img_avator" mode=""></image>
							<view class="plwz">
								{{item.shopText}}
							</view>
							<view class="msq">
								{{item.shopText2}}
							</view>
		               </div>
		            </div>
		        </div>
		</div>
		
</template>

<script>
    export default {
        name:'my-marquee-top',
        // props:{        
        //     sendVal:Array
        // },
        data() {
            return {
                isShow:true,
				
				shop_list:[
					{
						img_avator:'https://img.jingdongyouxuan.com/834327219830795',
						shopText:'李**（138****6590）在11分钟前积分兑换了该商品,省了667元',
						shopText2: '马上抢',
						st_url:''
					},
					{
						img_avator:'https://img.jingdongyouxuan.com/834327219306499',
						shopText:'王**（130****6812）在2分钟前积分兑换了该商品,省了667元',
						shopText2: '马上抢',
						st_url:''
					},
					{
						img_avator:'https://img.jingdongyouxuan.com/834327221927945',
						shopText:'郑**（151****8272）在8分钟前积分兑换了该商品,省了667元',
						shopText2: '马上抢',
						st_url:''
					},
					{
						img_avator:'https://img.jingdongyouxuan.com/834327226122250',
						shopText:'孙**（155****4789）在8分钟前积分兑换了该商品,省了667元',
						shopText2: '马上抢',
						st_url:''
					},
				]
            }
        }, 
        mounted:function(){
            var moveTarget = this.$refs.movebox;
            var outbox = this.$refs.outbox;
            if(outbox.offsetHeight > (moveTarget.offsetHeight /2)){
                this.isShow = false;
                return
            }
            var initTop = 0;
            setInterval(function(){
                initTop ++;
                if(initTop >= moveTarget.offsetHeight / 2 ){
                    initTop = 0;
                }
                moveTarget.style = 'transform: translateY(-'+ initTop +'px)';
              
            },20)
        },
    }
</script>
 
<style lang="less" scoped>
    .my-outbox{
        color: #FEE7B1;
        height:90px;
        margin:0 20px;
        overflow: hidden;
		.msqgd{
            .msqgd2{
                padding: 0.5rem 0;
                font-size: 18px;
                .my-title{
                    color: #DB7000;
                    clear: both;
                    overflow:hidden;
					font-size: 0.8rem;
					display: flex;
					width: 100%;
					
					.touxiang{
						height: 2rem;
						border-radius: 50%;
						width: 13%;
						margin-right: 0.5rem;
					}
					.plwz{
						width: 80%;
						margin-right: 0.5rem;
					}
                    .msq{
						width: 20%;
						background-color: #e93829;
						color: #fff;
						text-align: center;
						height: 1.8rem;
						line-height: 1.8rem;
						border-radius: 35px;
                    }
                }
            }
        }
    }
</style>