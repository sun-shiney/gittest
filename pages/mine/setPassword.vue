<template>
	<view class="content">
		<view class="top">
			<text>当前密码</text>
			<input type="text" value="" v-model="nowPassw" placeholder="请输入当前密码" placeholder-style="font-size:30rpx"/>
		</view>
		<view class="sm">
			由数字.字母和下划线组成的密码较为安全
		</view>
		<view class="top">
			<text>新密码</text>
			<input type="text" value="" v-model="newpassw" placeholder="9-20位密码" placeholder-style="font-size:30rpx"/>
		</view>
		<view class="top">
			<text>确认密码</text>
			<input type="text" value="" v-model="querenPs" placeholder="再输入一次密码" placeholder-style="font-size:30rpx"/>
		</view>
		<view class="btn">
			保存
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// 当前密码
				nowPassw:null,
				// 新密码
				newpassw:null,
				// 确认密码
				querenPs:null
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	page{
		background-color: #F7F7F7;
		padding: 0 50rpx;
	}
	.content{
		padding: 50rpx;
	}
	.top{
		display: flex;
		align-items: center;
		border-bottom: solid 1rpx #EAEAEA;
		padding: 20rpx 0;
		margin-bottom: 40rpx;
	}
	.top text{
		font-size: 30rpx;
		color: #333333;
		margin-right: 20rpx;
	}
	.sm{
		font-size: 24rpx;
		color: #999999;
		margin-bottom: 20rpx;
	}
	.btn{
		margin-top: 20rpx;
		width: 100%;
		height: 70rpx;
		font-size: 30rpx;
		color: #FFFFFF;
		background-color: #C0C0C0;
		text-align: center;
		line-height: 70rpx;
		border: 15rpx;
	}
</style>
