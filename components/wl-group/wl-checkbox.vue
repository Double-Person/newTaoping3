<template>
  <view class="content">
    <checkbox-group @change="checkboxChange" :name="name"  class="yangshi">
      <label :class="item.checked ?  'checkbox selectBox' : 'checkbox '" @click="labelBtn(item.value,index)" v-for="(item,index) in labelList" :key="item.value" >
        <checkbox :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
      </label>
    </checkbox-group>
  </view>
  
</template>

<script>
  export default {
		props:{
			labelList: {
				type:[Object,Array],
				default:[{
					name: '快递问题',
					value: '0',
					checked: false
				},
				{
					name: '订单问题',
					value: '1',
					checked: false
				},
				{
					name: '质量问题',
					value: '2',
					checked: false
				},
				{
					name: '客服态度',
					value: '3',
					checked: false
				},
				{
					name: '平台问题',
					value: '4',
					checked: false
				},
				{
					name: '其他问题',
					value: '5',
					checked: false
				}
				]
			},
			name:{
				type:String,
				default:"name"
			}
		},
    data() {
      return {
        labelName:'',
        labelDataList:'',
      };
    },
    methods:{
      labelBtn(name,index){
        console.log(name,index,"nameindex")
        this.labelName = name
        if(this.labelDataList.join(',').indexOf(name) >-1){
          this.labelList[index].checked = true
        }else{
          this.labelList[index].checked = false
        }
      },
      checkboxChange: function (e) {
        this.labelDataList = e.detail.value
        console.log(e)
        console.log('checkbox发生change事件，携带value值为：' + e.detail.value)
        console.log(this.labelDataList,"labelDataList")
      },
    }
  }
</script>

<style scoped>
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
  .content{
    padding: 10px;
  }
</style>
