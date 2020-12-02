<template>
    <view>
        <view class="uni-list">
            <checkbox-group @change="checkboxChange"  class="yangshi" >
                <label class="uni-list-cell uni-list-cell-pd" :class="item.checked ?  'checkbox selectBox' : 'checkbox '"  v-for="item in items" :key="item.value" >
                    <view>
                        <checkbox :value="item.value"  v-show="false" :checked="item.checked" />{{item.name}}
                    </view>
                </label>
            </checkbox-group>
        </view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
                items: [{
                        name: '快递问题',
                        value: '0'
                    },
                    {
                        name: '订单问题',
                        value: '1'
                    },
                    {
                        name: '质量问题',
                        value: '2'
                    },
                    {
                        name: '客服态度',
                        value: '3'
                    },
                    {
                        name: '平台问题',
                        value: '4'
                    },
                    {
                    	name: '其他问题',
                    	value: '5'
                    }
                ]
            }
        },
        methods: {
            checkboxChange: function (e) {
                var items = this.items,
                    values = e.detail.value;
					console.log(items,'checked',values);
					this.$emit("send",values.length);//1.子页面通过$emit向父页面传递参数
                for (var i = 0, lenI = items.length; i < lenI; ++i) {
                    const item = items[i]
                    if(values.includes(item.value)){
                        this.$set(item,'checked',true)
                    }else{
                        this.$set(item,'checked',false)
                    }
                }
            }
        }
    }
</script>

<style>
	.uni-list-cell {
		justify-content: flex-start
	}
</style>

<style scoped>
	.uni-list{
	  padding: 10px;
	}
	.yangshi{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.selectBox{
	  background: #EB5248!important;
	  color: #fff!important;
	}
	.checkbox{
		padding: 5px 10px;
		border: 1px solid #EB5248;
		width: 28%;
		text-align: center;
		margin-bottom: 0.5rem;
		border-radius: 65upx;
		color: #000;
	}
</style>

