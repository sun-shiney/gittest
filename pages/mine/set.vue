<template>
	<view class="content">
		<view class="bomview">
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>更换手机号</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem" @tap="xiugaimima">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>修改密码</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>账号与安全</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>清除缓存</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>在线客服</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>意见反馈</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>不良信息举报</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			<view class="bomItem">
				<view class="itemleft">
					<!-- <image src="../../static/anquanzhongxin.png" mode=""></image> -->
					<text>关于</text>
				</view>
				<view class="itemright">
					<!-- <image class="hongdian" src="../../static/guanzhuwo.png" mode=""></image> -->
					<image src="../../static/Returnedyou.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="btn">
			退出登录
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			// 修改密码
			xiugaimima(){
				uni.navigateTo({
					url:'setPassword'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F7F7F7;
		padding: 20 0rpx;
	}
	.content{
		
	}
	.bomview{
		padding: 0 30rpx;
		border-top: solid 1rpx #eaeaea;
		background-color: #FFFFFF;
	}
	.bomItem{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0;
		border-bottom: solid 1rpx #eaeaea;
	}
	.itemleft{
		display: flex;
		align-items: center;
	}
	.itemleft image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}
	.itemleft text{
		font-size: 30rpx;
		color: #333333;
	}
	
	.itemright{
		display: flex;
		align-items: center;
	}
	.itemright image{
		width: 45rpx;
		height: 45rpx;
	}
	
	.btn{
		margin-top: 20rpx;
		padding: 20rpx 0;
		font-size: 30rpx;
		color: #333333;
		text-align: center;
		background-color: #FFFFFF;
	}
</style>
