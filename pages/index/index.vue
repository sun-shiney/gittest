<template>
	<view class="content">
		<view class="zhuce" @tap="ttt">
			hahhaha
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
            ttt(){
				uni.navigateTo({
					url:'login'
				})
			}
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
    .zhuce{
		color: #333333;
		font-size: 30rpx;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
