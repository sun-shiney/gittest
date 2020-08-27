<template>
	<view class="">
		<view class="topview">
			请选择性别
		</view>
		<view class="itemview">
			<view class="item" @tap="sex=1">
				<image v-if="sex==1" src="../../static/men.png" mode=""></image>
				<image v-else src="../../static/wei-men.png" mode=""></image>
				<text>男</text>
			</view>
			<view class="item" @tap="sex=2">
				<image v-if="sex==1" src="../../static/wei-women.png" mode=""></image>
				<image v-else src="../../static/women.png" mode=""></image>
				<text>女</text>
			</view>
		</view>
		<view class="btn" @tap="nextBtn">
			下一步
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				sex:1
			}
		},
		methods:{
			nextBtn(){
				uni.setStorageSync('sex', this.sex);
				uni.navigateTo({
					url:'wanshan2'
				})
			}
		}
	}
</script>

<style>
	.topview{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30rpx;
		color: #666666;
		margin-top: 170rpx;
		margin-bottom:80rpx;
	}
	.itemview{
		width: 100%;
		display: flex;
		align-items: center;
	}
	.item{
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.item image{
		width: 200rpx;
		height: 200rpx;
		margin-bottom: 15rpx;
	}
	.item text{
		font-size: 34rpx;
		color: #999999;
	}
	.btn{
		position: absolute;
		top: 700rpx;
		width: 590rpx;
		height: 100rpx;
		left: 80rpx;
		text-align: center;
		background-color: #DD524D;
		color: #FFFFFF;
		line-height: 100rpx;
		border-radius: 10rpx;
		font-size: 34rpx;
	}
</style>
