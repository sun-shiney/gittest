<template>
	<view class="content">
		<view class="nameview">
			<view class="nameview-left">
				昵称
			</view>
			<input type="text" value="" placeholder="请输入昵称" v-model="name"  placeholder-class="font-size:30rpx color:#C0C0C0" placeholder-style="color:#C0C0C0"/>
			<text @tap="suiji">随机</text>
		</view>
		<picker mode="date"  @change="changeDate">
			<view class="nameview">
				<view class="nameview-left">
					出生日期
				</view>
				<view v-if="!dateStr" class="txt">
					请输入
				</view>
				<view class="txt1">
					{{dateStr}}
				</view>
			</view>
		</picker>
		<view class="nameview">
			<view class="nameview-left">
				邀请码
			</view>
			<input type="text" value="" placeholder="选填" v-model="invite"  placeholder-class="font-size:30rpx color:#C0C0C0" placeholder-style="color:#C0C0C0"/>
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
				dateStr:null,
				name:null,
				invite:null
			}
		},
		methods: {
			changeDate(e){
				console.log(e);
				this.dateStr = e.detail.value;
			},
			nextBtn(){
				var that=this;
				if(!that.dateStr){
					uni.showToast({
						icon:'none',
						title:'请选择出生日期'
					})
					return;
				}
				if(!that.name){
					uni.showToast({
						icon:'none',
						title:'请填写昵称'
					})
					return;
				}
				uni.setStorageSync('date', that.dateStr);
				uni.setStorageSync('name', that.name);
				uni.setStorageSync('invite', that.invite);
				uni.navigateTo({
					url:'wanshan3'
				})
			},
			// 随机
			suiji(){
				var that=this;
				let url = '?controller=theapi&action=getname_get'
				let data = {
					sex:uni.getStorageSync('sex')
				}	
				let method = 'GET'
				this.ajax(url,method,data,function(res){
					console.log(res);
					if(res.data.return_code=='success'){
						console.log(res.data);
						that.name =  res.data.data;
					}
				})
			}
		}
	}
</script>

<style>
	.content{
		padding: 70rpx;
	}
	.nameview{
		width: 100%;
		border-bottom: solid 1rpx #F1F1F1;
		padding: 20rpx 0;
		display: flex;
		align-items: center;
		margin-bottom: 50rpx;
	}
	.nameview-left{
		width: 150rpx;
		text-align: left;
		font-size: 30rpx;
		color: #C0C0C0;
	}
	.nameview input{
		color: #333333;
		font-size: 30rpx;
	}
	
	.nameview text{
		font-size: 30rpx;
		color: #DD524D;
	}
	.nameview .txt{
		font-size: 30rpx;
		color: #C0C0C0;
	}
	.nameview .txt1{
		font-size: 30rpx;
		color: #333333;
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
	}
</style>
