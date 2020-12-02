<template>
	<view  class="appxz">
		<view class="appxz2">
			暂无APP下载二维码
		</view>
		<home></home>
	</view>
</template>

<script>
	import home from '@/components/home';
	
	export default {
		components:{
			home
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.appxz{
		color: #f00;
		width: 100%;
		font-size: 1rem;
		.appxz2{
			text-align: center;
			margin-top: 10rem;
		}
	}
	
</style>
